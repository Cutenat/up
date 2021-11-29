<template>
<div class="catalogItem">
  <div> {{product.image}}</div>
  <p class="catalogItem__name">{{product.name}} </p>
  <p class="catalogItem__price">Price: {{product.price}} us.</p>
  <button class="catalogItem__add_to_cart__btn btn"
          @click="sendBack">add to cart</button>
</div>
</template>

<script>
import {mapMutations} from "vuex"

export default {
  name: "catalogItem",
  props:{
    product:{
      type: Object,
      default(){
        return{

        }
      }
    }
  },
  data(){
    return{}
  },
  computed:{},
  methods:{
    ...mapMutations({
      addProductToBasket: 'example/ADD_PRODUCT',
    }),
    sendBack(){
      this.addProductToBasket(this.product)
    }
  }


}
</script>

<style>

</style>
