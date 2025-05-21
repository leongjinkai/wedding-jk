<script setup lang="ts">
import '@/assets/main.css';
import type { Schema } from '../../amplify/data/resource';
import { generateClient } from 'aws-amplify/data';
import Content from './Content.vue'
import { downloadData } from 'aws-amplify/storage/s3';

const client = generateClient<Schema>();

try {
    const result = await downloadData({
        path: "media/main-photo.jpeg",
    }).result;    
    console.log(result)
} catch (error) {
    console.log(error)
}


</script>

<template>
  <main class="background-container">
    <div class="main-container">
        <header class="ephesis-regular header-details">
            Jin Kai & Jia Xuan
        </header>
        <div class="primary-details-container ephesis-regular">
            <p class="primary-details">25.10.2025</p>
            <p class="primary-details">Alcove at Caldwell House (Chjimes)</p>
            <!-- <p class="primary-details">30 Victoria St, #02-05 Caldwell House, Singapore 187996</p> -->
        </div>
    </div>
  </main>
  <Content />
</template>

<style>
.background-container {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(to bottom, transparent, 80%, rgb(255, 255, 255)), url("../assets/main-photo1.jpeg");
    background-color: white;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: -80px;
}

.main-container {
    margin-bottom: 40px;
    margin-left: 20px;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    z-index: 1;
    font-size: clamp(100px, 5vw, 200px);
    color: white;
    text-shadow: 5px 5px 10px black;
}

.header-details {
    line-height: 1em;
}

.primary-details-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-basis: fit-content;
    margin: 0;
}

.primary-details {
    margin-block-start: 0;
    margin-block-end: 0;
    font-size: clamp(25px, 2vw, 50px);
}

.ephesis-regular {
  font-family: "Ephesis", cursive;
  font-weight: 400;
  font-style: normal;
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    .primary-details-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-basis: fit-content;
        margin: 0;
    }

    .main-container {
        margin-bottom: 60px;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        z-index: 1;
        font-size: clamp(100px, 5vw, 200px);
        color: white;
        text-shadow: 5px 5px 10px black;
    }
}
</style>