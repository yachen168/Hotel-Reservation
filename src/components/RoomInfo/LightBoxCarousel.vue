<template>
  <div class="carousel-lightbox" @click="$emit('closeLightbox')">
    <div class="carousel" @click.stop>
      <div
        class="bgImage"
        :style="{ backgroundImage: `url(${roomUrls[imageIndex]})` }"
      ></div>
      <div class="arrow arrow-prev" @click.stop="showLastImage">
        <font-awesome-icon icon="chevron-left" />
      </div>
      <div class="arrow arrow-next" @click.stop="showNextImage">
        <font-awesome-icon icon="chevron-right" />
      </div>
      <div class="footer">
        <h1 class="room-name">{{ roomName }}</h1>
        <span class="count">{{ imageIndex + 1 }} / {{ roomUrls.length }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LightBoxCarousel",
  props: {
    roomUrls: {
      type: Array,
      required: true
    },
    roomName: {
      type: String,
      required: true
    },
    nowImageIndex: {
      type: Number,
      requird: true
    }
  },
  data() {
    return {
      imageIndex: this.nowImageIndex
    };
  },
  methods: {
    showLastImage() {
      this.imageIndex--;
      if (this.imageIndex < 0) {
        this.imageIndex = this.roomUrls.length - 1;
      }
    },
    showNextImage() {
      this.imageIndex++;
      if (this.imageIndex > this.roomUrls.length - 1) {
        this.imageIndex = 0;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.carousel-lightbox {
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel {
  width: 60%;
  height: 500px;
  position: relative;
  .footer {
    position: absolute;
    width: 100%;
    bottom: -50px;
    display: flex;
    justify-content: space-between;
  }
  .room-name,
  .count {
    font-weight: 300;
    letter-spacing: 1px;
    color: #fff;
    font-size: 16px;
  }
}

.bgImage {
  height: 100%;
  background-size: cover;
  background-position: 50% 70%;
  transition: 0.2s;
}

.arrow {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100px;
  top: 0;
  color: #fff;
  font-size: 30px;
  cursor: pointer;
}

.arrow-prev {
  right: 100%;
}
.arrow-next {
  left: 100%;
}
</style>
