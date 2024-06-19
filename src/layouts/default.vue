<template>
  <v-app theme="light">
    <v-navigation-drawer>
      <h1 class="pa-2">PetVital</h1>
      <v-divider></v-divider>
      <v-list>
        <v-list-subheader>Menu</v-list-subheader>
        <v-list-item 
          v-for="item in itens"
          link
          :to="item.to"
          :prepend-icon="item.icon"
          :title="item.title">
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      class="pa-2"
      :elevation="2"
    >
      <v-text-field
        label="Pesquisar"
        append-inner-icon="mdi-magnify"
        max-width="500"
        hide-details
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn
        class="mr-2"
        variant="outlined"
        to="/login-cliente"
      >Entrar</v-btn>
      <v-avatar
        class="ml-2"
        size="40"
        icon="mdi-account"
        variant="outlined"
      >
      </v-avatar>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',

  data() {
    return {
      itens: [
        {
          title: 'Página Inicial',
          icon: 'mdi-home',
          to: '/',
        },
        {
          title: 'Serviços',
          icon: 'mdi-magnify',
          to: '/servicos',
        },
        {
          title: 'Meus Pets',
          icon: 'mdi-paw',
          to: '/meus-pets',
        },
      ]
    }
  }
}
</script>