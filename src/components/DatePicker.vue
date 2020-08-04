<template>
  <div>
    <datepicker
      :inline="true"
      :language="language"
      :format="DatePickerFormat"
      :highlighted="highlighted"
      :calendar-class="{ calendarClass: true }"
    ></datepicker>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";

export default {
  components: {
    Datepicker
  },
  data() {
    return {
      DatePickerFormat: "yyyy-MM-dd",
      highlighted: {
        customPredictor: function(date) {
          if (date.getDate() % 4 == 0) {
            return true;
          }
        },
        includeDisabled: true // Highlight disabled dates
      },
      language: {
        language: "Chinese",
        days: ["日", "一", "二", "三", "四", "五", "六"],
        ymd: "yyyy-MM-dd",
        yearSuffix: "年",
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
::v-deep .calendarClass {
  border: none;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.15);
  padding: 10px;
  width: 100%;
  min-width: 360px;
  background-color: #F7F7F7;
  color: #6d7278;
  .cell {
    width: 28px;
    height: 30px;
    margin: 10px;
    padding: 0;
    line-height: 30px;
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
    border:none;
  }
}
</style>
