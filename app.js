const lenis = new Lenis();
function raf(time) {
  lenis.raf(time * 0.7);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
ScrollTrigger.defaults({
  scroller: document.body,
});

const container = document.querySelector(".container");
console.log(container.offsetWidth);

function getScrollAmount() {
  let containerWidth = container.scrollWidth;
  return -(containerWidth - window.innerWidth);
}

const tween = gsap.to(container, {
  x: getScrollAmount,
  duration: 3.5,
  ease: "none",
});

ScrollTrigger.create({
  trigger: ".container-wrapper",
  start: "top 0vh",
  end: () => `+=${getScrollAmount() * -1} center`,
  pin: true,
  animation: tween,
  scrub: 1,
  invalidateOnRefresh: true,
});
