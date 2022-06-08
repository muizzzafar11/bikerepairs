<template>
  <div class="mb-4">
    <BNav class="justify-content-between align-items-center">
      <div>
        <router-link to="/" class="text-white">
          <img src="@/assets/home_logo.png" style="width: 150px">
        </router-link>
      </div>
      <div class="d-flex justify-content-end">
        <BNav-item>
          <router-link to="/" class="text-white">Home</router-link>
        </BNav-item>
        <BNav-item>
          <router-link to="/booking" class="text-white">Bookings</router-link>
        </BNav-item>
        <BNav-item>
          <router-link to="/team" class="text-white">Team</router-link>
        </BNav-item>
        <BNav-item>
          <router-link to="/about" class="text-white">About</router-link>
        </BNav-item>
      </div>
    </BNav>
  </div>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <router-view />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Comfortaa');

#app {
  font-family: 'Comfortaa';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  padding: 20px;
  background: linear-gradient(269.69deg, #141414 0.22%, #373737 95.97%);
  min-height: 100vh;
  max-width: 100vw;
  /* margin-top: 60px; */
}
p, h1, h2, h3, h4 {
  color: white;
}
</style>
