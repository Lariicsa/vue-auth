<template>
  <div id="app" class="container is-widescreen">
    <div id="nav">
      <router-link :to="{name: 'inicio'}" v-if="existeUsuario">Home</router-link> |
      <router-link :to="{name: 'registro'}" v-if="!existeUsuario">Registro</router-link> |
      <router-link :to="{name: 'ingreso'}" v-if="!existeUsuario">Ingreso</router-link> |
      <a @click="cerrarSesion" v-if="existeUsuario">Cerrar sesión</a>
      {{existeUsuario}}
    </div>
    <div class="media-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'App',
  methods:{
    ...mapActions(['cerrarSesion'])
  },
  computed:{
    ...mapGetters(['existeUsuario'])
  }
}
</script>
