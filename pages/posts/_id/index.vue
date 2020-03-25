<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{ post.title }}</h1>
      <div class="post-details">
        <div class="post-detail">{{ post.updatedDate }}</div>
        <div class="post-detail">{{ post.author }}</div>
      </div>
      <div class="post-content">{{ post.content }}</div>
    </section>
    <section class="post-feedback">
      <p>Give me a feedback <a href="#" target="_blank">Link</a></p>
    </section>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    asyncData(context) {
      return axios.get(`https://nuxt-blog-71976.firebaseio.com/posts/${context.params.id}.json`)
        .then((response) => {
          return {
            post: response.data
          }
        })
        .catch(e => context.error(e))
    },
  }
</script>
<style lang="scss">

  .single-post-page {
    text-align: center;
  }

  .post {
    width: 100%;
  }

  @media (min-width: 768px) {
    .post {
      width: 600px;
      margin: auto;
    }
  }

  .post-title {
    margin: 0;
  }

  .post-details {
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 3px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    .post-details {
      flex-direction: row;
    }
  }

  .post-detail {
    color: rgb(88, 88, 88);
    margin: 0 10px;
  }

  .post-feedback a {
    color: red;
    text-decoration: none;
  }

  .post-feedback a:hover,
  .post-feedback a:active {
    color: salmon;
  }
</style>
