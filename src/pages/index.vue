<template>
  <v-container>
    <header class="mb-5">
      <h1>Serviços</h1>
      <span>Procurando dar um tratamento para o seu pet? Dê uma conferida nesses próximos a você</span>
    </header>

    <section class="mb-16">
      <v-row justify-start>
        <v-col v-for="item in itens" :key="item" cols="3">
          <v-card elevation="4" color="blue-grey-lighten-5" class="pa-2">
            <v-row>
              <v-col>
                <v-img rounded :src="item.img" width="175" />
              </v-col>
              <v-col>
                <div class="h-75 overflow-hidden">
                  <h2>{{ item.nome }}</h2>
                  <span class="text-wrap" style="text-overflow: ellipsis;">{{ item.desc }}</span>
                </div>
                <div class="d-flex justify-end">
                  <v-btn class="text-decoration-underline text-blue" to="/detalhes-servico">Ver mais</v-btn>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </section>

    <h1 class="mt-5">Serviços em oferta</h1>

    <section>
      <v-row>
        <v-col v-for="item in itens" :key="item" cols="3">
          <v-card elevation="4" color="blue-grey-lighten-5" class="pa-2">
            <v-row>
              <v-col>
                <v-img rounded :src="item.img" width="175" />
              </v-col>
              <v-col>
                <div class="h-75 overflow-hidden">
                  <h2>{{ item.nome }}</h2>
                  <span class="text-wrap" style="text-overflow: ellipsis;">{{ item.desc }}</span>
                </div>
                <div class="d-flex justify-end align-end">
                  <span class="text-green">20% OFF</span>
                  <v-spacer></v-spacer>
                  <v-btn class="text-decoration-underline text-blue" to="/detalhes-servico">Ver mais</v-btn>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </section>
  </v-container>
</template>

<script>
export default {
  name: "IndexPage",

	data() {
		return {
			itens: [
				{
					img: '/gato burmilla.jpg',
					nome: 'Banho',
					desc: 'Banho para o seu pet.',
				},
				{
					img: '/caoEndiabrado.jpg',
					nome: 'Vacinação',
					desc: 'Vacina contra a raiva.',
				},
			]
		}
	}
};
</script>
