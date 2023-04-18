<template>
  <div id="home" style="padding-top: 150px;">
    <section class="section1-create">
      <h1 class="title-create">
          Create event
      </h1>
      <div>
        <v-card class="card-create">

          <v-window v-model="step">
            <v-window-item :value="1" class="value1">
              <div class="card-title">
                <span>
                  Basic Information
                </span>
                <p>
                  Choose a name for your event and tell attendees why you think they will have a great time. Add details that highlight why your event is unique.
                </p>
              </div>

              <div class="content-card">
                <div class="text-field-container">
                  <span class="title-textfield">
                    Event name
                  </span>
                  <v-text-field
                  class="input-line"
                  placeholder="Lorem ipsum dolor sit amet"
                  ></v-text-field>
                </div>

                <div class="text-field-container">
                  <span class="title-textfield">
                    Promoter/Organizer name
                  </span>
                  <v-text-field
                  class="input-line"
                  placeholder="Lorem ipsum dolor sit amet"
                  ></v-text-field>
                </div>

                <div class="textarea-container">
                  <span class="underline-span">
                    Description
                  </span>
                  <p class="text">
                    Add more details of your event, such as program, sponsors or featured guests.
                  </p>
                  <v-textarea
                  class="input-area"
                  placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate molestiae, eos adipisci consectetur."
                  ></v-textarea>
                </div>

                <div class="divcol center" style="margin-bottom: 20px;">
                  <span class="underline-span">
                    Location
                  </span>
                  <p class="text" style="max-width: 100%;">
                    Help people in the area find out about the event and make sure your attendees know where to go.
                  </p>
                </div>

                <div class="text-field-container">
                  <span class="title-textfield">
                    Search your location
                  </span>
                  <v-text-field
                  class="input-line"
                  placeholder="Lorem ipsum dolor sit amet"
                  ></v-text-field>
                </div>

                <div class="text-field-container">
                  <span class="title-textfield">
                  Name Property
                  </span>
                  <v-text-field
                  class="input-line"
                  placeholder="Lorem ipsum dolor sit amet"
                  ></v-text-field>
                </div>

                <div class="divcol center" style="margin-bottom: 20px;">
                  <span class="underline-span">
                    Date and time
                  </span>
                  <p class="text" style="max-width: 100%;">
                    Inform attendees when the event starts and ends so the can get organized.
                  </p>
                </div>

                <div class="text-field-container">
                  <span class="title-textfield">
                  Date
                  </span>
                  <v-text-field
                  class="input-line"
                  placeholder="12-12-23 to 14-12-23"
                  ></v-text-field>
                </div>

                <div class="text-field-container">
                  <span class="title-textfield">
                  Time
                  </span>
                  <v-text-field
                  class="input-line"
                  placeholder="7:00 - 9:30pm GMT-6"
                  ></v-text-field>
                </div>

                <div class="divcol center" style="margin-bottom: 20px;">
                  <span class="underline-span">
                    Social Networks
                  </span>
                  <p class="text" style="max-width: 100%;">
                    Inform people on social media of the event (Optional)
                  </p>
                </div>

                <div class="text-field-container">
                  <span class="title-textfield">
                  Instagram
                  </span>
                  <v-text-field
                  class="input-line"
                  placeholder="@event1234"
                  ></v-text-field>
                </div>

                <div class="text-field-container">
                  <span class="title-textfield">
                  Twitter
                  </span>
                  <v-text-field
                  class="input-line"
                  placeholder="@event1234"
                  ></v-text-field>
                </div>

                <div class="text-field-container">
                  <span class="title-textfield">
                  Facebook
                  </span>
                  <v-text-field
                  class="input-line"
                  placeholder="@event1234"
                  ></v-text-field>
                </div>

                <div class="text-field-container">
                  <span class="title-textfield">
                  Discord
                  </span>
                  <v-text-field
                  class="input-line"
                  placeholder="@event1234"
                  ></v-text-field>
                </div>
              </div>
            </v-window-item>

            <v-window-item :value="2" class="value2">
              <div class="card-title">
                <span>
                  Main event image
                </span>
                <p>
                  This is the first image attendees will see at the top of your event page..
                </p>
              </div>

              <div class="content-step2">
                <div class="file-div">
                  <v-icon class="icon-file">mdi-file-image-outline</v-icon>
                  <v-file-input
                  class="input-file"
                  placeholder="Drag and drop or click here to upload your main event image."
                  ></v-file-input>
                </div>

                <div class="counter-div">
                  <p class="underline-text">
                    How many tickets you would like to have for your event?
                  </p>
                  <p class="p-file-text">
                    You can always mint/list more NFT ticket later.
                  </p>
                  <div class="div-btns">
                    <span>
                      {{ counter }}
                    </span>

                    <div class="divrow" style="gap:10px;">
                      <v-btn class="btn counter-btn" @click="amountMinus()">
                        -
                      </v-btn>
                      <v-btn class="btn counter-btn" @click="amountPlus()">
                        +
                      </v-btn>
                    </div>
                  </div>
                </div>
              </div>
            </v-window-item>

            <v-window-item :value="3" class="value3">
              <div class="card-title">
                <span>
                  Royalties
                </span>
                <p>
                  Royalties are perpetual. You can add royalties up to 50% across 25 accounts
                </p>
              </div>

              <div class="content-step3">
                <div class="div-ok-btn1">
                  <v-btn class="btn" @click="show = true">
                    OK
                  </v-btn>
                  <span class="available">
                    Available 50%
                  </span>

                  <div v-if="show === true" class="div-center">
                    <div class="text-field-container">
                      <span class="title-textfield">
                        Archway account
                      </span>
                      <v-text-field
                      class="input-line"
                      placeholder="account.archway"
                      ></v-text-field>
                    </div>

                    <div style="margin-bottom:20px;">
                      <span class="title-none">
                        1
                      </span>
                      <div class="divrow">
                        <v-text-field
                        class="input-percent"
                        placeholder="%"
                        ></v-text-field>

                        <v-icon class="delete-icon">
                          mdi-delete
                        </v-icon>
                      </div>
                    </div>
                  </div>

                  <div class="divcol center">
                    <span class="underline-span">
                    Split revenue
                    </span>
                    <p class="text" style="max-width:100%!important;">
                      Split revenue clears after each sale. Needs at least two wallet addresses. The minter will receive 100% of split revenue unless split are added.
                    </p>
                  </div>
                </div>

                <div class="div-ok-btn2">
                  <v-btn class="btn" @click="show2 = true">
                    OK
                  </v-btn>
                  <span class="available">
                    Available 97%
                  </span>

                  <div v-if="show2 === true" class="div-center">
                    <div class="text-field-container">
                      <span class="title-textfield">
                        Archway account
                      </span>
                      <v-text-field
                      class="input-line"
                      placeholder="account.archway"
                      ></v-text-field>
                    </div>

                    <div style="margin-bottom:20px;">
                      <span class="title-none">
                        1
                      </span>
                      <div class="divrow">
                        <v-text-field
                        class="input-percent"
                        placeholder="%"
                        ></v-text-field>

                        <v-icon class="delete-icon">
                          mdi-delete
                        </v-icon>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </v-window-item>

            <v-window-item :value="4" class="value4">
              <div class="card-title">
                <span>
                  Would you like to give a physical goodie with your ticket? (Drink, popcorn...)
                </span>
              </div>

              <div class="content-step4">
                <div class="goodie-div">
                  <p class="goodie-p"> 
                    We will transfer NFT once your attendes get inside the venue so they can redeem it to get a real good.
                  </p>
                  <div class="divrow" style="gap:30px;">
                    <v-btn class="btn" @click="show_goodie = true">
                      Yes
                    </v-btn>
                    <v-btn class="btn" @click="show_goodie = false, counter2 = 0">
                      No
                    </v-btn>
                  </div>

                  <div v-if="show_goodie === true" class="goodie-hidden-div">
                    <div class="text-field-container">
                      <span class="title-textfield">
                        What are attendes going to receive with the NFT ticket?
                      </span>
                      <v-text-field
                      class="input-line"
                      placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                      ></v-text-field>
                    </div> 

                    <div class="counter-div2">
                      <p class="p-file-text">
                        How much goodies for each attendee per ticket
                      </p>
                      <div class="div-btns">
                        <span>
                          {{ counter2 }}
                        </span>

                        <div class="divrow" style="gap:10px;">
                          <v-btn class="btn counter-btn" :disabled="counter2 === 0" @click="amountMinus2()">
                            -
                          </v-btn>
                          <v-btn class="btn counter-btn" @click="amountPlus2()">
                            +
                          </v-btn>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </v-window-item>
          </v-window>


          <hr>

          <div class="btn-container">
            <v-btn class="btn dark" :disabled="step === 1" @click="step--">
              Back
            </v-btn>
            <v-btn v-if="step <= 3" class="btn light" @click="step++">
              Next
            </v-btn>

            <v-dialog v-model="dialog_create" v-if="step === 4">
              <template #activator="{ on, attrs }">
                <v-btn class="btn light" v-on="on" v-bind="attrs">
                  Create
                </v-btn>
              </template>
              <v-card class="card-dialog">
                <v-btn class="btn-close" @click="dialog_create = false">
                  x
                </v-btn>

                <span class="underline-text">
                  Success!
                </span>
                <p class="p-text">
                  Your transaction was succesful.
                </p>
                <div class="divrow center">
                  <p class="red-text">
                    See transaction
                  </p>
                  <v-icon class="go-icon">
                    mdi-logout-variant
                  </v-icon>
                </div>

                <hr>

                <v-btn class="btn" @click="$router.push('/')">
                  Ok
                </v-btn>
              </v-card>
            </v-dialog>
          </div>
        </v-card>
      </div>
    </section>
  </div>
</template>

<script>
import computeds from '~/mixins/computeds'

export default {
  name: "CreatePage",
  mixins: [computeds],
  data() {
    return {
      step:1,
      counter:1,
      show: false,
      show2: false,
      show_goodie:false,
      counter2: 0,
      dialog_create:false,
    }
  },
  head() {
    const title = 'Create';
    return {
      title,
    }
  },
  methods: {
    amountPlus(){
      this.counter++
    },

    amountMinus(){
      this.counter--
    },

    amountPlus2(){
      this.counter2++
    },

    amountMinus2(){
      this.counter2--
    },
  }
};
</script>

<style src="~/assets/styles/pages/create-event.scss" lang="scss" />