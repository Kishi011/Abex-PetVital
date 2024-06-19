<template>
    <v-container>
      <h1>Pagamento</h1>
        <h3>Selecione a forma de pagamento</h3>
            <v-container> 
                <v-row class="mb-5">
                    <v-btn variant="outlined" size="x-large" append-icon="$vuetify">
                        <v-checkbox label="Cartao de debito "></v-checkbox>
                    </v-btn>
                </v-row>
                <v-row class="mb-5">
                    <v-btn variant="outlined" size="x-large" append-icon="$vuetify">
                        <v-checkbox label="Cartao de credito "></v-checkbox>
                    </v-btn>
                </v-row>
                <v-row class="mb-5">
                    <v-btn variant="outlined" size="x-large" append-icon="$vuetify">
                        <v-checkbox label="Cartao de Pix "></v-checkbox>
                    </v-btn>
                </v-row>
                <v-row class="mb-5">
                    <v-btn variant="outlined" size="x-large" append-icon="$vuetify">
                        <v-checkbox label="Pagar presencialmente "></v-checkbox>
                    </v-btn>
                </v-row>
            </v-container>

                <h2>Valor total: R$ 99,99 </h2>

            <v-container>
                <v-row align="right" justify="end">
                    <v-col cols="auto">
                        <v-btn>Finalizar Pagamento</v-btn>
                     </v-col>
                </v-row>
            </v-container>

    </v-container>
  </template>

<script>

</script>


