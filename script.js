//get elements
const content = document.querySelector('.content');
const slideImage = document.querySelector('.masked-image');
const mainImage = document.querySelector('.content .slide-image');
const strawberryBtn = document.querySelector('.strawberry-btn');
const mangoBtn = document.querySelector('.mango-btn');

//create animation
function createAnimation(options) {
  const animation = gsap.timeline({ paused: true });
  // add btn border
  animation.to(options.btnClass, { borderWidth: '0.2rem', borderColor: '#fff', duration: '0' });
  // change masked page bg
  animation.to('.masked-page', { backgroundColor: options.bgColor, duration: '0' }, '<');
  // change masked page image
  animation.call(() => { slideImage.src = options.slideImageSrc; });
  // Add new clipPath coordinates & open
  animation.fromTo('.masked-page', { clipPath: options.clipPath }, { clipPath: 'circle(100% at 50% 50%)' });
  // Scale image up mid-transition
  animation.fromTo('.masked-image', { scale: '0.9' }, { scale: '1', duration: '0.3', ease: "power1.inOut" }, '-=0.3');
  // Change main bg and image
  animation.to('.content', { backgroundColor: options.bgColor }, '+=0.3');
  animation.call(() => { mainImage.src = options.slideImageSrc; });
  // close masked page
  animation.to('.masked-page', { opacity: '0', clipPath: options.clipPath, duration: '0' });
  return animation;
}

// Define all your animations
const animations = {
  strawberryAnm: createAnimation({
    btnClass: '.strawberry-btn',
    bgColor: '#F0B2BB',
    slideImageSrc: 'Images/Boba_x_Ice_Cream_Strawberry.webp',
    clipPath: 'circle(0% at 77% 79%)',
  }),
  mangoAnm: createAnimation({
    btnClass: '.mango-btn',
    bgColor: '#DC2334',
    slideImageSrc: 'Images/Boba_x_Ice_Cream_Mango.webp',
    clipPath: 'circle(0% at 76% 90%)',
  }),
  // Add more animations as needed
};

function playAnimation(animation) {
  // Reset all animations except the current one
  Object.values(animations).forEach(anim => {
    if (anim !== animation) {
      anim.pause().progress(0);
    }
  });

  // Play the chosen animation
  animation.play();
}

// Event listeners
strawberryBtn.addEventListener('click', () => { playAnimation(animations.strawberryAnm); });
mangoBtn.addEventListener('click', () => { playAnimation(animations.mangoAnm); });
