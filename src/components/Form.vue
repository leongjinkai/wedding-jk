<script setup lang="ts">
import '@/assets/main.css';
import { ref } from 'vue';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from "../../amplify/data/resource";

const name = ref("");
const email = ref("");
const diet = ref("");
const message = ref("");

async function submitForm() {
    console.log(name.value)
    console.log(email.value)
    console.log(diet.value)
    console.log(message.value)

    const client = generateClient<Schema>();

    const { errors, data: newAttendance } = await client.models.Attendance.create({
        name: name.value,
        email: email.value,
        dietaryPreferences: diet.value,
        messageToCouple: message.value
    })

    if (errors) {
        console.log(errors)
    }
    
    window.location.hash = "/card";
}

</script>

<template>
    <div class="form-container">
        <form v-on:submit.prevent="submitForm" class="form-holder">
            <div class="question-container">
                <div id="qn-1" class="fade-in">
                    <p class="question-text">may i have your glorious name</p>
                    <input type="text" placeholder="I am called..." v-model="name" autofocus required>
                </div>
                <div id="qn-2" class="fade-in">
                    <p class="question-text">email @ddress</p>
                    <input type="email" placeholder="No work email plz ;)" required v-model="email">
                </div>
                <div id="qn-3" class="fade-in">
                    <p class="question-text">what food cmi</p>
                    <input type="text" placeholder="Dietary preferences here..." required  v-model="diet">
                </div>
                <div id="qn-4" class="fade-in">
                    <p class="question-text">Leave a message for the couple~</p>
                    <input type="text" placeholder="e.g. OMG JX is da prettiest >.<"  v-model="message">
                </div>
            </div>
            
            <button type="submit" id="name-button">Done</button>
        </form>
    </div>
</template>

<style>
.form-container {
    padding: 30px 30px 30px 30px;
    width: calc(100vw - 60px);
    background-color: #f7ece7;
}

.form-holder {
    display: flex;
    flex-direction: column;
}

.question-container {
    margin-bottom: 40px;
}

.question-text {
    font-family: "Alumni Sans Pinstripe", cursive;
    font-weight: 400;
    font-style: bold;
    font-size: 4rem;
}

input {
    border: none;
    font-family: "Alumni Sans Pinstripe", cursive;
    font-weight: 400;
    font-style: normal;
    width: 100%;
    font-size: 2.5rem;
    padding: 20px 0 20px 10px;
    background-color: #f7ece7;
}

input:focus {
    outline: none;
}

div.fade-in {
  display: block;
  animation: fade-in 0.7s ease-in forwards;
}

div.fade-out {
    display: none;
    animation: fade-out 0.7s ease-out forwards;
}

@keyframes fade-in {
  0% {
    opacity: 0;
    display: none;
    transform: translateY(20px)
  }

  100% {
    opacity: 1;
    display: block;
    transform: translateY(0px)
  }
}

@keyframes fade-out {
  0% {
    opacity: 1;
    display: block;
  }

  100% {
    opacity: 0;
    display: none;
  }
}

button {
    width: fit-content;
    align-self: end;
    background-color: #f7ece7;
    border: 1px solid black;
    color: black;
    font-family: "Alumni Sans Pinstripe", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 24px;
    padding: 10px 14px;
    transition-duration: 0.4s;
}

button:hover {
    background-color: white;
    box-shadow: 2px 2px 5px black;
    padding: 10px 14px;
    border-color: black;
}

button:focus {
    outline: black;
}
</style>