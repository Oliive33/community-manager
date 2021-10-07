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
// email js

function send() {
  emailjs
    .send("service_qlypdrv", "template_q4hefec", {
      name: document.querySelector("#nom").value,
      company: document.querySelector("#entreprise").value,
      phone: document.querySelector("#telephone").value,
      email: document.querySelector("#email").value,
      message: document.querySelector("#txt-area").value,
    })
    .then(
      (response) => {
        console.log("succes", response.status);
      },
      (error) => {
        console.log(error);
      }
    );
}
document.querySelector(".send").addEventListener("click", send());
