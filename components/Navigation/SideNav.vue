<template>
  <div class="sidenav-container">
    <div v-show="open" class="sidenav-backdrop" @click="hideMenu"></div>
    <transition name="slide-side">
      <div
        v-show="open"
        class="sidenav"
        @click="hideMenu"
      >
        <Menu></Menu>
      </div>
    </transition>
  </div>
</template>

<script>
  import Menu from '@/components/Navigation/Menu';

  export default {
    props: {
      open: {
        required: true,
        type: Boolean
      }
    },
    methods: {
      hideMenu() {
        this.$emit('sideNavToggle');
      }
    },
    components: {
      Menu
    }
  }
</script>

<style scoped>
  .sidenav-container {
    height: 100%;
    width: 100%;
  }

  .sidenav-backdrop {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
  }

  .sidenav {
    height: 100%;
    width: 300px;
    background-color: white;
    z-index: 10000;
    position: fixed;
    top: 0;
    left: 0;
    box-sizing: border-box;
    padding: 30px;
  }

  .slide-side-enter-active,
  .slide-side-leave-active {
    transition: all 0.3s ease-out;
  }
  .slide-side-enter,
  .slide-side-leave-to {
    transform: translateX(-100%);
  }

</style>
