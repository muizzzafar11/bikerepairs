<template>
  <div v-if="!repair1Complete">
    <div>
      <h3 class="mb-4 text-center">Seasonal Repairs</h3>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 justify-content-center">
        <card-component class=" mx-2" title="Basic Tuneup" subtitle="$20" :body=description1 :buttonBool="package1" @selected="selected1"></card-component>
        <card-component class=" mx-2" title="Classic Tuneup" subtitle="$50" :body=description2 :buttonBool="package2" @selected="selected2"></card-component>
        <card-component class=" mx-2" title="Premium Tuneup" subtitle="$70" :body=description3 :buttonBool="package3" @selected="selected3"></card-component>
      </div>
      <!-- </b-card-group> -->
    </div>
    <h3 class="mb-4 mt-5 text-center">Individual Part Repair</h3>
    <div class="d-flex justify-content-center mb-5">
      <div class="w-50" style="background: white; border-radius: 10rem">
        <v-select :options="options" :reduce="(option) => option.id" v-model="selected" multiple/>
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
      options: [
        { label: 'Flat Tire $10', id: 10 },
        { label: 'Chain Repair $3', id: 3 },
        { label: 'Frame Tuning $5', id: 5 },
        { label: 'Brakes Repair $4', id: 4 },
        { label: 'Other - Visit Store', id: 0 },
      ],
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
      ], 
      package1: false,
      package2: false,
      package3: false,
    }
  },
  methods: {
    goToNextStep() {
      var packageSelected = this.package1 || this.package2 || this.package3;
      // var individualRepSelected = this.selected !== null && this.selected?.length !== 0
      if(!this.selected && !packageSelected) {
        alert("Please select at least one repair type")
      } else {
        var individualRepairSum = this.selected?.reduce((a, b) => a + b, 0)
        window.localStorage.setItem('individualRepair', individualRepairSum)
        this.repair1Complete = true
      }
    },
    selected1(selected) {
      this.package1 = selected
      this.package2 = false
      this.package3 = false
    }, 
    selected2(selected) {
      this.package1 = false
      this.package2 = selected
      this.package3 = false
    }, 
    selected3(selected) {
      this.package1 = false
      this.package2 = false
      this.package3 = selected
    }
  }, created() {
    this.description2 = this.description1.concat(this.description2)
    this.description3 = this.description2.concat(this.description3)
  },
}
</script>

<style>
.vs__dropdown-toggle {
  padding: 10px !important; 
}
.vs__selected {
  border-radius: 15px !important;
}
</style>
