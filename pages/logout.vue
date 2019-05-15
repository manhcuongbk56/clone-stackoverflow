<template>
<v-btn @click.prevent="logout">Logout</v-btn>
</template>

<script>
  import firebase from '~/plugins/firebase.js';
  import {mapActions} from 'vuex'
    export default {
        name: "logout",
      methods: {
          ...mapActions([
            'resetUser'
          ]),
          logout ({commit}) {
            return new Promise((resolve, reject)  => {
              firebase.auth().signOut()
                .then(() => {
                  this.resetUser();
                  resolve()
                })
            })
          }
      }
    }
</script>

<style scoped>

</style>
