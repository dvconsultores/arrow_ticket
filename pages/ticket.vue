<template>
  <div id="home">
    <section class="section1-ticket">
      <h1 class="title-ticket">
          Choose your ticket
      </h1>

      <div class="container-slide">
        <v-slide-group
            v-model="ticket_slide"
            class="slide"
          >
            <v-slide-item
              v-for="(item,index) in ticketCard"
              :key="index"
            >
              <v-card class="card-ticket">
                <img :src="require(`~/assets/sources/images/${item.img}.png`)" alt="Ticket">
              </v-card>
            </v-slide-item>
          </v-slide-group>
      </div>

      <div class="divcol center" style="gap:30px; padding-top: 100px;">
        <v-btn class="btn dark-red" @click="$router.push('/create-event')">
          Choose this one
        </v-btn>
        <v-btn class="btn orange-btn">
          Upload my own ticket
        </v-btn>  
      </div>
    </section>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: "TicketPage",
  mixins: [computeds],
  data() {
    return {
      ticket_slide:0,
      ticketCard:[
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
      ],
    }
  },
  head() {
    const title = 'Ticket';
    return {
      title,
    }
  },
  methods: {
    
  }
};
</script>

<style src="~/assets/styles/pages/ticket.scss" lang="scss" />