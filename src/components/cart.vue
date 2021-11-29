<template>
<div class="cart">
  cart
  <a href="" @click="$route.go(-1)">back</a>

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
