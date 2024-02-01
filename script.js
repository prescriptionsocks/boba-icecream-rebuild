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
  //remove previously applied borders from buttons
  gsap.to('.mask-btn', {borderColor: 'transparent', borderWidth: '0rem', duration:0})
  //create the mask animation
  const maskAnimation = gsap.timeline()
  maskAnimation.fromTo(options.btnClass, {borderColor: 'transparent', borderWidth: '0rem'}, {borderColor:'#fff', borderWidth:"0.2rem", duration:'0'});
  maskAnimation.fromTo('.masked-page', {backgroundColor: '#fff'}, {backgroundColor:options.backgroundColor, duration:'0'});
  maskAnimation.call(()=>{slideImage.src = options.slideImageSrc});
  maskAnimation.fromTo('.masked-page', {clipPath:options.clipPath}, {clipPath:'circle(100% at 50% 50%)', duration:1.5, ease:'power4-out'})
  maskAnimation.fromTo('.masked-image', {scale: '0.7'}, {scale: '1', duration:'0.3', ease: 'power1-out'}, '-=1.5')
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

strawberryBtn.addEventListener('click', ()=>playAnimation(strawberryOPtions));
mangoBtn.addEventListener('click', ()=>playAnimation(mangoOptions));
bananaBtn.addEventListener('click', ()=>playAnimation(bananaOptions));
coffeeBtn.addEventListener('click', ()=>playAnimation(coffeeOptions));
ubeBtn.addEventListener('click', ()=>playAnimation(ubeOptions));
churroBtn.addEventListener('click', ()=>playAnimation(churroOptions));

