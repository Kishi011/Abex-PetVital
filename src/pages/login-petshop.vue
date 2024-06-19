<template>
    <v-row v-if="login == false" class="h-screen justify-center align-center text-center">
      <v-col md="4">
        <h1>Cadastre seu PetShop</h1>
        <v-window class="mt-5" v-model="window">
          <v-window-item class="mt-2" :value="1">
            <v-text-field
            label="CNPJ"
            variant="outlined"
            density="compact"
            ></v-text-field>
            <v-text-field
            label="Senha"
            variant="outlined"
            density="compact"
            ></v-text-field>
            <v-btn 
            class="bg-black text-white mb-3 rounded-lg" 
            block
            @click="window++">Próximo</v-btn>
          </v-window-item>
          <v-window-item class="mt-2" :value="2">
            <v-text-field
            label="Nome Fantasia"
            variant="outlined"
            density="compact"
            ></v-text-field>
            <v-text-field
            label="Telefone"
            variant="outlined"
            density="compact"
            ></v-text-field>
            <v-text-field
            label="CEP"
            variant="outlined"
            density="compact"
            ></v-text-field>
            <v-text-field
            label="E-mail"
            variant="outlined"
            density="compact"
            ></v-text-field>
            <v-btn
            class="bg-black text-white mb-3 rounded-lg"
            block
            @click="window--">Voltar</v-btn>
            <v-btn
            class="bg-black text-white mb-3 rounded-lg"
            block
            >Criar conta</v-btn>
          </v-window-item>
        </v-window>
        <h5>Já possui uma conta? <a href="#" class="text-blue" @click="login = true">Faça seu login aqui!</a></h5> 
      </v-col>
    </v-row>
  
    <v-row v-else class="h-screen justify-center align-center text-center">
      <v-col md="4">
        <h1>Login de PetShop</h1>
        <v-text-field
        class="mt-3"
        label="CNPJ"
        variant="outlined"
        density="compact"
        ></v-text-field>
        <v-text-field
        class="mt-n2"
        label="Senha"
        variant="outlined"
        density="compact"
        ></v-text-field>
        <v-btn
        class="bg-black text-white mb-3 rounded-lg"
        block
        >
          Fazer login
        </v-btn>
        <h5>Não tem uma conta? <a href="#" class="text-blue" @click="login = false">Faça seu cadastro aqui!</a></h5>
      </v-col>
    </v-row>
  </template>
  
  <script>
    
    export default {
      name: "loginPets",
      
      data() {
        return {
          login: false,
          window: 1,
        }
      },
  
      methods: {
        
      }
    };
  </script>
  
  <style>
    .v-row {
      margin: 0px !important
    };
  
  </style>