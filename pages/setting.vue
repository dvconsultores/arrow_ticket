<template>
  <div id="home">
    <section v-for="(item,index) in settingCard" :key="index" class="section1-setting"> 
      <h1 class="title-setting">
          Setting
      </h1>

      <h5>
        {{ item.name }}
      </h5>

      <hr>

      <v-card class="setting-card">
        <span class="underline-text">
          Burn a ticket
        </span>

        <p class="text">
          Name event (Access Control)
        </p>

        <div class="divrow jspace" style="max-width:360px; width: 100%;">
          <v-dialog v-model="qr" persistent>
            <template #activator="{attrs, on}">
              <v-btn class="btn btn-dark" v-bind="attrs" v-on="on" @click="qr = true">
                <v-icon>mdi-qrcode</v-icon>Show QR
              </v-btn>
            </template>
            <v-card class="qr-card">
              <v-btn class="btn-close" @click="qr = false">
                  x
              </v-btn>

              <div class="card-title">
                <span>
                  {{ item.name_event }}
                </span>
                <p>
                  {{ item.desc }}
                </p>
              </div>

              <div class="qr-container" style="height: 300px; width:360px; padding:180px 0px 40px 0px;">

              </div>

              <hr>

              <v-btn class="btn">
                Burn it
              </v-btn>
            </v-card> 
          </v-dialog>
          <v-btn class="btn">
            <v-icon>mdi-content-copy</v-icon>Copy URL
          </v-btn>
        </div>

        <span class="underline-text" style="margin-top:30px;">
          Burn a goodie
        </span>

        <p class="text">
          (Goodies)
        </p>

        <div class="divrow jspace" style="max-width:360px; width: 100%; margin-bottom: 30px;">
          <v-btn class="btn btn-dark">
            <v-icon>mdi-qrcode</v-icon>Show QR
          </v-btn>
          <v-btn class="btn">
            <v-icon>mdi-content-copy</v-icon>Copy URL
          </v-btn>
        </div>

        <div class="divrow jspace aend" style="max-width:360px; width: 100%; margin-bottom: 20px;">
          <div class="divcol">
            <span class="text2">
              Ticket minted
            </span>
            <span class="text2">
              {{ item.minted }} / {{ item.goal_minted }}
            </span>
          </div>
          <v-dialog v-model="amount1" persistent>
            <template #activator="{attrs, on}">
              <v-btn class="btn" style="background-color:#f89f1f!important;" v-bind="attrs" v-on="on" @click="amount1 = true">
                Mint More
              </v-btn>
            </template>
            <v-card class="amount-card">
              <v-btn class="btn-close" @click="amount1 = false">
                  x
                </v-btn>

                <span class="underline-text">
                  Amount
                </span>

                <div class="div-btns">
                  <span>
                    {{ counter }}
                  </span>

                  <div>
                    <v-btn class="btn counter-btn" :disabled="counter === 0" @click="amountMinus()">
                      -
                    </v-btn>
                    <v-btn class="btn counter-btn" @click="amountPlus()">
                      +
                    </v-btn>
                  </div>
                </div>

                <hr>

                <v-btn class="btn" @click="$router.push('/')">
                  Mint More
                </v-btn>
            </v-card>
          </v-dialog>
        </div>

        <div class="divrow jspace aend" style="max-width:360px; width: 100%;">
          <div class="divcol">
            <span class="text2">
              Ticket listed
            </span>
            <span class="text2">
              {{ item.listed }}
            </span>
          </div>
          <v-btn class="btn" style="background-color:#f89f1f!important;">
            Mint More
          </v-btn>
        </div>

        <hr>
      </v-card>
    </section>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: "SettingPage",
  mixins: [computeds],
  data() {
    return {
      qr:false,
      amount1:false,
      counter:1,
      settingCard:[
        {
          name:"Name Event",
          minted:"2",
          goal_minted:"6",
          listed:"2",
          name_event:"Terminator (Let me in)",
          desc:"Royalties are perpetual. You can add royalties up to 50% across 25 accounts.",
        }
      ]
    }
  },
  head() {
    const title = 'Setting';
    return {
      title,
    }
  },
  methods: {
    
  }
};
</script>

<style src="~/assets/styles/pages/setting.scss" lang="scss" />