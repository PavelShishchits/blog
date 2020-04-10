<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="post" @submit="handleSubmit"></AdminPostForm>
    </section>
  </div>
</template>

<script>
  import AdminPostForm from '@/components/Admin/AdminPostForm';

  export default {
    layout: 'admin',
    components: {
      AdminPostForm
    },
    asyncData(context) {
      return context.app.$axios.$get(`/posts/${context.params.postId}.json`)
        .then((data) => {
          return {
            post: data
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
