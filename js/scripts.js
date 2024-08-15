window.sr = ScrollReveal({ reset: true});
sr.reveal('.section', {duration: 1500});
sr.reveal('.grad', {duration:1500});
sr.reveal('.grad2', {duration:1500});
sr.reveal('.menu-space', {duration:900});



function openWhatsApp() {
  window.open('https://wa.me/5521997271258', '_blank');
}
const botao = document.querySelector('#botao')

botao.addEventListener('click', () => {
    window.scroll({top: window.innerHeight, behavior: "smooth"})
   
})


