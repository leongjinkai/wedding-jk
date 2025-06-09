<script setup lang="ts">
import "@/assets/main.css";
import { onMounted } from "vue";

const props = defineProps(['filledFormRef', 'updateRef'])

const submitAttendance = (attending: boolean) => {
    props.updateRef('attendance', attending ? "Y" : "N")
    window.location.hash = "/form";
}

onMounted(() => {
    // Swipe card animation
    let animating = false;
    let cardsCounter = 0;
    const numOfCards = 6;
    const decisionVal = 120;
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
            props.updateRef('attendance', "Y")
            card.classList.add("to-right");
            window.location.hash = "/form";
        } else if (pullDeltaX <= -decisionVal) {
            props.updateRef('attendance', "N")
            card.classList.add("to-left");
            window.location.hash = "/form";
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
                        <p class="text-default">Attending JKJX wedding?</p>
                    </div>
                </div>
                <div class="demo__card__choice m--reject">
                    <p class="text-reject">Are you sure?</p>
                </div>
                <div class="demo__card__choice m--like">
                    <p class="text-like">Swee la. Knew you could make it.</p>
                </div>
                <div class="demo__card__drag"></div>
            </div>
        </div>
        <div>
            <p class="swipe-instructions">Swipe left for No and right for Yes<br> or tap buttons below.</p>
            <div class="instruction-container">
                <p class="attending-button" @click="submitAttendance(false)">No</p>
                <p class="attending-button" @click="submitAttendance(true)">Yes</p>
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

.attending-button {
    padding: 8px 8px;
    border: 1px solid black;
    cursor: pointer;
    border-radius: 8px;
    font-weight: 400;
    color: black;
    font-family: "Funnel Sans", sans-serif;
    font-weight: 200;
    font-style: normal;
    font-size: 1.2rem;
    transition-duration: 0.4s;
    margin: 0px;
}

.attending-button:hover {
    background-color: white;
    box-shadow: 2px 2px 5px black;
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
    height: 80dvh;
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
    padding-top: 40px;
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
    height: 70dvh;
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
    top: 40px;
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
    height: 70dvh;
    align-items: end;
    overflow: hidden;
}

.demo__card__choice.m--like {
    background-image: url("https://wedding-jk.s3.ap-southeast-1.amazonaws.com/public/like_card.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    width: 90vw;
    height: 70dvh;
    align-items: end;
    overflow: hidden;
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
    font-size: 2rem;
    font-family: "Playfair Display", sans-serif;
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
    font-size: 2rem;
    font-family: "Playfair Display", sans-serif;
    font-weight: 400;
    font-style: normal;
    margin: 0px;
    padding: 10px 30% 10px 10px;
    color: white;
}

.text-default {
    font-size: 2rem;
    font-family: "Playfair Display", sans-serif;
    font-weight: 200;
    font-style: normal;
    margin: 0px;
    padding-left: 40%;
    padding: 10px;
    color: white;
}

.swipe-instructions {
    color: white;
    margin: 0px 0px 0px 0px;
    font-family: "Playfair Display", sans-serif;
    font-size: 1rem
}

.container {
    height: 100dvh;
    background-color: #f7ece7;
}

.instruction-container {
    display: flex;
    justify-content: space-between;
    padding: 0px 5vw;
}

.align-right {
    text-align: right;
}

p.swipe-instructions {
    padding: 0px;
    color: black;
    font-size: 1.2rem;
    text-align: center;
}

@media only screen and (min-width: 600px) {
    .demo__card__top {
        margin-left: 35vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 80dvh;
        width: 30vw;
        overflow: hidden;
    }

    .default_card_img {
        background-image: url("https://wedding-jk.s3.ap-southeast-1.amazonaws.com/public/default_card.jpeg");
        background-repeat: no-repeat;
        background-size: cover;
        width: 30vw;
        height: 80dvh;
        border-radius: 5%;
        display: flex;
        align-items: end;
    }

    .demo__card__choice.m--reject {
        background-image: url("https://wedding-jk.s3.ap-southeast-1.amazonaws.com/public/reject_card.jpeg");
        background-repeat: no-repeat;
        background-size: cover;
        margin-left: 30vw;
        width: 30vw;
        height: 80dvh;
        align-items: end;
        overflow: hidden;
    }

    .demo__card__choice.m--like {
        background-image: url("https://wedding-jk.s3.ap-southeast-1.amazonaws.com/public/like_card.jpeg");
        background-repeat: no-repeat;
        background-size: cover;
        margin-left: 30vw;
        width: 30vw;
        height: 80dvh;
        align-items: end;
        overflow: hidden;
    }
}
</style>
