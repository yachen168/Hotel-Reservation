export default {
  allRooms({ state }) {
    return state.allRooms;
  },
  roomInfo({ state }) {
    return state.room[0];
  },
  datesHaveBeenBooked({ state }) {
    return state.booking.map(value => {
      return new Date(value.date);
    });
  }
};
