<template>
  <v-footer id="footer" color="var(--primary)" absolute class="font2">
    <img class="logo" src="~/assets/sources/logos/Isotipo 2arrowtickets.png" alt="Logo">

    <div class="divrow center">
      <v-icon v-for="(item, index) in dataFooter" :key="index">
        {{ item.icon }}
      </v-icon>
    </div>

    <hr>

    <p>
      ©2023 Arrow Tickets. All Rights Reserved.
    </p>
  </v-footer>
</template>

<script>
export default {
  name: "FooterComponent",
  data() {
    return {
      dataFooter:[
        {
          icon:"mdi-instagram",
        },
        {
          icon:"mdi-twitter",
        },
        {
          icon:"mdi-facebook",
        },
      ],
    }
  },
  methods: {
   
  }
}
</script>

<style src="~/assets/styles/components/footer.scss" lang="scss" />
