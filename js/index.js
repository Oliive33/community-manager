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
