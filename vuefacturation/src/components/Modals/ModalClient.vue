<template>
  <div class="modalMask">
    <div class="modalContainer">

        <div class="header">
          <h3 style="float: left; margin-left: 20px; margin-top: 12px; color: white">Ajouter un nouveau client</h3>
        </div>

        <div class="modalForm">

          <div class="divForm">
            <select placeholder="Genre" class="select" v-model="newClient.genre">
              <option value="M.">M.</option>
              <option value="Mme">Mme</option>
              <option value="Mlle">Mlle</option>
            </select>
            <input type="text" placeholder="Prenom" class="input" v-model="newClient.prenom">
            <input type="text" placeholder="Nom" class="input" v-model="newClient.nom">
          </div>

          <div class="divForm">
            <input type="text" placeholder="Adresse" class="input" style="width: 45%" v-model="newClient.adresse"> 
            <input type="text" placeholder="Code postal" class="input" style="width: 120px" v-model="newClient.code">
            <input type="text" placeholder="Ville" class="input" v-model="newClient.ville">
          </div>

          <div class="divForm">
            <input type="text" placeholder="Telephone" class="input" style="width: 45%" v-model="newClient.tel"> 
            <input type="text" placeholder="Email" class="input" style="width: 45%" v-model="newClient.email">
          </div>

          <div>
            <button style="float: right; margin-top: 90px; margin-right: 30px;" @click="ajouterClient()">Créer client</button>
          </div>

        </div>
     </div>
  </div>
</template>

<script>
import clientData from "@/services/ClientDataService";

export default {
  name: 'Modal',
  components: {

  },
  data () {
    return {
      newClient : {
        genre : "",
        prenom : "",
        nom : "",
        adresse : "",
        code : "",
        ville : "",
        tel : "",
        email : "",
      },
      showModal: false,
    }
  },
  methods: {
    ajouterClient() {
      this.$emit('hideModal', this.showModal)
      this.$emit('client', this.newClient)
      console.log(this.newClient)
      
      clientData.create(this.newClient)
        .then(response => {
          console.log(response.data);
        }).catch(e => {
          console.log(e);
        });
    },
  },
}
</script>

<style scoped>
.divForm{
  padding: 18px; 
  margin: 10px; 
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.select{
  border: none;
  border-bottom: 2px solid grey;
  height: 30px;
}
.select:focus{
  outline-style: none;
  border-bottom: 2px solid blue;
}

.modalForm{
  padding: 30px 20px;
}

.input{
  border: none;
  border-bottom: 2px solid grey;
}
.input:focus{
  outline-style: none;
  border-bottom: 2px solid blue;
}

.header{
  border-radius: 4px 4px 0px 0px;
  width: 100%;
  height: 60px;
  background-color: #00e0f9;
}

.modalContainer{
  width: 800px;
  height: 470px;
  margin: 140px auto;
  background-color: white;
  border-radius: 3px;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.33);
}
.modalMask{
  height: 100%; 
  width: 100%;
  top: 0;
  left: 0;
  background-color: black; 
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
}
</style>