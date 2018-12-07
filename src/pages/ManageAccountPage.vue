<template>
  <div class="formatAccountPage flex flex-center">
    <form>
      <p class="caption centreHeader">{{ header }}</p>
      <div class="summary text-red" v-if="$v.form.$error">Form has errors</div>
      <q-field :label="nameLabel" class>
        <q-input v-model="form.name" type="text"/>
      </q-field>
      <q-field :label="loginLabel" class>
        <q-input v-model="form.email" type="email" suffix="@gmail.com"/>
      </q-field>
      <q-field :label="pwLabel" class>
        <q-input v-model="form.password" type="password"/>
      </q-field>
      <q-field helper="Select your gender" label="Gender :">
        <q-option-group
          type="radio"
          color="secondary"
          v-model="form.gender"
          :options="[
            { label: 'Male', value: 'M' },
            { label: 'Female', value: 'F', color: 'red' }
          ]"
        />
      </q-field>

      <q-btn
        class="btmRight"
        :label="loginBtn"
        color="secondary"
        @click="login(form.name, form.email, form.password, form.gender)"
      />
      <q-btn
        class="btmRight"
        :label="backBtn"
        style="background: goldenrod; color: white"
        @click="back()"
      />
    </form>
  </div>
</template>

<style>
.myLoginBox {
  background-color: rgba(255, 255, 255, 0.3);
  margin: 0, auto;
  height: 500px;
  width: 880px;
  border-style: solid;
}
.noOpa {
  border-style: solid;
  height: 196px;
}

.btmRight {
  float: right;
}

.centreHeader {
  text-align: center;
  font-size: 25px;
  text-shadow: 1px 1px red;
}

.formatAccountPage {
  border: 1px, black;
  background-color: whitesmoke;
  width: 800px;
  box-shadow: 2px, 2px, 5px, grey;
  margin-top: 20px;
  display: inline-flex;
  height: 88vh;
  border-radius: 8px;
  box-shadow: 2px 2px 5px grey;
  top: 80px;
}
</style>

<script>
import {
  required,
  minLength,
  email
} from "../../node_modules/vuelidate/lib/validators";
let l = "test";
export default {
  name: "signup",
  data() {
    return {
      loginLabel: "Login :",
      loginBtn: "SIGN UP",
      pwLabel: "Password :",
      nameLabel: "Name :",
      header: "SIGN UP",
      backBtn: "BACK",
      form: {
        name: l,
        email: "",
        password: "",
        gender: ""
      }
    };
  },
  // model: {
  //   prop: checkSignupPage
  // },
  validations: {
    form: {
      email: { required, email },
      password: { required, minLength: minLength(8) }
    }
  },
  methods: {
    login(name, email, password, gender) {
      console.log(
        "name: " +
          name +
          " email: " +
          email +
          " password: " +
          password +
          " gender: " +
          gender
      );
    }
  }
};
</script>
