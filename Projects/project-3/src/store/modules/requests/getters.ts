import { IRequestsState } from "@/types";

export default {
  requests(state: IRequestsState) {
    return state.requests;
  },
  hasRequests(state: IRequestsState) {
    return state.requests && state.requests.length > 0;
  },
};
