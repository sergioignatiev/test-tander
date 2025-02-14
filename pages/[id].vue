<template>
  <div class="">
  
    <h2 class="text-red-600 text-[20px] font-extrabold">{{ info.label }}</h2>
    <div class="flex flex-col">
<label v-for="(q,i) in info.content" :key="i">

    <input  v-model="question"  type="radio" name="questions" :value="q" >
    {{ q }}
    </label>
    </div>
    <div v-if="route.params.id<testData.length">
 <NuxtLink :to="`/${next}`" class="text-white p-3 bg-blue-700 mt-[9px] inline-block rounded-md">Следующий Вопрос</NuxtLink>
  </div>
  <div v-else>
    <NuxtLink to="/about" class="text-white p-3 bg-blue-700 mt-[9px] inline-block rounded-md">Рeзультат</NuxtLink>
  </div>
  </div>
</template>

<script  setup>
import { useTestStore,storeToRefs } from '#imports';
const store=useTestStore()
const {testData}=storeToRefs(store)
const question=ref('')
const route=useRoute()
const next=parseInt(route.params.id)+1
const info=computed(()=>{
return   testData.value.find(d=>d.id==route.params.id)
})

</script>

<style>

</style>