import { createApp } from "vue";

import App from "./App.vue";
import router from "@/routes";
import store from "@/store";
import BaseCard from "@/components/shared/BaseCard.vue";
import BaseButton from "@/components/shared/BaseButton.vue";
import BaseBadge from "@/components/shared/BaseBadge.vue";

const app = createApp(App);

app.use(router);
app.use(store);

app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-badge", BaseBadge);

app.mount("#app");
