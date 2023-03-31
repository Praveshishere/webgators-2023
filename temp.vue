<template>
    <div>
      <audio controls>
        <source :src="currentSong?.path" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <SongTabs @play="playFunc" />
    </div>
  </template>
  
  <script setup lang="ts">
  const currentSong = ref<null | Song>(null);
  
  const playFunc = (song: Song) => {
    currentSong.value = song;
  };
  </script>
  