<script setup lang="ts">
import '@/assets/main.css';
import { onBeforeMount, onMounted, onUnmounted } from 'vue';

const props = defineProps(['filledFormRef', 'toggleForm', 'attendingRef', 'updateRef'])

onBeforeMount(() => {
    if (!props.filledFormRef) {
        window.location.hash = "/";
    }
})

onMounted(() => {
    props.toggleForm(false);
})

onUnmounted(() => {
    props.updateRef("attendance", "")
})

</script>

<template>
    <div class="desktop-bg">
        <div class="form-end-background-container fade-in">
            <div v-if="props.attendingRef === 'Y'">
                <p class="form-end-text">Thank you for joining us!</p>
                <p class="form-end-text">Look forward to seeing you there!</p>
            </div>
            <div v-else>
                <p  class="form-end-text">Really sad you are unable to make it.</p>
                <p class="form-end-text">Issok, see you around!</p>
            </div>
        </div>
    </div>
</template>

<style>
.form-end-background-container {
    background: url("https://wedding-jk.s3.ap-southeast-1.amazonaws.com/public/photo_2025-06-15+15.24.50.jpeg");
    width: 100vw;
    height: 100dvh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: -20px;
}

.form-end-text {
    margin: 0px;
    font-family: "Playfair Display", serif;
    font-weight: 400;
    font-style: normal;
    font-size: 2rem;
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
        font-family: "Funnel Sans", sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 2rem;
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