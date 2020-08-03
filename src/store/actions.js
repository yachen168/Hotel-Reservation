import Axios from "@/api/config.js";

export default {
  async getAllRoomsInfo(context) {
    const allRooms = await Axios.get("rooms");
    context.commit("setAllRoomsInfo", allRooms.data.items);
  },
  async getRoomInfo(context, roomId) {
    const roomInfo = await Axios.get(`room/${roomId}`);
    context.commit("setRoomInfo", roomInfo.data);
  }
};
