import Axios from "@/api/config.js";

export default {
  async getAllRoomsInfo({ commit }) {
    const allRooms = await Axios.get("rooms");
    commit("setAllRoomsInfo", allRooms.data.items);
  },
  async getRoomInfo({ commit }, roomId) {
    const roomInfo = await Axios.get(`room/${roomId}`);
    commit("setRoomInfo", roomInfo.data);
    return roomInfo;
  },
  async postBooking({ dispatch, commit }, { roomId, userBookingInfo }) {
    try {
      await Axios.post(`room/${roomId}`, userBookingInfo);
      commit("setBookingStatus", "success");
      dispatch("getRoomInfo", roomId);
    } catch (error) {
      commit("setBookingStatus", "fail");
    }
  }
};
