<script setup lang="ts">
import "@/assets/main.css";

</script>

<template>
    <div class="content-container">
        <div class="header-text">You’re Invited</div>
        <div class="body-text">
            We’d love for you to come celebrate our big day with us!
        </div>
        <div class="text-bold text-md address-text">
            <p class="address-detail">SATURDAY 25 OCTOBER 2025</p>
            <p class="address-detail">11.30 AM</p>
        </div>
        <div class="body-text text-bold text-md">
            Alcove at Caldwell House (Chjimes)
        </div>
        <a class="availability-button" href="#/form">Indicate availability</a>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.79916623114!2d103.84991557471228!3d1.2950610617500404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19a467a5d439%3A0xe1c2074b69e99075!2sAlcove%20at%20Caldwell%20House!5e0!3m2!1sen!2ssg!4v1747901379363!5m2!1sen!2ssg" width="400" height="300" style="border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</template>

<style>
.content-container {
    background-color: #f7ece7;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.header-text {
    font-family: "Ephesis", cursive;
    font-weight: 400;
    font-style: normal;
    font-size: clamp(60px, 5vw, 200px);
    margin-bottom: 20px;
}

.address-text {
    display: flex;
    gap: 10px;
    flex-direction: column;
    font-family: "Alumni Sans Pinstripe", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: clamp(25px, 2vw, 50px);
    margin: 20px 0 20px 20px;
    align-self: start;
}

.address-detail {
    margin: 0px;
}

.body-text {
    font-family: "Alumni Sans Pinstripe", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: clamp(25px, 2vw, 50px);
    padding-left: 20px;
    padding-right: 20px;
}

@media only screen and (min-width: 600px) {
    .body-text {
        font-family: "Alumni Sans Pinstripe", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: clamp(25px, 2vw, 50px);
        margin-left: 20px;
    }

    .address-text {
        display: flex;
        gap: 10px;
        align-items: center;
        align-self: center;
        font-family: "Alumni Sans Pinstripe", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: clamp(25px, 2vw, 50px);
        margin: 20px 0 20px 20px;
    }
}

.text-bold {
    font-weight: bold;
}

.text-md {
    font-size: clamp(40px, 2vw, 50px);
}

.availability-button {
    padding: 10px 10px;
    border: 1px solid black;
    cursor: pointer;
    border-radius: 8px;
    margin: 40px 0 40px 0;
    font-weight: 400;
    color: black;
    font-family: "Alumni Sans Pinstripe", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 24px;
    transition-duration: 0.4s;
}

.availability-button:hover {
    background-color: white;
    box-shadow: 2px 2px 5px black;
}
</style>
