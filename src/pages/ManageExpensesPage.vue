<template>
  <q-page class="flex flex-center">
    <ExpensesComponent/>
    <button></button>
  </q-page>
</template>

<style>
</style>

<script>
import ExpensesComponent from '../components/ExpensesComponent.vue'
export default {
  name: 'PageIndex',
  components: {
    ExpensesComponent
  }
}
</script>
