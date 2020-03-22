<template>
  <section class="posts-list">
    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :is-admin="isAdmin"
      :post="post"
    ></PostPreview>
  </section>
</template>

<script>
  import PostPreview from '@/components/Posts/PostPreview';

  export default {
    components: {
      PostPreview
    },
    props: {
      isAdmin: {
        type: Boolean,
        required: false
      }
    },
    data() {
      return {
        posts: [
          {
            id: 1,
            thumbnail: '/images/post_01.jpg',
            title: 'Post title',
            previewText: 'Post preview text'
          },
          {
            id: 2,
            thumbnail: '/images/post_02.jpg',
            title: 'Post title',
            previewText: 'Post preview text'
          }
        ]
      }
    },
    methods: {}
  }
</script>

<style lang="scss">
  .posts-list {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
</style>
