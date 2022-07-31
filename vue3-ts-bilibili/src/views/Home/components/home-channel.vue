<template>
  <van-tabs v-model:active="active">
    <van-tab v-for="item in list" :key="item.id" :title="item.text"></van-tab>
  </van-tabs>
</template>
<script setup lang="ts">
// ref 函数用于定义模板中使用的响应式数据，相当于 Vue2 的 data
import { ref } from 'vue'
import axios from 'axios'

interface INavItem {
  id: string
  text: string
}

// active 表示当前选中标签的下标为 0
const active = ref(0)

const list = ref<INavItem[]>([])

axios({
  url: '/navList',
  method: 'get'
}).then(res => {
  console.log('获取频道数据', res.data)
  list.value = res.data.result
})
</script>
