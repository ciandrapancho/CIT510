

<template>
    <WelcomeItem>
      <template #icon>
        <DocumentationIcon />
      </template>
   
      <main>
            <v-container fluid>
        <v-card
        class="pa-md-4 mt-5 mx-lg-auto"
       
        width="650px"
        >
        <v-card-text>
          
    <h1 class="pl">Student Profile</h1>
    <br>
    <div class="container"><p>I am a student of Information Technology. I am an expert in creating an application with a winning award in Hackaton (HooHacks). I can create applications with java, kotlin, dart, flutter, and more. Also, I am an expert in graphic designing, video editing, and content creation. I have acquired a certificate with Power BI and I want to use my expertise in the software here.
    </p>
  </div>
  <br><br>

  <v-divider></v-divider>
  <br>  <br><br>
  
  <v-spacer></v-spacer>
 

    <h1 class="ps">Programming Skills</h1>
    <br>


    <div class="container1"><p>Here are the <a class="a1">programming languages</a> and framework that I experienced working on:</p>
    <br><br><br>
      <ul>
        <li>Java</li>
        <li>PHP</li> 
        <li>Kotlin</li> 
        <li>Python</li> 
        <li>Laravel Framework</li> 
        <li>Django Framework</li> 
      </ul>
    </div>

  <br>

    <div class="container2">
      <p>I also created different projects such as ecommerce, android application, and more.
      Now, I am currently studying <a class="a1">Vue Js</a> to widen my expertise on different programming languages.</p>
    </div>
    <br><br>

    
  <v-divider></v-divider>
  <br>  <br><br>
  <v-spacer></v-spacer>
 
    <h1 class="ap1">About Program</h1>
    <br>
    <div class="container3"><a class="aap">Bachelor of Science in Information Technology</a> (BSIT) is a program where it study the use of any computers, storage,
      networking and other physical devices, infrastructure and processes to create, process, store, secure and exchange all forms of electronic data. Typically, IT is used in the context of business operations, as opposed to technology used for personal or entertainment purposes. 
      The commercial use of IT encompasses both computer technology and telecommunications.
    </div><br><br>

    
  <v-divider></v-divider>
  <br>  <br><br>
  <v-spacer></v-spacer>
 
    <h1 class="as">About T.I.P.</h1>
    <br>
    <div class="container"><p>The Technological Institute of the Philippines is a private, non-sectarian, 
      tertiary level institution that specializes in Engineering and Computing programs. It also offers
       programs in Architecture, Business Administration, Maritime Studies, and Teacher Education. T.I.P. 
       has two branches, T.I.P. Manila and T.I.P. <br><br>

       Official Website: <a target="_blank" href="https://tip.edu.ph/">Technological Institute of the Philippines</a>.  
    </p>
  
  </div>
            
        </v-card-text>

        </v-card>
    
        </v-container>
        
        </main>
        


    </WelcomeItem>
  </template>
  
  <style>
  /* Personal Life */
  .pic {
    border-radius: 50%;
    margin-left: 220px;
    margin-top: 100px;
  }
  .pl{
    margin-left: 160px;
    color: yellow;
  }
  
  .p1{
    text-align: justify;
    text-justify: auto;
  }
  
  .container{
    text-align: justify;
    margin-left: 40px;
    margin-right: 40px;
  }
  
  /* PROGRAMMING SKILLS */
  .pic2 {
    border-radius: 50%;
    margin-left: 160px;
  }
  .p1{
    text-align: justify;
    text-justify: auto;
  }
  .ps{
    margin-left: 160px;
    color: yellow;
  }
  .container1{
    text-align: justify;
    margin-left: 40px;
    margin-right: 80px;
    columns: 2;
    column-gap: 50px;
  }
  .container2{
    text-align: justify;
    margin-left: 40px;
    margin-right: 40px;
  }
  ul{
      color: white;
  }
  .a1{
    color: white;
  }
  
  /* About Program */
  .ap{
    border-radius: 50%;
    margin-left: 170px;
  }
  .ap1{
    margin-left: 200px;
    color: yellow;
  }
  .p1{
    text-align: justify;
    text-justify: auto;
  }
  
  .container3{
    text-align: justify;
    margin-left: 40px;
    margin-right: 40px;
  }
  .ap{
      color: rgb(3, 3, 3);
  }
  
  /* About TIP */
  .pic4 {
    border-radius: 50%;
    margin-left: 170px;
  }
  .as{
    margin-left: 200px;
    color: yellow;
  }
  .p1{
    text-align: justify;
    text-justify: auto;
  }
  
  .container{
    text-align: justify;
    margin-left: 40px;
    margin-right: 40px;
  }
  
  </style>
  