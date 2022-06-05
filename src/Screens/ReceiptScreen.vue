<template>
  <h3 class="pt-4 mb-4 text-center">Booking Confirmed</h3>
  <div class="bv-example-row col-lg-6 col-md-8 col-sm-12 col-12 mx-auto">
  <div class="row px-5 py-5">
    <div class="col-md-6 col-sm-12 col-12 my-auto">
        <p class="text-muted"><b>Time: </b>{{time}}</p>
        <p class="text-muted"><b>Associate: </b>{{associate}}</p>
        <p class="text-muted"><b>Phone: </b>{{phone}}</p>
        <p class="text-muted"><b>Total: </b>${{price}} + HST</p>
        <p class="text-muted"><b>Location: </b>{{Location}} {{province}}</p>
    </div>
    <div class="col my-auto">
      <img src="@/assets/logo_bk.png" class="img-fluid">
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ReceiptScreen',
  data() {
    return {
      time: new Date(JSON.parse(window.localStorage.getItem('meetingDate'))).toLocaleString(),
      associate: window.localStorage.getItem('selectedAssociate'),
      phone: '000-000-0000',
      individualRepairPrice: parseInt(window.localStorage.getItem('individualRepair')),
      selectedPackagePrice: parseInt(window.localStorage.getItem('selectedPackage')),
      price: 0,
      Location: '123 Testing Street',
      province: 'Ottawa, ON'
    }
  }, created() {
    this.price = this.individualRepairPrice? this.individualRepairPrice : 0 + 
                 this.selectedPackagePrice? this.selectedPackagePrice: 0
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
