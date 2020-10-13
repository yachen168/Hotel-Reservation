<template>
  <div class="network-issue">
    <h1>Oh! 網路似乎存在一些問題</h1>
    <h2>請再試一次 :)</h2>
    <router-link :to="{ name: 'Home' }">點擊返回首頁</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.network-issue {
  text-align: center;
}
</style>
