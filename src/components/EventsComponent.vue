<template>
  <q-page class="flex flex-center specificDetailsModal">
    <div class="specificTop">
      <div class="specificEventTitle">
        <q-field :count="64">
          <q-input
            inverted-light
            color
            value="EMPTY"
            v-model="eventTitle"
            stack-label="Event Title"
          />
        </q-field>
      </div>
      <div class="specificEventDetail">
        <q-field :count="64">
          <q-input
            inverted-light
            color
            value="EMPTY"
            v-model="eventDetails"
            stack-label="Event Details"
          />
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
import { LocalStorage, SessionStorage } from "quasar";

const today = new Date();
const EMPTY = "";
const { startOfDate, addToDate, subtractFromDate } = date;
export default {
  data() {
    return {
      dateStart: EMPTY,
      dateEnd: EMPTY,
      eventTitle: EMPTY,
      eventDetails: EMPTY,
      defaultValue: startOfDate(today, "year"),
      eventBoolean: false
    };
  },
  created() {
    this.editEvent();
    // this.eventBoolean = false;
  },
  methods: {
    submitEvents(date, mth, year) {
      var event = {
        title: this.formatInput(this.eventTitle),
        details: this.formatInput(this.eventDetails),
        start: this.formatDatesString(this.dateStart),
        end: this.formatDatesString(this.dateEnd)
      };

      var key = `${date}/${mth}/${year}`;
      let array = [];
      if (this.eventBoolean) {
        array = LocalStorage.get.item(key);
        let index = LocalStorage.get.item("editEventIndex");
        array[index] = event;
        LocalStorage.set(key, array);
      } else {
        if (LocalStorage.get.item(key) == null) {
          array.push(event);
          LocalStorage.set(key, array);
        } else {
          array = LocalStorage.get.item(key);
          array.push(event);
          LocalStorage.set(key, array);
        }
      }
    },
    validateForm() {
      let hasError = false;
      let title = "";
      if (this.eventTitle) title = this.eventTitle.trim();
      if (title == "") hasError = true;
      if (
        this.formatDatesNumber(this.dateStart) >
        this.formatDatesNumber(this.dateEnd)
      )
        hasError = true;
      return hasError;
    },
    formatDatesNumber(date) {
      return Number(this.formatDatesString(date));
    },
    formatDatesString(date) {
      if (date) {
        return (
          date.toString().substring(16, 18) + date.toString().substring(19, 21)
        );
      } else {
        return "";
      }
    },
    formatInput(data) {
      return !data ? "" : data;
    },
    editEvent() {
      let key = `editEvent`;
      let existingData = LocalStorage.get.item(key);
      if (existingData !== "null") {
        this.dateStart = existingData.start;
        this.dateEnd = existingData.end;
        this.eventTitle = existingData.title;
        this.eventDetails = existingData.details;
        this.eventBoolean = true;
        LocalStorage.set(key, null);
        this.$emit("event");
      }
    }
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
  border-radius: 8px;
}

@media only screen and (max-width: 766px), (max-height: 500px) {
  .specificDetailsModal {
    width: 86vw;
  }
}
</style>
