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
        <v-btn size="x-large" @click="dialog = true">Agendar esse serviço</v-btn>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" width="750">
      <v-card class="pa-10">

        <v-btn flat small rounded icon="mdi-arrow-left" @click="dialog = false"></v-btn>

        <v-card-title>
          <v-row>
            <v-col>
              <h1>Agendamento</h1>
              <span>Escolha uma data e horário de sua preferência</span>
            </v-col>
          </v-row>
        </v-card-title>

        <v-card-text class="d-flex justify-center">
          <div>
            <v-row>
              <v-col>
                <v-date-picker width="350"border></v-date-picker>
              </v-col>
            </v-row>
  
            <v-row>
              <v-col>
                <v-autocomplete label="Horários" hide-details width="350"
                  :items="['8:30', '9:30', '10:30', '11:30', '13:30', '14:30', '15:30', '16:30']"
                ></v-autocomplete>
              </v-col>
            </v-row>
  
            <v-row>
              <v-col class="d-flex justify-end">
                <v-btn size="large" variant="outlined" to="/pagamento">Agendar</v-btn>
              </v-col>
            </v-row>
          </div>
        </v-card-text>

      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  name: 'DetalhesServicoPage',

  data() {
    return {
      dialog: false,
    }
  }
}
</script>