<template>
  <div class="w-full max-w-md px-2 py-16 sm:px-0">
    <TabGroup>
      <TabList class="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
        <Tab
          v-for="category in Object.keys(categories)"
          as="template"
          :key="category"
          v-slot="{ selected }"
        >
          <button
            :class="[
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
              selected
                ? 'bg-white shadow'
                : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
            ]"
          >
            {{ category }}
          </button>
        </Tab>
      </TabList>

      <TabPanels class="mt-2">
        <TabPanel
          v-for="(posts, idx) in Object.values(categories)"
          :key="idx"
          :class="[
            'rounded-xl bg-white p-3',
            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
          ]"
        >
          <ul>
            <li
              v-for="post in posts"
              :key="post.id"
              class="relative rounded-md p-3 hover:bg-gray-100"
              @click="$emit('play', post)"
            >
              <h3 class="text-sm font-medium leading-5">
                {{ post.title }}
              </h3>

              <ul
                class="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500"
              >
                <li>{{ post.date }}</li>
                <li>&middot;</li>
                <li>{{ post.commentCount }} comments</li>
                <li>&middot;</li>
                <li>{{ post.shareCount }} shares</li>
              </ul>

              <a
                href="#"
                :class="[
                  'absolute inset-0 rounded-md',
                  'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2',
                ]"
              />
            </li>
          </ul>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";


const emit = defineEmits(['play']);


const categories = ref<TabContent>({
  'All Songs': [

  ],
  'History': [
  ],
});

const songNames = [
"Songs,Artists",
"Maroon 5 Girls Like You,Andrea Garcia",
"I Like It,Cardi B",
"God's Plan,Drake",
"No Tears Left To Cry,Ariana Grande",
"Psycho,Post Malone",
"The Middle,Maren Morris",
"Better Now,Post Malone",
"In My Feelings,Drake",
"It's Coming Home,The Lightning Seeds",
"One Kiss,Dua Lipa ",
]

function rand(min: number, max: number) {
  if (min == null && max == null) return 0;

  if (max == null) {
    max = min;
    min = 0;
  }
  return min + Math.floor(Math.random() * (max - min + 1));
}

songNames.forEach((songName, index) => {
  const song = {
    id: index,
    title: songName,
    date: `Mar ${rand(1, 30)}`,
    commentCount: rand(200, 400),
    shareCount: rand(100, 200),
    path: `/song${index % 2 === 0 ? 1 : 2}.mp3`
  };
  categories.value['All Songs'].push(song);
})


categories.value.History.push(categories.value["All Songs"][3])
categories.value.History.push(categories.value["All Songs"][2])

emit("play", categories.value.History[0]);

</script>
