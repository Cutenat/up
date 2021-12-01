<template>
<div class="catalogItem">
  <div class="catalogItem__img">
    <div class="q-pa-md">
      <q-carousel
        swipeable
        animated
        v-model="slide"
        thumbnails
        infinite
      >
        <q-carousel-slide :name="1" img-src="https://d2sg98d8lfy6hf.cloudfront.net/eyJidWNrZXQiOiJvdi1lbXMiLCJrZXkiOiJtZWRpYS9wcm9kdWN0cy9tZWdhZmxlZWNlLXN3ZWF0c2hpcnQvbW9zc3kvRnJvbnQwMl9XNTAxMDY3LVdORi1NU1lfTWVnYUZsZWVjZV9Td2VhdHNoaXJ0X21vc3N5XzExNS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiaW5zaWRlIiwiaGVpZ2h0IjoxMDAwMCwid2lkdGgiOjcxN30sInRvRm9ybWF0Ijoid2VicCJ9fQ==" />
        <q-carousel-slide :name="2" img-src="https://d2sg98d8lfy6hf.cloudfront.net/eyJidWNrZXQiOiJvdi1lbXMiLCJrZXkiOiJtZWRpYS9wcm9kdWN0cy9tZWdhZmxlZWNlLXN3ZWF0c2hpcnQvbW9zc3kvQmFja19XNTAxMDY3LVdORi1NU1lfTWVnYUZsZWVjZV9Td2VhdHNoaXJ0X21vc3N5XzA4Ny5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiaW5zaWRlIiwiaGVpZ2h0IjoxMDAwMCwid2lkdGgiOjcxN30sInRvRm9ybWF0Ijoid2VicCJ9fQ==" />
        <q-carousel-slide :name="3" img-src="https://d2sg98d8lfy6hf.cloudfront.net/eyJidWNrZXQiOiJvdi1lbXMiLCJrZXkiOiJtZWRpYS9wcm9kdWN0cy9tZWdhZmxlZWNlLXN3ZWF0c2hpcnQvbW9zc3kvUHJvZmlsZV9XNTAxMDY3LVdORi1NU1lfTWVnYUZsZWVjZV9Td2VhdHNoaXJ0X21vc3N5XzA3OS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiaW5zaWRlIiwiaGVpZ2h0IjoxMDAwMCwid2lkdGgiOjcxN30sInRvRm9ybWF0Ijoid2VicCJ9fQ==" />
        <q-carousel-slide :name="4" img-src="https://d2sg98d8lfy6hf.cloudfront.net/eyJidWNrZXQiOiJvdi1lbXMiLCJrZXkiOiJtZWRpYS9wcm9kdWN0cy9tZWdhZmxlZWNlLXN3ZWF0c2hpcnQvbW9zc3kvU2xlZXZlX0RldGFpbF9XNTAxMDY3LVdORi1NU1lfTWVnYUZsZWVjZV9Td2VhdHNoaXJ0X21vc3N5XzE3NS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiaW5zaWRlIiwiaGVpZ2h0IjoxMDAwMCwid2lkdGgiOjcxN30sInRvRm9ybWF0Ijoid2VicCJ9fQ==" />
      </q-carousel>
    </div>
  </div>
  <p class="catalogItem__name">{{product.name}} </p>
  <p class="catalogItem__price">Price: {{product.price}} $</p>
  <div class="catalogItem__btns">
    <q-btn class="catalogItem__btns-add btn" @click="sendBack" outline style="color: orange; width: 50%" label="Add to cart"/>
    <div class="cartItem__btns_details">
      <div class="divBtn"><router-link class="a"  to="./details">
        <q-btn  outline style="color: orange; width: 80%" label="Details"/></router-link></div>
    </div>
  </div>
</div>
</template>

<script>
import {mapMutations} from "vuex"
import {ref} from "vue";

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
  setup () {
    return {
      slide: ref(1)
    }
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
