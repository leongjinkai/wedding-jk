<script setup lang="ts">
import "@/assets/main.css";
import { onMounted } from "vue";
import { generateClient } from 'aws-amplify/data';
import type { Schema } from "../../amplify/data/resource";

const props = defineProps(['nameRef', 'emailRef', 'dietRef', 'messageRef'])

async function saveAttendance() {
    const client = generateClient<Schema>();

    const { errors, data: newAttendance } = await client.models.Attendance.create({
        name: props.nameRef,
        email: props.emailRef,
        dietaryPreferences: props.dietRef,
        messageToCouple: props.messageRef
    })

    if (errors) {
        console.log(errors)
    }
}

onMounted(() => {
    // Swipe card animation
    let animating = false;
    let cardsCounter = 0;
    const numOfCards = 6;
    const decisionVal = 60;
    let pullDeltaX = 0;
    let deg = 0;
    let card: any, cardReject: any, cardLike: any;

    function pullChange() {
        animating = true;
        deg = pullDeltaX / 10;
        card.style.transform = `translateX(${pullDeltaX}px) rotate(${deg}deg)`;

        const opacity = pullDeltaX / 100;
        const rejectOpacity = opacity >= 0 ? 0 : Math.abs(opacity);
        const likeOpacity = opacity <= 0 ? 0 : opacity;

        cardReject.style.opacity = rejectOpacity;
        cardLike.style.opacity = likeOpacity;
    }

    function release() {
        if (pullDeltaX >= decisionVal) {
            console.log("to right");
            saveAttendance()
            window.location.hash = "/form-end";
            card.classList.add("to-right");
        } else if (pullDeltaX <= -decisionVal) {
            console.log("to left");
            card.classList.add("to-left");
        }

        if (Math.abs(pullDeltaX) >= decisionVal) {
            card.classList.add("inactive");

            setTimeout(function () {
                card.classList.add("below");
                card.classList.remove("inactive", "to-left", "to-right");
                cardsCounter++;
                if (cardsCounter === numOfCards) {
                    cardsCounter = 0;
                    document
                        .querySelectorAll(".demo__card")
                        .forEach((c) => c.classList.remove("below"));
                }
            }, 300);
        }

        if (Math.abs(pullDeltaX) < decisionVal) {
            card.classList.add("reset");
        }

        setTimeout(function () {
            card.removeAttribute("style");
            card.classList.remove("reset");
            card.querySelectorAll(".demo__card__choice").forEach((el: any) =>
                el.removeAttribute("style")
            );
            pullDeltaX = 0;
            animating = false;
        }, 300);
    }

    document.addEventListener("mousedown", handleStart);
    document.addEventListener("touchstart", handleStart);

    function handleStart(e: any) {
        const target = e.target.closest(".demo__card:not(.inactive)");
        if (!target || animating) return;

        card = target;
        cardReject = card.querySelector(".demo__card__choice.m--reject");
        cardLike = card.querySelector(".demo__card__choice.m--like");
        const startX = e.pageX || e.touches?.[0].pageX;

        function handleMove(e: any) {
            const x = e.pageX || e.touches?.[0].pageX;
            pullDeltaX = x - startX;
            if (!pullDeltaX) return;
            pullChange();
        }

        function handleEnd() {
            document.removeEventListener("mousemove", handleMove);
            document.removeEventListener("mouseup", handleEnd);
            document.removeEventListener("touchmove", handleMove);
            document.removeEventListener("touchend", handleEnd);

            if (!pullDeltaX) return;
            release();
        }

        document.addEventListener("mousemove", handleMove);
        document.addEventListener("mouseup", handleEnd);
        document.addEventListener("touchmove", handleMove);
        document.addEventListener("touchend", handleEnd);
    }
});
</script>

<template>
    <div class="container fade-in">
        <div class="demo__content">
            <div class="demo__card">
                <div class="demo__card__top">
                    <div class="default_card_img">
                        <p class="text-default">JX & JK Wedding</p>
                    </div>
                </div>
                <div class="demo__card__choice m--reject">
                    <!-- <video
                        class="demo__card__vid"
                        src="../assets/saibin.webm"
                        type="video/webm"
                        autoplay
                        loop
                    ></video> -->
                    <p class="text-reject">Are you sure?</p>
                </div>
                <div class="demo__card__choice m--like">
                    <p class="text-like">Swee la. Knew you could make it.</p>
                </div>
                <div class="demo__card__drag"></div>
            </div>
        </div>
        <div class="instruction-container">
            <div>
                <p class="swipe-instructions">If unable to make it</p>
                <p class="swipe-instructions">Swipe Left</p>
            </div>
            <div>
                <p class="swipe-instructions align-right">If can make it</p>
                <p class="swipe-instructions align-right">Swipe Right</p>
            </div>
        </div>
    </div>
    
