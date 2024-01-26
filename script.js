const body = document.querySelector('.body')
body.addEventListener('click', (e)=>{
    console.log(e.clientX/window.innerWidth*100)
    console.log(e.clientY/window.innerHeight*100)
})

//get elements
const content = document.querySelector('.content')
const slideImage = document.querySelector('.masked-image')
const mainImage = document.querySelector('.content .slide-image')
const strawberryBtn = document.querySelector('.strawberry-btn');

//strawberry animation

const strawberryAnm = gsap.timeline({ paused: true });

// add btn border
strawberryAnm.to('.strawberry-btn', { borderWidth: '0.2rem', borderColor: '#fff', duration:'0' });
// change masked page bg
strawberryAnm.to('.masked-page', { backgroundColor: '#FCCCD3', duration:'0' },'<');
// change masked page image
strawberryAnm.call(() => {
    console.log("Before changing slideImage src:", slideImage.src);
    slideImage.src = '/Images/Boba_x_Ice_Cream_Strawberry.webp';
    console.log("After changing slideImage src:", slideImage.src);
  });// Add new clipPath coordinates & open
strawberryAnm.fromTo('.masked-page', { clipPath: 'circle(0% at 76% 90%)' }, { clipPath: 'circle(100% at 50% 50%)' });
// Scale image up mid-transition
strawberryAnm.fromTo('.masked-image', { scale: 0.8 }, { scale: 1, duration: 0.3, ease: "power1.inOut" });
// Change main bg and image
strawberryAnm.to('.content', { backgroundColor: '#FCCCD3' });
strawberryAnm.call(() => { mainImage.src = '/Images/Boba_x_Ice_Cream_Strawberry.webp'; });
// close masked page
strawberryAnm.to('.masked-page', { opacity: '0', clipPath: 'circle(0% at 76% 90%)', duration: '0' });


strawberryBtn.addEventListener('click', ()=>{strawberryAnm.play()})
                            