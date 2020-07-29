<template>
  <h2 class="logo">White Space</h2>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 148px;
  height: 148px;
  text-align: center;
  border: 2px solid #ffffff;
  font-size: 35px;
  color: $white;
  font-weight: 500;
  z-index: 0;
  &::before,
  &::after {
    content: "";
    position: absolute;
    background-image: repeating-linear-gradient(
      45deg,
      $gray 0px,
      $gray 3px,
      #fff 3px,
      #fff 4px,
      $gray 4px,
      $gray 7px
    );
  }
  &::before {
    width: 15px;
    height: 100%;
    left: -17px;
    bottom: 17px;
  }

  &::after {
    width: 100%;
    height: 15px;
    bottom: 146px;
    right: 17px;
  }
}
</style>
