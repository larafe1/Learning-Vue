<template>
  <base-card>
    <base-button
      :mode="selectedTabButtonStyles('stored-resources')"
      @click="handleSetSelectedTab('stored-resources')"
    >
      Stored Resources
    </base-button>
    <base-button
      :mode="selectedTabButtonStyles('add-resource')"
      @click="handleSetSelectedTab('add-resource')"
    >
      Add Resource
    </base-button>
  </base-card>
  <keep-alive>
    <component :is="selectedTab" />
  </keep-alive>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';
import { IResource } from '@/types';

const TheResources = defineComponent({
  components: { StoredResources, AddResource },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official Vue.js documentation',
          link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.com'
        }
      ]
    };
  },
  provide() {
    return {
      resources: this.storedResources,
      handleAddResource: this.handleAddResource,
      handleRemoveResource: this.handleRemoveResource
    };
  },
  methods: {
    handleSetSelectedTab(tab: string) {
      this.selectedTab = tab;
    },
    selectedTabButtonStyles(tab: string) {
      return this.selectedTab === tab ? null : 'flat';
    },
    handleAddResource(title: string, description: string, url: string) {
      const newResourceData = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url
      };
      this.storedResources.unshift(newResourceData);
      this.selectedTab = 'stored-resources';
    },
    handleRemoveResource(resId: string) {
      const resIdx = this.storedResources.findIndex(
        (res: IResource) => res.id === resId
      );
      this.storedResources.splice(resIdx, 1);
    }
  }
});

export default TheResources;
</script>
