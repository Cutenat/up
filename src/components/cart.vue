<template>
<div class="cart">
 <div class="cart__header">
   <a class="cart__header-back" href="" @click="$route.go(-1)"> Go Back</a>
   <div class="title"><h4>YOUR BAG</h4></div>
   <a class="allClear" href="#">All Clear</a>
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
  mounted() {
    console.log(this.basketProducts)
  }

}
</script>

<style>

</style>
