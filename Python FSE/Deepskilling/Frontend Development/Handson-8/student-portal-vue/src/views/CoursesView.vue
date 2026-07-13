<template>

<div>

<h1>Available Courses</h1>

<div
v-for="course in store.courses"
:key="course.id"
class="card"
>

<h3>{{ course.name }}</h3>

<p>Credits : {{ course.credits }}</p>

</div>

</div>

</template>

<script setup>

import { useCourseStore } from '../stores/courseStore'

const store = useCourseStore()

</script>

<style scoped>

.card{

background:white;

padding:20px;

margin:15px 0;

border-radius:8px;

box-shadow:0 2px 5px rgba(0,0,0,.2);

}

</style>