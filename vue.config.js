module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/Hotel-Reservation/" : "/",
  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "@/assets/scss/main.scss";
          `
      }
    }
  }
};
