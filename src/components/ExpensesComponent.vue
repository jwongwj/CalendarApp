<template>
  <div>
    <div v-for="test in tests" class="cardDisplay flex-center">
      <q-card inline class="bigger q-ma-sm">
        <q-card-media>
          <img src="~assets/donuts.png">
        </q-card-media>
        <q-card-title class="relative-position">
          <div class="ellipsis">Cafe Basilico</div>
        </q-card-title>
        <q-card-main>
          <p>$・Italian, Cafe</p>
          <p class="text-faded">Small plates, salads & sandwiches in an intimate setting.</p>
        </q-card-main>
        <q-card-separator/>
        <q-card-actions>
          <q-btn flat color="primary" @click="customDialogModel = true">Reserve</q-btn>
        </q-card-actions>
      </q-card>

      <q-dialog
        v-model="customDialogModel"
        stack-buttons
        prevent-close
        @cancel="onCancel"
        @ok="onOk"
        @show="onShow"
        @hide="onHide"
      >
        <!-- This or use "title" prop on <q-dialog> -->
        <span slot="title">Favorite Superhero</span>

        <!-- This or use "message" prop on <q-dialog> -->
        <span slot="message">What is your superhero of choice?</span>

        <div slot="body">
          <q-field
            icon="account_circle"
            helper="We need your name so we can send you to the movies."
            label="Your name"
            :label-width="3"
            :error="nameError"
          >
            <q-input v-model="name"/>
          </q-field>
        </div>

        <template slot="buttons" slot-scope="props">
          <q-btn color="primary" label="Choose Superman" @click="choose(props.ok, 'Superman')"/>
          <q-btn color="black" label="Choose Batman" @click="choose(props.ok, 'Batman')"/>
          <q-btn color="negative" label="Choose Spiderman" @click="choose(props.ok, 'Spiderman')"/>
          <q-btn flat label="No thanks" @click="props.cancel"/>
        </template>
      </q-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "app-expenses",
  data() {
    return {
      tests: [
        { test: 1 },
        { test2: 1 },
        { test3: 1 },
        { test4: 1 },
        { test5: 1 },
        { test6: 1 }
      ],
      stars: 3,
      customDialogModel: false,
      name: "",
      nameError: false
    };
  },
  methods: {
    addExpenses: () => {
      console.log("new modal");
      this.customDialogModel = true;
    },
    openSpecialPosition(position) {
      this.$q
        .dialog({
          title: "Positioned",
          message: `This dialog appears from ${position}.`,
          position
        })
        .catch(() => {});
    },
    onOk() {
      console.log("ok");
    },
    onCancel() {
      console.log("cancel");
    },
    onShow() {
      console.log("show");
    },
    onHide() {
      console.log("hide");
    },
    async choose(okFn, hero) {
      if (this.name.length === 0) {
        this.error = true;
        this.$q
          .dialog({
            title: "Please specify your name!",
            message: `Can't buy tickets without knowing your name.`
          })
          .catch(() => {});
      } else {
        await okFn();
        this.$q.notify(`Ok ${this.name}, going with ${hero}`);
      }
    }
  },
  watch: {
    name(val) {
      const err = val.length === 0;
      if (this.nameError !== err) {
        this.nameError = err;
      }
    }
  }
};
</script>

<style>
.cardDisplay {
  width: 400px;
  height: 50%;
  display: inline-block;
  padding: 50px;
}
</style>
