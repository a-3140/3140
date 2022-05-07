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

export const FadeLeft = {
  onEnter(el: any, done: gsap.Callback) {
    gsap.to(el, {
      opacity: 1,
      delay: el.dataset.index * 0.15,
      x: "0px",
      onComplete: done,
    });
  },
  onBeforeEnter(el: any) {
    gsap.from(el, {
      opacity: 0,
      x: "2em",
      delay: el.dataset.index * 0.15,
    });
  },
};
