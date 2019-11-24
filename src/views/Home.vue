<template>
  <div>
    <button class="button logout" v-on:click="logout">Logout</button>
    <article class="covers" v-for="(idea, idx) in ideas" :key="idx">
      <div>
        <img
          style="margin: 10px"
          :src="comic.description"
          height="291px"
          width="192px"
        />
        <p>{{ idea.title }}</p>
        <hr />
        <button class="button" @click="deleteIdea(idea.id)">
          Delete
        </button>
      </div>
    </article>

    <form @submit.prevent="addIdea(title, description)">
      <h2>Add a New Idea</h2>
      <input v-model="title" placeholder="Idea Name" class="input" required />
      <input
        v-model="description"
        placeholder="Idea desc"
        class="input"
        required/>

      <button type="submit" class="button">Add New Idea</button>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
import { db } from "../main";
export default {
  title: "Ideas",
  data() {
    return {
      ideas: [],
      title: "",
      description: ""
    };
  },
  firestore() {
    return {
      ideas: db.collection("ideas").orderBy("createdAt")
    };
  },
  methods: {
    addIdea(title, description) {
      const createdAt = new Date();
      const user_id = firebase.auth().currentUser.uid;
      const upvotes = 1;

      db.collection("ideas").add({ title, description, upvotes, user_id, createdAt });
      this.title = "";
      this.description = "";
    },
    deleteIdea(id) {
      db.collection("ideas")
        .doc(id)
        .delete();
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("login");
        });
    }
  }
};
</script>
