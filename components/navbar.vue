<template>
  <div>
    <MenuNavbar ref="menu"></MenuNavbar>
    
    <v-app-bar id="navbar" color="transparent" absolute class="isolate">
      <img src="~/assets/sources/logos/logo.png" id="img-logo" alt="logo" @click="$router.push('/')">

      <img src="~/assets/sources/logos/Isotipo 2arrowtickets.png" id="img-logo-mobile" alt="logo" @click="$router.push('/')">

      <v-btn v-if="logged === false" class="btn mobile-btn" style="margin-right:20px;">
        Connect
      </v-btn>

      <v-menu offset-y content-class="menu-card">
        <template #activator="{attrs, on}">
          <v-btn v-if="logged === true" class="btn mobile-btn" v-bind="attrs" v-on="on" style="width:250px!important;margin-right:20px;">
            <span class="span-normal">{{limitStrin("username#1234.arch", 18)}} <v-icon>mdi-triangle-small-down</v-icon></span>
            <span class="span-mobile">{{limitStrin("username#1234.arch", 8)}} <v-icon>mdi-triangle-small-down</v-icon></span>
          </v-btn>
        </template>
        <v-card v-for="(item,index) in dataNavbar" :key="index">
          <div class="div-arch">
            <span class="arch">
              ARCH
            </span>
            <span>
              {{ item.amount_arch }} A
            </span>
          </div>
          <v-btn class="btn" @click="$router.push('/my-event')">
            My Events
          </v-btn>
          <v-btn class="btn" @click="$router.push('/nft')">
            My NFTS
          </v-btn>

          <v-btn class="logout-btn">
            Log out
          </v-btn>
        </v-card>
      </v-menu>
    </v-app-bar>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'
export default {
  name: "NavbarComponent",
  mixins: [computeds],
  data() {
    return {
      show_img: true,
      logged:true,
      dataNavbar:[
        {
          amount_arch:"478.5"
        },
      ]
    };
  },

  // mounted(){
  //   if (window.innerWidth >= 750) {
  //     this.show_img = true
  //   }  else {
  //     this.show_img = false
  //   }
  // },
 
  // created() {
  //   const theme = localStorage.getItem("theme");
  //   if (theme) {
  //     setTimeout(() => {
  //       this.$store.commit("switchTheme", theme);
  //     }, 100);
  //   }
  //   if (theme === "light") {this.themeButton = true}
  //   else {this.themeButton = false}
  // },
  methods: {
    limitStrin(item, num) {
      if (item) {
        if (item.length > num) {
          return item.substring(0, num) + "..."
        }
        return item
      }
      return item
    },
  },
};
</script>

<style src="~/assets/styles/components/navbar.scss" lang="scss" />