<template>
  <b-container class="p-0" fluid>
    <b-row class="header" no-gutters>
      <b-col cols="8">
        <div
          class="bgImage hasLogo"
          :style="{ backgroundImage: `url(${roomInfo.imageUrl[0]})` }"
          @click.stop="openCarouselLightBox(0)"
        >
          <div class="logo" @click.stop="$router.back()">WhiteSpace</div>
        </div>
      </b-col>
      <b-col cols="4" class="d-flex flex-column">
        <div
          class="bgImage"
          :style="{ backgroundImage: `url(${roomInfo.imageUrl[1]})` }"
          @click.stop="openCarouselLightBox(1)"
        ></div>
        <div
          class="bgImage"
          :style="{ backgroundImage: `url(${roomInfo.imageUrl[2]})` }"
          @click.stop="openCarouselLightBox(2)"
        ></div>
      </b-col>
    </b-row>
    <b-row class="roomInfo" no-gutters>
      <b-col cols="12" md="8" xl="6" class="my-2">
        <section class="description">
          <h1>{{ roomInfo.name }}</h1>
          <h3>
            房客人數限制： {{ roomInfo.descriptionShort.GuestMin }}~{{
              roomInfo.descriptionShort.GuestMax
            }}
            人
          </h3>
          <h3>
            床型：{{ roomInfo.descriptionShort.Bed[0] }} *
            {{ roomInfo.descriptionShort.Bed.length }}
          </h3>
          <h3>衛浴數量： {{ roomInfo.descriptionShort["Private-Bath"] }} 間</h3>
          <h3>房間大小： {{ roomInfo.descriptionShort.Footage }} 平方公尺</h3>
          <p>{{ roomInfo.description }}</p>
          <div class="divider"></div>
          <div class="checkInAndOut">
            <div class="checkIn">
              <h2>Check In</h2>
              <h3>
                {{ roomInfo.checkInAndOut.checkInEarly }} ─
                {{ roomInfo.checkInAndOut.checkInLate }}
              </h3>
            </div>
            <div class="checkOut">
              <h2>Check Out</h2>
              <h3>{{ roomInfo.checkInAndOut.checkOut }}</h3>
            </div>
          </div>
        </section>
        <Amenities :roomInfo="roomInfo"></Amenities>
      </b-col>
      <b-col cols="8" sm="5" md="4" xl="2" class="my-2">
        <div class="prices">
          <div class="normal-price">
            <h2>NT.{{ roomInfo.normalDayPrice }}</h2>
            <h3>平日(一~四)</h3>
          </div>
          <div class="holiday-price">
            <h2>NT.{{ roomInfo.holidayPrice }}</h2>
            <h3>假日(五~日)</h3>
          </div>
        </div>
      </b-col>
      <b-col cols="12" sm="8" md="7" lg="5" xl="4" class="my-2">
        <h3 class="calendar-hint">
          顯示近 90 日的房間預訂狀態，劃線代表已被預訂
        </h3>
        <Calendar :highlighted="datesHaveBeenBooked"></Calendar>
        <button class="reservation-button" @click="isShowBookingDialog = true">
          預約時段
        </button>
      </b-col>
    </b-row>
    <transition name="dialog" mode="out-in">
      <CarouselLightBox
        v-if="isShowCarouselLightBox"
        @closeLightbox="isShowCarouselLightBox = false"
        :roomUrls="roomInfo.imageUrl"
        :nowImageIndex="nowImageIndex"
        :roomName="roomInfo.name"
      ></CarouselLightBox>
    </transition>
    <transition name="dialog" mode="out-in">
      <BookingDialog
        v-if="isShowBookingDialog"
        @confirmBooking="confirmBooking"
        @closeBookingDialog="isShowBookingDialog = false"
        :datesHaveBeenBooked="datesHaveBeenBooked"
        :normalDayPrice="roomInfo.normalDayPrice"
        :holidayPrice="roomInfo.holidayPrice"
      ></BookingDialog>
    </transition>
    <transition name="dialog" mode="out-in">
      <BookingResult
        v-if="isShowBookingResult"
        @closeBookingResult="closeBookingResult"
        :bookingStatus="bookingStatus"
        :roomId="roomId"
      ></BookingResult>
    </transition>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
import Calendar from "@/components/RoomInfo/Calendar";
import CarouselLightBox from "@/components/RoomInfo/LightBox_Carousel";
import Amenities from "@/components/RoomInfo/Amenities";
import BookingDialog from "@/components/RoomInfo/BookingDialog";
import BookingResult from "@/components/RoomInfo/BookingResult";

