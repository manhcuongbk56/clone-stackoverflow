<template>
<div>
  <v-container>
    <v-layout row class="text-xs-center">
      <v-flex xs3 style="background-image: url('http://cdn.wallpapersafari.com/7/86/gqiGH7.jpg')">
        <v-card height="500px"></v-card>
      </v-flex>
      <v-flex xs4 class="grey lighten-4">
        <v-container style="position: relative;top: 13%" class="text-xs-center">
          <v-card flat>
            <v-card-title primary-title>
              <h4>Login</h4>
            </v-card-title>
            <v-form>
              <v-text-field prepend-icon="person" name="Email" label="Email" v-model="email"></v-text-field>
              <v-text-field prepend-icon="lock" name="Password" label="Password" type="password" v-model="password"></v-text-field>
              <v-card-actions>
                <v-btn @click.prevent="loginFirebase" primary large block>Login</v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</div>
</template>

<script>
  import { mapActions } from 'vuex';
  export default {
    name: "login",
    methods:
      mapActions([
        'login',
      ]),
      loginFirebase () {
        console.log("Email: " +  email)
        console.log("Password: " +  password)
         this.login(this.email, this.password)
           .then(() => console.log("SUCCESSSSSSSSSSSSSSSSSSS"))
           .catch((err) => {
             console.log(err);
             console.log("LOL")
           })
      }
    ,
    data: () => {
      return {
        email: '',
        password: ''
      }
    }
    }
</script>

<style scoped>

</style>
