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

  <button @click="step=0">버튼0</button>
  <button @click="step=1">버튼1</button>
  <button @click="step=2">버튼2</button>
  <div v-if="step == 0">내용0</div>
  <div v-if="step == 1">내용1</div>
  <div v-if="step == 2">내용2</div>
    
</template>

<script>
import Container from './components/Container.vue'
import Instagram from './data/instagram.js'
import axios from 'axios'

export default {
  name: "App",
  data() {
    return {
      step: 0,
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
