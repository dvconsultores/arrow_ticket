<template>
  <div id="home">
    <section class="section1-nft">
      <h1 class="title-nft">
        My NFTS
      </h1>

      <p class="text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam doloribus dolor magni suscipit? Eos porro iure, dolor tempore modi itaque ipsum temporibus officiis rerum. Cum cupiditate enim laborum ea nemo?
      </p>

      <div class="btn-arrows">
        <v-btn class="btn btn-create" @click="$router.push('/ticket')">
          Create Event
        </v-btn>
        <div class="rigth-arrow"></div>
        <div class="left-arrow"></div>
      </div>
    </section>

    <section class="section2-nft">
      <div class="div-container">
        <div class="autocomplete-search">
          <v-autocomplete
            label="Sort by:"
            class="autocomplete"
          ></v-autocomplete>

          <v-text-field
          class="textfield"
          append-icon="mdi-magnify"
          label="Search Event"
          ></v-text-field>
        </div>

        <div class="nfts">
          <v-card v-for="(item,index) in photoNft" :key="index">
            <img :src="require(`~/assets/sources/images/${item.img}.png`)" alt="Img">
          </v-card>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: "nftPage",
  mixins: [computeds],
  data() {
    return {
      photoNft:[
        {
          img:"ticket1",
        },
        {
          img:"ticket2",
        },
        {
          img:"ticket3",
        },
        {
          img:"ticket4",
        },
        {
          img:"ticket5",
        },
        {
          img:"ticket1",
        },
        {
          img:"ticket2",
        },
        {
          img:"ticket3",
        },
        {
          img:"ticket4",
        },
        {
          img:"ticket5",
        },
        {
          img:"ticket1",
        },
        {
          img:"ticket2",
        },
        {
          img:"ticket3",
        },
        {
          img:"ticket4",
        },
        {
          img:"ticket5",
        },
        {
          img:"ticket1",
        },
        {
          img:"ticket2",
        },
        {
          img:"ticket3",
        },
      ]
    }
  },
  head() {
    const title = 'NFT';
    return {
      title,
    }
  },
  methods: {
    
  }
};
</script>

<style src="~/assets/styles/pages/nft.scss" lang="scss" />