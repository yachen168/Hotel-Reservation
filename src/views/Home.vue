<template>
  <div class="home">
    <header>
      <Carousel :allRooms="allRooms"></Carousel>
      <HeaderContent></HeaderContent>
    </header>
    <main>
      <RoomCards :allRooms="allRooms"></RoomCards>
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import HeaderContent from "@/components/Home/HeaderContent";
import Carousel from "@/components/Home/Carousel";
import RoomCards from "@/components/Home/RoomCards";

export default {
  components: {
    HeaderContent,
    Carousel,
    RoomCards
  },
  computed: {
    ...mapGetters(["allRooms"])
  }
};
</script>

<style lang="scss" scoped>
header {
  position: relative;
}
</style>
