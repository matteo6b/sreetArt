import { createApp, registerElement } from "nativescript-vue";
import Login from './views/Login.vue';
import Home from './views/Home.vue';
import {  ApplicationSettings } from "@nativescript/core";
import BottomNavigation from "@nativescript-community/ui-material-bottom-navigation/vue";
registerElement(
  "CardView",
  () => require("@nstudio/nativescript-cardview").CardView
);

console.log(ApplicationSettings.getString("jwt"));

if(ApplicationSettings.getString('jwt')){
        createApp(Home).start();
}else{

const app =  createApp(Login);

app.use(BottomNavigation);


app.start()

}