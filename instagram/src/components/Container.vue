<template>
  <div>
    <Post :Instagram="Instagram" />
  </div>
</template>

<script>
import Post from "./Post.vue";

export default {
  name: "Container",
  props: {
    Instagram: Array,
  },
  components: {
    Post: Post,
  },
};
</script>

<style></style>
