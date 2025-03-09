<template>
  <nav class="   inline-block p-5 shadow-lg shadow-red-500 rounded-lg w-3/4 mx-auto w-fit flex justify-center ">
    <ul class="flex p-3 mx-auto">
       <li v-for="nav in navigation" :key="nav.id" class="hover:text-red-400">
        <NuxtLink :to="nav.path" class="p-3">{{ nav.label }}</NuxtLink>
       </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
const navigation=[{id:1,label:"Home",path:"/"},{id:2,label:"About",path:"about"}]
</script>

<style scoped>
.router-link-exact-active{
  
   @apply shadow-lg shadow-yellow-300 rounded-md tracking-wider uppercase
  
}

</style>