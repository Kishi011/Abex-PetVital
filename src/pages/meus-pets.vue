<template> 
  <v-app theme="dark">

    <v-main>
      <v-container>
        <h1>
          Meus Pets
        </h1>
        <h4 class="mb-5 mt-5">
          Aqui você pode gerenciar os seus pets cadastrados no sistema e cadastrar novos pets.
        </h4>
        <v-row>
          <v-col>
              <v-card height="400">
                <v-img src="https://i0.statig.com.br/bancodeimagens/0g/nr/q8/0gnrq8hzt56a6ejbwhvflgb1a.jpg"></v-img>
                <v-card-text class="text-white text-center">
                  <h2 class="text-orange">
                    Roberto
                  </h2>
                  <v-row>
                    <v-col>
                      <h3>
                        Gato
                      </h3>
                      <h3>
                        7kg
                      </h3>
                    </v-col>
                    <v-col>
                      <h3 class="text-orange">
                        Laranja
                      </h3>
                      <h3>
                        3 Anos
                      </h3>
                    </v-col>
                  </v-row>
                  <v-row class="mt-8">
                    <v-col>
                      <v-btn  class="text-orange bg- tonal">Ver mais sobre o Roberto</v-btn>
                  </v-col>
                </v-row>
              </v-card-text>
              
              <v-card-actions class="justify-end">
                <a href="https://ar.pinterest.com/pin/70437488196619/" target="_blank">
                  <span class="text-blue-lighten-1">
                    
                  </span>
                </a>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col>
            <v-card hover height="400">
                <v-img  height="215" src="https://purina.com.br/sites/default/files/styles/webp/public/2022-12/purina-como-alimentar-una-gata-durante-el-embarazo.jpg.webp?itok=htt4BFkC"></v-img>
                <v-card-text  class="text-white text-center">
                  <h2 class="text-pink">
                    Agata
                  </h2>
                  <v-row>
                    <v-col>
                      <h3>
                        Gato
                      </h3>
                      <h3>
                        7kg
                      </h3>
                    </v-col>
                    <v-col>
                      <h3 class="text-white">
                        Braca-Preta
                      </h3>
                      <h3>
                        3 Anos
                      </h3>
                    </v-col>
                  </v-row>
                  <v-row class="mt-8">
                    <v-col>
                      <v-btn  class="text-pink bg- tonal">Ver mais sobre a Agata</v-btn>
                  </v-col>
                </v-row>
              </v-card-text>
              
              <v-card-actions class="justify-end">
                <a href="https://ar.pinterest.com/pin/70437488196619/" target="_blank">
                  <span class="text-blue-lighten-1">
                    
                  </span>
                </a>
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col md="4">
            <v-card height="400">
              <a href="https://ar.pinterest.com/pin/68746382467/" target="_blank" rel="noopener noreferrer">
                <v-btn 
                  flat 
                  height="100%" 
                  width="100%"
                  >
                  <v-icon size="50">mdi-plus-box-outline</v-icon>
                </v-btn>
              </a>
            </v-card>
          </v-col>
        </v-row> 
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'app',

  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
    }
  },  

  methods: {
    
  },
}
</script>