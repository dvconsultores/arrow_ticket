<template>
  <div class="main">
    <section v-for="(item,index) in sectionData" :key="index" class="section1-detail">
      <img id="bigPhoto" src="~/assets/sources/images/dinoGrande.svg" alt="Photo">
        <div class="center divcol">
          <div class="description-container">
            <!-- <div class="prueba1"></div>
            <div class="prueba2"></div>
            <div class="prueba3"></div>
            <div class="prueba4"></div> -->
            <v-card class="card-name">
              <span>
                {{ item.name }}
              </span>
              <div
              class="left-arrow"
              ></div>
              <div
              class="rigth-arrow"
              ></div> 
            </v-card>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum incidunt velit reprehenderit error ab beatae eligendi repudiandae aliquid aperiam. Esse cum et non in. Sit, error doloremque? Soluta reprehenderit architecto odit reiciendis. Expedita, accusamus odio. Soluta distinctio corrupti a quaerat voluptates nulla autem. Optio, quo ullam repellat reprehenderit eos, aperiam, natus doloremque esse nesciunt veniam eum nostrum quis iure accusantium.
            </p>
          </div>
        </div>
    </section>

    <section class="section2-detail">
      <div v-for="(item,index) in scheduleData" :key="index" class="schedule-div">
        <h3>
          Schedule overview
        </h3>

        <p style="margin-bottom:30px;">
          {{ item.date }} {{ item.name }} {{ item.day }}
        </p>

        <div style="margin-bottom:30px;">
          <p style="margin-bottom:2px;">
            {{ item.registration_day }}
          </p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam unde, officia fuga debitis numquam quaerat? Officia libero nesciunt veniam ipsum commodi hic necessitatibus cumque praesentium, dignissimos voluptates at accusamus error.</p>
        </div>

        <div style="margin-bottom:30px;">
          <p style="margin-bottom:2px;">
            {{ item.days }}
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In saepe veniam hic aliquam, blanditiis doloremque corrupti quos, error quo laudantium perspiciatis, quia quod sint labore mollitia dolore. Dicta cumque possimus recusandae! Odio.
          </p>
        </div>

        <div style="margin-bottom:50px;">
          <p>
            {{ item.desc_horas }} | Lorem ipsum dolor dolor sit amet consectetur adipisicing elit. In saepe veniam hic aliquam, blanditiis sit dolor sit amet consectetur adipisicing elit. In saepe veniam hic aliquam, blanditiis amet consectetur adipisicing elit. Sequi illo nobis enim ullam autem obcaecati cum dolorem explicabo, ab tenetur, error ad maxime a, ea assumenda hic exercitationem ut rem!
          </p>
        </div>

        <h3>
          Date and Location
        </h3>

        <div class="map-card">
          <v-card v-for="(item,index) in dataCard" :key="index" class="card-dates">
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
            <div class="div-place">
              <span>{{item.place}}</span>
            </div>
          </v-card>

          <div class="mapa-div">
            <img src="~/assets/sources/images/mapa.svg" id="mapa" alt="Mapa">
          </div>
        </div>

        <h3>
          Promoter/Organizer name
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam inventore perspiciatis consequuntur, nostrum sunt dolore illum placeat. Natus, nulla ut rem iste distinctio doloribus delectus quibusdam, ab veniam assumenda velit?
        </p>

        <h3>
          Details
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam inventore perspiciatis consequuntur, nostrum sunt dolore illum placeat. Natus, nulla ut rem iste distinctio doloribus delectus quibusdam, ab veniam assumenda velit?
        </p>
      </div>

      <div v-for="(item,index) in buyData" :key="index" class="buy-ticket-div">
        <v-card class="photo-place">
          <img :src="require(`~/assets/sources/images/${item.img}.svg`)" class="imagen" alt="Imagen">
          <div class="div-span">
            <span>
              {{ item.place_name }}
            </span>
          </div>
        </v-card>

        <v-card
        class="dotted-div"
        >
        <hr>
        </v-card>

        <v-card class="checkout-card">
          <h4>
            {{ item.name }}
          </h4>
          <p class="desc-checkout">
            {{ item.desc }} 
          </p>

          <hr>

          <p class="available-text">
            Available <br> {{ item.cantidad_restante }} of {{ item.cantidad_total }}
          </p>

          <div class="counter-div">
            <p class="text-counter">
              Amount Tickets
            </p>
            <v-card>
              <v-btn class="btn counter-btn" @click="amountMinus()">
                -
              </v-btn>
              <span class="counter">
                {{ counter }}
              </span>
              <v-btn class="btn counter-btn" @click="amountPlus()">
                +
              </v-btn>
            </v-card>
          </div>

          <div class="amount-div">
            <p class="text-counter">
              Total Amount
            </p>
            <v-card>
              <span class="counter">
                {{ new_amount }} $
              </span>
            </v-card>
          </div>

          <div class="center divrow" style="gap:30px;">
            <a v-for="(i, index2) in dataIcons"  :key="index2" href="">
              <v-icon color="var(--primary)">{{ i.icon }}</v-icon>
            </a>
          </div>

          <v-btn class="btn buy-btn">
            BUY
          </v-btn>
        </v-card>
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
      counter:1,
      amount:1,
      sectionData:[
        {
          name:"Dinasour X",
        },
      ],

      scheduleData:[
        {
          date:"January 23th",
          name:"Dinasour X",
          day:"Day",
          registration_day:"January 23th - Registration [7pm - 9:30pm]",
          days:"January 23th - 31th",
          desc_horas:"5pm - 8pm",
        }
      ],

      dataCard:[
        {
          day:"23",
          month:"january",
          time:"Monday 7:00 - 9:30pm GMT-6 ",
          location:"CALGARY - CANADA",
          place:"Museum Tyrrell"
        }
      ],

      buyData:[
        {
          img:"dino",
          place_name:"Museum Tyrrell",
          name:"Dinosaur X",
          desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere a incidunt omnis iusto iste accusamus.",
          cantidad_restante:"200",
          cantidad_total:"200",
        }
      ],

      dataIcons:[
        {
          icon:"mdi-twitter"
        },
        {
          icon:"mdi-facebook"
        },
        {
          icon:"mdi-instagram"
        },
      ],
    }
  },
  head() {
    const title = 'Ticket-Details';
    return {
      title,
    }
  },
  methods: {
    amountPlus(){
      this.counter++
      this.new_amount = 21 * this.counter
    },

    amountMinus(){
      this.counter--
      this.new_amount = 21 * this.counter
    },
  }
};
</script>

<style src="~/assets/styles/pages/ticket-detail.scss" lang="scss" />
