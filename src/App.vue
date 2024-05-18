<template>
  <SudokuApp/>
</template>

<script>
import SudokuApp from './components/SudokuApp.vue'

export default {
  name: 'App',
  components: {
    SudokuApp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
