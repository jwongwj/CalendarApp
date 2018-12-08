<template>
  <q-page class="flex flex-center">
    <div class="wholeCalendar">
      <table>
        <th class="thStyle">
          <tr>
            <q-btn class="subBtn" color="deep-orange" icon="arrow_left" @click="subMth"/>
            <label class="displayDateLbl">{{mth | convertMthToString }} {{year}}</label>
            <q-btn class="addBtn" color="deep-orange" icon="arrow_right" @click="addMth"/>
          </tr>
          <tr>
            <label
              class="headerCells .shadow-12"
              v-for="(day, index) in daysPerWeek"
              :key="index"
            >{{day}}</label>
          </tr>
          <tr v-for="(ea,index) in allArr" :key="index">
            <q-btn
              color="yellow-2"
              class="indvCells"
              v-for="(val, ind) in ea"
              :key="ind"
              :disabled="isDisabled(val)"
              @click="editEvents(val)"
            >
              <div v-if="val != ''" style="width: 100%; height:100%;">
                <div>
                  <label class="dateLabel">{{val}}</label>
                </div>
                <div>
                  <label id="btnLabel" style="color: black;"></label>
                </div>
              </div>
            </q-btn>
          </tr>
        </th>
      </table>
    </div>
    <q-modal v-model="basicModal" class="container">
      <div class="modalDesign">
        <div class>
          <div v-if="showModal" class="floatRight">
            <q-btn color="amber" @click="basicModal = false" label="X">
              <q-tooltip anchor="center left" self="center right" :offset="[10,0]">
                <strong>Close</strong>
              </q-tooltip>
            </q-btn>
          </div>
          <div v-else class="floatRight">
            <q-btn round color="black" icon="keyboard_backspace" @click="backToList">
              <q-tooltip anchor="center right" self="center left" :offset="[10,0]">
                <strong>Back To List</strong>
              </q-tooltip>
            </q-btn>
          </div>
          <div>
            <div
              class="text-weight-bolder q-mb-md modalTitle"
            >{{date}} {{mth | convertMthToString}} {{year}}</div>
          </div>
        </div>
        <div v-if="showModal">
          <list-component/>
          <div class="floatRight btmPosition">
            <q-btn round color="deep-orange" icon="add_circle_outline" @click="createEvents">
              <q-tooltip anchor="center left" self="center right" :offset="[10,0]">
                <strong>Add Events</strong>
              </q-tooltip>
            </q-btn>
          </div>
        </div>
        <div v-else>
          <event-component/>
          <div class="btmPosition">
            <q-btn class="addEventBtn" color="primary" @click="addEvents">{{addEvent}}</q-btn>
          </div>
        </div>
      </div>
    </q-modal>
  </q-page>
</template>

<script>
import Lists from "src/components/ListComponent.vue";
import Events from "src/components/EventsComponent.vue";

const alerts = [
  { color: "secondary", message: "Event Added", icon: "calendar_today" }
];

export default {
  name: "calendar-component",
  components: {
    "list-component": Lists,
    "event-component": Events
  },
  data: () => {
    return {
      calendarDate: 0,
      mth: "",
      year: "",
      firstDayOfMth: "",
      arrayDates: [],
      allArr: [],
      daysPerWeek: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      basicModal: false,
      date: "",
      showModal: false,
      addEvent: " Add Event"
    };
  },
  mounted() {
    this.setDates(true);
  },
  methods: {
    setDates(initialLoad) {
      // Initialization
      var date, day;

      // Set Date based on inital vs Subsequent load
      if (initialLoad) {
        date = new Date();
        day = date.getDay() + 1;
        this.mth = date.getMonth() + 1;
        this.year = date.getFullYear();
      } else {
        this.allArr = [];
        this.calendarDate = 0;
        date = new Date(this.year, this.mth - 1, 1);
        day = date.getDay();
      }

      // Date formatting
      // if (day == 0) day = 7;
      var editDate = Math.abs(day - date.getDate());
      while (editDate > 7) {
        editDate -= 7;
      }
      if (editDate == 0) editDate = 7;
      this.firstDayOfMth = 7 - editDate == 0 ? 1 : 7 - editDate;

      // Setting array
      var noOfDaysInMth = new Date(this.year, this.mth, 0).getDate();
      if (this.mth == 2) {
        noOfDaysInMth = this.year / 4 == 0 ? 29 : 28;
      }
      var arr = [];
      for (var i = 0; i < 42; i++) {
        if (i < day - 1) {
          arr.push("");
          noOfDaysInMth++;
        } else if (i < noOfDaysInMth) {
          this.calendarDate++;
          var t = this.calendarDate;
          arr.push(t);
        } else {
          arr.push("");
        }
      }

      // Add Array for Display & Remove last row if empty
      for (var i = 0; i < 6; i++) {
        var arrayToPush = arr.slice(i * 7, (i + 1) * 7);
        if (i == 5 && arrayToPush[0] == "") {
        } else {
          this.allArr.push(arrayToPush);
        }
      }
    },
    addMth() {
      if (this.mth == 12) {
        this.mth = 1;
        this.year++;
      } else {
        this.mth++;
      }
      this.setDates(false);
    },
    subMth() {
      if (this.mth == 1) {
        this.mth = 12;
        this.year--;
      } else {
        this.mth--;
      }
      this.setDates(false);
    },
    isDisabled(val) {
      if (val == "") {
        return true;
      }
      return false;
    },
    editEvents(val) {
      this.basicModal = true;
      this.showModal = true;
      this.date = val;
    },
    addEvents() {
      this.showModal = true;
      const { color, icon, message } = alerts[0];

      this.$q.notify({
        color, icon, message
      });
    },
    createEvents() {
      this.showModal = false;
    },
    backToList() {
      this.showModal = true;
    }
  }
};
</script>

<style>
.indvCells {
  float: left;
  width: 12vw;
  height: 12vh;
  font-size: 10px;
  border-radius: 8px;
}

.q-focus-helper .q-btn-inner .row .col .items-center .justify-center {
  text-align: right;
  color: black;
}

.indvCells:hover {
  background-color: bisque !important;
  border: black !important;
}

.headerCells {
  float: left;
  padding: 5px;
  width: 14.2%;
}

.wholeCalendar {
  width: 90%;
  top: 9%;
  position: fixed;
  background-color: gold;
  text-align: center;
  display: inline-flex;
  height: 90%;
  border-radius: 8px;
  box-shadow: 2px 2px 5px grey;
}

.alignTop {
  text-align: center;
  width: 100%;
}

.subBtn {
  float: left;
  width: 5%;
  height: 3%;
}

.addBtn {
  float: right;
  width: 5%;
  height: 3%;
}

.thStyle {
  padding-top: 1.5vh;
  padding-left: 2vw;
  width: 100%;
}

.dateLabel {
  color: black;
  position: absolute;
  top: 5px;
  right: 5px;
}

.displayDateLbl {
  font-size: 20px;
}

.floatRight {
  float: right;
}

.btmPosition {
  bottom: 3%;
  position: absolute;
  right: 1.5%;
}

.floatLeft {
  float: left;
}

.topLeftPosition {
  top: 5%;
  position: absolute;
  left: 3%;
}

.modalTitle {
  /* width: 500px;
  padding-left: 18vw; */
}

.addEventBtn {
  width: 48.5vw;
}

@media only screen and (max-width: 766px), (max-height: 500px) {
  .addEventBtn {
    width: 97vw;
  }
}
</style>