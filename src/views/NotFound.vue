<template>
  <div class="not-found">
    <h1>Oops! 404</h1>
    <h2>你要找的頁面不存在</h2>
    <router-link :to="{ name: 'Home' }">點擊返回首頁</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.not-found {
  text-align: center;
}
</style>
