<template>
  <div class="booking-dialog" @click="$emit('closeBookingDialog')">
    <section class="reservation" @click.stop>
      <h1>預約時段</h1>
      <form action="">
        <div class="inputs-wrapper">
          <div class="input-wrapper">
            <label for="name">姓名</label>
            <input
              type="text"
              id="name"
              placeholder="中 / 英文名"
              v-model="userBookingInfo.name"
              :class="{ pass: checkNameInput }"
            />
          </div>
          <div class="input-wrapper">
            <label for="phone">電話</label>
            <input
              type="text"
              id="phone"
              placeholder="09xxxxxxxx"
              v-model="userBookingInfo.tel"
              :class="{ pass: checkPhoneNumber }"
            />
          </div>
          <div class="input-wrapper">
            <label for="date-from">預約起迄</label>
            <div class="datepicker-wrapper">
              <Datepicker
                placeholder="入住日期"
                :value="startDate"
                @input="initDate"
                :format="DatePickerFormat"
                :language="language"
                :disabled-dates="disabledCheckInDates"
                :highlighted="highlighted"
                :inputClass="{ datePickerStyle: true, pass: startDate }"
              ></Datepicker>
              <span>~</span>
              <Datepicker
                @input="formatDateRange(startDate, endDate)"
                placeholder="退房日期"
                v-model="endDate"
                :format="DatePickerFormat"
                :language="language"
                :disabled-dates="disabledCheckOutDates"
                :inputClass="{ datePickerStyle: true, pass: endDate }"
                :disabled="!startDate"
                :highlighted="highlighted"
                :openDate="startDate || new Date()"
              ></Datepicker>
            </div>
          </div>
          <h4 class="hint">僅開放近 90 日內的預約</h4>
        </div>
        <div class="total">
          <div class="total-days">
            <div class="total-days-normal">
              <span>平日時段</span>
              <span>{{ sumNormalDays }} 夜</span>
            </div>
            <div class="total-days-holiday">
              <span>假日時段</span>
              <span>{{ sumHolidays }} 夜</span>
            </div>
          </div>
          <div class="total-price">
            = NT.{{
              sumNormalDays * normalDayPrice + sumHolidays * holidayPrice
            }}
          </div>
        </div>
        <div class="buttons-wrapper">
          <button
            @click.prevent="$emit('closeBookingDialog')"
            type="button"
            class="cancel-button"
          >
            取消
          </button>
          <button
            class="confirm-button"
            :class="{ pass: isConfirmButtonDisabled }"
            :disabled="!isConfirmButtonDisabled"
            @click.prevent="
              $emit('closeBookingDialog');
              $emit('confirmBooking', userBookingInfo);
            "
          >
            確定預約
          </button>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";

