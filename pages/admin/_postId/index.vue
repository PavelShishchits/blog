<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="post" @submit="handleSubmit"></AdminPostForm>
    </section>
  </div>
</template>

<script>
  import AdminPostForm from '@/components/Admin/AdminPostForm';
  import axios from 'axios';

  export default {
    layout: 'admin',
    components: {
      AdminPostForm
    },
    asyncData(context) {
      return axios.get(`${process.env.baseUrl}/posts/${context.params.postId}.json`)
        .then((response) => {
          return {
            post: response.data
          }
        })
        .catch(e => context.error(e))
    },
    methods: {
      handleSubmit(editedPost) {
        this.$store.dispatch('postsModule/editPost', {...editedPost, id: this.$route.params.postId})
          .then(() => {
            this.$router.go(-1);
          });
      }
    }
  }
</script>

<style lang="scss">

</style>
