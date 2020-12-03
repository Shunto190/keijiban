<template>
<div id="mypage">
  <span>こんにちは, {{ user.displayName }}さん</span>
  <p><textarea v-model="note_content"></textarea></p>
  <p><button @click="saveContent(note_content)">ノートを保存する</button></p>
  <button @click="logout">ログアウト</button>
</div>
</template>

<script>
import firebase from '@/plugins/firebase'
export default {
  name: 'mypage',
  props: ['user'],
  data(context){
    return {note_content:'hello'}
  },
  methods: {
    logout: function() {
      firebase.auth().signOut();
    },
  saveContent: function(value) {
      // 新しいテキストのためのキーを取得
      var newNoteKey = firebase.database().ref().child('notes').push().key;
      firebase
        .database()
        .ref('notes/' + this.user.uid　+ '/' + newNoteKey)
        .set({content:value});
    }
  }
}
</script>