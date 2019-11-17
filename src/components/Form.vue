<template>
  <div class="form">
    <div class="content">
      <input class="title" maxlength="20" placeholder="Title of awesome idea">
      <input class="description" maxlength="140" placeholder="Description of the idea (140 char max)">
    </div>
    <div class="meta">
        <a href="" class="submit">submit</a>
    </div>
    <div class="holder">
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
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
    margin: 6px 0 12px;
    padding: 0;
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
  flex-direction: column !important;
  align-items: center;
  font-weight: 600;
  flex: 1;
}

.submit {
    padding: 4px 10px;
    background: #64ce7c;
    font-size: 12px;
    color: #fff;
    border-radius: 3px;
    margin-right: 10px;
    border-color: #e8e8e8;
    border-radius: 3px;
    border: 1px solid #e8e8e8;
    box-sizing: border-box;
    align-items: center;
    outline: 0;
    text-decoration: none !important;
}

.subscribe:hover {
  background: #e8e8e8;
}

.upvote .upvote-num {
  line-height: 16px;
  display: inline-flex;
  flex-direction: column !important;
  align-items: center;
  justify-content: center;
  width: inherit;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 13px;
}

.meta {
  height: 24px;
  display: flex;
  justify-content: left;
}

.icon {
  background-repeat: no-repeat;
  display: block;
  height: 15px;
  width: 15px;
}
</style>
