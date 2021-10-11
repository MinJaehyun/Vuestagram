<template>
  <div class="post">
    <div class="post-header">
      <div class="profile" :style="{ backgroundImage : `url(${Instagram.userImage})`}"></div>
      <span class="profile-name">{{ Instagram.name }}</span>
    </div>

    <!-- 만약 likes 가 0 이면 1 이 되도록 만들고, 만약 likes 가 1 이면 0 이 되도록 만들어라 -->
    <div v-if="$store.state.likes == 0"
    @click="$store.commit('zeroToOne')"
    class="post-body" :style="{ backgroundImage : `url(${Instagram.postImage})`}"
    ></div>
    <div v-if="$store.state.likes == 1"
    @click="$store.commit('oneToZero')"  
    class="post-body" :style="{ backgroundImage : `url(${Instagram.postImage})`}"
    ></div>
    <!-- 위 방법 번거롭네.. 쉬운 방법 없나? -->

    <div class="post-content">
      <!-- <p>{{ Instagram.likes }}</p> -->
      <p>{{ $store.state.likes }}</p>
      <p>
        <strong>{{ Instagram.filter }}</strong> {{ Instagram.content }}
      </p>
      <p class="date">{{ Instagram.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    Instagram: Object,
  },
};
</script>

<style>
.post {
  width: 100%;
}
.profile {
  background-image: url("https://placeimg.com/100/100/arch");
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  background-image: url("https://placeimg.com/640/480/animals");
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
}
</style>
