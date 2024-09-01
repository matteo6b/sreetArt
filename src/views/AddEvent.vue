<script lang="ts" setup>
import { GridLayout, StackLayout } from "@nativescript/core";
import { ref, $navigateTo, onMounted } from "nativescript-vue";

import Home from "./Home.vue"
import Profile from "./Profile.vue";
import Icon from "../components/Icon.vue";

onMounted(() => {

});
</script>

<template>
   
  <Page actionBarHidden="true">
    <GridLayout rows="*,50">
      
      <GridLayout
        row="1"
        columns="*,*,*"
        borderTopWidth="0.5"
        borderTopColor="gray"
      >
        <Icon  @tap="$navigateTo(Profile)" icon="person" horizontalAlignment="center" col="0"></Icon>

        <Icon col="1" @tap="$navigateTo(Home, {
  frame: 'home'
})"  icon="home" horizontalAlignment="center"></Icon>

        <Icon col="2"  icon="add" horizontalAlignment="center"></Icon>
      </GridLayout>
    </GridLayout>
  </Page>

</template>
<style scoped>
Button {
  background-color: black;
  color: white;
}
</style>
