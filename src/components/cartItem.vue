<template>
<div class="cartItem">

  <div class="img">
   <img src="../assets/loginimg.png" alt="">
  </div>

  <div class="card">
    <div class="card__title">
      <div class="card__title_name">
        {{products.name}}

      </div>
      <div class="card__title_price">
        {{products.price}}$
      </div>
    </div>

   <div class="card__btn">
     <div class="card__btn_counts">
       <button class="card__btn_counts-plus" @click="reduce">+</button>
       <div class="card__btn_counts-count">
         {{count}}
       </div>
       <button class="card__btn_counts-minus" @click="countAdd">-</button>

     </div>

     <div class="card__btn_delete"><button class="del">delete</button></div>

   </div>



  </div>

</div>
</template>

<script>

export default {
  name: "cartItem",
  props:{
    products:{
      type:Object
    }
  },
  data (){
    return{
      count:1,
    }
  },
  methods:{

    },
    reduce(){
      this.count++
    },
    countAdd(){
      if(this.count>0 ){
        this.count--
      }
    },
}
</script>

<style scoped>

</style>
