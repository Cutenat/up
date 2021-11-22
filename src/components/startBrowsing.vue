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
      <div class="mind__title">STADIUM GOODS</div>
    <div class="mind__account">
      <router-link to="/singUp" class="mind__account_bag"> <img src="../assets/bag.jpeg" alt=""></router-link>
<!--      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-check" viewBox="0 0 16 16">-->
<!--        <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>-->
<!--        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>-->
<!--      </svg>-->

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
       <q-card class="my-card">
         <q-img src="https://d2sg98d8lfy6hf.cloudfront.net/eyJidWNrZXQiOiJvdi1lbXMiLCJrZXkiOiJtZWRpYS9wcm9kdWN0cy9yZWNyZWF0aW9uLXBpY2t1cC1zd2VhdHNoaXJ0L3BvcHB5c2hpcmF6L1c1MDE1ODgtU0NULVBQU19SZWNyZWF0aW9uX1BpY2t1cF9Td2VhdHNoaXJ0X1BvcHB5X1NoaXJhel8wNTAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6Imluc2lkZSIsImhlaWdodCI6MTAwMDAsIndpZHRoIjo3MTd9LCJ0b0Zvcm1hdCI6IndlYnAifX0=">
           <div class="absolute-bottom">
             <div class="text-h6">Our Changing Planet</div>
             <div class="text-subtitle2">by John Doe</div>
           </div>
         </q-img>

         <q-card-actions>
           <q-btn flat></q-btn>
           <q-btn flat>Action 2</q-btn>
         </q-card-actions>
       </q-card>

     </div>
 </div>


</div>

</template>

<script>
import { ref } from 'vue'
//import { useQuasar } from 'quasar'


export default {
  name: "startBrowsing",
  setup () {
    return {
      slide: ref(1),
      fullscreen: ref(false)
    }
  },
  data(){
    return{
      setup () {
        return {
          lorem: 'Lorem ipsum ut labore et dolore magna aliqua.'
        }
      }
    }
  }

}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
