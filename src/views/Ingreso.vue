<template>
<div class="content">
	<h1>Ingresso</h1>
	<form @submit.prevent="ingresoUsuario({email:email, pass:pass})">
		<input type="email" v-model="email">
		<input type="password" v-model="pass">
		<button class="button is-primary" type="submit">Ingresar</button>
	</form>
	<p>{{error}}</p>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
	name: 'Ingreso',
	data(){
		return{
			email: '',
			pass: ''
		}
	},
	methods: {
		...mapActions(['ingresoUsuario'])
	},
	computed: {
		...mapState(['error'])
	}
}
</script>