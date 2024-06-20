<template> 
  <v-container>
    <header class="mb-16">
      <h1>Meus Pets</h1>
      <span>Aqui você pode gerenciar os seus pets cadastrados no sistema e cadastrar novos pets.</span>
    </header>

    <section>
      <v-row justify="start">
        <v-card v-for="item in itens" width="350" height="400" class="ml-5 mr-5">
          <v-img cover height="175":src=item.img></v-img>
          <v-card-text class="text-center">
            <h2 class="text-orange">{{ item.nome }}</h2>
            <v-row>
              <v-col>
                <h3>{{ item.tipoAnimal }}</h3>
                <h3>{{ item.peso }}</h3>
              </v-col>
              <v-col>
                <h3 class="text-orange">{{ item.raca }}</h3>
                <h3>{{ item.idade }}</h3>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn class="text-orange bg-tonal">Ver mais sobre {{ item.nome }}</v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
      <v-card width="350" height="400">
        <v-btn 
          flat 
          height="100%" 
          width="100%"
          @click="dialog = true"
        >
          <v-icon size="50">mdi-plus-box-outline</v-icon>
        </v-btn>
      </v-card>
      </v-row>
    </section>
  </v-container>

  <v-dialog v-model="dialog" width="900">
    <v-card>
      <v-card-title>
        <v-row align="center" class="pa-2">
            <h1>Cadastre seu Pet</h1>
            <v-spacer></v-spacer>
            <v-btn flat icon="mdi-close" color="red" size="small" @click="dialog = false"></v-btn>
        </v-row>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-row>
          <v-col>
            <v-file-input
              variant="solo-filled"
              accept=".png, .jpg, .jpeg"
              prepend-icon=""
              style="height: 100%;"
              hide-details
            ></v-file-input>
          </v-col>
          <v-col>
            <v-text-field variant="outlined" label="Nome do Pet"></v-text-field>
            <v-text-field variant="outlined" label="Raça do Pet"></v-text-field>
            <v-autocomplete variant="outlined" label="Tipo do Animal" :items="['Cachorro', 'Gato', 'Piriquito', 'Cobra', 'Jabuti']"></v-autocomplete>
          </v-col>
        </v-row>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions class="pa-2">
        <v-btn variant="outlined" size="large" @click="dialog = false">Adicionar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'MeusPetsPage',

  data() {
    return {
      dialog: false,

      itens: [
        {
          img: 'https://i0.statig.com.br/bancodeimagens/0g/nr/q8/0gnrq8hzt56a6ejbwhvflgb1a.jpg',
          nome: 'Roberto',
          tipoAnimal: 'Gato',
          raca: 'Laranja',
          peso: '7kg',
          idade: '3 Anos',
        },
        {
          img: 'https://purina.com.br/sites/default/files/styles/webp/public/2022-12/purina-como-alimentar-una-gata-durante-el-embarazo.jpg.webp?itok=htt4BFkC',
          nome: 'Agata',
          tipoAnimal: 'Gato',
          raca: 'Frajola',
          peso: '7kg',
          idade: '3 Anos',
        },
      ],
    }
  }
}
</script>