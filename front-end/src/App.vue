<template>
  <div id="app">
    <navbar></navbar>
    <table></table>
    <router-view></router-view>
  </div>
</template>

<script>
  import Navbar from './components/Navbar'
  import Table from "./components/Table"
export default {
  name: 'App',
  components:{
    navbar: Navbar,
    table:Table
  }
}
</script>

<style>
/*#app {*/
/*  font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
</style>
