<template>
  <div class="container">
    <div class="block" :class="{ animate: this.isAnimated }"></div>
    <button @click="handleAnimateBlock">Animate</button>
  </div>
  <div class="container">
    <transition
      name="para"
      @before-enter="beforeEnterParagraph"
      @enter="atEnterParagraph"
      @after-enter="afterEnterParagraph"
      @before-leave="beforeLeaveParagraph"
      @leave="atLeaveParagraph"
      @after-leave="afterLeaveParagraph"
    >
      <p v-if="isParagraphVisible">This only sometimes is visible...</p>
    </transition>
    <button @click="handleToggleParagraph">Toggle Paragraph</button>
  </div>
  <base-modal @close="handleHideDialog" :open="isDialogVisible">
    <p>This is a test dialog!</p>
    <button @click="handleHideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <!-- The only situation that we can have multiple elemts inside of the transition elmt is rendering one at time. -->
    <transition name="fade-btn" mode="out-in">
      <button v-if="!isUsersVisible" @click="handleShowUsers">
        Show Users
      </button>
      <button v-else @click="handleHideUsers">
        Hide Users
      </button>
    </transition>
  </div>
  <div class="container">
    <button @click="handleShowDialog">Show Dialog</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDialogVisible: false,
      isAnimated: false,
      isParagraphVisible: false,
      isUsersVisible: false
    };
  },
  methods: {
    handleShowDialog() {
      this.isDialogVisible = true;
    },
    handleHideDialog() {
      this.isDialogVisible = false;
    },
    handleAnimateBlock() {
      this.isAnimated = true;
    },
    handleShowUsers() {
      this.isUsersVisible = true;
    },
    handleHideUsers() {
      this.isUsersVisible = false;
    },
    handleToggleParagraph() {
      this.isParagraphVisible = !this.isParagraphVisible;
    },
    beforeEnterParagraph(elmt) {
      console.log('beforeEnterParagraph');
      console.log(elmt);
    },
    atEnterParagraph(elmt) {
      console.log('atEnterParagraph');
      console.log(elmt);
    },
    afterEnterParagraph(elmt) {
      console.log('afterEnterParagraph');
      console.log(elmt);
    },
    beforeLeaveParagraph(elmt) {
      console.log('beforeLeaveParagraph');
      console.log(elmt);
    },
    atLeaveParagraph(elmt) {
      console.log('atLeaveParagraph');
      console.log(elmt);
    },
    afterLeaveParagraph(elmt) {
      console.log('afterLeaveParagraph');
      console.log(elmt);
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}

.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.3s ease-out; */
}

.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  animation: slide-fade 0.3s ease-out forwards;
}

/* .v-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.v-enter-active {
  transition: all 0.3s ease-in;
}

.v-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.v-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.v-leave-active {
  transition: all 0.3s ease-in;
}

.v-leave-to {
  opacity: 0;
  transform: translateY(30px);
} */

.para-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.para-enter-active,
.para-leave-active {
  transition: all 0.3s ease-in;
}

.para-enter-to,
.para-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.para-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.fade-btn-enter-from,
.fade-btn-leave-to {
  opacity: 0;
}

.fade-btn-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-btn-leave-active {
  transition: opacity 0.3s ease-in;
}

.fade-btn-enter-to,
.fade-btn-leave-from {
  opacity: 1;
}

@keyframes slide-fade {
  0% {
    transform: translateX(0) scale(1);
  }
  70% {
    transform: translateX(-120px) scale(1.1);
  }
  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>