</template>

<style>
:root {
    --w: 10rem;
    --h: 18rem;
    --headerH: 2rem;
    --cardW: 20rem;
    --cardH: 10rem;
    --cardTopH: 10rem;
    --cardBtmH: var(--cardH) - var(--cardTopH);
    --vidSize: 8rem;
}

.body-text {
    font-family: "Alumni Sans Pinstripe", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: clamp(25px, 2vw, 50px);
}

.text-bold {
    font-weight: bold;
}

.text-md {
    font-size: clamp(40px, 2vw, 50px);
}

.demo__content {
    /* overflow: hidden; */
    position: relative;
    height: 90dvh;
    width: 100vw;
    user-select: none;
    cursor: grab;
}

.demo__card {
    z-index: 2;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transform-origin: 50% 100%;
    margin-top: 40px;
}
.demo__card.reset {
    transition: transform 0.3s;
    transform: translateX(0) !important;

    .demo__card__choice {
        transition: opacity 0.3s;
        opacity: 0 !important;
    }
}

.demo__card.inactive {
    transition: transform 0.3s;
}

.demo__card.to-left {
    transform: translateX(-30rem) rotate(-30deg) !important;
}

.demo__card.to-right {
    transform: translate(30rem) rotate(30deg) !important;
}

.demo__card.below {
    z-index: 1;
}

.demo__card__top {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80dvh;
    width: 100vw;
    overflow: hidden;
}

.demo__card__vid {
    height: 120%;
}

.demo__card__name {
    text-align: center;
    font-size: 1rem;
    font-weight: bold;
    color: #fff;
}

.demo__card__we {
    text-align: center;
    font-size: 1rem;
    line-height: var(--cardBtmH);
}

.demo__card__choice {
    position: absolute;
    left: 5vw;
    top: 0;
    width: 100%;
    height: 80dvh;
    opacity: 0;
    border-radius: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.demo__card__choice.m--reject {
    background-image: url("https://wedding-jk.s3.ap-southeast-1.amazonaws.com/public/reject_card.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    width: 90vw;
    height: 80dvh;
    align-items: end;
    overflow: hidden;
}

.demo__card__choice.m--like {
    background-image: url("https://wedding-jk.s3.ap-southeast-1.amazonaws.com/public/like_card.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    width: 90vw;
    height: 80dvh;
    align-items: end;
    overflow: hidden;

    &:after {
        transform: scaleY(-1);
    }
}

.demo__card__drag {
    z-index: 5;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    cursor: grab;
}

.default_card_img {
    background-image: url("https://wedding-jk.s3.ap-southeast-1.amazonaws.com/public/default_card.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    width: 90vw;
    height: 80dvh;
    border-radius: 5%;
    display: flex;
    align-items: end;
}

.text-reject {
    font-size: 4rem;
    font-family: "Alumni Sans Pinstripe", sans-serif;
    font-weight: 400;
    font-style: normal;
    margin: 0px;
    padding-left: 40%;
    padding: 10px;
    position: absolute;
    bottom: 0;
    right: 0;
    color: white;
}

.text-like {
    font-size: 3rem;
    font-family: "Alumni Sans Pinstripe", sans-serif;
    font-weight: 400;
    font-style: normal;
    margin: 0px;
    padding: 10px 30% 10px 10px;
    color: white;
}

.text-default {
    font-size: 3rem;
    font-family: "Alumni Sans Pinstripe", sans-serif;
    font-weight: 400;
    font-style: normal;
    margin: 0px;
    padding-left: 40%;
    padding: 10px;
    color: white;
}

.swipe-instructions {
    color: white;
    margin: 0px 0px 0px 0px;
    font-family: "Alumni Sans Pinstripe", sans-serif;
    font-size: 1rem
}

.container {
    height: 100dvh;
    background-color: #f7ece7;
}

.instruction-container {
    display: flex;
    justify-content: space-between;
    padding: 10px 5vw;
}

.align-right {
    text-align: right;
}

p.swipe-instructions {
    padding: 0px;
    color: black;
    font-size: 20px;
}
</style>
