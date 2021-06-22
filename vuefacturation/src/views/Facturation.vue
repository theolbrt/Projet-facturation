<template>
  <div ref="content">

    <modal-client v-if="this.modalClient === true" @hideModal="closeModal" @client="newClient"></modal-client>
    <modal-produit v-if="this.modalProduit === true" @hideModal="closeModal" @produit="newProduit"></modal-produit>

    <div v-if="this.tabFacture.length === 0 && this.creationFacture === false" class="contentFacture" >
      <p style="color: #2C5378; font-size: 30px; padding-top: 30px;">Oups ! Il s'emblerais que vous n'ayez pas encore créé de facture ...</p>
      <img src="@/assets/no-facture.png" style="padding: 40px;">
    </div>

    <div v-if="this.tabFacture.length !== 0" class="tabFacture" >
      <div v-for="facture in tabFacture" :key="facture.nom" class="divTab">
          <div class="div" style="width:20%">{{ facture.nom }} {{ facture.prenom }}</div>
          <div class="div" style="width:35%">27/58/25</div>
          <div class="div" style="width:15%">#154</div>
          <div class="div" style="width:20%">{{ facture.total }} €</div>
        </div>
    </div>

    <div v-if="this.creationFacture === true" class="contentFacture">
      <div style="float: left; margin: 50px 0px 0px 60px;">
        <div>
          <div style="width: 100%; display: flex; justify-content: flex-start; line-height: 30px;">
            <span style="margin-right: 15px; color: white" class="num">1</span><p>Selectionner votre client</p>
          </div>
          <div class="formu">
            <input type="text" placeholder="Selectionner un client existant ..." style="width: 300px; margin-right: 40px;"/>
            <button @click="openModalClient">Ajouter un client</button>
          </div>
        </div>

        <div style="margin-top:20px;">
          <div style="width: 100%; display: flex; justify-content: flex-start; line-height: 30px;">
            <span style="margin-right: 15px; color: white" class="num">2</span><p>Selectionner votre produit</p>
          </div>
          <div class="formu">
            <input type="text" placeholder="Selectionner un produit existant ..." style="width: 300px; margin-right: 40px;"/>
            <button @click="openModalProduit">Ajouter un produit</button>
          </div>
        </div>

        <div style="margin-top:20px; margin-bottom: 30px;">
          <div style="width: 100%; display: flex; justify-content: flex-start; line-height: 30px;">
            <span style="margin-right: 15px; color: white" class="num">3</span><p>Condition de paiement</p>
          </div>
          <div class="formu" style="flex-direction: column">
            <div style="margin-bottom: 30px; display: flex;">
              <input type="date" placeholder="Date de livraison ..." style="margin-right: 40px; width: 200px;"/>
              <select placeholder="Unite" class="select" v-model="this.infoSup.delaiPaiement">
                <option value="imediat">Immediat</option>
                <option value="10">10 Jours(s)</option>
                <option value="15">15 Jours(s)</option>
                <option value="30">30 Jours(s)</option>
                <option value="autre">Autre echéance</option>
              </select>
            </div>
            <div>
              <input type="text" placeholder="Date de livraison ..." style="margin-right: 40px; width: 200px;" v-model="this.infoSup.dateLivraison"/>
              <select placeholder="Moyen de paiement" class="select" style="margin-right: 40px;" v-model="this.infoSup.moyenPaiement">
                <option value="espece">Espece</option>
                <option value="cheque">Cheque</option>
                <option value="virement">Virement</option>
                <option value="cb">Carte bancaire</option>
                <option value="autre">Tout moyen de paiement</option>
              </select>
            </div>
            
          </div>
        </div>

        <button style="float: right; margin-bottom: 30px; right: 30px" @click="downloadPDF">Créer Facture</button>

        <VueHtml2pdf :manual-pagination="true" :enable-download="true" ref="DownloadComp">
            <section slot="pdf-content">
                  <Download :client="this.client" :produit="this.produit">                   
                  </Download>
              </section>
        </VueHtml2pdf>

      </div>
    </div>

    <div class="contentBouton">
      <div>
        <img src="@/assets/fact.png" style="width: 50%; height: 35%; margin-top: 60px;">
      </div>
      <div>
        <button @click="newFacture" style="margin-top:30px;">Ajouter une facture</button>
      </div>
    </div>

  </div>
</template>

<script>
import factureData from "@/services/FactureDataService";
import ModalClient from '../components/Modals/ModalClient.vue'
import ModalProduit from '../components/Modals/ModalProduit.vue'
//import ModalFacture from '../components/Modals/Facture.vue'
import { jsPDF } from "jspdf";

import VueHtml2pdf from 'vue-html2pdf';
import Download from '@/components/Modals/Facture.vue'

export default {
  name: 'Facturation',
  props: {
    title: String,
  },
  components: {
    ModalClient, ModalProduit, Download, VueHtml2pdf
  },
  data () {
    return {
      client: {},
      produit: {},
      infoSup: {
        moyenPaiement: "",
        dateLivraison: "",
        delaiPaiement: "",
      },

      modalClient : false,
      modalProduit : false,
      modalFacture : false,

      creationFacture: false,

      tabFacture: [],
    }
  },
  methods: {
    downloadPDF () {
      let facture = Object.assign( {}, this.client, this.produit );

      factureData.create(facture)
        .then(response => {
          console.log(response.data);
        }).catch(e => {
          console.log(e);
        });

      this.modalFacture = true;
 
      this.$refs.DownloadComp.generatePdf()
    },
    newProduit(produit){
      this.produit = produit
    },
    newClient(client) {
      this.client = client;
    },
    createFacture() {

      let pdfName = 'test';
      
      var doc = new jsPDF();
      const contentHtml = this.$refs.content.innerHTML;
      
      doc.fromHTML(contentHtml, 15, 15, {
        width: 170
      });
    
      doc.save(pdfName + '.pdf');

      console.log(this.client)
      console.log(this.produit)   
    },
    closeModal() {
      this.modalClient = false;
      this.modalProduit = false;
    },
    newFacture() {
      this.creationFacture = true;
    },
    openModalProduit() {
      this.modalProduit = true;
    },
    openModalClient() {
      this.modalClient = true;
    }
  },
  mounted() {
    this.$emit('updateTitle', this.title)

    factureData.getAll()
      .then(response => {
        this.tabFacture = response.data
        console.log(response.data);
      }).catch(e => {
        console.log(e);
      });    
  }
}
</script>

<style>
.tabFacture{

  width: 80%;
  float: left;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.33);
}
.divTab{
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 70px;
  align-items: center;
  padding: 25px;
}
.formu{
  display: flex;
  padding-bottom: 30px;
  padding-left: 20px;
  padding-top: 30px;
  margin-top: -20px;
  margin-left: 14px;
  border-left: 1px solid lightgrey;
}
.num{
  margin-right: 20px;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  background-color: red;
}
.contentBouton{
  background-color: #FAFAFA ; 
  width: 20%; 
  height: 500px; 
  float: right;
  
  text-align: center;
}
.contentFacture{
  text-align: center;
  background-color: #FAFAFA; 
  width: 80%; 

  float: left;
  border: 1px solid lightgray;
  border-radius: 4px;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.33);
}
</style>
