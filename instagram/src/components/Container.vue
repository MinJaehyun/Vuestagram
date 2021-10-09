<template>
  <div>
    <Post :Instagram="Instagram[i]" v-for="a,i in Instagram" :key="i" />
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
