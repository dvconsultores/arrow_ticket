<template>
  <div id="home">
    <section v-for="(item,index) in liveCard" :key="index" class="section1-live-data">
      <h1 class="title-live-data">
          Event
      </h1>

      <h5 class="subtitle">
        {{ item.name_event }}
      </h5>

      <hr>

      <div class="container-last">
        <div>
          <h5>
            Last Updates
          </h5>
          <div class="divrow" style="gap: 10px;">
            <v-card class="outlined-yellow">
              <span>
                Check - ins
              </span>

              <span>
                {{ item.check_amount }} / {{ item.check_goal }}
              </span>
            </v-card>

            <v-card class="no-outlined">
              <span>
                Goodies redeemed
              </span>

              <span>
                {{ item.goodies_amount }} / {{ item.goodies_goal }}
              </span>
            </v-card>
          </div>
        </div>

        <div class="divcol jend" style="position:relative;">
          <div class="divrow" style="gap: 10px;">
            <v-card class="red-light">
              <span>
                Ticket sold
              </span>

              <span>
                {{ item.ticket_amount }} / {{ item.ticket_goal }}
              </span>
            </v-card>

            <v-card class="red-light">
              <span>
                Your incomes
              </span>

              <span>
                {{ item.amount_arc }} ARC
              </span>
            </v-card>
          </div>
          <span class="usd">
            ~ {{ item.amount_usd }} $ USD
          </span>
        </div>
      </div>
    </section>

    <section class="section2-live-data">
      <div class="jend divrow acenter div-mobile" style="width:460px; background-color: var(--primary);">
        <v-text-field
        class="input"
        placeholder="Search a nickname or scan it"
        ></v-text-field>
        <v-icon class="qr-icon">
          mdi-qrcode-scan
        </v-icon>
        <v-icon class="magnify-icon">
          mdi-magnify
        </v-icon>
      </div>

      <div class="tabla-div">
        <div class="div-red"></div>
        <v-data-table
        :headers="headers"
        :items="datos"
        class="mytable"
        hide-default-footer
        >
          <template #[`item.action`]="{ item }">
            <v-btn class="btn" id="btn-tabla" :class="{'change': selectedItems.includes(item)}" @click="toggleSelection(item)">
              {{ item.action }}
              <v-checkbox v-model="item.selected" class="my-checkbox"></v-checkbox> <span>Approve</span>
            </v-btn>
          </template>
        </v-data-table>
        <!-- <v-pagination
        v-model="page"
        :length="pageCount"
        circle
        color="#162c59"
        :total-visible="6"
         ></v-pagination> -->
      </div>
    </section>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: "livePage",
  mixins: [computeds],
  data() {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 7,
      liveCard:[
        {
          name_event:"DINOSAUR X",
          check_amount:"0",
          check_goal:"0",
          goodies_amount:"0",
          goodies_goal:"0",
          ticket_amount:"2",
          ticket_goal:"6",
          amount_arc:"34.67",
          amount_usd:"30.66",
        },
      ],
      headers: [
          { text: 'NFT', align: 'center',value: 'nft',},
          { text: 'SIGNER', align: 'center', value: 'signer' },
          { text: 'QUANTITY', align: 'center', value: 'quantity' },
          { text: 'CREATED', align: 'center', value: 'created' },
          { text: 'TRANSACTION', align: 'center', value:'transaction'},
          { text: 'ACTION', align: 'center', value: 'action' },
          // { text: '', align: 'center', value:'action'}
        ],

      datos:[
          {
            nft:'nameNFT',
            signer:'walletpruebadenft.archway',
            quantity:'2',
            created:'30 min ago',
            transaction:'See transaction',
            action:'',
          },
          {
            nft:'nameNFT',
            signer:'walletpruebadenft.archway',
            quantity:'2',
            created:'30 min ago',
            transaction:'See transaction',
            action:'',
          },
          {
            nft:'nameNFT',
            signer:'walletpruebadenft.archway',
            quantity:'2',
            created:'30 min ago',
            transaction:'See transaction',
            action:'',
          },
          {
            nft:'nameNFT',
            signer:'walletpruebadenft.archway',
            quantity:'2',
            created:'30 min ago',
            transaction:'See transaction',
            action:'',
          },
          {
            nft:'nameNFT',
            signer:'walletpruebadenft.archway',
            quantity:'2',
            created:'30 min ago',
            transaction:'See transaction',
            action:'',
          },
          {
            nft:'nameNFT',
            signer:'walletpruebadenft.archway',
            quantity:'2',
            created:'30 min ago',
            transaction:'See transaction',
            action:'',
          },
          {
            nft:'nameNFT',
            signer:'walletpruebadenft.archway',
            quantity:'2',
            created:'30 min ago',
            transaction:'See transaction',
            action:'',
          },
      ],
      selectedItems: [],
    }
  },
  head() {
    const title = 'Live Data';
    return {
      title,
    }
  },
  methods: {
    toggleSelection(item) {
      item.selected = !item.selected;
      if (item.selected) {
        this.selectedItems.push(item);
      } else {
        this.selectedItems.splice(this.selectedItems.indexOf(item), 1);
      }
    }
  }
};
</script>

<style src="~/assets/styles/pages/live-data.scss" lang="scss" />