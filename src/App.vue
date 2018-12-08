<template>
  <div id="q-app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  created() {
    console.clear(); // To be removed after production
  }
};
</script>

<style>
body {
  min-width: 263px;
  min-height: 480px;
}

html {
  overflow: scroll;
  overflow-x: hidden;
}
::-webkit-scrollbar {
  width: 0px; /* remove scrollbar space */
  background: transparent; /* optional: just make scrollbar invisible */
  display: none;
}
</style>
