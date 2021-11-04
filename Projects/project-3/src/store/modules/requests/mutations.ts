import { IRequestsState, IRequests } from "@/types";

export default {
  setRequests(state: IRequestsState, payload: IRequests) {
    if (state.requests.some((request) => request.id === payload.id)) return;
    state.requests.push(payload);
  },
};
