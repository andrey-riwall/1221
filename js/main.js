document.addEventListener('DOMContentLoaded', () => {

  startAnim();

  const btn = document.querySelector(".header__btn");
  const close = document.querySelector(".header__close_burger");
  const burger = document.querySelector(".burger");
  btn.onclick = () => {
    tl.play();
    burger.classList.toggle('is_active');
  }
  close.onclick = () => {
    tl.reverse();
    setTimeout(() => {
      burger.classList.toggle('is_active');
    }, 3500)
  }

})


// start
function startAnim() {
  gsap.from(
    '.hero__heading',
    {
      duration: 0.7,
      ease: "power3.out",
      opacity: 0,
      y: 50,
      delay: 0.5,
    }
  )
  gsap.from(
    '.hero__desc',
    {
      duration: 0.7,
      ease: "power3.out",
      opacity: 0,
      y: 50,
      delay: 1,
    }
  )
  gsap.from(
    '.hero__link',
    {
      duration: 0.7,
      ease: "power3.out",
      opacity: 0,
      y: 50,
      delay: 0.6,
    }
  )
  gsap.from(
    '.hero__item:nth-child(1)',
    {
      duration: 0.5,
      ease: "power1.out",
      opacity: 0,
      scale: 0.9,
      delay: 1.2,
    }
  )
  gsap.from(
    '.hero__item:nth-child(2)',
    {
      duration: 0.5,
      ease: "power1.out",
      opacity: 0,
      scale: 0.9,
      delay: 1.5,
    }
  )
  gsap.from(
    '.hero__item:nth-child(3)',
    {
      duration: 0.5,
      ease: "power1.out",
      opacity: 0,
      scale: 0.9,
      delay: 1.8,
    }
  )
  gsap.from(
    '.hero__author',
    {
      duration: 0.5,
      ease: "power1.out",
      opacity: 0,
      scale: 0.9,
      delay: 2.1,
    }
  )
  gsap.from(
    '.hero__screen:nth-child(1)',
    {
      duration: 0.5,
      ease: "back.out(1.7)",
      opacity: 0,
      scale: 0.7,
      delay: 0.5,
    }
  )
  gsap.from(
    '.hero__screen:nth-child(2)',
    {
      duration: 0.5,
      ease: "back.out(1.7)",
      opacity: 0,
      scale: 0.7,
      delay: 0.7,
    }
  )
  gsap.from(
    '.hero__screen:nth-child(3)',
    {
      duration: 0.5,
      ease: "back.out(1.7)",
      opacity: 0,
      scale: 0.7,
      delay: 0.9,
    }
  )
  gsap.from(
    '.hero__screen:nth-child(4)',
    {
      duration: 0.5,
      ease: "back.out(1.7)",
      opacity: 0,
      scale: 0.7,
      delay: 1.1,
    }
  )
  gsap.from(
    '.hero__screen:nth-child(5)',
    {
      duration: 0.5,
      ease: "back.out(1.7)",
      opacity: 0,
      scale: 0.7,
      delay: 1.3,
    }
  )
}


// burger
var tl = gsap.timeline({paused: true});
tl.from(
  '.header_burger .bg',
  {
    duration: 1,
    ease: "power1.out",
    y: -100,
    opacity: 0,
  }
)
  .from(
    '.hero_burger .bg',
    {
      duration: 1,
      ease: "power1.out",
      y: 200,
      opacity: 0,
    }, "-=0.5"
  )
  .from(
    '.header__close_burger',
    {
      duration: 1,
      ease: "power1.out",
      opacity: 0,
    }, "-=0.5"
  )
  .from(
    '.hero__list_burger',
    {
      duration: 0.5,
      ease: "power1.out",
      y: 200,
      opacity: 0,
    }, "-=1"
  )
  .from(
    '.hero__list_soc_burger',
    {
      duration: 0.5,
      ease: "power1.out",
      y: 200,
      opacity: 0,
    }, "-=0.3"
  )
  .from(
    '.hero__list_case_burger:nth-child(1)',
    {
      duration: 0.5,
      ease: "power1.out",
      y: 200,
      opacity: 0,
    }, "-=0.4"
  )
  .from(
    '.hero__list_case_burger:nth-child(2)',
    {
      duration: 0.5,
      ease: "power1.out",
      y: 200,
      opacity: 0,
    }, "-=0.4"
  )