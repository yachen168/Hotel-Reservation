<template>
  <b-row class="room-cards mx-auto">
    <b-col
      cols="10"
      sm="6"
      md="4"
      class="mb-5"
      v-for="room in allRooms"
      :key="room.id"
    >
      <figure class="card" @click="toRoomDetail(room.id)">
        <div
          class="image"
          :style="{ backgroundImage: 'url(' + room.imageUrl + ')' }"
        ></div>
        <figcaption class="card-footer">
          <h1>{{ room.name }}</h1>
          <div class="prices">
            <h2 class="normal-price">
              <span>NT.{{ room.normalDayPrice }}</span> 平日
            </h2>
            <h2 class="holiday-price">NT.{{ room.holidayPrice }} 假日</h2>
          </div>
        </figcaption>
      </figure>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    allRooms: {
      type: Array,
      required: true
    }
  },
  methods: {
    toRoomDetail(roomId) {
      this.$router.push({
        name: "RoomInfo",
        params: { id: roomId }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.room-cards {
  justify-content: center;
  max-width: 950px;
  margin: 0 auto;
  padding: 0 10px;
  transform: translateY(-100px);
}

.card {
  display: flex;
  height: 350px;
  box-shadow: 2px 2px 9px 0 rgba(0, 0, 0, 0.18);
  cursor: pointer;
  .image {
    flex: 10;
    background-size: cover;
    background-position: 50% 50%;
    img {
      object-fit: fill;
      width: 100%;
    }
  }
  &-footer {
    flex: 1;
    padding: 20px;
    overflow: hidden;
    h1 {
      margin-bottom: 0;
      letter-spacing: 2px;
      font-size: 16px;
      font-weight: 300;
      line-height: 28px;
      transition: 0.5s;
    }
    .prices {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      transition: 0.5s;
      transform: translateY(50px);
      .normal-price {
        font-size: 14px;
        font-weight: 300;
        letter-spacing: 2px;
        span {
          font-size: 20px;
        }
      }
      .holiday-price {
        font-size: 14px;
        font-weight: 300;
      }
    }
  }
}

.card:hover {
  .card-footer {
    flex: 3;
    transition: 0.5s;
  }
  h1 {
    margin-bottom: 20px;
  }
  .prices {
    transform: translateY(0px);
  }
}
</style>
