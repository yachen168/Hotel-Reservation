<template>
  <figure class="card" @click="$emit('toRoomDetailPage', room.id)">
    <div
      class="image"
      :style="{ backgroundImage: `url(${room.imageUrl})` }"
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
</template>

<script>
export default {
  props: {
    room: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
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
    transition: 0.5s;
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
  }
  h1 {
    margin-bottom: 20px;
  }
  .prices {
    transform: translateY(0px);
  }
}
</style>
