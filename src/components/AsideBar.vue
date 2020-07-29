<template>
  <div class="aside-bar">
    <ul>
      <li>Single Room</li>
      <li>Deluxe Single Room</li>
      <li>Double Room</li>
      <li>Deluxe Double Room</li>
      <li>Twin Room</li>
      <li>Deluxe Twin Room</li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.aside-bar {
  width: 310px;
  position: relative;
  padding: 35px;
  font-size: 18px;
  background: $white;
  &::before {
    content: "";
    position: absolute;
    width: 280px;
    height: 20px;
    top: 100%;
    right: 0;
    background-image: repeating-linear-gradient(
      45deg,
      transparent 0px,
      transparent 3px,
      $white 3px,
      $white 4px,
      transparent 4px,
      transparent 7px
    );
  }
}

li {
  margin-bottom: 35px;
  cursor: pointer;
}
</style>
