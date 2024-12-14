<script setup lang="ts">
import { ref } from "vue";

const time = ref(new Date().toLocaleTimeString());
const date = new Date().toLocaleDateString();
const serial = ref("");

function updateTime() {
  time.value = new Date().toLocaleTimeString();
}

setInterval(updateTime, 1000);

function generateSerial() {
  const number = Math.floor(Math.random() * 100000000);
  const serialNumber = number.toString().padStart(8, "0");
  serial.value = "X" + serialNumber;
}

generateSerial();
</script>

<template>
  <div
    class="absolute top-16px right-16px w-fit h-fit rounded-xl flex items-center justify-center gap-6 px-4 py-2 font-mono color-white">
    <div class="grid grid-rows-2 grid-cols-2 gap-x-4 uppercase">
      <p>J. Nolan</p>
      <p class="text-end">{{ serial }}</p>
      <p>{{ date }}</p>
      <p class="text-end">T{{ time }}Z</p>
    </div>
    <img src="../assets/logo.png" alt="logo" class="w-12 h-12"></img>
  </div>
</template>
