<script lang="ts" setup>
import { $navigateTo } from "nativescript-vue";
import Details from "./Details.vue";
import { authorize } from "react-native-app-auth";
import { Http, ApplicationSettings } from "@nativescript/core";
import { client } from "../supabase";
const GOOGLE_OAUTH_APP_GUID = "71011346043-jil9gnkf35l8a2pqeq78vc7rq9kd8l4a"; // it looks something like 12345678912-k50abcdefghijkabcdefghijkabcdefv
const config = {
  issuer: "https://accounts.google.com",
  clientId: `${GOOGLE_OAUTH_APP_GUID}.apps.googleusercontent.com`,
  redirectUrl: `com.googleusercontent.apps.${GOOGLE_OAUTH_APP_GUID}:/oauth2redirect/google`,
  scopes: ["openid", "profile", "email"],
};
const loginWithGoogle = async () => {
  // base config
  // use the client to make the auth request and receive the authState
  try {
    const result = await authorize(config);
    

    const { data, error } = await client.auth.signInWithIdToken({
      provider: "google",
      token: result.idToken,
    });

    if (!error) {
      ApplicationSettings.setString("jwt", data.session.access_token);

      ApplicationSettings.setString("user", JSON.stringify(data.user.user_metadata));
      $navigateTo(Details);
    }
  } catch (error) {
    console.log(error);
  }
};
</script>
<template>
  <Frame>
    <Page>
      <ActionBar>
        <Label text="Login" class="font-bold text-lg" />
      </ActionBar>
      <GridLayout rows="auto,auto,auto,auto">
        <Image class="mx-4" row="1" src="~/assets/login.jpg" height="300" />

        <Button
          row="2"
          @tap="loginWithGoogle"
          width="380"
          class="px-8 py-4 bg-white border-2 border-blue-400 rounded-lg"
          horizontalAlignment="center"
        >
          Iniciar sesión con Google
        </Button>

        <Button
          row="3"
          @tap="$navigateTo(Details)"
          class="mt-4 px-8 py-4 bg-white border-2 border-blue-400 rounded-lg"
          horizontalAlignment="center"
          width="380"
        >
          Iniciar sesión con Apple
        </Button>
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
