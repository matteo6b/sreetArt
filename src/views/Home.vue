<script lang="ts" setup>
import { GridLayout, StackLayout } from "@nativescript/core";
import { ref, $navigateTo, onMounted } from "nativescript-vue";
import * as geolocation from "@nativescript/geolocation";
import { CoreTypes } from "@nativescript/core";
import AddEvent from "./AddEvent.vue"
import Profile from "./Profile.vue";
import Icon from "../components/Icon.vue";

const items = ref([
  {
    id: 1,
    genre: "Musical",
    title: "Book of Mormon",
    image: "~/assets/login.jpg",
    url: "https://nativescript.org/images/ngconf/book-of-mormon.mov",
    description: `A satirical examination of the beliefs and practices of The Church of Jesus Christ of Latter-day Saints.`,
  },
  {
    id: 2,
    genre: "Musical",
    title: "Book of Mormon",
    image: "~/assets/login.jpg",
    url: "https://nativescript.org/images/ngconf/book-of-mormon.mov",
    description: `A satirical examination of the beliefs and practices of The Church of Jesus Christ of Latter-day Saints.`,
  },
]);

onMounted(() => {
  console.log("hola");
  geolocation.enableLocationRequest().then(() => {
    geolocation
      .getCurrentLocation({
        desiredAccuracy: CoreTypes.Accuracy.high,
        maximumAge: 5000,
        timeout: 20000,
      })
      .then((currentLocation) => {
        console.log(currentLocation);
        console.log("My current latitude: ", currentLocation.latitude);
      });
  });
});
</script>

<template>
  <Frame  id="home">
  <Page actionBarHidden="true">
    <GridLayout rows="*,50">
      <ContentView row="0" class="bg-[#65adf1] rounded-t-3xl">
        <ListView
          :items="items"
          separatorColor="transparent"
          class="bg-transparent"
        >
          <template #default="{ item }">
            <card-view margin="10" elevation="40" radius="1">
              <StackLayout>
                <Image
                  row="0"
                  margin="0"
                  height="200"
                  stretch="aspectFill"
                  :src="item.image"
                />
                <Button
                  row="1"
                  @tap=""
                  width="380"
                  class="mt-4 px-8 py-4 bg-white border-2 border-blue-400 rounded-lg"
                  horizontalAlignment="center"
                >
                  Ir al evento en directo
                </Button>
                <Label
                  row="2"
                  margin="10 10 0 10"
                  fontWeight="700"
                  class="text-primary"
                  fontSize="18"
                  :text="item.title"
                />
                <Label
                  row="3"
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
      <GridLayout
        row="1"
        columns="*,*,*"
        borderTopWidth="0.5"
        borderTopColor="gray"
      >
        <Icon  @tap="$navigateTo(Profile)" icon="person" horizontalAlignment="center" col="0"></Icon>

        <Icon col="1"  icon="home" horizontalAlignment="center"></Icon>

        <Icon col="2" @tap="$navigateTo(AddEvent)" icon="add" horizontalAlignment="center"></Icon>
      </GridLayout>
    </GridLayout>
  </Page>
  </Frame>
</template>
<style scoped>
Button {
  background-color: black;
  color: white;
}
</style>
