<template>
  <div class="header-content">
    <h2 class="logo">White Space</h2>
    <section class="contact-info">
      <div class="media-icons">
        <font-awesome-icon :icon="['fab', 'instagram']" />
        <font-awesome-icon :icon="['fab', 'facebook-square']" />
      </div>
      <div class="contact-detail">
        <div class="phone-number">
          <font-awesome-icon :icon="['fas', 'phone-alt']" />
          <h3>02-17264937</h3>
        </div>
        <div class="email">
          <font-awesome-icon :icon="['fas', 'envelope']" />
          <h3>whitespace@whitespace.com.tw</h3>
        </div>
        <div class="address">
          <font-awesome-icon :icon="['fas', 'home']" />
          <h3>台北市羅斯福路十段30號</h3>
        </div>
      </div>
      <img class="background-image" src="" alt="" />
    </section>
  </div>
</template>

<script>
export default {
  props: {
    // rooms: {
    //   type: Array,
    //   required: true
    // }
  }
};
</script>

<style lang="scss" scoped>
.header-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 15px auto 30px;
  width: 148px;
  height: 148px;
  text-align: center;
  border: 2px solid #ffffff;
  font-size: 35px;
  color: $white;
  font-weight: 500;
  background-color: $gray;
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: -17px;
    bottom: 17px;
    background-image: repeating-linear-gradient(
      45deg,
      $gray 0px,
      $gray 3px,
      $white 3px,
      $white 4px,
      $gray 4px,
      $gray 7px
    );
    clip-path: polygon(0 0, 100% 0, 100% 17px, 17px 17px, 17px 100%, 0 100%);
  }
}

.contact-info {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 50%;
  align-items: center;
  color: $white;
  .media-icons {
    flex: 0 0 70px;
    margin: 20px 30px 0 0;
    svg {
      font-size: 24px;
      color: $white;
    }
    svg:not(:first-child) {
      margin-left: 15px;
    }
  }
  .contact-detail {
    flex: 0 0 280px;
    position: relative;
    margin-top: 20px;
    padding-left: 25px;
    > div:not(:last-child) {
      margin-bottom: 10px;
    }
    &::before {
      content: "";
      position: absolute;
      width: 1px;
      left: 0;
      height: 100%;
      background-color: #fff;
    }
    svg {
      margin-right: 20px;
      vertical-align: middle;
      font-size: 16px;
    }
    h3 {
      display: inline;
      font-size: 14px;
      font-weight: 400;
      vertical-align: middle;
    }
  }
}
</style>
