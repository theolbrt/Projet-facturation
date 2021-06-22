<template>
  <div >
    <div class="divButton">
      <router-link to="/" class="button"><b-icon-clipboard-data style="margin-right: 10px"></b-icon-clipboard-data>
      Tableau de bord</router-link>  

      <router-link to="/stock" class="button"><b-icon-card-list style="margin-right: 10px"></b-icon-card-list>
      Inventaire</router-link>

      <router-link to="/facturation" class="button"><b-icon-receipt-cutoff style="margin-right: 10px"></b-icon-receipt-cutoff>
      Facturation</router-link>

      <router-link to="/catalogue" class="button"><b-icon-book style="margin-right: 10px"></b-icon-book>
      Catalogue</router-link>

      <router-link to="/client" class="button"><b-icon-person-badge style="margin-right: 10px"></b-icon-person-badge>
      Clients</router-link>
    </div>  
  </div>
</template>

<script>
import { BIconClipboardData, BIconReceiptCutoff, BIconCardList, BIconPersonBadge, BIconBook } from 'bootstrap-vue'

export default {
  name: 'Nav',
  components: {
    BIconClipboardData, BIconReceiptCutoff, BIconCardList, BIconPersonBadge, BIconBook
  },
  props: {
    
  }
}
</script>

<style >
.navDiv{
    background: white;
    height: 100%;
    width: 300px;
    border-right: 1px solid #EEEEEE;
}

.divButton{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 5px 0px  grey;
}

.button{
  color: #5F5F5F;
  width: 100%;
  height: 60px;
  padding-left: 25px;
  line-height: 55px;
  border-bottom: 1px solid #EEEEEE;
  text-decoration: none;

  font-size: 20px;
}
.button:hover{
  text-decoration: none;
  
}
</style>
