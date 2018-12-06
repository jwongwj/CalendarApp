<template>
  <q-page class="" >
    <table>
      <th>
        <tr>
          <label style="float:left; padding: 5px;">Mon</label>
          <label style="float:left; padding: 5px;">Tue</label>
          <label style="float:left; padding: 5px;">Wed</label>
          <label style="float:left; padding: 5px;">Thu</label>
          <label style="float:left; padding: 5px;">Fri</label>
          <label style="float:left; padding: 5px;">Sat</label>
          <label style="float:left; padding: 5px;">Sun</label>
        </tr>
        <tr v-for="(ea,index) in allArr" :key="index" style="text-align: none;"><label style="float:left; padding: 10px;" v-for="(v, ind) in ea" :key="ind">{{v}}</label></tr>
      </th>
    </table>
    <button @click="addMth">Add</button>
    <button @click="subMth">Subtract</button>
    <!-- <div>
      <div v-for="(a1, index) in arr1" :key="index">
          <label>{{a1}}</label>
      </div>
            <div v-for="(a1, index) in arr2" :key="index">
          <p>{{a1}}</p>
      </div>
            <div v-for="(a1, index) in arr3" :key="index">
          <p>{{a1}}</p>
      </div>
            <div v-for="(a1, index) in arr4" :key="index">
          <p>{{a1}}</p>
      </div>
            <div v-for="(a1, index) in arr5" :key="index">
          <p>{{a1}}</p>
      </div>
            <div v-for="(a1, index) in arr6" :key="index">
          <p>{{a1}}</p>
      </div>

    </div> -->
    <!-- <p>{{day}} </p>
    <p>{{date}}</p>
    <p>{{mth}}/</p>
    <p>{{year}}</p>
        <p>{{firstDayOfMth}}</p> -->
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: "PageIndex",
  data: () => {
    return {
      daysInAWeek: [],
      calendarDate: 0,
      day: "",
      date: "",
      mth: "",
      year: "",
      firstDayOfMth: "",
      arrayDates: [],
      arr1: [],
      arr2: [],
      arr3: [],
      arr4: [],
      arr5: [],
      arr6: [],
      allArr: [],
      currDateTime: ""
    };
  },
  mounted() {
    this.setDates();
  },
  methods: {
    setDates() {
      var date = new Date();
      this.currDateTime = date;
      this.day = date.getDay();
      this.date = date.getDate();
      var editDate = Math.abs(this.day - this.date);
      while (editDate > 7) {
        editDate -= 7;
      }
      this.firstDayOfMth = 7 - editDate;
      this.mth = date.getMonth() + 1;
      this.year = date.getFullYear();

      var noOfDaysInMth = new Date(this.year, this.mth, 0).getDate();
      var arr = [];
      for (var i = 0; i < noOfDaysInMth + this.firstDayOfMth; i++) {
        if (i < this.firstDayOfMth) {
          this.arrayDates.push(" ");
          arr.push(" ");
        } else {
          this.calendarDate++;
          var t = this.calendarDate;
          this.arrayDates.push(t);
          arr.push(t);
        }
      }
      this.arr1 = arr.slice(0, 7);
      this.arr2 = arr.slice(7, 14);
      this.arr3 = arr.slice(14, 21);
      this.arr4 = arr.slice(21, 28);
      this.arr5 = arr.slice(28, 35);
      this.arr6 = arr.slice(35, arr.length);
      this.allArr.push(
        this.arr1,
        this.arr2,
        this.arr3,
        this.arr4,
        this.arr5,
        this.arr6
      );
    },
    resetDates(v) {
      this.arr1 = [];
      this.arr2 = [];
      this.arr3 = [];
      this.arr4 = [];
      this.arr5 = [];
      this.arr6 = [];
      this.allArr = [];
      this.calendarDate = 0;
      var d = this.currDateTime;
      var dd = new Date(this.year, this.mth, 1);
      var dt = this.addMonths(dd, v);
      this.day = dt.getDay();
      this.date = 1;
      var editDate = Math.abs(this.day - this.date);
      while (editDate > 7) {
        editDate -= 7;
      }
      this.firstDayOfMth = 7 - editDate;

      var noOfDaysInMth = new Date(this.year, this.mth, 0).getDate();

      var arr = [];
      for (var i = 0; i < noOfDaysInMth + this.firstDayOfMth; i++) {
        if (i < this.firstDayOfMth) {
          this.arrayDates.push(" ");
          arr.push(" ");
        } else {
          this.calendarDate++;
          var t = this.calendarDate;
          this.arrayDates.push(t);
          arr.push(t);
        }
      }
      this.arr1 = arr.slice(0, 7);
      this.arr2 = arr.slice(7, 14);
      this.arr3 = arr.slice(14, 21);
      this.arr4 = arr.slice(21, 28);
      this.arr5 = arr.slice(28, 35);
      this.arr6 = arr.slice(35, arr.length);
      this.allArr.push(
        this.arr1,
        this.arr2,
        this.arr3,
        this.arr4,
        this.arr5,
        this.arr6
      );
      console.log(`${this.mth} mth, ${this.year} yr, ${dt} datetime`);
    },
    increaseIndex(index) {
      this.calendarDate++;
      if (index == this.day - 1) {
        return true;
      } else {
        return false;
      }
    },
    firstRow(index) {
      this.calendarDate = index + 1 - this.firstDayOfMth;
      return this.calendarDate;
    },
    check(ea) {
      console.log(ea);
      return ea;
    },
    addMth() {
      if (this.mth == 12) {
        this.mth = 1;
        this.year += 1;
      } else {
        this.mth++;
      }
      this.resetDates(1);
    },
    subMth() {
      if (this.mth == 1) {
        this.mth = 12;
        this.year -= 1;
      } else {
        this.mth--;
      }
      this.resetDates(-1);
    },
    addMonths(dt, n) {
      return new Date(dt.setMonth(dt.getMonth() + n));
    }
  }
};
</script>
