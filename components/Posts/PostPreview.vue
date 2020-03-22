<template>
  <nuxt-link tag="article" :to="postLink" class="post-preview">
    <div class="post-thumbnail" :style="{'background-image': 'url(' + post.thumbnail + ')'}"></div>
    <div class="post-content">
      <h2>{{ post.title }}</h2>
      <p>{{ post.previewText }}</p>
    </div>
  </nuxt-link>
</template>

<script>
  export default {
    name: 'PostPreview',
    props: {
      post: {
        type: Object,
        required: true
      },
      isAdmin: {
        type: Boolean,
        required: false
      }
    },
    data() {
      return {}
    },
    computed: {
      postLink() {
        return this.isAdmin ? `/admin/${this.post.id}` : `/posts/${this.post.id}`;
      }
    }
  }
</script>

<style lang="scss" scoped>

  .post-preview {
    border: 1px solid #ccc;
    box-shadow: 0 2px 2px #ccc;
    background-color: white;
    width: 90%;
    cursor: pointer;

    &:hover {
      background-color: #ccc;
    }
  }

  @media (min-width: 850px) {
    .post-preview {
      width: 400px;
      margin: 10px;
    }
  }

  .post-thumbnail {
    width: 100%;
    height: 200px;
    background-position: center;
    background-size: cover;
  }

  .post-content {
    padding: 10px;
    text-align: center;
  }

</style>
