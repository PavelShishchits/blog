<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit="handleSubmit"></AdminPostForm>
    </section>
  </div>
</template>

<script>
  import AdminPostForm from '@/components/Admin/AdminPostForm';

  export default {
    middleware: ['check-auth', 'auth'],
    layout: 'admin',
    components: {
      AdminPostForm
    },
    methods: {
      handleSubmit(formData) {
        this.$store.dispatch('postsModule/addPost', formData)
          .then(() => {
            this.$router.go(-1);
          })
      }
    }
  }
</script>
