<template>
  <div class="home">
    <header>
      <Carousel :allRooms="allRooms"></Carousel>
      <HeaderContent></HeaderContent>
    </header>
    <main>
      <b-row class="room-cards-wrapper mx-auto">
        <b-col
          v-for="room in allRooms"
          :key="room.id"
          cols="10"
          sm="6"
          md="4"
          class="mb-5"
        >
          <RoomCards :room="room"></RoomCards>
        </b-col>
      </b-row>
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
  created() {
    console.log(this.allRooms);
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

.room-cards-wrapper {
  justify-content: center;
  max-width: 950px;
  margin: 0 auto;
  padding: 0 10px;
  transform: translateY(-100px);
}
</style>
