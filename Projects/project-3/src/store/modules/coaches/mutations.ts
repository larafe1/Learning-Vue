import { ICoachState, ICoach } from "@/types";

export default {
  setCoaches(state: ICoachState, payload: ICoach) {
    if (state.coaches.some((coach) => coach.id === payload.id)) return;
    state.coaches.push(payload);
  },
};
