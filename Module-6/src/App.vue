<template>
  <div>
    <the-header />
    <badge-list />
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    />
    <course-goals>
      <template #default="slotProps">
        <h3>{{ slotProps.item }}</h3>
        <p>{{ slotProps.anotherprop }}</p>
      </template>
    </course-goals>
    <h3>Dynamic Components and keep-alive functionality</h3>
    <!-- <button @click="setSelectedComponent('active-goals')">
      Show Active Goals
    </button>
    <button @click="setSelectedComponent('manage-goals')">
      Show Manage Goals
    </button>
    <active-goals v-if="selectedComponent === 'active-goals'" />
    <manage-goals v-if="selectedComponent === 'manage-goals'" /> -->
    <!-- If we had more and more components between which we wanna cycle, using and repeating v-if all the time is pretty anoying. That's why Vue has an alternative way to doing that, let's see in action. -->
    <button @click="setSelectedComponent('active-goals')">
      Show Active Goals
    </button>
    <button @click="setSelectedComponent('manage-goals')">
      Show Manage Goals
    </button>
    <!-- The keep-alive component is useful for preserving the data (e.g. a text entered in a input field) when we cycle through our components. So it's useful because allow us to tell Vue that components should not be removed and destroyed, but instead their state should be saved. -->
    <keep-alive>
      <component :is="selectedComponent" />
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import CourseGoals from './components/CourseGoals.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';

export default {
  // If some component in our aplication is only used once, we can call it locally.
  components: {
    TheHeader,
    BadgeList,
    UserInfo,
    CourseGoals,
    ActiveGoals,
    ManageGoals
  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin'
      },
      selectedComponent: 'active-goals'
    };
  },
  methods: {
    setSelectedComponent(component) {
      this.selectedComponent = component;
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