export default {
  components: {
    Calendar,
    CarouselLightBox,
    Amenities,
    BookingDialog,
    BookingResult
  },
  data() {
    return {
      roomId: this.$route.params.id,
      isShowCarouselLightBox: false,
      isShowBookingDialog: false,
      isShowBookingResult: false,
      nowImageIndex: 0,
      roomInfo: this.$store.getters.roomInfo
    };
  },
  methods: {
    openCarouselLightBox(imageIndex) {
      this.isShowCarouselLightBox = true;
      this.nowImageIndex = imageIndex;
    },
    confirmBooking(userBookingInfo) {
      this.$store.dispatch("postBooking", {
        roomId: this.roomId,
        userBookingInfo: userBookingInfo
      });
      this.isShowBookingResult = true;
    },
    closeBookingResult() {
      this.isShowBookingResult = false;
      this.$store.commit("resetBookingStatus");
    }
  },
  computed: {
    ...mapGetters(["roomInfo", "datesHaveBeenBooked", "bookingStatus"])
  }
};
</script>

<style lang="scss" scoped>
.header {
  height: 80vh;
  box-shadow: 2px 4px 9px 0 rgba(0, 0, 0, 0.18);
  cursor: pointer;
}

.bgImage {
  height: 100%;
  background-size: cover;
  background-position: 50% 50%;
}

.bgImage.hasLogo {
  padding: 40px 0 0 65px;
}

.logo {
  position: relative;
  width: 150px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  border: 1px solid #000;
  font-size: 18px;
  color: #000;
  font-weight: 500;
  background-color: rgba(255, 255, 255, 0.30);
  z-index: 5;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 50px;
    left: -15px;
    bottom: 5px;
    background-image: repeating-linear-gradient(
      45deg,
      transparent 0px,
      transparent 2px,
      #333 2px,
      #333 3px,
      transparent 3px,
      transparent 5px
    );
    clip-path: polygon(0 0, 100% 0, 100% 10px, 15px 10px, 15px 100%, 0 100%);
  }
}

.roomInfo {
  padding: 50px 5%;
  h1 {
    margin-bottom: 30px;
    font-size: 30px;
    letter-spacing: 3px;
  }

  h3 {
    margin-bottom: 15px;
    font-size: 14px;
    font-weight: 400;
  }
}

.description {
  .divider {
    width: 43px;
    height: 10px;
    margin: 30px 0;
    background-image: repeating-linear-gradient(
      45deg,
      transparent 3px,
      transparent 7px,
      #333 7px,
      #333 9px,
      transparent 9px,
      transparent 13px
    );
  }
  p {
    word-spacing: 2px;
    margin-top: 20px;
  }
}

.checkInAndOut {
  display: flex;
  .checkIn {
    margin-right: 100px;
  }
  h2 {
    font-size: 15px;
    font-weight: 300;
  }
  h3 {
    font-size: 20px;
    letter-spacing: 2px;
    font-weight: 300;
  }
}

.prices {
  padding: 0 30px;
  margin-left: auto;
  text-align: right;
  h2 {
    font-weight: 300;
    letter-spacing: 2px;
  }
  h3 {
    font-size: 14px;
    color: #6D7278;
  }
  .holiday-price h2 {
    font-size: 16px;
  }
}

.reservation-button {
  position: relative;
  width: 120px;
  padding: 15px 0;
  margin-top: 25px;
  color: #fff;
  font-weight: 300;
  letter-spacing: 1px;
  background: #575757;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 8px;
    right: -7px;
    background-image: repeating-linear-gradient(
      45deg,
      transparent 0px,
      transparent 2px,
      #575757 2px,
      #575757 3px,
      transparent 3px,
      transparent 5px
    );
    clip-path: polygon(
      110px 0,
      100% 0,
      100% 100%,
      110px 100%,
      2px 100%,
      2px 45px,
      110px 45px
    );
  }
}

.calendar-hint {
  margin-bottom: 15px;
  letter-spacing: 1px;
  text-align: center;
  font-size: 17px;
  font-weight: normal;
  color: #666;
}

.dialog-enter-active,
.dialog-leave-active {
  transition: opacity 0.4s;
}
.dialog-enter,
.dialog-leave-to {
  opacity: 0;
}
</style>
