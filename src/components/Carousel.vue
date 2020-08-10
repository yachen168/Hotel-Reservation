<template>
  <b-carousel
    id="carousel-1"
    v-model="slide"
    :interval="4000"
    img-height="500"
    style="text-shadow: 1px 1px 2px #333;"
  >
    <b-carousel-slide
      v-for="room in allRooms"
      :key="room.id"
      :img-src="room.imageUrl"
    ></b-carousel-slide>
  </b-carousel>
</template>

<script>
export default {
  props: {
    allRooms: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
::v-deep img {
  height: 85vh;
  object-fit: cover;
  object-position: 50% 100%;
}
</style>
