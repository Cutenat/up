<template>
  <div v-if="step=== 'login'" class="loginPage">
    <div class="login">
      <h1 class="login__title">Make life more comfortable </h1>
      <div class="login__email">
        <label> Email</label>
        <input v-model="userInputsModel.userEmail" type="text" placeholder="email address or username">
      </div>
      <div class="error " v-for="(error, idx ) in fieldError.userEmail" :key="idx">{{error}}</div>
      <div class="login__password">
        <label>PASSWORD</label>
        <input type="password" v-model="userInputsModel.password" id="password-input" placeholder="Password" name="password">
      </div>
      <div class="error " v-for="(error, idx ) in fieldError.password" :key="idx">{{error}}</div>

      <div class="login__btn">
        <div class="divBtn">
<!--          <router-link class="a"  to="./start">-->
          <q-btn @click="signUp" outline style="color: black; width: 80%" label="log in "/>
<!--          </router-link>-->
        </div>
      </div>


    </div>

    <div class="accountRegister">
     Don`t have an account ?
      <router-link to="/singUp" class="accountRegister__link">
        Create account
      </router-link>
    </div>


  </div>
  <div v-if="step=== 'start'"> <startBrowsing/></div>
</template>


<script>
import {defineComponent} from 'vue'
import validate from 'validate.js'
import validateModels from '../utils/index'
import startBrowsing from "components/startBrowsing";

export default defineComponent({
  name: 'Login',
  data() {
    return {
      userInputsModel :{
        userEmail: '',
        password: '',
      },
      registerValidateModel:{
        userEmail: validateModels.userEmail,
        password: validateModels.password
      },
      step:'login',
      fieldError:{},

    }
  },
  components: { startBrowsing },
  props: ['loginSuccess'],
  methods: {
    signUp () {
      const modelInputs = {
        userEmail: this.userInputsModel.userEmail,
        password: this.userInputsModel.password,
      }
      console.log(modelInputs)
      if (validate(modelInputs, this.registerValidateModel)){
        this.fieldError = validate(modelInputs, this.registerValidateModel, {fullMessages: false}
        )
      }
      else  {
        this.step = 'start'
          localStorage.setItem('userEmail', this.userInputsModel.userEmail)
        localStorage.setItem('password', this.userInputsModel.password)
        console.log(localStorage)
      }

   },
  },
  mounted() {
    //console.log(this.props[0])
  }

})
</script>


<style scoped>

</style>
