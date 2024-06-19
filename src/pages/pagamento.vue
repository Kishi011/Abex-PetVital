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

    <section>
      <v-row v-for="(item, i) in itens" :key="item" class="mb-2">
        <v-col>
          <v-card class="pa-5" variant="outlined" @click="selecionado = i">
            <v-row align="center">
              <v-col>
                <v-icon>{{ i === selecionado ? 'mdi-circle-slice-8' : 'mdi-circle-outline' }}</v-icon>
              </v-col>
              <v-col cols="11">
                <h2>{{ item.tipo }}</h2>
              </v-col>
              <v-col>
                <v-icon>{{ item.icone }}</v-icon>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </section>
    <v-row align="center" justify="space-between">
      <v-col>
        <h2>Valor total: R$ 99,99 </h2>
      </v-col>
      <v-col cols="auto">
        <v-btn size="x-large">Finalizar Pagamento</v-btn>
      </v-col>
    </v-row>
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


