<template>
  <div v-if="step=== 'singUp'" class="singUp">
        <h3 class="singUp__title">Make Your Life Easier</h3>
        <div class="singUp__email">
          <label>Your email address</label>
          <input v-model="userInputsModel.userEmail" type="text" placeholder="email address or username">
        </div>
    <div class="error " v-for="(error, idx ) in fieldError.userEmail" :key="idx">{{error}}</div>
        <div class="singUp__email" >
          <label>First and Last name</label>
          <input v-model="userInputsModel.name" type="text" placeholder="FIRST nad LAST NAME">
        </div>
    <div class="error " v-for="(error, idx ) in fieldError.name" :key="idx">{{error}}</div>
        <div class="singUp__email">
          <label> Password</label>
          <input type="password" v-model="userInputsModel.password" id="password-input" placeholder="Password" name="password">
        </div>
    <div class="error " v-for="(error, idx ) in fieldError.password" :key="idx">{{error}}</div>


      <div class="login__btn">
        <div class="divBtn">

        <q-btn @click="signUp" outline style="color: black; width: 80%" label="Sing Up"/>
      </div>
      </div>
  </div>
  <div v-if="step=== 'start'"> <startBrowsing/></div>
</template>
<script>
import {defineComponent} from 'vue'
import validate from 'validate.js'
import validateModels from '../utils/index'
import startBrowsing from "components/startBrowsing";
export default {
  name:'singUp',
  data() {
    return {
      userInputsModel :{
        userEmail: '',
        name:'',
        password: '',
      },
      registerValidateModel:{
        userEmail: validateModels.userEmail,
        name:validateModels.name,
        password: validateModels.password
      },
      step:'singUp',
      fieldError:{},

    }
  },
  components: { startBrowsing },
  props: ['loginSuccess'],
  methods: {
    signUp () {
      const modelInputs = {
        userEmail: this.userInputsModel.userEmail,
        name: this.userInputsModel.name,
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
        localStorage.setItem('name', this.userInputsModel.name)
        localStorage.setItem('password', this.userInputsModel.password)
        console.log(localStorage)
      }

    },
  },
  mounted() {
    //console.log(this.props[0])
  }


}
</script>
<style scoped>

</style>
