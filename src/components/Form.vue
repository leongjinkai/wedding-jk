<script setup lang="ts">
import '@/assets/main.css';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from "../../amplify/data/resource";
import { onBeforeMount, onMounted } from 'vue';

const props = defineProps(['nameRef', 'emailRef', 'mobileRef', 'dietRef', 'drivingRef', 'messageRef', 'updateRef', 'attendingRef', 'toggleForm', 'resetAllRef'])

onBeforeMount(() => {
    if (props.attendingRef === "") {
        window.location.hash = "/";
    }
})

async function submitForm() {
    props.toggleForm(true);
    saveAttendance()
    props.resetAllRef();
    window.location.hash = "/form-end";
}

async function saveAttendance() {
    const client = generateClient<Schema>();


    const { errors, data: newAttendance } = await client.models.Attendance.create({
        name: props.nameRef,
        email: props.emailRef,
        mobile: props.mobileRef,
        dietaryPreferences: props.dietRef,
        driving: props.drivingRef === "Y" ? true : false,
        messageToCouple: props.messageRef,
        attending: props.attendingRef === "Y" ? true : false
    })

    if (errors) {
        console.log(errors)
    }
}

</script>

<template>
    <div class="form-container">
        <form v-on:submit.prevent="submitForm" class="form-holder">
            <div class="question-container">
                <div id="qn-1" class="fade-in">
                    <p class="question-text">Full Name</p>
                    <!-- @vue-expect-error -->
                    <input type="text" placeholder="Type here..." @input="event => updateRef('name', event.target?.value)" autofocus required>
                </div>
                <div id="qn-2" class="fade-in">
                    <p class="question-text">Email Address</p>
                    <!-- @vue-expect-error -->
                    <input type="email" placeholder="Type here..." required @input="event => updateRef('email', event.target?.value)">
                </div>
                <div id="qn-3" class="fade-in">
                    <p class="question-text">Mobile Number</p>
                    <!-- @vue-expect-error -->
                    <input type="tel" placeholder="Type here..." required @input="event => updateRef('mobile', event.target?.value)">
                </div>
                <div v-if="props.attendingRef == 'Y'" id="qn-4" class="fade-in">
                    <p class="question-text">Dietary Restrictions</p>
                    <!-- @vue-expect-error -->
                    <input type="text" placeholder="Type here..." required @input="event => updateRef('diet', event.target?.value)">
                </div>
                <div v-if="props.attendingRef == 'Y'" id="qn-4" class="fade-in">
                    <p class="question-text">Do you need a parking coupon?</p>
                    <!-- @vue-expect-error -->
                    <select class="driving-dropdown" id="driving" name="driving" required @input="event => updateRef('driving', event.target?.value)">
                        <option value="Y">Yes</option>
                        <option selected value="N">No</option>
                    </select>
                </div>
                <div id="qn-5" class="fade-in">
                    <p class="question-text">Leave a message for the couple~</p>
                    <!-- @vue-expect-error -->
                    <input type="text" placeholder="e.g. OMG JX is da prettiest >.<" required @input="event => updateRef('message', event.target?.value)">
                </div>
            </div>
            
            <button type="submit" id="name-button">Next</button>
        </form>
    </div>
</template>

<style>
.form-container {
    padding: 30px 30px 30px 30px;
    width: calc(100vw - 60px);
    background-color: #f7ece7;
}

.driving-dropdown {
    border: unset;
    width: 70px;
    align-self: end;
    background-color: #f7ece7;
    border: 1px solid black;
    color: black;
    font-family: "Funnel Sans", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 1rem;
    padding: 10px 14px;
    transition-duration: 0.4s;
    border-radius: 8px;
    cursor: pointer;

    /* Arrow */
    appearance: none;
    background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23131313%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
    background-repeat: no-repeat;
    background-position: right 0.7rem top 50%;
    background-size: 0.65rem auto;
}

.driving-dropdown:hover {
    background-color: white;
    box-shadow: 2px 2px 5px black;
    padding: 10px 14px;
    border-color: black;
}

.form-holder {
    display: flex;
    flex-direction: column;
}

.question-container {
    margin-bottom: 40px;
}

.question-text {
    font-family: "Funnel Sans", cursive;
    font-weight: 200;
    font-style: normal;
    font-size: 2.5rem;
}

input {
    border: none;
    font-family: "Alumni Sans Pinstripe", cursive;
    font-weight: 400;
    font-style: normal;
    width: 100%;
    font-size: 3rem;
    padding: 20px 0 20px 0px;
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
    font-family: "Funnel Sans", sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 1rem;
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