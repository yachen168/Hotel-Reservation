<template>
  <div>
    <h3 class="hint">顯示近 90 日的房間預訂狀態，劃線代表已被預訂</h3>
    <Datepicker
      :inline="true"
      :language="language"
      :format="DatePickerFormat"
      :highlighted="highlighted"
      :disabled-dates="disabledDates"
      :calendar-class="{ calendarClass: true }"
      :bootstrap-styling="true"
      :class="{ selected: true, disabled: true }"
    ></Datepicker>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";

export default {
  components: {
    Datepicker
  },
  props: {
    datesHaveBeenBooked: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      DatePickerFormat: "yyyy-MM-dd",
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
  },
  computed: {
    highlighted() {
      return {
        dates: this.datesHaveBeenBooked
      };
    },
    disabledDates() {
      return {
        to: new Date(Date.now() - 8640000),
        customPredictor: function(date) {
          const daysFromNow =
            (date.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24.0);

          if (daysFromNow > 90) return true; // 未來 90 天
        }
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.hint {
  margin-bottom: 15px;
  letter-spacing: 1px;
  text-align: center;
  font-size: 17px;
  font-weight: normal;
  color: #666;
}
::v-deep .calendarClass {
  width: 100%;
  padding: 10px;
  border: none;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.15);
  background-color: #f7f7f7;
  color: #6d7278;
  .cell {
    line-height: 40px;
    margin: 5px 0;
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
