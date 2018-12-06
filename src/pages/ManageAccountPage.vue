<template>
  <q-page class="" >
    <div>
        <button @click="addMth">Add</button>
        <label>   {{mth}}/{{year}}   </label>    
    <button @click="subMth">Subtract</button>
    </div>
    <table>
      <th>
        <tr>
          <label class="headerCells">Mon</label>
          <label class="headerCells">Tue</label>
          <label class="headerCells">Wed</label>
          <label class="headerCells">Thu</label>
          <label class="headerCells">Fri</label>
          <label class="headerCells">Sat</label>
          <label class="headerCells">Sun</label>
        </tr>
        <tr v-for="(ea,index) in allArr" :key="index">
          <button class="indvCells" v-for="(v, ind) in ea" :key="ind">{{v}}</button>
        </tr>
      </th>
    </table>

  </q-page>
</template>

<style>
.indvCells{
  float:left; 
  padding: 10px;
  width: 50px;
  height: 50px;
}

.headerCells{
  float:left; 
  padding: 10px;
  width: 50px;
}
</style>

<script>
export default {
  name: "PageIndex",
  data: () => {
    return {
      calendarDate: 0,
      mth: "",
      year: "",
      firstDayOfMth: "",
      arrayDates: [],
      allArr: []
    };
  },
  mounted() {
    this.setDates(true);
  },
  methods: {
    setDates(initialLoad) {
      // Initialization
      var date, day;
      this.allArr = [];
      this.calendarDate = 0;

      // Set Date based on inital vs Subsequent load
      if(initialLoad){
        date = new Date();
        day = date.getDay() + 1;
        this.mth = date.getMonth() + 1;
        this.year = date.getFullYear();
      }else{
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
      this.firstDayOfMth = 7 - editDate;
      if (this.firstDayOfMth == 0) this.firstDayOfMth = 1;

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
        } else if(i < noOfDaysInMth) {
          this.calendarDate++;
          var t = this.calendarDate;
          arr.push(t);
        }else{
          arr.push("");
        }
      }
      var arr1 = arr.slice(0, 7);
      var arr2 = arr.slice(7, 14);
      var arr3 = arr.slice(14, 21);
      var arr4 = arr.slice(21, 28);
      var arr5 = arr.slice(28, 35);
      var arr6 = arr.slice(35, 42);
      this.allArr.push(
        arr1,
        arr2,
        arr3,
        arr4,
        arr5,
        arr6
      );
      if(arr6[0] == ""){
        this.allArr.pop(arr6);
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
    }
  }
};
</script>
