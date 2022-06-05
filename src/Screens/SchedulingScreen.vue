<template>
  <div class="simple-example px-5 text-center pb-5">
    <h3 class="mb-4">Select Repair Time</h3>
    <vue-meeting-selector
      style="background: white; border-radius: 30px;"
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
      <b-form-select class="py-2" v-model="selected" :options="options" style="border-radius: 10rem"></b-form-select>
  </div>
  <div class="px-5 py-5  text-center">
      <h3 class="mb-4">Personal Information</h3>
      <b-form-input class="py-2" v-model="name" placeholder="Enter your name" style="border-radius: 10rem"></b-form-input>
      <b-form-input class="mt-3 py-2" v-model="email" placeholder="Enter your email" style="border-radius: 10rem"></b-form-input>
      <b-form-input class="mt-3 py-2" v-model="phone" placeholder="Enter your phone" style="border-radius: 10rem"></b-form-input>
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
      options: [
        { value: 'John Doe', text: 'John Doe - bike repair specialist' },
        { value: 'Jane Doe', text: 'Jane Doe - bike repair specialist' },
        { value: 'Jack Doe', text: 'John Doe - store owner' },
        { value: 'Jamal Doe', text: 'Jamal Doe - mechanical part repair' },
        { value: 'Oprah Winfrey', text: 'Oprah Winfrey - intern' },
      ],
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
          hours: 8,
          minutes: 0,
        }, 
        {
          hours: 16,
          minutes: 0,
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
