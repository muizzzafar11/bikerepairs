<template>
  <div v-if="!repair1Complete">
    <div>
      <h3 class="mb-4 text-center">Seasonal Repairs</h3>
      <b-card-group class="d-flex justify-content-around pb-5">
        <card-component class=" mx-2" title="Basic Tuneup" subtitle="$20" :body=description1></card-component>
        <card-component class=" mx-2" title="Classic Tuneup" subtitle="$50" :body=description2></card-component>
        <card-component class=" mx-2" title="Premium Tuneup" subtitle="$70" :body=description3></card-component>
      </b-card-group>
    </div>
    <h3 class="mb-4 mt-5 text-center">Individual Part Repair</h3>
    <div class="d-flex justify-content-center mb-5">
      <div class="w-50" style="background: white; border-radius: 10rem">
        <v-select :options="options" v-model="selected" multiple/>
      </div>
    </div>
    <div class="text-center">
      <BButton pill class="px-5 px-2 mt-5" variant="light" @click="goToNextStep()">Next Step</BButton>
    </div>
  </div>
  <div v-else>
    <scheduling-screen></scheduling-screen>
  </div>

</template>

<script>
import CardComponent from '@/components/CardComponent.vue'
import SchedulingScreen from '@/Screens/SchedulingScreen.vue'

export default {
  name: 'RepairScreen',
  components: {
    CardComponent,
    SchedulingScreen,
},
  data() {
    return {
      selected: null,
      options: ['list', 'of', 'options'],
      repair1Complete: false,
      description1: [
        'Inflat Tires',
        'Lube Chain',
        'Safety Inspection',
        'Break Adjustments',
        'Lube Drivetrain'
      ],
      description2: [
        'Bike Wash',
        'Lube Drivetrain',
        'Cable Installation',
      ],
      description3: [
        'Parts Replacement',
        'Wheel Tuning',
        'Drivetrain Cleaning'
      ]
    }
  },
  methods: {
    goToNextStep() {
      this.repair1Complete = true;
      console.log(this.selected)
    },
  }, created() {
    this.description2 = this.description1.concat(this.description2)
    this.description3 = this.description2.concat(this.description3)
  }
}
</script>

<style scoped>
</style>
