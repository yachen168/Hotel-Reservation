import Axios from "@/api/config.js";

export default {
  async getAllRoomsInfo({ commit }) {
    const response = await Axios.get("rooms");
    commit("setAllRoomsInfo", response.data.items);
  },
  async getRoomInfo({ commit }, roomId) {
    const response = await Axios.get(`room/${roomId}`);
    commit("setRoomInfo", response.data);
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
