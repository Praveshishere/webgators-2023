<template>
  <div
    class="flex w-full justify-center items-start bg-[#0F172A] dark min-h-screen"
  >
    <div class="w-[700px] mt-12">
      <Player :song="currentSong"/>
      <SongTabs @play="playFunc" class="w-full" />
    </div>
  </div>
</template>
<script setup lang="ts">
// import Sidebar from "@/components/sidebar.vue"

const currentSong = ref<null | Song>(null);

const playFunc = (song: Song) => {
  currentSong.value = song;
};
</script>
