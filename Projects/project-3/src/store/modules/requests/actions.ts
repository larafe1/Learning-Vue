import { ActionContext } from "vuex";

import { IRequestsState, IRequests } from "@/types";

export default {
  async contactCoach(
    context: ActionContext<IRequestsState, unknown>,
    payload: IRequests
  ) {
    const response = await fetch(
      "https://vue-course-findacoach-project-default-rtdb.firebaseio.com/requests.json",
      {
        method: "POST",
        body: JSON.stringify(payload),
      }
    );
    if (!response.ok) throw new Error("Something went wrong.");

    context.commit("setRequests", payload);
  },
  async fetchRequests(context: ActionContext<IRequestsState, unknown>) {
    const response = await fetch(
      "https://vue-course-findacoach-project-default-rtdb.firebaseio.com/requests.json"
    );
    if (!response.ok) throw new Error("Something went wrong.");

    const responseData = await response.json();
    for (const key in responseData) {
      const request = {
        id: key,
        message: responseData[key].message,
        email: responseData[key].email,
      };
      context.commit("setRequests", request);
    }
  },
};
