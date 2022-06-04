<template>
  <div>
    <h3 class="mb-4 text-center">Meet the Team</h3>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 justify-content-center">
      <card-component title="John Doe" subtitle="(Bike Repair Specialist)" 
          body="John is a specialist in bike repair. With over 12 years of experience, he has worked on repairing several parts of the bike" 
          :showAdditionalOptions="false"></card-component>
      <card-component title="Jane Doe" subtitle="(Bike Repair Specialist)" 
          body="Jane is also a specialist in bike repair. He has been working with us for the past 10 years as a part time employee and repaired thousands of bikes" 
          :showAdditionalOptions="false"></card-component>
      <card-component class="col-12 col-sm-6 col-lg-4 col-xl-3" title="Jack Doe" subtitle="(Store Owner)" 
          body="Jack is the store owner. Since he found the store in the past, he has been working with us since the beginning. He over 20 years of experience in bike repair"
          :showAdditionalOptions="false"></card-component>
      <card-component class="col-12 col-sm-6 col-lg-4 col-xl-3" title="Jamal Doe" subtitle="(Mechanical Repair Specialist)" 
          body="Jamal is a specialist in mechanical parts repair. Brakes, Gears, Drivetrain repairs are his areas of expertise in aditiion to repairing the bike." 
          :showAdditionalOptions="false"></card-component>
      <card-component class="col-12 col-sm-6 col-lg-4 col-xl-3" title="Oprah Winfrey" subtitle="(Mechanical Intern)" 
      body="Oprah is an intern studying Mechanical Engineering Technician at Sheridan College. Despite being na intern she is really skilled in repairing bikes. " 
      :showAdditionalOptions="false"></card-component>
    </div>
  </div>
</template>

<script>
import CardComponent from '@/components/CardComponent.vue'
export default {
  name: 'TeamScreen',
  components: {
    CardComponent,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
