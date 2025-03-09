<template>
  <button :class="variant" class="btn">
    <slot/>
  </button>
</template>

<script lang="ts"  setup>

defineProps({variant:{type:String,default:"standatr"}})
</script>

<style scoped>
.danger{
    @apply bg-red-800 text-white active:bg-black
}
.standart{
    @apply bg-slate-700 text-white
}

</style>