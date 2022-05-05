import gsap from 'gsap';

export const FadeUp = {
  onEnter(el: any, done: gsap.Callback) {
    gsap.to(el, {
      opacity: 1,
      y: "0px",
      onComplete: done,
    });
  },
  onBeforeEnter(el: any) {
    gsap.from(el, {
      opacity: 0,
      y: "2em",
    });
  },
};
