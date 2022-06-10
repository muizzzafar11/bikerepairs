<template>
  <div class="simple-example px-5 text-center pb-5">
    <h3 class="mb-4">Select Repair Time</h3>
    <vue-meeting-selector
      style="background: white; border-radius: 30px; overflow: scroll;"
      ref="meetingSelector"
      class="meeting-selector px-4 py-4"
      :date="date"
      v-model="meeting"
      :loading="false"
      :meetings-days="meetingsDays"
    />
  </div>
  <div class="px-5 py-5 text-center">
      <h3 class="mb-4">Associate Preference</h3>
      <select class="custom-select py-2 px-1 w-100" v-model="selected" style="border-radius: 10rem">
        <option selected>Open this select menu</option>
        <option value="John Doe">John Doe - bike repair specialist</option>
        <option value="Jane Doe">Jane Doe - bike repair specialist</option>
        <option value="Jack Doe">John Doe - store owner</option>
        <option value="Jamal Doe">Jamal Doe - mechanical part repair</option>
        <option value="Oprah Winfrey">Oprah Winfrey - intern</option>
      </select>
  </div>
  <div class="px-5 py-5  text-center">
      <h3 class="mb-4">Personal Information</h3>
      <input class="py-2 form-control" v-model="name" placeholder="Enter your name" style="border-radius: 10rem">
      <input class="mt-3 py-2 form-control" v-model="email" placeholder="Enter your email" type="email" style="border-radius: 10rem">
      <input class="mt-3 py-2 form-control" v-model="phone" placeholder="Enter your phone" style="border-radius: 10rem">
  </div>
  <div class="text-center">
      <BButton pill class="px-5 py-2 mt-2" variant="light" @click="goToNextStep()">Confirm Booking</BButton>
  </div>
</template>

<script>
import VueMeetingSelector from "vue-meeting-selector";
import slotsGenerator from "vue-meeting-selector/src/helpers/slotsGenerator";
export default {
  name: 'AboutScreen',
  components: {
    VueMeetingSelector,
  }, data() {
    return {
      selected: null,
      meetingSelector: null,
      meeting: null,
      name: null,
      email: null,
      phone: null,
      date: new Date(),
      meetingsDays: slotsGenerator(
        new Date(),
        7,
        {
          hours: 9,
          minutes: 0,
        }, 
        {
          hours: 16,
          minutes: 30,
        }, 
        30
      ),
    }
  }, methods: {
    goToNextStep() {
      if(this.meeting && this.selected && this.name && this.email && this.phone) {
        var date = new Date(this.meeting.date)
        window.localStorage.setItem('meetingDate', JSON.stringify(date))
        window.localStorage.setItem('selectedAssociate', this.selected)
        window.localStorage.setItem('name', this.name)
        window.localStorage.setItem('email', this.email)
        window.localStorage.setItem('phone', this.phone)
        this.$router.push('/receipt')
      } else {
        alert('Please fill out all fields')
      }
    },
  }, created() {
    this.meetingsDays = this.meetingsDays.filter(days => {
      if(new Date(days.date).getDay() !== 5) {
        return days
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.meeting__button {
  background-color: black !important;
  color: white !important;
}
.meeting__button--selected {
  background-color: grey !important;
}

.meeting-selector .tab__pagination__button {
  color: grey !important;
}
</style>
