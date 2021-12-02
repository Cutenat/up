<template>
<div class="cart">
 <div class="cart__header">
   <span class="cart__header-back" @click="goStart"> Go Back</span>
   <div class="title"><h4>YOUR BAG</h4></div>
   <span class="allClear">All Clear</span>
 </div>
  <div class="cartItem" v-for="(product,id ) in basketProducts" :key="id">

    <cartItem :products="product"/>
  </div>
</div>
</template>

<script>
import cartItem from "./cartItem";
import {mapState} from "vuex"

export default {
  name: "cart",
  components:{
    cartItem
  },
  props:{},
  data(){
    return{
      products:[]
    }
  },
  computed:{
    ...mapState({
      basketProducts: (state) => state.example.productsInBasket,
    })
  },
  methods:{
    goStart(){
      this.$router.push('/start')
    }
  },
  mounted() {
    console.log(this.basketProducts)
  }

}
</script>

<style>

</style>
