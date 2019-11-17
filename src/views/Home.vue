<template>
  <div class="background">
    <button @click="logout">Logout</button>
    <div class="container">
      <div class="ideas">
        <Idea
          upvotes="5"
          idea="A community moderated list that allows entrepreneurs to validate their ideas and build initial traction"
          title="A Better Darwinator"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import firebase from "firebase";
import Idea from "@/components/Idea.vue";

export default {
  name: "home",
  components: {
    Idea
  },
  methods: {
    logout: function() {
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

<style scoped>
 .background {
   background: #f3f3f3;
 }
 .container {
   display: flex;
   justify-content: center;
 }
 .ideas {
   width: 720px;
 }
</style>
