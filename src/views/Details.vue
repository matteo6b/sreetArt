<script lang="ts" setup>
import { GridLayout, StackLayout } from '@nativescript/core';
import { ref, $navigateBack } from 'nativescript-vue';

const items = ref(
 [
    {
      id: 1,
      genre: 'Musical',
      title: 'Book of Mormon',
      image: '~/assets/login.jpg',
      url: 'https://nativescript.org/images/ngconf/book-of-mormon.mov',
      description: `A satirical examination of the beliefs and practices of The Church of Jesus Christ of Latter-day Saints.`},
          {
      id: 2,
      genre: 'Musical',
      title: 'Book of Mormon',
      image: '~/assets/login.jpg',
      url: 'https://nativescript.org/images/ngconf/book-of-mormon.mov',
      description: `A satirical examination of the beliefs and practices of The Church of Jesus Christ of Latter-day Saints.`},
    ]
);
</script>

<template>
  <Page actionBarHidden="true">
    <GridLayout rows="*">
      <ContentView row="1" class="bg-[#65adf1] rounded-t-3xl">
        <ListView
          :items="items"
          separatorColor="transparent"
          class="bg-transparent"
        >
          <template #default="{ item }">
          <card-view margin="10" elevation="40" radius="1">
          <StackLayout>
            <Image row="0" margin="0" stretch="aspectFill" :src="item.image" />
            <Label
              row="1"
              margin="10 10 0 10"
              fontWeight="700"
              class="text-primary"
              fontSize="18"
              :text="item.title"
            />
            <Label
              row="2"
              margin="0 10 10 10"
              class="text-secondary"
              fontSize="14"
              textWrap="true"
              :text="item.description"
            />
            </StackLayout>
          </card-view>
          </template>
        </ListView>
      </ContentView>
    </GridLayout>
  </Page>
</template>
