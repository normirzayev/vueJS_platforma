import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      data: [
        {
          id: 1,
          name: "comp",
          soni: 0,
        },
        {
          id: 2,
          name: "comp2",
          soni: 0,
        },
        {
          id: 3,
          name: "comp3",
          soni: 0,
        },
        {
          id: 4,
          name: "comp4",
          soni: 0,
        },
      ],
    };
  },
  mutations: {
    plus(state, id) {
      console.log(id);
      state.data = state.data.map((item) => {
        return item.id === id ? { ...item, soni: item.soni + 1 } : item;
      });
    },
    minus(state, id) {
      state.data = state.data.map((item) => {
        return item.id === id && item.soni > 0 ? { ...item, soni: item.soni - 1 } : item;
      });
    },
  },
});
export default store;
