<template>
  <div class="posts-page">
    <PostsList></PostsList>
  </div>
</template>

<script>
  import PostsList from '@/components/Posts/PostsList';

  export default {
    components: {
      PostsList
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
