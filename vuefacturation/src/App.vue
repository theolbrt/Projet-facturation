<template>
  <div id="app">
    <Header :title="title" class="header"></Header>
    <nav-bar class="nav"/>
    <Content @updateTitle="newTitle" class="body"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import NavBar from './components/NavBar.vue'
import Content from './components/Content.vue'

export default {
  name: 'App',
  components: {
    Header, NavBar, Content
  },
  data () {
    return {
        title: '',
    }
  },
  methods: {
      newTitle(e) {
          this.title = e;
          this.$emit('title', this.title);
      }
  },
}
</script>

<style>
#app {
  overflow-y: hidden;
  margin: auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 
  color: #2c3e50;
  background: #FAFAFA;
  width: 100%;
  height: 100%;
}

.nav{
  width: 15%;
  float: left;
  height: 100%;
}
.header{
  width: 100%;
  height: 100px;
}

.body{
  height: 100%;
  padding: 25px;
  float: left;
  width: 85%;
}
</style>
