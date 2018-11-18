<template>
	<div>
		<table>
			<ClientRow v-for="dog in dogs" :dog="dog"></ClientRow>
		</table>
		<Nav menu='clients'></Nav>
	</div>
</template>

<script>
	import ClientRow from "../components/ClientsRow"
	import Nav from "../components/Nav"
	export default {
		name: "Clients",
		components: {
			"ClientRow": ClientRow,
			"Nav": Nav
		},
		beforeMount(){
			this.dogs = this.$store.getters.getAllDogs
		},
		data(){
			return {
				dogs: this.$store.getters.getAllDogs
			}
		}
	}
</script>

<style>
	table {
		display: block;
		width: 100%;
	}
</style>