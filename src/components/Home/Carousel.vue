<template>
  <b-carousel :interval="4000">
    <b-carousel-slide
      v-for="room in allRooms"
      :key="room.id"
      :img-src="room.imageUrl"
    ></b-carousel-slide>
  </b-carousel>
</template>

<script>
export default {
  name: "Carousel",
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
