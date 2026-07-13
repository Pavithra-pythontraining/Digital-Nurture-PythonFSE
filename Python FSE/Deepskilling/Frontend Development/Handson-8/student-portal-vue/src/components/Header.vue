<template>
  <header class="header">
    <h2>SEC Student Portal</h2>

    <nav>
      <router-link to="/">Home</router-link>

      <router-link to="/courses">Courses</router-link>

      <router-link to="/profile">Profile</router-link>
    </nav>
  </header>
</template>

<style scoped>

.header{

display:flex;

justify-content:space-between;

align-items:center;

background:#1f4e79;

padding:15px 30px;

color:white;

}

nav{

display:flex;

gap:20px;

}

a{

color:white;

text-decoration:none;

font-weight:bold;

}

.router-link-active{

color:yellow;

}

</style>