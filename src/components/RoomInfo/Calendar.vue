<template>
  <Datepicker
    :inline="true"
    :language="language"
    :format="DatePickerFormat"
    :highlighted="highlighted"
    :disabled-dates="daysOut90Days"
    calendar-class="calendarStyle"
  ></Datepicker>
</template>

<script>
import Datepicker from "vuejs-datepicker";

export default {
  components: {
    Datepicker
  },
  props: {
    highlighted: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      DatePickerFormat: "yyyy-MM-dd",
      daysOut90Days: {
        customPredictor: function(date) {
          if (Date.now() > date) return true;
        }
      },
      language: {
        language: "Chinese",
        days: ["日", "一", "二", "三", "四", "五", "六"],
        ymd: true,
        yearSuffix: " /",
        months: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
        monthsAbbr: [
          "1",
          "2",
          "3",
          "4",
          "5",
          "6",
          "7",
          "8",
          "9",
          "10",
          "11",
          "12"
        ]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
::v-deep .calendarStyle {
  width: 100%;
  padding: 10px;
  border: none;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.15);
  background-color: #f7f7f7;
  color: #6d7278;
  .day__month_btn {
    pointer-events: none;
  }
  .cell {
    line-height: 40px;
    margin: 5px 0;
    pointer-events: none;
  }
  .cell.day-header {
    font-size: 18px;
  }
  .day__month_btn {
    font-size: 17px;
    font-weight: 500;
    color: #000;
  }
  .cell.highlighted {
    background-color: transparent;
    background-image: repeating-linear-gradient(
      45deg,
      transparent 0px,
      transparent 2px,
      #333 2px,
      #333 3px,
      transparent 3px,
      transparent 5px
    );
    border: none;
  }
}
</style>
