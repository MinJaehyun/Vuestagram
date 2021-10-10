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

  <Container :Instagram="Instagram" :step="step" :urlFiles="urlFiles" />

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" multiple accept="image/" type="file" id="file" class="inputfile" />
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
      urlFiles: '',
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
    upload(e){                         // e 파라미터를 설정
      let imageFiles = e.target.files; // 내가 업로드 한 파일의 모든게 담겨있다.
      // console.log(imageFiles[0])    // File 내용 나온다. 이걸 사용한다!
      let urlFiles = URL.createObjectURL(imageFiles[0]);
      console.log(typeof urlFiles);
      this.urlFiles = urlFiles;
      this.step = 1;                   // 업로드 후 다음 페이지로 넘긴다.
    },
  },
};
</script>

<style>
@import 'style.css';
</style>
