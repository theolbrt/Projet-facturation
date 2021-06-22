<template>
  <div >
    <h2 style="float:left; margin-left : 320px; margin-top: 30px;">{{title}}</h2>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String,
  }
}
</script>

<style >
.header{
    
    width: 100%;
    margin: 0px;
    background: #00e0f9;
    box-shadow: 0px 0px 5px 0px  grey;
    display: block;
}
</style>
