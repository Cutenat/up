<template>
<div class="login">
  <div class="wrapper">
    <h3 class="title" > log In </h3>
    <div class="userInf">
      <p class="email">
        <label>EMAIL OR USERNAME
        </label>
        <input type="text" placeholder="your email address">
      </p>
      <p class="password">
        <label>
          PASSWORD
          </label>
        <input type="password" id="password-input" placeholder="password" name="password">
      </p>
      <button class="btn">log In</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "login"
}
</script>

<style scoped>

</style>
