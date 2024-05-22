// scheme/js/scriptLottie.js

document.addEventListener("DOMContentLoaded", () => {
  const animationContainer = document.getElementById("animation-container");
  if (animationContainer) {
    lottie.loadAnimation({
      container: animationContainer,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/data4.json",
    });
  }
});

