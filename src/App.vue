<template>
  <v-app>
    <sidebar/>
    <topbar/>
    <v-main style="background: #f5f5f540">
      <v-container class="py-3 px-6" fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Topbar from './components/Topbar.vue';
export default {
  components: { Sidebar, Topbar },

};
</script>

<style>

</style>