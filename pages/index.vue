<template>
  <div class="container">
    <div>
      <Logo/>
      <h1 class="title">
        掲示板
      </h1>
      <div class="links">
        <Home v-if="!isLogin"></Home>
        <Mypage v-if="isLogin" :user="userData"></Mypage>
      </div>

    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import firebase from '@/plugins/firebase'
import Home from '~/components/Home.vue';
import Mypage from '~/components/Mypage.vue';

export default {
  components: {
    Logo,
    Home,
    Mypage
  },
  asyncData (context) {
    // コンポーネントをロードする前に毎回呼び出されます
    return { name: 'Hello, World！！', isLogin:false, userData:null}
  },
  fetch () {
    // `fetch` メソッドはページの描画前にストアを満たすために使用されます
  },
  mounted: function() {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        this.isLogin = true;
        this.userData = user;
      } else {
        this.isLogin = false;
        this.userData = null;
      };
    });
  },

methods:{
  googleLogin: function(){
    firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }
}
}
</script>


<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>