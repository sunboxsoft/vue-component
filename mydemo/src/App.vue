<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <HelloWorld />
    {{ isVisible }}
    <oneCheckbox v-model="isVisible"></oneCheckbox>
    <oneDialog :visible="isVisible">
      <p>sunboxsoft@126.com  123456aA!@#$</p>
      <h1 slot="footer">Vue封装组件并发布到npm仓库</h1>
    </oneDialog>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
export default {
  name: "App",
  data() {
    return {
      isVisible: true,
    };
  },
  components: {
    HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
