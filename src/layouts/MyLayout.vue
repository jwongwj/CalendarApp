<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="blue-grey-6"
        :inverted="$q.theme === 'ios'"
      >
        <!-- <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn> -->
        <img src="../assets/images/piggy_bank_PNG97.png" style="height: 30px; width: 30px;"/>
        <q-toolbar-title class="tabAlignment">
          Piggy
          <div slot="subtitle">An Expense Tracker Made With Quasar Framework</div>
        </q-toolbar-title>
        <router-link to="/Home"><div style="border: 1px black; padding: 10px;">Home</div></router-link>
        <div style="border: 1px black; padding: 10px;"><router-link to="/Expenses">Add Expenses</router-link></div>
        <div style="border: 1px black; padding: 10px;"><router-link to="/ManageExp">Manage Expenses</router-link></div>
        <div style="border: 1px black; padding: 10px;"><router-link to="/ManageAcct">Manage Account</router-link></div>
        <div style="border: 1px black; padding: 10px;"><router-link to="/">Logout</router-link></div>
      </q-toolbar>
    </q-layout-header>

    <!-- <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-5' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header></q-list-header>
        <q-item v-on:click="openURL('/home')">
          <q-item-side icon="home" />
          <q-item-main label="Home"/>
        </q-item>
        <q-item v-on:click="openURL('/expenses')">
          <q-item-side icon="attach_money" />
          <q-item-main label="Expenditure" />
        </q-item>
        <q-item @click.native="openURL('/expenses')">
          <q-item-side icon="settings_input_component" />
          <q-item-main label="Manage Expenses" />
        </q-item>
        <q-item @click.native="openURL('/manageacct')">
          <q-item-side icon="settings" />
          <q-item-main label="Manage Account" />
        </q-item>
        <q-item @click.native="logout()">
          <q-item-side icon="exit_to_app" />
          <q-item-main label="Logout" />
        </q-item>
      </q-list>
    </q-layout-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'
export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL,
    logout () {
      return openURL('/')
    }
  }
}
</script>

<style>
.menuFooter{
  text-align: center;
  bottom: 0;
  display: inline-block;
  top: 100px;
  margin: 0,auto;
}

.tabAlignment{
  width: 50px;
}
</style>
