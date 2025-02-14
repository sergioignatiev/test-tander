<template>
  <div>
   <p>Приветствую дорогой коллега. пройдите этот опрос чтобы проверить вашу удовлетворенность работой</p>
   <p>Опрос содержит вопросы порой напрямую не относящиеся к вашей непосредственной работе чтобы выяснить общий уровень знаний и эрудиции.</p>
<input v-model="name" placeholder="Введите Имя" class="bg-blue-400 text-white px-4 py-1 rounded-sm " type="text">
<label for="position" class="block py-4 ">
  <h3>Твоя Должность</h3>
<select id="position" name="" class="block mt-3 border-[1px] p-3 border-solid border-blue-300">
  
      <option value="">Фасовщик</option>
      <option value="">Проебщик</option>
      <option value="">Фасовщик \ Проебщик</option>
      <option value="">Хуевщик</option>
    </select>
  </label>
<NuxtLink :to="`/1`" class="bg-blue-600 py-1 px-3 mt-3 block w-fit rounded-md text-white">
  
    <button class="p-1">Начать Опрос</button>
   </NuxtLink>
  </div>
</template>

<script  setup>
import { useTestStore,storeToRefs } from '#imports';
const store=useTestStore()
const {name}=storeToRefs(store)

</script>

<style>

</style>