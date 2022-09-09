<!-- <template>
   <v-app>
    <v-main>
       <Navbar/>
       <router-view></router-view>
    </v-main>
   </v-app>
</template> -->



<template>
   <v-app>
      <v-content>
         <Navbar/>
         <router-view></router-view>
      </v-content>
   </v-app>
</template>

<script setup>
  import Navbar from '@/components/NavBar.vue';
</script> 