<template>
  <div class="home">
    
  </div>
</template>

<script>

export default {
  name: 'Home',
  props: {
    title: String,
  },
  components: {
    
  },
  mounted() {
    this.$emit('updateTitle', this.title)
  }
}
</script>
