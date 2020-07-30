<template>
  <div class="room-title">
    <h4>04</h4>
    <h2>Deluxe Double Room</h2>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.room-title {
  color: $white;
  padding-top: 35px;
}
h4 {
  position: relative;
  font-size: 60px;
  font-weight: 500;
  &::before {
    content: "";
    position: absolute;
    width: 80px;
    height: 15px;
    bottom: 12px;
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

h2 {
  font-size: 25px;
  font-weight: 500;
  letter-spacing: 2px;
}
</style>
