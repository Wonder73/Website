<template>
  <div id="cell">
    <router-view/>
    <img src="../../assets/logo.png" height="200" width="200">
    <a href="index.html">index</a>
    {{count}}
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'cell',
  created(){
    this.$store.dispatch('getCount');
  },
  computed:mapGetters(['count'])
}
</script> 

<style>
#cell {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
