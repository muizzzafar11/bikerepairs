<template>
  <!-- <div> -->
      <b-card header-bg-variant="dark" border-variant="dark">
        <template #header>
          <div class="header-text text-center py-5">
            <h5 class="mb-0">{{title}}</h5>
            <h6 class="mb-0">{{subtitle}}</h6>
          </div>
        </template>
        <b-card-text class="text-muted">
          <ul>
              <li 
                v-for='p in body'
                :key='p'  
              >
                {{ p }}
              </li>
            </ul>
        </b-card-text>
        <template #footer>
          <div class="text-center">
            <b-button variant="secondary" @click="select()">{{selected?'selected':'select'}}</b-button>
          </div>
        </template>
      </b-card>
  <!-- </div> -->
</template>

<script>
export default {
  name: 'CardComponent',
  props: {
    title: String,
    subtitle: String,
    body: Array,
    buttonBool: Boolean,
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
