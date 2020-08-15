export default {
  setAllRoomsInfo({ state }, allRoomsInfo) {
    state.allRooms = allRoomsInfo;
  },
  setRoomInfo({ state }, roomInfo) {
    state.room = roomInfo.room;
    state.booking = roomInfo.booking;
  },
  setBookingStatus({ state }, bookingStatus) {
    state.bookingStatus = bookingStatus;
  },
  resetBookingStatus({ state }) {
    state.bookingStatus = "";
  }
};
