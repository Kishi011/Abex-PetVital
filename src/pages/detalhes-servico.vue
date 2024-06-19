<template>
  <v-container>
    <v-row class="mb-5">
      <v-col>
        <h1>Detalhes do Serviço</h1>
        <span>Veja aqui os detalhes do serviço que você deseja agendar.</span>
      </v-col>
    </v-row>

    <v-img class="mb-5" max-height="250" cover src="/gato burmilla.jpg"></v-img>

    <v-row class="mb-5">
      <v-col>
        <h1>Banho</h1>
      </v-col>
    </v-row>

    <v-row class="mb-5">
      <v-col>
        <h3>Descrição</h3>
        <span>Banho para o seu pet.</span>
      </v-col>
    </v-row>

    <v-row class="mb-5">
      <v-col>
        <h3>Detalhes</h3>
        <span class="d-block">Endereço: Rua do Petshop - A 120 - Bairro</span>
        <span class="d-block">Tipo de Serviço: Banho</span>
        <span class="d-block">Pretação do Serviço: No local</span>
        <span class="d-block">Valor: R$ 99,99</span>
      </v-col>
    </v-row>

    <v-row justify="end">
      <v-col cols="2">
        <v-btn size="x-large">Agendar esse serviço</v-btn>
      </v-col>
    </v-row>

    
  </v-container>
</template>

<script>
export default {
  name: 'DetalhesServicoPage',
}
</script>