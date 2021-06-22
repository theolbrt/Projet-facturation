<template>
  <div class="modalMask">
    <div class="modalContainer">

        <div class="header">
          <h3 style="float: left; margin-left: 20px; margin-top: 12px; color: white">Ajouter un nouveau produit</h3>
        </div>

        <div class="modalForm">

          <div class="divForm">
            <input type="text" placeholder="Titre" class="input" v-model="newProduit.titre" style="width: 100%">
          </div>
          <div class="divForm">
            <input type="text" placeholder="Description" class="input" v-model="newProduit.description" style="width: 100%">
          </div>

          <div class="divForm">
            <select placeholder="Unite" class="select" v-model="newProduit.unite">
              <option value="unite">Unité(s)</option>
              <option value="heure">Heure(s)</option>
            </select>
            <input type="text" placeholder="Prix unitaire" class="input" style="width: 45%" v-model="newProduit.prixUnitaire"> 
          </div>

          <div class="divForm">
            <select placeholder="Unite" class="select" v-model="newProduit.type">
              <option value="vente">Vente de marchandise</option>
              <option value="service">Prestation de service</option>
            </select>
            <input type="text" placeholder="Quantité" class="input" style="width: 45%" v-model="newProduit.quantite">
          </div>
          <div class="divForm">
            <input type="text" placeholder="Reduction" class="input" style="width: 45%" v-model="newProduit.reduction">
          </div>

          <div>
            <p style="float: left; margin-top: 60px; margin-left: 30px;">Total : {{ totale }} €</p>
            <button style="float: right; margin-top: 60px; margin-right: 30px;" @click="ajouterProduit()">Créer produit</button>
          </div>

        </div>
     </div>
  </div>
</template>

<script>


export default {
  name: 'Modal',
  components: {

  },
  data () {
    return {
      newProduit : {
        titre : "",
        description : "",
        unite : "",
        prixUnitaire : "",
        type : "",
        quantite : 1,
        reduction : 0,
      },
      showModal: false,
      totaleF : 0.00,
    }
  },
  methods: {
    ajouterProduit() {
      this.totaleF = this.totale;

      this.$emit('hideModal', this.showModal)
      this.$emit('produit', this.newProduit)

      console.log(this.newProduit, this.totaleF)
    },
  },
  computed: {
    totale() {
      var totale = ( this.newProduit.prixUnitaire * this.newProduit.quantite ) - this.newProduit.reduction;
      //this.totalF = totale;
      return totale
    }
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
  width: 550px;
  height: 600px;
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