<template>
  <div class="home">
    <header>
      <Carousel :allRooms="$store.getters.allRooms"></Carousel>
      <HeaderContent></HeaderContent>
    </header>
    <main>
      <b-container fluid>
        <b-row class="room-cards-wrapper">
          <b-col
            v-for="room in $store.getters.allRooms"
            :key="room.id"
            cols="12"
            sm="6"
            lg="4"
            class="mb-5"
          >
            <RoomCards
              :room="room"
              @toRoomDetailPage="toRoomDetailPage"
            ></RoomCards>
          </b-col>
        </b-row>
      </b-container>
    </main>
  </div>
</template>

<script>
import HeaderContent from "@/components/Home/HeaderContent";
import Carousel from "@/components/Home/Carousel";
import RoomCards from "@/components/Home/RoomCards";

export default {
  components: {
    HeaderContent,
    Carousel,
    RoomCards
  },
  methods: {
    toRoomDetailPage(roomId) {
      this.$router.push({
        name: "RoomInfo",
        params: { id: roomId }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.room-cards-wrapper {
  justify-content: center;
  max-width: 950px;
  margin: 0 auto;
  transform: translateY(-50px);
}
</style>
