import { defineStore } from "pinia";
import { ref } from "vue";
export const useTestStore = defineStore('test', () => {
const name=ref('')
  
  
  
    return {name}
  })