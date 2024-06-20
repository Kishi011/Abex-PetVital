<template>
  <v-container>
    <header class="mb-5">
      <v-row>
        <v-col>
          <h1>Pagamento</h1>
          <span>Selecione a forma de pagamento</span>
        </v-col>
      </v-row>
    </header>

    <section class="pl-10 pr-10">
      <div class="mb-16">
        <v-row v-for="(item, i) in itens" :key="item" class="mb-2">
          <v-card class="pa-5 w-100" variant="outlined" @click="selecionado = i">
            <v-row align="center" justify="start">
              <v-icon class="mr-3">{{ i === selecionado ? 'mdi-circle-slice-8' : 'mdi-circle-outline' }}</v-icon>
              <h2>{{ item.tipo }}</h2>
              <v-spacer></v-spacer>
              <v-icon>{{ item.icone }}</v-icon>
            </v-row>
          </v-card>
        </v-row>
      </div>

      <v-row align="end" justify="space-between">
        <h2>Valor total: R$ 99,99 </h2>
        <v-btn size="x-large">Finalizar Pagamento</v-btn>
      </v-row>
    </section>

  </v-container>
</template>

<script>
export default {
  data() {
    return {
      itens: [
        {
          tipo: 'Cartão de Crédito',
          icone: 'mdi-credit-card',
        },
        {
          tipo: 'Cartão de Débito',
          icone: 'mdi-credit-card',
        },
        {
          tipo: 'PIX',
          icone: 'mdi-pinwheel',
        },
        {
          tipo: 'Pagar na hora',
          icone: 'mdi-hand-coin-outline',
        },
      ],

      selecionado: -1,
    }
  }
}
</script>


