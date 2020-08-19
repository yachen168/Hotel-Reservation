<template>
  <div class="booking-result">
    <b-overlay :show="!bookingStatus" class="position-absolute"></b-overlay>
    <section v-if="bookingStatus === 'success'">
      <h1>預約成功</h1>
      <div class="icon">
        <font-awesome-icon icon="check-circle"></font-awesome-icon>
      </div>
      <button class="close-button" @click.prevent.stop="closeBookingResult">
        回頁面
      </button>
    </section>
    <section v-if="bookingStatus === 'fail'">
      <h1>預約失敗</h1>
      <p>預約時間已被人預定</p>
      <button class="close-button" @click.prevent.stop="closeBookingResult">
        返回
      </button>
    </section>
  </div>
</template>

<script>
export default {
  name: "bookingResult",
  props: {
    bookingStatus: {
      type: String,
      required: true
    },
    roomId: {
      type: String,
      required: true
    }
  },
  methods: {
    closeBookingResult() {
      this.$emit("closeBookingResult");
    }
  }
};
</script>

<style lang="scss" scoped>
.close-button {
  display: block;
  margin-left: auto;
  padding: 7px 20px;
  background-color: #484848;
  color: $white;
  font-size: 16px;
  letter-spacing: 1px;
  outline: none;
}
.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  font-size: 60px;
  color: $green-100;
}

.booking-result {
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
    padding: 35px 40px;
    background-color: #fff;
    h1 {
      position: relative;
      margin-bottom: 30px;
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
          transparent 3px,
          transparent 8px,
          #333 8px,
          #333 9px,
          transparent 9px,
          transparent 13px
        );
      }
    }
    p {
      padding-top: 25px;
      font-size: 14px;
    }
  }
}
</style>
