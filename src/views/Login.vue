<script lang="ts" setup>
import { $navigateTo, ref } from "nativescript-vue";
import Home from "./Home.vue";
import { authorize } from "react-native-app-auth";
import {  ApplicationSettings } from "@nativescript/core";
import { client } from "../supabase";

const config = {
  issuer: "https://accounts.google.com",
  clientId: `${process.env.GOOGLE_OAUTH_APP_GUID}.apps.googleusercontent.com`,
  redirectUrl: `com.googleusercontent.apps.${process.env.GOOGLE_OAUTH_APP_GUID}:/oauth2redirect/google`,
  scopes: ["openid", "profile", "email"],
};

let loading = ref(false);
const loginWithGoogle = async () => {
  // base config
  // use the client to make the auth request and receive the authState
  try {
    loading.value = true;
    const result = await authorize(config);

    const { data, error } = await client.auth.signInWithIdToken({
      provider: "google",
      token: result.idToken,
    });

    if (!error) {
      ApplicationSettings.setString("jwt", data.session.access_token);

      ApplicationSettings.setString(
        "user",
        JSON.stringify(data.user.user_metadata)
      );
      loading.value = false;
      $navigateTo(Home);
    } else {
      loading.value = false;
    }
  } catch (error) {
    loading.value = false;
    console.log(error);
  }
};
</script>
<template>
  <Frame ref="login">
    <Page>
      <ActionBar>
        <Label text="Login" class="font-bold text-lg" />
      </ActionBar>

      <GridLayout rows="auto,auto,auto">
        <StackLayout row="0">
          <Image   :isEnabled="!loading" class="mx-4" src="~/assets/login.jpg" height="300" />

        </StackLayout>

  
          <Button
            row="1"
            @tap="loginWithGoogle"
            width="380"
            class="px-8 py-4 bg-white border-2 border-blue-400 rounded-lg"
            horizontalAlignment="center"
              :isEnabled="!loading"
          >
            Iniciar sesión con Google
          </Button>
      
       
          <Button
            row="2"
            :isEnabled="!loading"
            @tap="$navigateTo(Home)"
            class="mt-4 px-8 py-4 bg-white border-2 border-blue-400 rounded-lg"
            horizontalAlignment="center"
            width="380"
          >
            Iniciar sesión con Apple
          </Button>
   

        <ActivityIndicator horizontalAlignment="center" verticalAlignment="center"  height="100" width="100"  :busy="loading" color="black" />
      </GridLayout>
    </Page>
  </Frame>
</template>
<style scoped>
Button {
  background-color: black;
  color: white;
}
:disabled {
  opacity: 0.5;
}
</style>
