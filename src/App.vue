<script setup lang="ts">
import { ref, computed } from 'vue'
import Main from './components/Main.vue'
import Content from './components/Content.vue'
import SwipeCard from './components/SwipeCard.vue'
import Form from './components/Form.vue'
import FormEnd from './components/FormEnd.vue'

const nameRef = ref("");
const emailRef = ref("");
const mobileRef = ref("");
const dietRef = ref("");
const drivingRef = ref("");
const messageRef = ref("");
const attendingRef = ref("");
const filledFormRef = ref(false);
const swipeFeatureFlag = ref(false);

function updateRef(refKey: string, newValue: string) {
    switch (refKey) {
        case "name":
            nameRef.value = newValue;
            break;
        case "email":
            emailRef.value = newValue;
            break;
        case "mobile":
            mobileRef.value = newValue;
            break;
        case "driving":
            drivingRef.value = newValue;
            break;
        case "diet":
            dietRef.value = newValue;
            break;
        case "message":
            messageRef.value = newValue;
            break;
        case "attendance":
            attendingRef.value = newValue;
            break;
        default:
            break;
    }
}

function resetAllRef() {
    nameRef.value = "";
    emailRef.value = "";
    mobileRef.value = "";
    drivingRef.value = "";
    dietRef.value = "";
    messageRef.value = "";
}

function toggleForm(filled: boolean) {
    filledFormRef.value = filled;
}

interface RouteTableInterface {
    [index: string]: any
}

const routes: RouteTableInterface = {
  '/': Main,
  '/card': SwipeCard,
  '/form': Form,
  '/form-end': FormEnd
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || Content
})


</script>

<template>
  <component :is="currentView" :nameRef="nameRef" :mobileRef="mobileRef" :emailRef="emailRef" :dietRef="dietRef" :drivingRef="drivingRef" :messageRef="messageRef" :filledFormRef="filledFormRef" :attendingRef="attendingRef" :toggleForm="toggleForm" :updateRef="updateRef" :resetAllRef="resetAllRef" :swipeFeatureFlag="swipeFeatureFlag"/>
</template>

