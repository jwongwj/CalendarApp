<template>
  <div>
    <div>
      <div>
        <label style="float: left;">Add Expenses</label>
      </div>
      <div style="float: right;">
        <input type="text" placeholder="Search Categories">
      </div>
    </div>

    <div>
      <q-page class="flex flex-center">
        <ExpensesComponent/>
      </q-page>
    </div>
  </div>
</template>

<style>
</style>

<script>
import ExpensesComponent from "../components/ExpensesComponent.vue";
export default {
  name: "PageIndex",
  components: {
    ExpensesComponent
  }
};
</script>
