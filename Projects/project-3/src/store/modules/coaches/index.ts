import Getters from "./getters";
import Mutations from "./mutations";
import Actions from "./actions";
import { ICoachState } from "@/types";

export default {
  namespaced: true,
  state(): ICoachState {
    return {
      coaches: [
        {
          id: "1",
          firstName: "Maximilian",
          lastName: "Schwarzmüller",
          areas: ["frontend", "backend", "career"],
          description:
            "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 30,
        },
        {
          id: "2",
          firstName: "Julie",
          lastName: "Jones",
          areas: ["frontend", "career"],
          description:
            "I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.",
          hourlyRate: 30,
        },
      ],
    };
  },
  getters: Getters,
  mutations: Mutations,
  actions: Actions,
};
