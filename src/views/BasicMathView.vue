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
  <div><p class="text-center">Calculate the two numbers:</p></div>
    <v-card-text>
      <v-text-field label="First Input" v-model.number="f_number"></v-text-field>
      <v-text-field label="Second Input" v-model.number="s_number"></v-text-field>
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

  <p></p>

  <v-container fluid>
    <br>
    <v-row align="center" class="bg-yellow-lighten-4 text-black">
      <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
  <p>Sum: {{ sum }}</p><br/>
        
      </v-col>

      <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
      <p>Difference: {{ difference }}</p><br/>
      </v-col>

      <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
      <p>Product: {{ product }}</p><br/>
      </v-col>

      <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
      
  <p>Quotient: {{ quotient }}</p><br/>
      </v-col>

      <v-col
        class="d-flex"
        cols="12"
        sm="6"
      >
 
      <p>Average: {{ average }}</p><br/>
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
              f_number: 0,
                s_number: 0,
                sum: 0,
              difference: 0,
              product: 0,
              quotient: 0,
              average: 0,
          }
      },
      methods: {
          result: function () {
              this.sum = this.f_number + this.s_number;
              this.difference = this.f_number - this.s_number;
              this.product = this.f_number * this.s_number;
              this.quotient = this.f_number / this.s_number;
              this.average = (this.f_number + this.s_number) / 2;
          }
      }
  }
  
  </script>
  