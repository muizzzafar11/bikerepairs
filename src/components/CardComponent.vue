<template>
  <div class="col mb-4">
    <div class="card bg-dark h-100">
      <div class="card-header text-center py-5 mx-0">
        <h5 class="mb-0">{{title}}</h5>
        <h6 class="mb-0">{{subtitle}}</h6>
      </div>
      <div class="card-body">
        <div class="card-body">
            <ul v-if="showAdditionalOptions">
              <li
                style="color: #e3e3e3"
                v-for='p in body'
                :key='p'  
              >
                {{ p }}
              </li>
            </ul>
            <div v-else>
              <p style="color: #e3e3e3">{{body}}</p>
            </div>
        </div>
      </div>
      <div class="card-footer text-center" v-if="showAdditionalOptions">
        <b-button variant="secondary" @click="select()">{{selected?'selected':'select'}}</b-button>
      </div>
      <div class="card-footer text-center" v-else>
        <b-button variant="secondary" @click="openLinkedIn()">See Profile</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardComponent',
  props: {
    title: String,
    subtitle: String,
    body: null,
    stringBody: String,
    buttonBool: Boolean,
    showAdditionalOptions: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      selected: this.buttonBool,
    }
  }, 
  methods: {
    select() {
      this.selected = !this.selected;
      if (this.selected)
        this.$emit('selected', this.selected)
      window.localStorage.setItem('selectedPackage', 
      this.selected? this.subtitle.substring(this.subtitle.indexOf('$')+1) : null)
    }, openLinkedIn () {
      window.open('https://www.linkedin.com/in/muizz-zafar/', '_blank').focus();
    }
  }, watch: {
    buttonBool(newVal) {
      this.selected = newVal;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h5, h6 {
    color: #ffffff;
  }
</style>
