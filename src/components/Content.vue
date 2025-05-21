<script setup lang="ts">
import "@/assets/main.css";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();
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
        <a class="availability-button" href="#/form">HERE HERE! CLICK ME!</a>
    </div>
</template>

<style>
.content-container {
    background-color: white;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
}

.header-text {
    font-family: "Ephesis", cursive;
    font-weight: 400;
    font-style: normal;
    font-size: clamp(80px, 5vw, 200px);
    margin-bottom: 20px;
}

.address-text {
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-self: start;
    font-family: "Alumni Sans Pinstripe", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: clamp(25px, 2vw, 50px);
    margin: 20px 0 20px 20px;
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
        /* margin-left: 20px; */
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
    border-radius: 5%;
    margin: 40px 0 20px 0;
    font-weight: 400;
    color: black;
    font-family: "Alumni Sans Pinstripe", sans-serif;
    font-weight: 400;
    font-style: normal;
}

.availability-button:hover {
    background-color: mistyrose;
    box-shadow: 2px 2px 5px black;
    font-size: 18px;
}
</style>
