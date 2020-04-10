<template>
  <div class="admin-page">
    <section class="new-post">
      <AppButton style="margin-right: 10px" @click="$router.push('/admin/new-post')">Create Post</AppButton>
      <AppButton @click="handleLogOut">Log Out</AppButton>
    </section>
    <section class="existing-posts">
      <h1>Existings Post</h1>
      <PostsList :posts="loadedPosts" :is-admin="true"></PostsList>
    </section>`
  </div>
</template>

<script>
  import PostsList from '@/components/Posts/PostsList';

  export default {
    middleware: ['check-auth', 'auth'],
    layout: 'admin',
    components: {
      PostsList
    },
    methods: {
      handleLogOut() {
        this.$store.dispatch('auth/logOut');
        this.$router.push('/admin/auth')
      }
    },
    computed: {
      loadedPosts() {
        return this.$store.state.postsModule.posts;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .admin-page {
    padding: 20px;
  }

  .new-post {
    text-align: center;
    border-bottom: 2px solid #ccc;
    padding-bottom: 10px;
  }

  .existing-posts h1 {
    text-align: center;
  }
</style>
