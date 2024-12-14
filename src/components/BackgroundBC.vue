<script setup lang="ts">
import { ref } from "vue";

const time = ref(new Date().toLocaleTimeString())
const date = new Date().toLocaleDateString()

function updateTime() {
  time.value = new Date().toLocaleTimeString()
}

setInterval(updateTime, 1000)

</script>

<template>
  <div class="absolute top-16px right-16px w-fit h-fit bg-black/25 rounded-xl flex items-center justify-center gap-4 px-4 py-2 font-mono border border-white/10">
    <div class="flex flex-col color-white/75 items-end uppercase font-500 line-height-tight">
      <div class="flex gap-2 justify-center items-center">
        <p>Rec</p>
        <span class="bg-red-6 rounded-full w-14px h-14px animate-pulse"></span>
        <p>zion zoom cam</p>
      </div>
      <p>T. Rosewater [Delta-07]</p>
      <p>Los Santos Police Department</p>
      <p>{{date}} {{time}} PDT</p>
    </div>
    <img src="../assets/logo.png" alt="logo" class="w-16 h-16"></img>
  </div>
</template>
