import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

//一个状态就存储一类要共享的数狱(存一类常量)
// 使用 defineStore 定义了一个名为 'counter' 的 store。创建了一个简单的计数器 store，允许获取当前计数、获取计数的两倍值，并提供增加计数的功能
// 这个 store 包含了三个主要部分：状态（state）、计算属性（getters）和动作（actions）。
export const useCounterStore
    = defineStore('counter', () => {
  //定义状志的初始值 count = ref(0)：定义了一个名为 count 的响应式变量，初始值为 0。这个变量用于存储计数器的当前值。
  //定义受量的计算逻辑 getter
  const count = ref(0)
  // 定义了一个计算属性 doubleCount，它始终返回 count 的两倍值。当 count 发生变化时，doubleCount 会自动更新。
  const doubleCount = computed(() => count.value * 2)
  // 定义怎么更改状态的方法 定义了一个方法 increment，用于将 count 的值加 1。
  function increment() {
    count.value++
  }
  // 返回 ，导出 Store
  return { count, doubleCount, increment }
})
