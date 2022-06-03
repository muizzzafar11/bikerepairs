<template>
  <div style="height: 100%; overflow: scroll;" class="d-flex">
    <div class="align-self-center">
      <h1 class="display-3">Bikes perfectly attuned to your needs</h1>
      <h3 class="mt-5">Our shop provides a variety of products and bicycle parts for you to enjoy your bike ride to the fullest</h3>
    </div>
    <div class="d-flex">
      <img class="img-fluid" style="transform: scaleX(-1);" src="@/assets/bike.png">
    </div>
  </div>
  <div class="text-center mt-5">
    <BButton pill class="px-5 py-2" variant="light" @click="goToRepair()">Schedule a repair</BButton>
  </div>
</template>

<script>
export default {
  name: 'HomeScreen',
  methods: {
    goToRepair() {
      this.$router.push('/booking');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
