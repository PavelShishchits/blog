<template>
  <div class="posts-page">
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
<style>
  .posts-page {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
