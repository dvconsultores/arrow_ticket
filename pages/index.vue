<template>
  <div id="home" class="divcol">
    <section class="section1">
      <div class="center divcol">
        <h1 class="title-index">
          Arrow Tickets
        </h1>

        <p class="text">
          We want to make it easy and fast for you to create and manage your event - whether it's an intimate gathering with friends or a huge public celebration with thousands of people.
        </p>

        <div class="btn-arrows">
          <v-btn class="btn btn-create" @click="$router.push('/ticket')">
            Create Event
          </v-btn>
          <div class="rigth-arrow"></div>
          <div class="left-arrow"></div>
        </div>


        <div class="slide-div">
          <v-slide-group
              v-model="model"
              class="slide"
            >
              <v-slide-item
                v-for="(item,index) in photoSlide"
                :key="index"
              >
                <v-card class="card-img">
                  <img :src="require(`~/assets/sources/images/${item.img}.svg`)" alt="Img">
                </v-card>
            </v-slide-item>
          </v-slide-group>
        </div>
      </div>
    </section>

    <section class="section2">
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

      <v-carousel
          id="custome-carousel"
          v-model="modelCarousel"
          :height="carouselHeight"
          hide-delimiter-background
          :show-arrows="false"
        >

        <template v-for="(item, index) in boletosCard">
          <v-carousel-item v-if="(index + 1) % columnsCarousel() === 1 || columnsCarousel() === 1" :key="index">
            <template v-for="(n,i) in columnsCarousel()">
              <template v-if="(+index + i) < boletosCard.length">
                <div :key="i" class="boletos-card">
                  <v-card class="photo-place">
                    <img :src="require(`~/assets/sources/images/${boletosCard[+index + i].img}.svg`)" class="imagen" alt="Imagen">
                    <div class="div-span">
                      <span>
                        {{ boletosCard[+index + i].place_name }}
                      </span>
                    </div>
                  </v-card>


                  <v-card
                  class="fondo-boleto1"
                  ></v-card>

                  <v-card class="card-dates">
                    <span class="day">
                      {{ boletosCard[+index + i].day }}
                    </span>
                    <span class="month">
                      {{ boletosCard[+index + i].month }}
                    </span>
                    <span class="time">
                      {{ boletosCard[+index + i].time }}
                    </span>
                    <span class="location">
                      {{ boletosCard[+index + i].location }}
                    </span>
                    <v-btn @click="$router.push('ticket-detail')">
                      More
                    </v-btn>
                  </v-card>

                  <v-card
                  class="dotted-div"
                  >
                  <hr>
                  </v-card>

                  <v-card class="title-desc-card">
                    <span class="name">
                      {{ boletosCard[+index + i].name }}
                    </span>
                    <p class="desc">
                      {{ boletosCard[+index + i].desc }}
                    </p>
                    <div class="center" style="gap:20px;--c:var(--primary);">
                      <img src="~/assets/sources/logos/instagramrojo.png" alt="IG">
                      <img src="~/assets/sources/logos/twitterrojo.png" alt="Twitter">
                      <img src="~/assets/sources/logos/facebookrojo.png" alt="Facebook">
                      <img src="~/assets/sources/logos/discordrojo.png" alt="Discord">
                    </div>
                  </v-card>

                </div>
              </template>
            </template>
          </v-carousel-item>
        </template> 
      </v-carousel>
    </section>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: "HomePage",
  mixins: [computeds],
  data() {
    return {
      carouselHeight: 1000,
      model: 0,
      photoSlide:[
        {
          img:"guitarrista",
        },
        {
          img:"futbol",
        },
        {
          img:"conferencia",
        },
        {
          img:"dino",
        },
        {
          img:"dj",
        },
        {
          img:"futbol",
        },
        {
          img:"conferencia",
        },
        {
          img:"dj",
        },
        {
          img:"televisor",
        },
        {
          img:"dino",
        },
      ],
      boletosCard:[
        {
          place_name:"Museum Tyrrel",
          img:"dino",
          day:"23",
          month:"january",
          time:"Monday 7:00 - 9:30pm GMT-6 ",
          location:"CALGARY - CANADA",
          name:"Dinosaur X",
          desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium labore obcaecati quo minima mollitia, rerum aliquid nihil itaque facere laborum ullam reprehenderit voluptatum iure dolorem tempore harum nesciunt consequuntur maxime adipisci temporibus saepe provident assumenda eius. Corrupti fugit libero ratione perferendis, qui cum quibusdam praesentium, quidem dolorum deleniti repellendus dignissimos.",
        },
        {
          place_name:"Times Square",
          img:"dj",
          day:"13",
          month:"february",
          time:"Monday 7:00 - 9:30pm GMT-6 ",
          location:"NEW YORK - USA",
          name:"Dance Again",
          desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium labore obcaecati quo minima mollitia, rerum aliquid nihil itaque facere laborum ullam reprehenderit voluptatum iure dolorem tempore harum nesciunt consequuntur maxime adipisci temporibus saepe provident assumenda eius. Corrupti fugit libero ratione perferendis, qui cum quibusdam praesentium, quidem dolorum deleniti repellendus dignissimos.",

        },
        {
          place_name:"Museum Tyrrel",
          img:"guitarrista",
          day:"15",
          month:"january",
          time:"Monday 7:00 - 9:30pm GMT-6 ",
          location:"CALGARY - CANADA",
          name:"Rock & Rock",
          desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium labore obcaecati quo minima mollitia, rerum aliquid nihil itaque facere laborum ullam reprehenderit voluptatum iure dolorem tempore harum nesciunt consequuntur maxime adipisci temporibus saepe provident assumenda eius. Corrupti fugit libero ratione perferendis, qui cum quibusdam praesentium, quidem dolorum deleniti repellendus dignissimos.",

        },
        {
          place_name:"Museum Tyrrel",
          img:"futbol",
          day:"16",
          month:"february",
          time:"Monday 7:00 - 9:30pm GMT-6 ",
          location:"CALGARY - CANADA",
          name:"Level Up",
          desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium labore obcaecati quo minima mollitia, rerum aliquid nihil itaque facere laborum ullam reprehenderit voluptatum iure dolorem tempore harum nesciunt consequuntur maxime adipisci temporibus saepe provident assumenda eius. Corrupti fugit libero ratione perferendis, qui cum quibusdam praesentium, quidem dolorum deleniti repellendus dignissimos.",
        
        },
        {
          place_name:"Museum Tyrrel",
          img:"monolito",
          day:"23",
          month:"january",
          time:"Monday 7:00 - 9:30pm GMT-6 ",
          location:"CALGARY - CANADA",
          name:"Art X",
          desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium labore obcaecati quo minima mollitia, rerum aliquid nihil itaque facere laborum ullam reprehenderit voluptatum iure dolorem tempore harum nesciunt consequuntur maxime adipisci temporibus saepe provident assumenda eius. Corrupti fugit libero ratione perferendis, qui cum quibusdam praesentium, quidem dolorum deleniti repellendus dignissimos.",
     
        },
        {
          place_name:"Museum Tyrrel",
          img:"dino",
          day:"23",
          month:"january",
          time:"Monday 7:00 - 9:30pm GMT-6 ",
          location:"CALGARY - CANADA",
          name:"Dinosaur X",
          desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium labore obcaecati quo minima mollitia, rerum aliquid nihil itaque facere laborum ullam reprehenderit voluptatum iure dolorem tempore harum nesciunt consequuntur maxime adipisci temporibus saepe provident assumenda eius. Corrupti fugit libero ratione perferendis, qui cum quibusdam praesentium, quidem dolorum deleniti repellendus dignissimos.",
        },
      ]
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize) // Agrega el evento resize a la ventana
    this.handleResize() // Ejecuta la función handleResize al montar el componente
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize) // Remueve el evento resize de la ventana
  },

  head() {
    const title = 'Home';
    return {
      title,
    }
  },
  methods: {
    handleResize() {
      if (window.innerWidth < 960) {
        this.carouselHeight = 3500 // Establece la altura en 200 píxeles para pantallas pequeñas
      } else {
        this.carouselHeight = 1000 // Establece la altura en 400 píxeles para pantallas grandes
      }
    },

    columnsCarousel() {
      if (window.innerHeight >= 1600) {
        return 2
      } else if (window.innerHeight >= 1345) {
        return 2
      } else if (window.innerHeight >= 1000) {
        return 2
      } else if(window.innerHeight >= 800) {
        return 2
      } else if (window.innerHeight >= 550) {
        return 2
      } else if (window.innerHeight >= 370) {
        return 2
      } else {
        return 2
      }
    },

    styles() {
      // reload carousel
      const reload = this.modelCarousel;
      this.modelCarousel = -1;
      this.modelCarousel = reload;
    },
  }
};
</script>

<style src="~/assets/styles/pages/index.scss" lang="scss" />
