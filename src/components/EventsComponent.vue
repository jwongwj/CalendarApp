<template>
  <q-page class="flex flex-center specificDetailsModal">
    <div class="specificTop">
      <div class="specificEventTitle">
        <q-field :count="64">
          <q-input inverted-light color="amber" stack-label="Event Title"/>
        </q-field>
      </div>
      <div class="specificEventDetail">
        <q-field :count="64">
          <q-input inverted-light color="amber" stack-label="Event Details"/>
        </q-field>
      </div>
      <div class="specificEventStartTime">
        <q-datetime
          :default-value="defaultValue"
          type="time"
          color="amber"
          v-model="dateStart"
          clearable
          float-label="Start Time"
        />
      </div>
      <div class="specificEventEndTime">
        <q-datetime
          :default-value="defaultValue"
          color="amber"
          type="time"
          v-model="dateEnd"
          clearable
          float-label="End Time"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { date } from "quasar";
import "./docs-input.styl";

const today = new Date();
const { startOfDate, addToDate, subtractFromDate } = date;
export default {
  data() {
    return {
      dateStart: null,
      dateEnd: null,
      defaultValue: startOfDate(today, "year")
    };
  }
};
</script>

<style>
.specificDetailsModal {
  width: 100%;
}

.specificTop {
  top: 1vh;
  position: absolute;
  margin-bottom: 3vh;
  overflow: hidden;
  height: 60vh;
  width: 100%;
  overflow-y: scroll;
  border-style: solid;
  border-color: lightgrey;
  padding: 0px;
}

@media only screen and (max-width: 766px), (max-height: 500px) {
  .specificDetailsModal {
    width: 86vw;
  }
}
</style>
