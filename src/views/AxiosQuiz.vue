<template>
    <div>
        <v-card
        elevation="24"
        class="mx-auto my-12"
        width="70%"
        >
            <h1 class="mt-5 text-center font-weight-light ">Trivia Database</h1>
            <div class="text-center"><v-btn @click="getQuestions" class="my-5" outlined color="success"> 
            Post Quiz</v-btn> </div>
        
    <v-divider class="my-5"></v-divider>

        <v-list-item
        v-for="question in questions"
        :key="questions.id"
        class="my-10"
        >

        <v-list-item-title class="text-h5 ml-10 font-weight-light "> {{ question.question }}</v-list-item-title>
 
        <v-list-item class="text-success text-h6 ml-16 font-weight-light ">
            ✓ {{ question.correct_answer }} 
        </v-list-item>
        <v-list-item class="text-error text-h6 ml-16 font-weight-light ">
            ✗ {{ question.incorrect_answers }} 
        </v-list-item>

        
        </v-list-item> 
        </v-card>

    </div> 
    </template>

<script setup>

    import { ref } from 'vue';
    import axios from 'axios'

    const questions=ref([])

    async function getQuestions () {
        axios.get('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&').then( response=> { 
        questions.value=(response.data.results)})
    }

</script>


    