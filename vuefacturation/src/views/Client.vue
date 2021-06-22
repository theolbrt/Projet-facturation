<template>
  <div>
    <modal-client v-if="this.modalClient === true" @hideModal="closeModal"></modal-client>
    <div class="contentfg">
      
      <div>
        <div v-for="client in tabClient" :key="client.nom" class="divTab">
          <div class="div" style="width:20%">{{ client.nom }} {{ client.prenom }}</div>
          <div class="div" style="width:35%">{{ client.ville }} - {{ client.code }}</div>
          <div class="div" style="width:15%">{{ client.tel }}</div>
          <div class="div" style="width:20%">{{ client.email }}</div>
          <div style="width:10%"><b-icon-three-dots style="margin-right: 10px"></b-icon-three-dots></div>
        </div>
      </div>    
    </div>

    <div class="contentBouton">
      <div>
        <img src="@/assets/cliente.svg" style="width: 55%; height: 45%; margin-top: 40px;">
      </div>
      <div>
        <button @click="openModal" style="margin-top:30px;">Ajouter un client</button>
      </div>
    </div>
    
  </div>
</template>

<script>
import { BIconThreeDots } from 'bootstrap-vue'

import clientData from "@/services/ClientDataService";
import ModalClient from '../components/Modals/ModalClient.vue'

export default {
  name: 'Client',
  props: {
    title: String,
  },
  components: {
    BIconThreeDots, ModalClient
  },
  data () {
    return {
      tabClient: [],
      modalClient: false,
    }
  },
  methods: {
    openModal() {
      this.modalClient = true;
    },
    closeModal() {
      this.modalClient = false;
    },
  },
  mounted() {
    this.$emit('updateTitle', this.title)

    clientData.getAll()
      .then(response => {
        this.tabClient = response.data
        console.log(this.tabClient)
        console.log(response.data);
      }).catch(e => {
        console.log(e);
      });    
  }
}
</script>

<style scoped>
.div{
  text-align: left;
  float: left;
}
.divTab:last-child{
  border-bottom: 1px solid black;
}
.divTab{
  border: 1px solid black;
  border-bottom: none;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 70px;
  align-items: center;
  padding: 25px;
}
.contentBouton{
  float: left;
  width: 25%; 
  text-align: center;
}
.contentfg{
  text-align: center;
  background-color: #FAFAFA; 
  width: 75%; 
  padding: 20px;
  float: left;
  border: 1px solid lightgray;
  border-radius: 4px;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.33);
}
</style>
