<template>
  <div class="header-container">
    <header class="header">
      <NavToggle @toggle="$emit('sideNavToggle')"></NavToggle>
      <div class="logo">
        <nuxt-link to="/">WD BLOG</nuxt-link>
      </div>
      <div class="spacer"></div>
      <div class="navigation-items">
       <Menu></Menu>
      </div>
    </header>
  </div>
</template>

<script>
  import NavToggle from '@/components/Navigation/NavToggle';
  import Menu from '@/components/Navigation/Menu';

  export default {
    components: {
      NavToggle,
      Menu
    }
  }
</script>
<style lang="scss" scoped>

  .header-container {
    height: 60px;
  }

  .header {
    width: 100%;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: black;
    z-index: 100;
    box-sizing: border-box;
    padding: 0 20px;
  }

  .logo {
    margin: 0 10px;
    font-size: 1.3rem;
  }

  .logo a {
    text-decoration: none;
    color: white;
  }

  .spacer {
    flex: 1;
  }

  .navigation-items {
    display: none;
  }

  @media (min-width: 768px) {
    .navigation-items {
      display: block;
    }
  }

</style>
