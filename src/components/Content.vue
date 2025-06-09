<script setup lang="ts">
import "@/assets/main.css";

</script>

<template>
    <div class="content-container">
        <div class="header-text">You’re Invited</div>
        <div class="text-md address-text">
            <p class="address-detail">SATURDAY 25 OCTOBER 2025</p>
            <p class="address-detail">11.30 AM</p>
        </div>
        <div class="address-text text-md">
            Alcove at Caldwell House (Chjimes)
        </div>
        <a class="availability-button" href="#/card">Indicate availability</a>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.79916623114!2d103.84991557471228!3d1.2950610617500404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19a467a5d439%3A0xe1c2074b69e99075!2sAlcove%20at%20Caldwell%20House!5e0!3m2!1sen!2ssg!4v1747901379363!5m2!1sen!2ssg" width="400" height="300" style="border:0;" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</template>

<style scoped>
.content-container {
    background-color: #f7ece7;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
}

.header-text {
    font-family: "Playfair Display", serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-size: clamp(50px, 5vw, 200px);
    margin-bottom: 20px;
}

.address-text {
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    font-family: "Funnel Sans", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-size: clamp(25px, 2vw, 50px);
    margin: 20px 0 0px 00px;
    width: 100%;
}

.address-detail {
    margin: 0px;
}

.body-text {
    font-family: "Funnel Sans", sans-serif;
    font-optical-sizing: auto;
    font-weight: 200;
    font-style: normal;
    font-size: clamp(20px, 2vw, 50px);
    padding-left: 20px;
    padding-right: 20px;
    margin-bottom: 20px;
}

@media only screen and (min-width: 600px) {
    .body-text {
        font-family: "Funnel Sans", sans-serif;
        font-optical-sizing: auto;
        font-weight: 200;
        font-style: normal;
        font-size: clamp(25px, 2vw, 50px);
        margin-left: 20px;
    }

    .address-text {
        display: flex;
        gap: 10px;
        align-items: center;
        align-self: center;
        font-family: "Funnel Sans", sans-serif;
        font-optical-sizing: auto;
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
    font-size: clamp(20px, 2vw, 50px);
}

.availability-button {
    padding: 10px 10px;
    border: 1px solid black;
    cursor: pointer;
    border-radius: 8px;
    margin: 40px 0 40px 0;
    font-weight: 400;
    color: black;
    font-family: "Funnel Sans", sans-serif;
    font-optical-sizing: auto;
    font-weight: 200;
    font-style: normal;
    font-size: 1.2rem;
    transition-duration: 0.4s;
}

.availability-button:hover {
    background-color: white;
    box-shadow: 2px 2px 5px black;
}
</style>