export default {
  name: "BookingDialog",
  components: {
    Datepicker
  },
  props: {
    datesHaveBeenBooked: {
      type: Object,
      required: true
    },
    normalDayPrice: {
      type: Number,
      required: true
    },
    holidayPrice: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      startDate: "",
      endDate: "",
      sumNormalDays: 0,
      sumHolidays: 0,
      userBookingInfo: {
        name: "",
        tel: "",
        date: []
      },
      DatePickerFormat: "yyyy/MM/dd",
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
  methods: {
    initDate(value) {
      this.startDate = value;
      this.endDate = "";
      this.sumNormalDays = 0;
      this.sumHolidays = 0;
    },
    formatDateRange(startDate, endDate = startDate) {
      let dates = [];
      const theStartDate = new Date(startDate);
      while (theStartDate < endDate) {
        const date = theStartDate.getDate();
        dates.push(
          theStartDate
            .toLocaleDateString("zh-Hans-CN", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit"
            })
            .split("/")
            .join("-")
        );
        theStartDate.setDate(date + 1);
      }
      this.userBookingInfo.date = dates;
      this.getTotalDays();
    },
    getTotalDays() {
      this.sumNormalDays = 0;
      this.sumHolidays = 0;
      this.userBookingInfo.date.map(date => {
        const day = new Date(date).getDay();
        if (day > 0 && day < 5) {
          this.sumNormalDays++;
        } else {
          this.sumHolidays++;
        }
      });
    }
  },
  computed: {
    highlighted() {
      return {
        to: new Date(this.endDate) || new Date(),
        from: new Date(this.startDate) || new Date(),
        includeDisabled: true
      };
    },
    disabledCheckInDates() {
      return {
        dates: this.datesHaveBeenBooked.dates,
        customPredictor: function(date) {
          const now = Date.now();
          const totalSecondsADay = 60 * 60 * 24 * 1000;
          const totalSecondsOfNintyDays = totalSecondsADay * 90;
          if (
            date.getTime() > now + totalSecondsOfNintyDays ||
            Date.now() > date
          )
            return true;
        }
      };
    },
    disabledCheckOutDates() {
      return {
        to: new Date(this.startDate),
        dates: [...this.datesHaveBeenBooked.dates, new Date(this.startDate)],
        customPredictor: function(date) {
          // if (Date.now() > date) return true;
          const now = Date.now();
          const totalSecondsADay = 60 * 60 * 24 * 1000;
          const totalSecondsOfNintyDays = totalSecondsADay * 90;
          if (
            date.getTime() > now + totalSecondsOfNintyDays ||
            Date.now() > date
          )
            return true;
        }
      };
    },
    checkNameInput() {
      return /^[A-z|\u4e00-\u9fa5]+/.test(this.userBookingInfo.name);
    },
    checkPhoneNumber() {
      return /^09\d{8}$/.test(this.userBookingInfo.tel);
    },
    isConfirmButtonDisabled() {
      return (
        this.checkNameInput &&
        this.checkPhoneNumber &&
        this.startDate &&
        this.endDate
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.booking-dialog {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  section {
    width: 90%;
    max-width: 420px;
    padding: 30px 0 20px;
    background-color: #fff;
    h1 {
      position: relative;
      margin-bottom: 30px;
      padding: 0 35px;
      font-size: 24px;
      letter-spacing: 2px;
      font-weight: 500;
      &:before {
        content: "";
        position: absolute;
        bottom: -25px;
        width: 43px;
        height: 10px;
        background-image: repeating-linear-gradient(
          45deg,
          transparent 3px 8px,
          #333 8px 9px,
          transparent 9px 13px
        );
      }
    }
    .inputs-wrapper {
      padding: 30px 35px;
    }
    .input-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
      label {
        flex: 2;
        margin: 0;
        font-weight: 600;
        font-size: 15px;
        letter-spacing: 1px;
      }
      input {
        flex: 5;
        height: 32px;
        padding: 0 6px;
        font-size: 15px;
        color: #333;
        border: 1px solid #f15112;
        border-radius: 5px;
      }
      input:focus {
        &::placeholder {
          font-size: 0;
        }
      }
      input.pass {
        border: 1px solid #c9c9c9;
      }
    }
    .datepicker-wrapper {
      flex: 5.3;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    ::v-deep .datePickerStyle {
      width: 95px;
      height: 32px;
      font-size: 13px;
      border: 1px solid #f15112;
      border-radius: 5px;
      text-align: center;
    }
    ::v-deep .datePickerStyle.pass {
      border: 1px solid #c9c9c9;
    }
  }
}

.hint {
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1px;
  color: #666;
}

.total {
  &-days {
    padding: 20px 35px;
    background: #ededed;
    > div {
      display: flex;
      justify-content: space-between;
    }
  }
  &-price {
    padding: 15px 35px;
    font-size: 26px;
    color: #ff5c5c;
    letter-spacing: 2.72px;
    text-align: right;
    word-spacing: 20px;
  }
}
.buttons-wrapper {
  display: flex;
  justify-content: space-between;
  padding: 15px 35px;
  button {
    padding: 10px 25px;
    letter-spacing: 1.5px;
    font-size: 14px;
    outline: none;
  }
  .cancel-button {
    background: #d8d8d8;
    color: #6d7278;
  }
  .confirm-button {
    background: #cecdcd;
    color: #fff;
    cursor: not-allowed;
  }
  .confirm-button.pass {
    background: #484848;
    cursor: pointer;
  }
}
</style>
