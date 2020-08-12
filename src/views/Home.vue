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
import HeaderContent from "@/components/HeaderContent";
import Carousel from "@/components/Carousel";
import RoomCards from "@/components/RoomCards";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    HeaderContent,
    Carousel,
    RoomCards
  },
  methods: {
    ...mapActions(["getAllRoomsInfo"])
  },
  created() {
    this.getAllRoomsInfo();
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
