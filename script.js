/*/get elements
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
*/

//pick the click points
document.addEventListener('click', (e)=>{
  let x = e.clientX/window.innerWidth*100;
  let y = e.clientY/window.innerHeight*100;
  console.log(x)
  console.log(y)
})


//get the elements
const content = document.querySelector('.content');
const slideImage = document.querySelector('.masked-image');
const mainImage = document.querySelector('.content .slide-image');
const strawberryBtn = document.querySelector('.strawberry-btn');
const mangoBtn = document.querySelector('.mango-btn');
const bananaBtn = document.querySelector('.banana-btn');
const coffeeBtn = document.querySelector('.coffee-btn');
const ubeBtn = document.querySelector('.ube-btn');
const churroBtn = document.querySelector('.churro-btn');


//create the bg animation

function playAnimation (options) {
  //create the curtain animation
  const maskAnimation = gsap.timeline()
  maskAnimation.fromTo(options.btnClass, {borderColor: 'transparent', borderWidth: '0rem'}, {borderColor:'#fff', borderWidth:"0.2rem", duration:'0'});
  maskAnimation.fromTo('.masked-page', {backgroundColor: '#fff'}, {backgroundColor:options.backgroundColor, duration:'0'});
  maskAnimation.call(()=>{slideImage.src = options.slideImageSrc});
  maskAnimation.fromTo('.masked-page', {clipPath:options.clipPath}, {clipPath:'circle(100% at 50% 50%)', duration:1, ease: 'bounce-in'})
  maskAnimation.fromTo('.masked-image', {scale: '0.9'}, {scale: '1', duration:'0.3', ease: 'power1-out'}, '-=1')
  maskAnimation.to('.content', {backgroundColor:options.backgroundColor, duration:'0'}, '-=0.3')
  maskAnimation.call(()=>(mainImage.src=options.slideImageSrc))
}

const strawberryOPtions = {
  btnClass: '.strawberry-btn',
  backgroundColor: '#F0B2BB',
  slideImageSrc: '/Images/Boba_x_Ice_Cream_Strawberry.webp',
  clipPath: 'circle(0% at 76.2% 90.97%)'

}

const mangoOptions = {
  btnClass: '.mango-btn',
  backgroundColor: '#DC2334',
  slideImageSrc: '/Images/Boba_x_Ice_Cream_Mango.webp',
  clipPath: 'circle(0% at 77.74% 79.87%)'
}

const bananaOptions = {
  btnClass: '.banana-btn',
  backgroundColor: '#FDE744',
  slideImageSrc: '/Images/Boba_x_Ice_Cream_Banana.webp',
  clipPath: 'circle(0% at 80.52% 69.66%)'
}

const coffeeOptions = {
  btnClass: '.coffee-btn',
  backgroundColor: '#B49076',
  slideImageSrc: '/Images/Boba_x_Ice_Cream_Muracoffee.webp',
  clipPath: 'circle(0% at 84.4% 61.58%)'
}

const ubeOptions = {
  btnClass: '.ube-btn',
  backgroundColor: '#9F4A86',
  slideImageSrc: '/Images/Boba_x_Ice_Cream_UBE.webp',
  clipPath: 'circle(0% at 89.01% 55.18%)'
}

const churroOptions = {
  btnClass: '.churro-btn',
  backgroundColor: '#AC223A',
  slideImageSrc: '/Images/Boba_x_Ice_Cream_PikaChurro.webp',
  clipPath: 'circle(0% at 94.07% 51.37%)'
}


/* strawberry x 76.20790629575403 y 90.7012195121951
   mango x 77.74524158125915 y 79.87
   banana x 80.52 y 69.66
   coffee x 84.4 y 61.58
   ube x 89.01 y 55.18
   churro x 94.07 y 51.37 */
 



strawberryBtn.addEventListener('click', ()=>playAnimation(strawberryOPtions));
mangoBtn.addEventListener('click', ()=>playAnimation(mangoOptions));
bananaBtn.addEventListener('click', ()=>playAnimation(bananaOptions));
coffeeBtn.addEventListener('click', ()=>playAnimation(coffeeOptions));
ubeBtn.addEventListener('click', ()=>playAnimation(ubeOptions));
churroBtn.addEventListener('click', ()=>playAnimation(churroOptions));

