export default {
  allRooms({ state }) {
    return state.allRooms;
  },
  roomInfo({ state }) {
    return state.room[0];
  }
};
