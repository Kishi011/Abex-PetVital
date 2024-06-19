<template>
  <v-container>
    <header class="mb-5">
      <h1>Serviços</h1>
      <span>Procurando dar um tratamento para o seu pet? Dê uma conferida nesses próximos a você</span>
    </header>

    <section class="mb-16">
      <v-row justify-start>    
        <v-card v-for="item in itens" :key="item" elevation="4" color="blue-grey-lighten-5" class="ml-5 pa-2 mr-5" width="400">
          <v-row class="pa-3" justify="space-between">
            <v-img rounded :src="item.img" max-width="150" />
            <div class="d-flex flex-column w-50">
              <div class="overflow-hidden">
                <h2>{{ item.nome }}</h2>
                <span class="text-wrap" style="text-overflow: ellipsis;">{{ item.desc }}</span>
              </div>
              <v-spacer></v-spacer>
              <div class="d-flex justify-end">
                <v-btn class="text-decoration-underline text-blue" to="/detalhes-servico">Ver mais</v-btn>
              </div>
            </div>
          </v-row>
        </v-card> 
      </v-row>
    </section>

    <h1 class="mb-5">Serviços em oferta</h1>

    <section>
      <v-row justify-start>    
        <v-card v-for="item in itens" :key="item" elevation="4" color="blue-grey-lighten-5" class="ml-5 pa-2 mr-5" width="400">
          <v-row class="pa-3" justify="space-between">
            <v-img rounded :src="item.img" max-width="150" />
            <div class="d-flex flex-column w-50">
              <div class="overflow-hidden">
                <h2>{{ item.nome }}</h2>
                <span class="text-wrap" style="text-overflow: ellipsis;">{{ item.desc }}</span>
              </div>
              <v-spacer></v-spacer>
              <div class="d-flex justify-end align-end">
                <span class="text-green">20% OFF</span>
                <v-spacer></v-spacer>
                <v-btn class="text-decoration-underline text-blue" to="/detalhes-servico">Ver mais</v-btn>
              </div>
            </div>
          </v-row>
        </v-card> 
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
