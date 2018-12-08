<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar color="deep-orange-6" :inverted="$q.theme === 'ios'">

        <img src="../assets/images/cal.jpg" style="height: 30px; width: 30px;">
        <q-toolbar-title class="tabAlignment">Scheduler
          <div slot="subtitle">Calendar Scheduling Made With Quasar Framework</div>
        </q-toolbar-title>
        
        <div style="border: 1px black; padding: 10px;">
          <router-link to="/">Home</router-link>
        </div>
        <div style="border: 1px black; padding: 10px;">
          <router-link to="/calendar">Calendar View</router-link>
        </div>

      </q-toolbar>
    </q-layout-header>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from "quasar";
export default {
  name: "MyLayout"
};
</script>

<style>
.tabAlignment {
  width: 50px;
}
</style>
