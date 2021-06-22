<template>
<div>
  <div class="content">

    <input type="text" style="width: 80%; margin-left: 10%; margin-top: 30px;" class="form-control" placeholder="Search by title" v-model="nom"/>

    <div style="margin-top: 1%; line-height: 3; height: 60px;" class="container">
      <div style="float: left;">
        <input type="checkbox" @click="showTabConsole()" checked>
        <label style="margin-right:7px; margin-left: 5px" for="consoles">Consoles</label>
          
        <input type="checkbox">
        <label style="margin-right:7px; margin-left: 2px" for="horns">Manettes</label>

        <input type="checkbox">
        <label style="margin-right:7px; margin-left: 2px" for="horns">Accessoires</label>

        <input type="checkbox">
        <label style="margin-right:7px; margin-left: 2px" for="horns">Pieces</label>
      </div>
      <div style="float: right;">
        <button type="button" class="btn btn-outline-primary btn-sm" @click="showModif()">Modifier</button>
      </div>
    </div> 

    <div style="width: 80%; height: 50px;" class="container" v-if="isModif" >
      <div class="form-row align-items-center">

        <div class="col-auto my-1">
          <label class="sr-only" for="inlineFormCustomSelect">Preference</label>
          <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" v-model="newItemType">
            <option selected>Type..</option>
            <option value="console">Console</option>
            <option value="manette">Manette</option>
            <option value="accessoire">Accessoires</option>
            <option value="piece">Pièce</option>
          </select>
        </div>

        <div class="col-auto" style="top:4px">
          <div class="input-group mb-2">
            <div class="input-group-prepend">
              <div class="input-group-text">Nom</div>
            </div>
            <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="..." v-model="newItemName">
          </div>
        </div>

        <div class="col-auto my-1">
          <label class="sr-only" for="inlineFormCustomSelect">Preference</label>
          <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" v-model="newItemEtat">
            <option selected>Etat...</option>
            <option value="HS">HS</option>
            <option value="OK">OK</option>
            <option value="PP">Pour pièce</option>
          </select>
        </div>

        <div class="col-auto" style="top:4px">
          <label class="sr-only">..</label>
          <div class="input-group mb-2">
            <div class="input-group-prepend">
              <div class="input-group-text">Quantité</div>
            </div>
            <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="..." v-model="newItemQuantity">
          </div>
        </div>
        <button type="button" class="btn btn-primary" @click="enregistrer()">+</button>
      </div>
    </div>

    <table class="table" style="width: 80%; margin-left: 10%; border: 1px solid #343a40; margin-top: 2%" v-if="this.showConsole">
      <thead class="thead-dark">
        <tr>
          <th>Nom</th>
          <th>Etat</th>
          <th>Quantité</th>
          <th v-if="isModif"></th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="console in consoles" :key="console.id">
          <th>{{ console.name }}</th>
          <th>{{ console.etat }}</th>
          <th>{{ console.quantity }}</th>
          <th v-if="isModif" @click="supprimer(console)" style="color: red">x</th>
        </tr>
      </tbody>  
    </table>

    <table class="table" style="width: 80%; margin-left: 10%; border: 1px solid #343a40">
      <thead class="thead-dark">
        <tr>
          <th>Nom</th>
          <th>Etat</th>
          <th>Quantité</th>
          <th v-if="isModif"></th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="manette in manettes" :key="manette.id">
          <th>{{ manette.name }}</th>
          <th>{{ manette.etat }}</th>
          <th>{{ manette.quantity }}</th>
          <th v-if="isModif" @click="supprimer(manette)" style="color: red">x</th>
        </tr>
      </tbody>  
    </table>

    <table class="table" style="width: 80%; margin-left: 10%; border: 1px solid #343a40">
      <thead class="thead-dark">
        <tr>
          <th>Nom</th>
          <th>Etat</th>
          <th>Type</th>
          <th>Platforme</th>
          <th>Quantité</th>
          <th v-if="isModif"></th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="piece in pieces" :key="piece.id">
          <th>{{ piece.name }}</th>
          <th>{{ piece.etat }}</th>
          <th>{{ piece.type }}</th>
          <th>{{ piece.platform }}</th>
          <th>{{ piece.quantity }}</th>
          <th v-if="isModif" @click="supprimer(piece)" style="color: red">x</th>
        </tr>
      </tbody>  
    </table>
  </div>
</div>
  
</template>

<script>
import ConsoleDataService from "../services/ConsoleDataService";
import ManetteDataService from "../services/ManetteDataService";
import PieceDataService from "../services/PieceDataService";

export default {
  name: 'Inventaire',
  components: {
    
  },
  props: {
    title: String,
  },
  data () {
    return {
      consoles: [],
      manettes: [],
      pieces: [],
      nom: '',

      showConsole: true,
      isModif: false,

      newItemName: '',
      newItemType: '',
      newItemEtat: '',
      newItemQuantity: '',

      nbAdd: 1,
      tabAdd: []
    }
  },
  methods: {
    addItem(){

    },

    enregistrer() {

      let newItem = {
        name: this.newItemName,
        etat: this.newItemEtat,
        quantity: this.newItemQuantity,
        type: this.newItemType
      }

      if(newItem.type === "console"){

        ConsoleDataService.create(newItem)
        .then(response => {
          console.log(response.data);
        }).catch(e => {
          console.log(e);
        });

      }else if(newItem.type === "manette"){

        ManetteDataService.create(newItem)
        .then(response => {
          console.log(response.data);
        }).catch(e => {
          console.log(e);
        });
      }else if(newItem.type === "piece"){

        PieceDataService.create(newItem)
        .then(response => {
          console.log(response.data);
        }).catch(e => {
          console.log(e);
        });
      }
      this.retrieveConsoles();
      this.retrieveManettes();
      this.retrievePieces();
    },

    supprimer(infoConsole){

      ConsoleDataService.delete(infoConsole._id)
        .then(response => {
          console.log(response.data);
        }).catch(e => {
          console.log(e);
        });
      this.retrieveConsoles();
    },

    showModif() {
      if(this.isModif === true)
      {
        this.isModif = false
      }
      else if(this.isModif === false){
        this.isModif = true
      }
    },

    showTabConsole(){
      if(this.showConsole === true)
      {
        this.showConsole = false
      }
      else if(this.showConsole === false){
        this.showConsole = true
      }
    },

    retrieveConsoles() {
      ConsoleDataService.getAll()
        .then(response => {
          this.consoles = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    retrieveManettes() {
      ManetteDataService.getAll()
        .then(response => {
          this.manettes = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    retrievePieces() {
      PieceDataService.getAll()
        .then(response => {
          this.pieces = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.$emit('updateTitle', this.title)

    this.retrieveConsoles();
    this.retrieveManettes();
    this.retrievePieces();
  }
}
</script>

<style scoped>
.content{
  text-align: center;
  background-color: #FAFAFA; 
  width: 100%; 

  float: left;
  border: 1px solid lightgray;
  border-radius: 4px;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.33);
}
.bouton{
  border: 1px solid black;
  width: 20px;
  height: 20px;
}
.divTableau{
  border: 2px solid black;
  width: 50%;
}
</style>

