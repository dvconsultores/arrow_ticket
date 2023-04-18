<template>
  <div id="home">
    <section class="section1-my-event">
      <div class="max-div">
        <h1 class="title-my-event">
            My events
        </h1>

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

        <hr>
      </div>
    </section>

    <section class="section2-my-event">
      <div class="my-events-div">
        <v-card class="card-header">
          <div class="span-div">
            <span class="span-title">
              NAME
            </span>
          </div>
          <div class="span-div">
            <span class="span-title">
              DATE
            </span>
          </div>
          <div class="span-div">
            <span class="span-title">
              TICKETS MINTED
            </span>
          </div>
          <div class="span-div">
            <span class="span-title">
              TICKETS SOLD
            </span>
          </div>
          <div class="span-div">
            <span class="span-title">
              TICKET LISTED
            </span>
          </div>
          <div class="empty-div"></div>
        </v-card>
        <div v-for="(item,index) in dataEvents" :key="index" class="events-container">
          <v-card class="card-photo">
            <img :src="require(`~/assets/sources/images/${item.img}.svg`)" alt="Img">
            <div class="name-div">
              <span @click="$router.push('/ticket-detail')">
                {{ item.event_name }}
              </span>
            </div>
          </v-card>

          <v-card
          class="fondo-boleto1"
          ></v-card>

          <v-card class="card-dates">
            <span class="day">
              {{ item.day }}
            </span>
            <span class="month">
              {{ item.month }}
            </span>
            <span class="time">
              {{ item.time }}
            </span>
            <span class="location">
              {{ item.location }}
            </span>
          </v-card>

          <v-card
            class="dotted-div"
            >
            <hr>
          </v-card>

          <v-card class="minted-card">
            <span class="mobile-title">
              Ticket minted
            </span>
            <span class="span-main">
              {{ item.minted }}
            </span>
            <div class="absolute-div">
              <span>{{ item.minted_amount }} / {{ item.minted_goal }}</span>
            </div>
          </v-card>

          <v-card
            class="dotted-div"
            >
            <hr>
          </v-card>

          <v-card class="minted-card">
            <span class="mobile-title">
              Ticket sold
            </span>
            <span class="span-main">
              {{ item.sold }}
            </span>
            <div class="absolute-div">
              <span>{{ item.sold_amount }} / {{ item.sold_goal }}</span>
            </div>
          </v-card>

          <v-card
            class="dotted-div"
            >
            <hr>
          </v-card>

          <v-card class="minted-card no-margin" style="margin-right:40px;">
            <span class="mobile-title">
              Ticket listed
            </span>
            <span class="span-main">
              {{ item.listed }}
            </span>
            <div class="absolute-div">
              <span>{{ item.listed_amount }} / {{ item.listed_goal }}</span>
            </div>
          </v-card>

          <div class="divcol" style="gap:30px;">
            <v-btn class="btn" @click="$router.push('/live-data')">
              Go to live data
            </v-btn>

            <v-btn class="btn" @click="$router.push('/setting')">
              Setting <v-icon>mdi-cog-outline</v-icon>
            </v-btn>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: "MyEvent",
  mixins: [computeds],
  data() {
    return {
      dataEvents:[
        {
          img:"dino",
          event_name:"Dinasour X",
          day:"23",
          month:"january",
          time:"Monday 7:00 - 9:30pm GMT-6 ",
          location:"CALGARY - CANADA",
          minted:"11",
          minted_amount:"11",
          minted_goal:"145",
          sold:"110",
          sold_amount:"11",
          sold_goal:"145",
          listed:"200",
          listed_amount:"200",
          listed_goal:"200",
        },
        {
          img:"dino",
          event_name:"Dinasour X",
          day:"23",
          month:"january",
          time:"Monday 7:00 - 9:30pm GMT-6 ",
          location:"CALGARY - CANADA",
          minted:"11",
          minted_amount:"11",
          minted_goal:"145",
          sold:"110",
          sold_amount:"11",
          sold_goal:"145",
          listed:"200",
          listed_amount:"200",
          listed_goal:"200",
        },
        {
          img:"dino",
          event_name:"Dinasour X",
          day:"23",
          month:"january",
          time:"Monday 7:00 - 9:30pm GMT-6 ",
          location:"CALGARY - CANADA",
          minted:"11",
          minted_amount:"11",
          minted_goal:"145",
          sold:"110",
          sold_amount:"11",
          sold_goal:"145",
          listed:"200",
          listed_amount:"200",
          listed_goal:"200",
        },
      ],
    }
  },

  head() {
    const title = 'My Events';
    return {
      title,
    }
  },
  methods: {
   
  }
};
</script>

<style src="~/assets/styles/pages/my-event.scss" lang="scss" />