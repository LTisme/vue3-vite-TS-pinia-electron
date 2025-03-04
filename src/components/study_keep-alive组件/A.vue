<template>
  <el-transfer v-model="value" :data="data" />
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { onMounted, onUnmounted, onActivated, onDeactivated } from 'vue'

  interface Option {
    key: number
    label: string
    disabled: boolean
  }

  const generateData = () => {
    const data: Option[] = []
    for (let i = 1; i <= 15; i++) {
      data.push({
        key: i,
        label: `Option ${i}`,
        disabled: i % 4 === 0,
      })
    }
    return data
  }

  const data = ref<Option[]>(generateData())
  const value = ref([])

  onMounted(() => {
    console.log('初始化')
  })
  onActivated(() => {
    console.log('只有开启了keep-alive才会触发【激活】')
  })
  onDeactivated(() => {
    console.log('只有开启了keep-alive才会触发【失活】')
  })
  onUnmounted(() => {
    console.log('卸载')
  })
</script>