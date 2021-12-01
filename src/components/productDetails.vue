<template>
 <div class="productDetails">
   <div class="header">
     <div class="header__menu">
       <div class="header__menu_back">
         <a href="" @click="$route.go(-1)"> Go back</a>
       </div>
       <div class="header__menu_title">{{title}}</div>
       <div class="header__menu_bag">
         <router-link to="/cart" class="header__menu_bag-enter"> <img src="../assets/bag.jpeg" alt=""></router-link>
       </div>
     </div>
   </div>
   <div class="details">
    <div class="details__name">MegaFleece Sweatshirt</div>
     <div class="details__img">
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
       <div class="details__about">
         An extra roomy and cozy sweatshirt made in our 63% recycled wool MegaFleece fabric. Designed to keep you outside when the temperatures drop.
       </div>
       <div class="details__size">

       </div>
     </div>
   </div>
 </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: "productDetails",
  data (){
    return{
      title:'STADIUM GOODS',


    }
  },
    setup () {
      return {
        slide: ref(1)
      }
    },




}
</script>

<style scoped>

</style>
