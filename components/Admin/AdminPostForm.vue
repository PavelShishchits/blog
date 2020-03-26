<template>
  <form @submit.prevent="onFormSubmit">
    <AppControlInput v-model="editedPost.author">Author Name</AppControlInput>
    <AppControlInput v-model="editedPost.title">Title</AppControlInput>
    <AppControlInput v-model="editedPost.thumbnailLink">Thumbnail Link</AppControlInput>
    <AppControlInput control-type='textarea' v-model="editedPost.content">Content</AppControlInput>
    <AppControlInput control-type='textarea' v-model="editedPost.previewText">Preview text</AppControlInput>
    <div class="btn-wrap">
      <AppButton type="submit">Save</AppButton>
      <AppButton type="button" btn-style="cancel" @click="onCancel">Cancel</AppButton>
    </div>
  </form>
</template>

<script>

  export default {
    props: {
      post: {
        type: Object,
        required: false
      }
    },
    data() {
      return {
        editedPost: this.post ? {...this.post} : {
          author: '',
          title: '',
          thumbnailLink: '',
          content: '',
          previewText: ''
        }
      }
    },
    methods: {
      onFormSubmit() {
        this.$emit('submit', {
          ...this.editedPost,
          updatedDate: new Date()
        });
      },
      onCancel() {
        this.$router.go(-1);
      }
    }
  }
</script>

<style lang="scss" scoped>

  .btn-wrap {

    > button {
      margin-right: 10px;
    }
  }

</style>
