<template>
<div class="signup">
  <v-form>
    <v-text-field prepend-icon="person" name="Email" label="Email" v-model="email"></v-text-field>
    <v-text-field prepend-icon="lock" name="Password" label="Password" type="password" v-model="password"></v-text-field>
    <v-card-actions>
      <v-btn @click="signUp" primary large block>Sign Up</v-btn>
    </v-card-actions>
  </v-form>
</div>
</template>

<script>
  import firebase from '~/plugins/firebase.js'
    export default {
        name: "signUp",
      data() {
          return {
            email: '',
            password: ''
          }
      },
      methods: {
        signUp: function () {
          self = this;
          firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
            function (user) {
              self.$router.push(`/`)
            },
            function (err) {
              alert('Oops. ' + err.message)
            }
          )
        }
      }
    }
</script>

<style scoped>

</style>
