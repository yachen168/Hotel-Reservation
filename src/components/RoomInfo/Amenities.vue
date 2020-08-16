<template>
  <b-row class="amenities">
    <b-col cols="12" sm="4" class="amenities-column px-3">
      <h4
        class="amenities-item"
        :class="{ serve: roomInfo.amenities['Wi-Fi'] }"
      >
        <font-awesome-icon icon="wifi" />Wi-Fi
      </h4>
      <h4
        class="amenities-item"
        :class="{ serve: roomInfo.amenities['Breakfast'] }"
      >
        <font-awesome-icon icon="utensils" />早餐
      </h4>
      <h4
        class="amenities-item"
        :class="{ serve: roomInfo.amenities['Mini-Bar'] }"
      >
        <font-awesome-icon icon="cocktail" />Bini Bar
      </h4>
      <h4
        class="amenities-item"
        :class="{ serve: roomInfo.amenities['Room-Service'] }"
      >
        <font-awesome-icon icon="concierge-bell" />Room Service
      </h4>
    </b-col>
    <b-col cols="12" sm="4" class="amenities-column">
      <h4
        class="amenities-item"
        :class="{ serve: roomInfo.amenities['Television'] }"
      >
        <font-awesome-icon icon="phone" />電話
      </h4>
      <h4
        class="amenities-item"
        :class="{ serve: roomInfo.amenities['Air-Conditioner'] }"
      >
        <font-awesome-icon icon="wind" />空調
      </h4>
      <h4
        class="amenities-item"
        :class="{ serve: roomInfo.amenities['Refrigerator'] }"
      >
        <font-awesome-icon icon="temperature-low" />冰箱
      </h4>
      <h4 class="amenities-item" :class="{ serve: roomInfo.amenities['Sofa'] }">
        <font-awesome-icon icon="couch" />沙發
      </h4>
    </b-col>
    <b-col cols="12" sm="4" class="amenities-column">
      <h4
        class="amenities-item"
        :class="{ serve: roomInfo.amenities['Great-View'] }"
      >
        <font-awesome-icon icon="mountain" />漂亮的視野
      </h4>
      <h4
        class="amenities-item"
        :class="{ serve: roomInfo.amenities['Smoke-Free'] }"
      >
        <font-awesome-icon icon="smoking" />禁止吸煙
      </h4>
      <h4
        class="amenities-item"
        :class="{ serve: roomInfo.amenities['Child-Friendly'] }"
      >
        <font-awesome-icon icon="baby" />適合兒童
      </h4>
      <h4
        class="amenities-item"
        :class="{ serve: roomInfo.amenities['Pet-Friendly'] }"
      >
        <font-awesome-icon icon="dog" />寵物攜帶
      </h4>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    roomInfo: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.amenities {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 15px;
  margin-top: 40px;
  background-color: $gray-300;
  &-item {
    display: flex;
    align-items: center;
    padding: 15px;
    min-width: 30%;
  }
  h4 {
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    color: rgb(184, 184, 184);
    letter-spacing: 1.5px;
    svg {
      display: inline-block;
      width: 20px;
      margin-right: 15px;
      font-size: 18px;
    }
  }
  h4.serve {
    color: $black;
  }
}
</style>
