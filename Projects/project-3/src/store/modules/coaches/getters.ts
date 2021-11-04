import { ICoachState } from "@/types";

export default {
  coaches(state: ICoachState) {
    return state.coaches;
  },
  hasCoaches(state: ICoachState) {
    return state.coaches && state.coaches.length > 0;
  },
};
