<template>
  <div>
    <h1>Знаете {{ name }} Нам Похуй</h1>
  </div>
</template>

<script lang="ts" setup>
import { useTestStore,storeToRefs } from '#imports';
const store=useTestStore()
const {name}=storeToRefs(store)
</script>

<style>

</style>