<template>
  <div id="app">
    <BasicLayout/>
  </div>
</template>

<script lang="ts" setup>
import BasicLayout from "@/layouts/BasicLayout.vue";


import { healthUsingGet } from '@/api/mainController'

healthUsingGet().then((res) => {
  console.log(res)
})

</script>
