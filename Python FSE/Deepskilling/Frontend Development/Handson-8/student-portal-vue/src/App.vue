<template>

  <Header />

  <main>

    <router-view />

  </main>

  <Footer />

</template>

<script setup>

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

</script>

<style>

body{

margin:0;

font-family:Arial, Helvetica, sans-serif;

background:#f4f4f4;

}

main{

min-height:80vh;

padding:20px;

}

</style>