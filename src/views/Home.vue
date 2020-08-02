<template>
  <div class="home">
    <header>
      <Carousel :allRooms="allRooms"></Carousel>
      <HeaderContent></HeaderContent>
    </header>
    <RoomCards :allRooms="allRooms"></RoomCards>
  </div>
</template>

<script>
import HeaderContent from "@/components/HeaderContent";
import Carousel from "@/components/Carousel";
import RoomCards from "@/components/RoomCards";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    HeaderContent,
    Carousel,
    RoomCards
  },
  methods: {
    ...mapActions({
      getAllRooms: "getAllRooms"
    })
  },
  created() {
    this.getAllRooms();
  },
  computed: {
    ...mapState({
      allRooms: state => state.state.allRooms
    })
  }
};
</script>

<style lang="scss" scoped>
header {
  position: relative;
}
</style>
