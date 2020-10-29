import Vue from "vue";
import Vuex from "vuex";
import Axios from "@/api/config.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allRooms: [],
    room: [],
    booking: [],
    bookingStatus: ""
  },
  mutations: {
    setAllRoomsInfo(state, allRoomsInfo) {
      state.allRooms = allRoomsInfo;
    },
    setRoomInfo(state, roomInfo) {
      state.room = roomInfo.room;
      state.booking = roomInfo.booking;
    },
    setBookingStatus(state, bookingStatus) {
      state.bookingStatus = bookingStatus;
    },
    resetBookingStatus(state) {
      state.bookingStatus = "";
    }
  },
  actions: {
    async getAllRoomsInfo({ commit }) {
      try {
        const response = await Axios.get("rooms");
        commit("setAllRoomsInfo", response.data.items);
      } catch (error) {
        return error.response;
      }
    },
    async getRoomInfo({ commit }, roomId) {
      try {
        const response = await Axios.get(`room/${roomId}`);
        commit("setRoomInfo", response.data);
      } catch (error) {
        return error.response;
      }
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
  },
  getters: {
    allRooms(state) {
      return state.allRooms;
    },
    roomInfo(state) {
      return state.room[0];
    },
    datesHaveBeenBooked(state) {
      return {
        dates: state.booking.map(value => {
          return new Date(value.date);
        })
      };
    },
    bookingStatus(state) {
      return state.bookingStatus;
    }
  }
});
