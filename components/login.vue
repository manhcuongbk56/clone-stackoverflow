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
                <v-btn @click.prevent="login" primary large block>Login</v-btn>
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
  import firebase from '~/plugins/firebase.js';
    export default {
      name: "login",
      methods: {
          login(event){
            console.log("AHIHIHIHIHI");
            self = this;
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
              function (user) {
                console.log("LOGINGGGGGGGGGGGGGGGGGGGGG");
                self.$store.commit('setUser', user);
                self.$store.commit('setUser', 1);
                self.$router.push(`/`)
              },
              function (err) {
                console.log("LOGINGGGGGGGGGGGGGGGGGGGGG");
                alert('Oops: ' + err.message)
              }
            )
          }
      },
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
