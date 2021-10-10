<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li>Next</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container :Instagram="Instagram"/>
  <button @click="more">더 보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import Container from './components/Container.vue'
import Instagram from './data/instagram.js'
import axios from 'axios'

export default {
  name: "App",
  data() {
    return {
      Instagram: Instagram,
      Count: 0,
    }
  },
  components: {
    Container: Container,
  },
  methods: {
    more(){
      axios.get(`https://codingapple1.github.io/vue/more${this.Count++}.json`)
      .then(result => {
        // console.log(result.data)
        // result.data 의 자료를 post 에 넣는다
        this.Instagram.push(result.data)
      })
      .catch(err =>{
        console.log(err)  // GET https://codingapple1.github.io/vue/more3.json 404
      })
    },
  },
};
</script>

<style>
@import 'style.css';
</style>
