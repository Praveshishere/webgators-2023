<template>
  <div
    class="flex w-full justify-center items-start bg-[#0F172A] dark min-h-screen"
  >
    <div class="mt-12 flex flex-col justify-center items-center w-full">
      <Player class="w-[800px] " :song="currentSong!"/>
      <SongTabs @play="playFunc" />
    </div>
  </div>
</template>
<script setup lang="ts">

const currentSong = ref<null | Song>(null);

const playFunc = (song: Song) => {
  currentSong.value = song;
};
</script>
