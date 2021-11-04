import { ActionContext } from "vuex";

import { ICoachState, ICoach } from "@/types";

export default {
  async registerCoach(
    context: ActionContext<ICoachState, unknown>,
    payload: ICoach
  ) {
    const response = await fetch(
      "https://vue-course-findacoach-project-default-rtdb.firebaseio.com/coaches.json",
      {
        method: "POST",
        body: JSON.stringify(payload),
      }
    );
    if (!response.ok) throw new Error("Something went wrong.");

    context.commit("setCoaches", payload);
  },
  async fetchCoaches(context: ActionContext<ICoachState, unknown>) {
    const response = await fetch(
      "https://vue-course-findacoach-project-default-rtdb.firebaseio.com/coaches.json"
    );
    if (!response.ok) throw new Error("Something went wrong.");

    const responseData: ICoach[] = await response.json();
    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas,
      };
      context.commit("setCoaches", coach);
    }
  },
};
