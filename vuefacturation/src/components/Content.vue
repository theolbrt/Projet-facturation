<template>

  <router-view @updateTitle="newTitle"></router-view>
 
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      title: '',
      dat: "",
    }
  },
  props: {
    
  },
  methods: {
    newTitle(e) {
      this.title = e
      this.$emit('updateTitle', this.title)
    }
  },
  mounted() {
      
  }
  
}
</script>

<style scoped>


</style>