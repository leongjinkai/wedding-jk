<script setup lang="ts">
import '@/assets/main.css';
import Content from './Content.vue'

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
p.primary-details {
    padding: 0px;
    margin: 0px;
}

.background-container {
    width: 100vw;
    height: 100dvh;
    background: linear-gradient(to bottom, transparent, 70%, #f7ece7), url("https://wedding-jk.s3.ap-southeast-1.amazonaws.com/public/main-photo.jpeg");
    background-color: #f7ece7;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: -80px;
}

.main-container {
    margin-bottom: 40px;
    width: 100vw;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    z-index: 1;
    font-size: clamp(100px, 5vw, 200px);
}

.header-details {
    line-height: 1em;
    padding-left: 20px;
}

.primary-details-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-basis: fit-content;
    margin: 0;
    padding-left: 20px;
}

.primary-details {
    font-size: clamp(25px, 2vw, 50px);
    color: black;
}

.ephesis-regular {
  font-family: "Ephesis", cursive;
  font-weight: 400;
  font-style: normal;
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    .background-container {
        width: 100vw;
        height: 150dvh;
        background: linear-gradient(to bottom, transparent, 70%, #f7ece7), url("https://wedding-jk.s3.ap-southeast-1.amazonaws.com/public/main-photo.jpeg");
        background-color: #f7ece7;
        background-repeat: no-repeat;
        background-size: contain;
    }

    .primary-details-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-basis: fit-content;
        margin: 0;
    }

    .main-container {
        margin-bottom: 60px;
        margin-left: 50vw;
        width: 50vw;
        height: 100dvh;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
        z-index: 1;
        font-size: clamp(60px, 5vw, 200px);
        color: white;
        text-shadow: 5px 5px 10px black;
    }

    p.primary-details {
        text-shadow: none;
    }

    header.header-details {
        text-shadow: none;
        color: black;
    }
}
</style>