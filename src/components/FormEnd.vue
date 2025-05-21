<script setup lang="ts">
import '@/assets/main.css';

</script>

<template>
    <div class="desktop-bg">
        <div class="form-end-background-container fade-in">
            <p class="form-end-text">Thank you for joining us!</p>
            <p class="form-end-text">Look forward to seeing you there &#128540;</p>
        </div>
    </div>
</template>

<style>
.form-end-background-container {
    background: url("https://wedding-jk.s3.ap-southeast-1.amazonaws.com/public/form-attending-bg.jpeg");
    width: 100vw;
    height: 100dvh;
    background-size: cover;
    background-repeat: no-repeat;
}

.form-end-text {
    margin: 0px;
    font-family: "Alumni Sans Pinstripe", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 3rem;
    padding: 10px;
}

@media only screen and (min-width: 600px) {
    .form-end-background-container {
        background: url("https://wedding-jk.s3.ap-southeast-1.amazonaws.com/public/form-attending-bg.jpeg");
        width: 50vw;
        height: 100dvh;
        background-size: cover;
        background-repeat: no-repeat;
        background-position-y: -80px;
    }

    .form-end-text {
        margin: 0px;
        font-family: "Alumni Sans Pinstripe", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 3rem;
        padding: 10px;
    }

    .desktop-bg {
        background-color: #f7ece7;
        width: 100vw;
        display: flex;
        justify-content: center;
    }
}
</style>