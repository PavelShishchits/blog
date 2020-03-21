<template>
  <div class="main-wrap">
    <Header @sideNavToggle="toogleSideNav"></Header>
    <SideNav @sideNavToggle="toogleSideNav" :open="showSideNav"></SideNav>
    <div class="content-wrap">
      <nuxt />
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Navigation/Header';
  import SideNav from '@/components/Navigation/SideNav';

  export default {
    components: {
      Header,
      SideNav
    },
    data() {
      return {
        showSideNav: false
      }
    },
    methods: {
      toogleSideNav() {
        this.showSideNav = !this.showSideNav;
      }
    }
  }
</script>
