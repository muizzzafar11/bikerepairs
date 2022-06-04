<template>
  <b-container class="bv-example-row w-50 px-5 py-5">
  <b-row>
    <b-col class="my-auto">
        <p class="text-muted"><b>Time: </b>{{time}}</p>
        <p class="text-muted"><b>Associate: </b>{{associate}}</p>
        <p class="text-muted"><b>Phone: </b>{{phone}}</p>
        <p class="text-muted"><b>Total: </b>${{price}} + HST</p>
        <p class="text-muted"><b>Location: </b>{{Location}} {{province}}</p>
    </b-col>
    <b-col class="my-auto">
      <img src="@/assets/logo_bk.png" class="img-fluid">
    </b-col>
  </b-row>
</b-container>
</template>

<script>
export default {
  name: 'ReceiptScreen',
  data() {
    return {
      time: new Date(JSON.parse(window.localStorage.getItem('meetingDate'))).toLocaleString(),
      associate: window.localStorage.getItem('selectedAssociate'),
      phone: '000-000-0000',
      price: parseInt(window.localStorage.getItem('individualRepair')) + parseInt(window.localStorage.getItem('selectedPackage')),
      Location: '123 Testing Street',
      province: 'Ottawa, ON'
    }
  }, created() {

    
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bv-example-row {
  background: white; 
  border-radius: 30px;
}
</style>
