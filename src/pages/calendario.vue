<template>
  <v-container class="d-flex justify-center" >
   <div class="pa-10">
    <v-row>
      <h1>Agendamento</h1>
    </v-row>
    <v-row class="mb-5">
      <v-date-picker width="400"></v-date-picker>
    </v-row>
    <v-row >
      <v-autocomplete max-width="400" label="Autocomplete"
  :items="['8:30', '9:30', '10:30', '11:30', '13:30', '14:30', '15:30', '16:30']"
      ></v-autocomplete>
    </v-row>
    <v-row>
      <v-btn variant="outlined">
      Agendar
      </v-btn>
    </v-row>
   </div>
  </v-container>
</template>


<script>

</script>