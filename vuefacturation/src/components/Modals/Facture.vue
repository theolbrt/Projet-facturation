<template>
  <div style="width: 21cm;">
    <div style="backgroundColor: #00e0f9; height: 100px; width: 100%;">
      <p style="float: right; font-size: 50px;">Facture n.</p>
    </div>

    <div style="width: 100%; float: left; padding: 25px;">
      <div style="float: left; padding: 5px;">
        <p style="margin: 0">Théo Albert</p>
        <p style="margin: 0">81 rue fondaudege</p>
        <p style="margin: 0">33000 - Bordeaux</p>
        <p style="margin: 0">0608003923</p>
        <p style="margin: 0">albert@gmail.com</p>
        <p style="margin: 0">SIRET : 00000XXXXXXX</p>
      </div>
      <div style="float: right;">
        <p style="margin: 0">Facturé à</p>
        <p style="margin: 0">{{this.client.nom}} {{this.client.prenom}}</p>
        <p style="margin: 0">{{this.client.adresse}}</p>
        <p style="margin: 0">{{this.client.code}} - {{this.client.ville}}</p>
      </div>
    </div>

    <div style="margin: 0 auto">
      <table style="text-align: center; width: 90%;margin: 0 auto;"> 
        <thead>
            <tr>
                <th colspan="1">Date de facture</th>
                <th colspan="1">Date de livraison</th>
                <th colspan="1">Condition de réglement</th>
                <th colspan="1">Echeance de paiement</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>The table body</td>
                <td>with two columns</td>
                <td>with two columns</td>
                <td>with two columns</td>
            </tr>
        </tbody>
      </table>
    </div>

    <div style="margin: 0 auto; margin-top: 35px;">
      <table style="text-align: center; width: 90%;margin: 0 auto;"> 
        <thead>
            <tr>
                <th colspan="1">#</th>
                <th colspan="1">Description</th>
                <th colspan="1">Quantité</th>
                <th colspan="1">Prix</th>
                <th colspan="1">Sous-total</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>{{this.produit.description}}</td>
                <td>{{this.produit.quantite}}</td>
                <td>{{this.produit.prixUnitaire}}</td>
                <td>{{(this.produit.prixUnitaire*this.produit.quantite) - this.produit.reduction}}</td>
            </tr>
        </tbody>
      </table>
    </div>

    <div style="float: right; padding: 50px; ">
      <p>Sous-total :</p>
      <p>Accompte :</p>
      <p>Montant total :</p>
    </div>
    
  </div>
  
</template>

<script>

export default {
  name: 'Facture',
  props: {
    client: Object,
    produit: Object,
  },
  components: {
    
  },
  data () {
    return {
      
    }
  }, 
  methods: {
   
    
  },
  mounted() {
      console.log(this.client)
      
  }
  
}
</script>

<style scoped>

@media print{
  .modalContainer{
    width: 210mm;
    height: 297mm;
  }
}

.table, td{
  border: 1px solid black
}
thead,
tfoot {
    background-color: #333;
    color: #fff;
}

.header{
  width: 100%;
  height: 60px;
  background-color: #00e0f9;
}
.modalContainer{
  margin-top: 30px;
  margin-left: 30%;
  
  height: 90%;
  width: 35%;
  
  background-color: white;
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