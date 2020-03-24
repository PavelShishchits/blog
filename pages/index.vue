<template>
  <div class="home-page">
    <section class="intro full-width">
      <h1>This is a home page</h1>
    </section>
    <PostsList :posts="loadedPosts"></PostsList>
  </div>
</template>

<script>
import PostsList from '@/components/Posts/PostsList';

export default {
  components: {
    PostsList
  },
  computed: {
    loadedPosts() {
      return this.$store.state.postsModule.posts;
    }
  }
}

</script>

<style lang="scss" scoped>

  .intro {
    height: 300px;
    position: relative;
    padding: 30px;
    box-sizing: border-box;
    background-image: url('~assets/images/intro.jpg');
    background-position: center;
    background-size: cover;
  }

  .intro h1 {
    position: absolute;
    top: 10%;
    left: 5%;
    width: 90%;
    font-size: 1.5rem;
    color: black;
    background-color: rgb(211, 211, 211);
    padding: 10px;
    border-radius: 10px;
    box-shadow: 3px 3px 3px black;
    box-sizing: border-box;
    border: 1px solid black;
  }

  @media (min-width: 768px) {
    .intro h1 {
      font-size: 2rem;
    }
  }

</style>
