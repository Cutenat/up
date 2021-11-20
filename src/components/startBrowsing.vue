<template>
<div class="startBrowsing">
<header>
  <div class="mind">
    <div class="mind__menu">
      <img class="mind__menu_search" src="../assets/search.png" alt="">

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
      <h3 class="mind__title">STADIUM GOODS</h3>
    <div class="mind__account">
      <a class="mind__account_like" href=""><img src="../assets/like.png" alt=""></a>
      <a class="mind__account_bag" href=""><img src="../assets/bag.jpeg" alt=""></a>
    </div>
  </div>
</header>
  <div class="q-pa-md">
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
    <div class="things__cards">
      <figure class="woman">
        <a href="#">
          <img src="https://d2sg98d8lfy6hf.cloudfront.net/eyJidWNrZXQiOiJvdi1lbXMiLCJrZXkiOiJtZWRpYS9wcm9kdWN0cy9tZWdhZmxlZWNlLTEyLXppcC1ob29kaWUvcGlzdGFjaGlvbW9zc3kvRnJvbnRfVzUwMTA0MC1XTkYtUElNX01lZ2FGbGVlY2VfSGFsZi1aaXBfSG9vZGllX1Bpc3RhY2hpb19Nb3NzeV8wNDAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6Imluc2lkZSIsImhlaWdodCI6MTAwMDAsIndpZHRoIjo5MDB9LCJ0b0Zvcm1hdCI6IndlYnAifX0=" alt="">
          <h2 class="woman__title">SHOP WOMAN</h2>
        </a>
      </figure>


      <div><a href="">
        <img src="https://d2sg98d8lfy6hf.cloudfront.net/eyJidWNrZXQiOiJvdi1lbXMiLCJrZXkiOiJtZWRpYS9wcm9kdWN0cy9mYXN0LXRyYWNrLXNob3J0c2xlZXZlL2phc3Blci9NMzAxNDUzLVNNUy1KQVNfRmFzdF9UcmFja19TaG9ydHNsZWV2ZV9KYXNwZXJfMDg5LmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJpbnNpZGUiLCJoZWlnaHQiOjEwMDAwLCJ3aWR0aCI6OTAwfSwidG9Gb3JtYXQiOiJ3ZWJwIn19" alt="">
     <p>MAN</p>
      </a></div>





    </div>
  </div>

<footer>

</footer>
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






}
</script>

<style scoped>

</style>
