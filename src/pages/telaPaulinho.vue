<template>
  <v-app>
    <v-container>
			<h1 class="pt-2">Serviços</h1>
			<span>Procurando dar um tratamento para o seu pet? Dê uma conferida nesses próximos a você</span>
			<v-row>

				<v-col>
					<v-card elevation="4" color="blue-grey-lighten-5" width="425" class="mt-5">
						<v-card-text>
							<v-row>

								<v-col>
									<v-img rounded src="../../public/gato burmilla.jpg" width="175">
									</v-img>
								</v-col>

								<v-col>
									<h2>Banho</h2>
									<span>Banho para o seu pet.</span>
								</v-col>
								
								
							</v-row>

							<v-card-actions class="justify-end text-decoration-underline text-blue">
							<v-btn>Ver mais</v-btn>
						</v-card-actions>
							
						</v-card-text>
						
					</v-card>

        </v-col>
				<v-col>

					<v-card elevation="4" color="blue-grey-lighten-5" width="425" class="mt-5" >
						<v-card-text>

							<v-row>

								<v-col>

									<v-img rounded src="../../public/caoEndiabrado.jpg" width="175">
									</v-img>

								</v-col>

								<v-col>

									<h2>Vacinação</h2>
									<span>Vacina contra a raiva.</span>

								</v-col>

							</v-row>

							<v-card-actions class="justify-end text-decoration-underline text-blue">
							<v-btn>Ver mais</v-btn>
						</v-card-actions>
						</v-card-text>
					</v-card>

				</v-col>

			</v-row>

			<h1 class="mt-5">Ofertas</h1>

			<v-card elevation="4" color="blue-grey-lighten-5" width="425" class="mt-5" >
						<v-card-text>

							<v-row>

								<v-col>

									<v-img rounded src="../../public/caoEndiabrado.jpg" width="175">
									</v-img>
									
								</v-col>

								<v-col>

									<h2>Vacinação</h2>
									<span>Vacina contra a raiva.</span>

								</v-col>

							</v-row>
							
							<v-card-actions class="justify-end">
								<h2 class="text-green">20% OFF</h2>
							 <v-btn class="text-decoration-underline text-blue">Ver mais</v-btn>
							</v-card-actions>
						
						</v-card-text>
					</v-card> 



    </v-container>

  </v-app>
</template>

<script>
export default {
  name: "telaPaulo",
};
</script>

<style scoped>
</style>
