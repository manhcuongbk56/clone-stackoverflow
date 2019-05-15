<template>
  <div>
   <v-toolbar dark color="primary">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">Title</v-toolbar-title>
    <v-spacer></v-spacer>
     <nuxt-link to="/" color="white"  font-size="30px" >Home</nuxt-link>
     <nuxt-link to="/login" color="white"  font-size="30px" >Login</nuxt-link>
     <nuxt-link to="/signup" color="white"  font-size="30px" >SignUp</nuxt-link>
     <nuxt-link to="/logout" color="white"  font-size="30px" >LogOut</nuxt-link>
  <v-btn icon>
    <nuxt-link to="/">Home</nuxt-link>
  </v-btn>
  <v-btn icon>
    <v-icon>more_vert</v-icon>
  </v-btn>
  </v-toolbar>
    <nuxt/>
    </div>
</template>

<script>
export default {
}
</script>
