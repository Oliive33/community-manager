//Onglets

const choixTarifs = Array.from(document.querySelectorAll(".choix"));
const contenuTarifs = Array.from(document.querySelectorAll(".panneau"));

choixTarifs.forEach((choix) => {
  choix.addEventListener("click", (e) => {
    let indexClic = choixTarifs.indexOf(e.target);
    // console.log(indexClic);

    for (let i = 0; i < choixTarifs.length; i++) {
      if (i === indexClic) {
        choixTarifs[i].classList.add("active-choix");
        contenuTarifs[i].classList.add("panneau-active");
      } else {
        choixTarifs[i].classList.remove("active-choix");
        contenuTarifs[i].classList.remove("panneau-active");
      }
    }
  });
});
//ScrollTrigger
const presentationContainer = document.getElementById("#home");
const titrePres = document.querySelector(".titre-global");
const ligne = document.querySelector("hr");
const pres1 = document.querySelector(".vague1");
const pres2 = document.querySelector(".vague2");
const pres3 = document.querySelector(".vague3");
const containerTarifs = document.querySelector(".container-tarifs");

const tlpres = new TimelineMax();

tlpres
  .from(titrePres, { y: -50, opacity: 0, duration: 0.8, delay: 0.3 })
  .from(ligne, { y: 0, opacity: 0, duration: 0.5, delay: 0.5 })
  .from(pres1, { y: -20, opacity: 0, duration: 0.6, delay: 0.8 }, "-=0.5")
  .from(pres2, { y: -20, opacity: 0, duration: 0.6, delay: 0.9 }, "-=0.5")
  .from(pres3, { y: -20, opacity: 0, duration: 0.6, delay: 1.2 }, "-=0.5")
  .from(
    containerTarifs,
    { y: -30, opacity: 0, duration: 0.6, delay: 1.9 },
    "-=0.5"
  );

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: presentationContainer,
  triggerHook: 0.9,
  markers: false,
  reverse: false,
})
  .setTween(tlpres)
  // .addIndicators()
  .addTo(controller);

//Btn
function BtnHover() {
  document.querySelector(".form-btn").addEventListener("mousemove", (e) => {
    const x = e.pageX - e.target.offsetLeft;
    const y = e.pageY - e.target.offsetTop;

    e.target.style.setProperty("--x", `${x}px`);
    e.target.style.setProperty("--y", `${y}px`);
  });
}
BtnHover();
// Scroll up
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // Si on le scroll est supérieur ou égale à 200vh
  if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);
