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
  margin-top: 15px;
  width: 148px;
  height: 148px;
  text-align: center;
  border: 2px solid #ffffff;
  font-size: 35px;
  color: $white;
  font-weight: 500;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: -17px;
    bottom: 17px;
    background-image: repeating-linear-gradient(
      45deg,
      transparent 0px,
      transparent 3px,
      $white 3px,
      $white 4px,
      transparent 4px,
      transparent 7px
    );
    clip-path: polygon(0 0, 100% 0, 100% 17px, 17px 17px, 17px 100%, 0 100%);
  }
}
</style>
