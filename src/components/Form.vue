<template>
  <div class="form">
    <div class="content">
      <form @submit.prevent="addIdea(title, description)">
        <input v-model="title" maxlength="20" placeholder="Title of awesome idea" class="title" required />
        <input v-model="description" placeholder="Description of the idea (140 char max)" class="description"  maxlength="140" required/>
        <div class="holder">
          <div class="upvote-container">
            <button type="submit" class="submit">submit</button>
          </div>
        </div>
      </form>
    </div>
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


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form {
  display: flex;
  border-bottom: 1px solid #e8e8e8;
  background-color: white;
  padding: 20px 104px 20px 20px;
  display: block;
  position: relative;
}

.title {
    display: block;
    font-size: 1rem;
    font-weight: 600;
    color: #000000;
    line-height: 24px;
    margin: 0;
    padding: 0;
    font-variant-numeric: tabular-nums;
    text-align: left;
}

.description {
    display: block;
    font-size: 13px;
    color: #6f6f6f;
    line-height: 20px;
    padding: 0;
    margin: 6px 0 0 0;
    font-variant-numeric: tabular-nums;
    text-align: left;
    width: 80%;
    height: 26px;
}

.holder {
  position: absolute;
  top: 57px;
  right: 20px;
  transform: translateY(-50%);
  display: block;
  text-align: left;
  text-size-adjust: 100%;
  height: 74px;
  width: 76px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.upvote {
  height: 74px;
  width: 64px;
  margin-left: 12px;
  padding: 0 8px;
  border-radius: 3px;
  border: 1px solid transparent;
  color: #000;
  fill: #000;
  border-color: #e8e8e8;
  background: #fff;
  vertical-align: top;
  box-sizing: border-box;
  outline: 0;
  align-items: center;
  display: inline-flex;
  justify-content: center;
  text-align: center;
  text-decoration: none !important;
}

.upvote-container {
  display: inline-flex;
  flex-wrap: nowrap;
  justify-content: center;
  width: inherit;
  line-height: 16px;
  align-items: center;
  font-weight: 600;
  flex: 1;
}

.submit {
    padding: 6px;
    background: #64ce7c;
    font-size: 13px;
    font-weight: 900;
    color: #fff;
    border-radius: 3px;
    border-color: #e8e8e8;
    border-radius: 3px;
    border: 1px solid #e8e8e8;
    box-sizing: border-box;
    align-items: center;
    outline: 0;
    height: 30px;
    text-decoration: none !important;
    text-transform: uppercase;
}
</style>
