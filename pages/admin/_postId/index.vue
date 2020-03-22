<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm></AdminPostForm>
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
    props: {},
    data() {
      return {}
    },
    methods: {}
  }
</script>

<style lang="scss">

</style>
