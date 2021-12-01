<template>
<div class="startBrowsing">
  <div class="mind">
    <div class="mind__menu">
      <q-btn color="primary" label="Menu">
        <q-menu
          transition-show="flip-right"
          transition-hide="flip-left"
        >
          <q-list style="min-width: 100px">
            <q-item clickable>
              <q-item-section>MAN</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>WOMAN</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
              <q-item-section>ALL</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-btn>


    </div>
      <div class="mind__title">{{title}}</div>
    <div class="mind__account">
      <router-link to="/cart" class="mind__account_bag"> <img src="../assets/bag.jpeg" alt=""></router-link>
    </div>
  </div>
 <div class="content">
   <div class="carousel">
   <q-carousel
     swipeable
     animated
     arrows
     v-model="slide"
     v-model:fullscreen="fullscreen"
     infinite
   >
     <q-carousel-slide :name="1" img-src="https://d2sg98d8lfy6hf.cloudfront.net/eyJidWNrZXQiOiJvdi1lbXMiLCJrZXkiOiJtZWRpYS9wcm9kdWN0cy9tZWdhZmxlZWNlLTEyLXppcC1ob29kaWUvZHVzdHktYmx1ZW1vcm5pbmctYmx1ZS8wMjBfMDI0Ni5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiaW5zaWRlIiwiaGVpZ2h0IjoxMDAwMCwid2lkdGgiOjkwMH0sInRvRm9ybWF0Ijoid2VicCJ9fQ==" />
     <q-carousel-slide :name="2" img-src="https://2m1xmi48gdhk2o6cr21hkze5-wpengine.netdna-ssl.com/wp-content/uploads/09A3428.jpg" />
     <q-carousel-slide :name="3" img-src="https://d2sg98d8lfy6hf.cloudfront.net/eyJidWNrZXQiOiJvdi1lbXMiLCJrZXkiOiJtZWRpYS9wcm9kdWN0cy9tZWdhZmxlZWNlLXN3ZWF0c2hpcnQvc3Vuc3RvbmUvMDMwXzA0NDZfMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiaW5zaWRlIiwiaGVpZ2h0IjoxMDAwMCwid2lkdGgiOjEzNTF9LCJ0b0Zvcm1hdCI6IndlYnAifX0=" />
     <q-carousel-slide :name="4" img-src="https://d2sg98d8lfy6hf.cloudfront.net/eyJidWNrZXQiOiJvdi1lbXMiLCJrZXkiOiJtZWRpYS9wcm9kdWN0cy9tZWdhZmxlZWNlLXNuYXAtc3dlYXRzaGlydC9zdW5mbG93ZXJqYXNwZXIvMDEwXzAxMTkuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6Imluc2lkZSIsImhlaWdodCI6MTAwMDAsIndpZHRoIjo5MDB9LCJ0b0Zvcm1hdCI6IndlYnAifX0=" />


     <template v-slot:control>
       <q-carousel-control
         position="bottom-right"
         :offset="[18, 18]"
       >
         <q-btn
           push round dense color="white" text-color="primary"
           :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'"
           @click="fullscreen = !fullscreen"
         />
       </q-carousel-control>
     </template>
   </q-carousel>
 </div>
   <div class="things">
     <div class="divProduct" v-for="product in products" :key="product.id" >
       <catalogItem :product="product" />
     </div>


     </div>
 </div>


</div>


</template>

<script>

import { ref } from 'vue'

import catalogItem from "components/catalogItem";

import cart from "components/cart";





export default {
  name: "startBrowsing",
  components:{
    // catalog,
    catalogItem
    // cart
  },
  props:{},
  data(){
    return{
      title:'STADIUM GOODS',
      products:[
        {
          id:1,
          image:'4.jpg',
          name:'jacket',
          price:100,
          article:'T1',
          avalibale:true
        },
        {
          id:2,
          image:'sss.png',
          name:'jacket 2',
          price:200,
          article:'T2',
          avalibale:true
        },
        {
          id:3,
          image:'first.webp',
          name:'jacket 3',
          price:100,
          article:'T3',
          avalibale:false
        },
        {
          id:4,
          image:'4.jpg',
          name:'jacket 4',
          price:100,
          article:'T4',
          avalibale:true
        },
        {
          id:5,
          image:'5.jpg',
          name:'jacket 5',
          price:300,
          article:'T5',
          avalibale:true
        }
      ]

    }
  },
  computed: {},
  methods:{},
  watch:{},
  mounted() {},
  setup () {
    return {
      slide: ref(1),
      fullscreen: ref(false)
    }
  },


}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
