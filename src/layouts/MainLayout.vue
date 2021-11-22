<template>
  <q-layout view="lHh Lpr lFf">
<first-page />
  </q-layout>
</template>

<script>


import { defineComponent, ref } from 'vue'
import firstPage from '../components/fistPage'

export default defineComponent({
  name: 'MainLayout',
  components: {
    firstPage
  }

  })

</script>
