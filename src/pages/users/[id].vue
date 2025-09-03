<template>
  <v-container>
    <h1 class="text-h5">User {{ id }}</h1>
  </v-container>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router/auto'

// passa o path literal para o helper → params ficam 100% tipados
const { params: { id } } = useRoute('/users/[id]')
</script>
