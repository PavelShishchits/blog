<template>
  <ul class="nav-list">
    <li class="nav-item"><nuxt-link to="/posts">Blog</nuxt-link></li>
    <li class="nav-item"><nuxt-link to="/about">About</nuxt-link></li>
    <li class="nav-item"><nuxt-link to="/admin">Admin</nuxt-link></li>
  </ul>
</template>

<script>
  export default {
    props: {},
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>

  .nav-list {
    list-style: none;
    padding: 0;
    margin: 0;


    @media (min-width: 768px) {
      display: flex;
    }
  }

  .nav-item {
    margin: 20px 0;

    @media (min-width: 768px) {
      margin: 0 10px;

    }
  }

  .nav-item a {
    text-decoration: none;
    color: black;
    font-size: 1.5rem;

    @media (min-width: 768px) {
      color: white;
      font-size: 1rem;
    }
  }

  .nav-item a:hover,
  .nav-item a:active,
  .nav-item a.nuxt-link-active {
    color: red;
  }

</style>
