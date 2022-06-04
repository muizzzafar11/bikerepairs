<template>
  <h3 class="mb-4">About & Contact Info</h3>
  <b-container class="bv-example-row w-50 px-5 py-5">
    <b-row>
      <b-col class="my-auto">
          <p class="text-muted">123 Testing Street</p>
          <p class="text-muted">000 - 000 - 0000</p>
          <p class="text-muted">bike.repairs@gmail.com</p>
      </b-col>
      <b-col class="my-auto">
        <p class="text-muted">Hours of Operation</p>
        <p class="text-muted">WeekDays: 9:00 am - 5:00 pm</p>
        <p class="text-muted">Friday: closed</p>
        <p class="text-muted">Weekends: 9:00 am - 5:00 pm</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// import CardComponent from '@/components/CardComponent.vue'
export default {
  name: 'AboutScreen',
  components: {
    // CardComponent,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
