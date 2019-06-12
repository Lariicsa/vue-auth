<template>
  <div class="content">
    <h1>Ruta protegida</h1>
    <h3>Bienvenido {{ usuario.email }}</h3>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Inicio',
  computed:{
    ...mapState(['usuario'])
  }
}
</script>
