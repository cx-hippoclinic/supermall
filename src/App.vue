<template>
  <div id="App">
    <keep-alive exclude="Details">
      <router-view/>
    </keep-alive>
    <main-tag-bar/>
  </div>
</template>

<script>
import MainTagBar from "components/content/MainTagBar/MainTagBar";
export default {
  name: 'App',
  components: {
    MainTagBar
  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>
