<template>
  <nav>
      <v-toolbar app class="bg-yellow text-black">
       <v-app-bar-nav-icon @click='toggleDrawer'></v-app-bar-nav-icon>
      <v-toolbar-title >
        <span class="font-weight-light text-black">Laboratory </span>
        <span>Activity 5</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

   
      
      <v-avatar>
        <img
          src="@/assets/sign_tech.png"
          alt="CiandraPancho"
          height="50"
          width="50"
          size="25">
          
      </v-avatar>

      
      </v-toolbar>

     <v-navigation-drawer app v-model="drawer" class="bg-black text-white">
      <v-list>
            <v-list-item>
             
             <v-avatar
      color="orange"
      size="160"
    >
    <img
          src="@/assets/sign_tech.png"
          alt="CiandraPancho"
          height="220"
          width="220"
          >
    </v-avatar>          
              <v-spacer></v-spacer>
              <v-spacer></v-spacer>
            </v-list-item>
  
            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title class="font-weight-light">
                  Ciandra Pancho
                </v-list-item-title>
                <span class="font-weight-light">ciandrapancho@gmail.com</span>
              </v-list-item-content>
            </v-list-item>
          </v-list>
  
          <v-divider class="bg-white"></v-divider>
          <v-spacer></v-spacer>
          
  
       <v-list-item 
          v-for="item in items"
          :key="item.title"
          router 
          :to="item.path" :prepend-icon="item.icon"
          class="text-yellow" >
          <v-list-item-title class="text-white">{{ item.title }}</v-list-item-title>
          
          
        </v-list-item>
      
     </v-navigation-drawer>
  </nav>
</template>

<script setup>
  import { ref } from 'vue'
    
  const drawer = ref(false)

  const  items =  ref([
           { title: 'Student Profile', icon: 'mdi-school', path: '/' },
           { title: 'Calculator', icon: 'mdi-calculator', path: '/basicMath' },
           { title: 'String App', icon: 'mdi-library', path: '/stringApp'},
           { title: 'Vuetify Research', icon: 'mdi-magnify', path: '/vuetify'},
           { title: 'Axios Get Quiz', icon: 'mdi-head-question-outline', path: '/axiosQuiz' },
          ])

 function toggleDrawer(){
  return drawer.value = !drawer.value
 }

 
</script>