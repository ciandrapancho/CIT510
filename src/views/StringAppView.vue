<!-- <template>

 <v-card
    class="ma-15"
    max-width="544"
    color="primary"
 >
  <v-card-title> String Manipulator </v-card-title>

   <v-text-field label="Enter a String" v-model="stringInput"></v-text-field>

   <v-card-actions  >
   <v-btn @click="doCountVowel" >
        Count Vowel
   </v-btn>
   </v-card-actions>

   {{vowelCount}}
 </v-card>  

</template>

<script setup>
import {ref} from 'vue'

const stringInput = ref('')
const vowelCount = ref(0)

function doCountVowel () {
     vowelCount.value = stringInput.value.match(/[aeiou]/gi).length;
     return vowelCount.value; 
}

</script> -->


<!-- 

<template>
<v-container fluid>
  <v-text-field label="First Input" v-model.number="fNumber"></v-text-field>
  <v-text-field label="Second Input" v-model.number="sNumber"></v-text-field>

  <v-btn @click="doSum">Result</v-btn>
  
  {{sum}}

</v-container>
 </template>

<script setup>
  import {ref} from 'vue'

  const fNumber=ref(0)
  const sNumber=ref(0)
  const sum=ref(0)

  function doSum(){
    sum.value = fNumber.value + sNumber.value
    return sum.value
  }
</script>

 -->
 <template>
     <main>
       <v-container fluid>
       <v-card
       class="pa-md-4 mt-5 mx-lg-auto"
       color="gray"
       width="650px"
     >

     <div><p class="text-center">Manipulate the Strings:</p></div>
       <v-card-text>
          <!-- <p>Enter any String: </p><br>
        <input type='text' v-model.text="vowel" @change='answer' > -->
        <v-text-field label="Enter any String:" v-model.text="vowel" @change='answer'></v-text-field>
        </v-card-text>
   <!--     
     <v-btn @click="result">Result</v-btn> -->
     <div class="text-center">
       <v-btn @click="result"
         rounded
         color="yellow"
         dark
       >
         Result
       </v-btn>
     </div>
  
     <br>
     
      
       
  

        <v-container fluid>
    <v-row align="center"  class="bg-yellow-lighten-4 text-black">
      <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
      <span>Vowels: {{ vow }}</span><br>      </v-col>

      <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
      <span>Number of Characters: {{ count }}</span><br>

      </v-col>

      <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
      <span>Consonants: {{ conso }}</span><br>
      </v-col>

      <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
      <span>Vowel to : {{ con }}</span><br>  
      </v-col>
    </v-row>
  </v-container>

      </v-card>
   
     </v-container>
      
     </main>
      </template>
   
     
<script>

     export default {
         el: '#app',
         data() {
             return {
                 vowel: "",
                 vow: 0,
                 count: 0,
                 conso: 0,
                 con: "",
             }
         },
         methods: {
             answer: function () {
                 var vowelList = 'aeiouAEIOU';
                 this.vow = 0;
                 this.count = 0;
                 this.conso = 0;
                 this.con = "";
                 //Count vowels
                 for (var x = 0; x < this.vowel.length; x++) {
                     if (vowelList.indexOf(this.vowel[x]) !== -1) {
                         this.vow = this.vow + 1;
                     }
                 }
                 //Count Characters in the string
                 for (var x = 0; x < this.vowel.length; x++) {
                     this.count = this.count + 1;
                 }
                 //Count consonants
                 for (var x = 0; x < this.vowel.length; x++) {
                     if (vowelList.indexOf(this.vowel[x]) == -1) {
                         this.conso = this.conso + 1;
                     }
                 }
                 //Convert to
                 for (var x = 0; x < this.vowel.length; x++) {
                     if (vowelList.indexOf(this.vowel[x]) !== -1) {
                         this.con += "*";
                     } else {
                         this.con += this.vowel[x];
                     }
                 }
             }
         }
     }
     </script>