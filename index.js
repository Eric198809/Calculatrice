const allBtns = document.querySelectorAll("input[type=button]");

function val(resultat) {
  fenetre.value = fenetre.value + resultat;
  console.log(fenetre);
}

function calcule() {
  fenetre.value = eval(fenetre.value);
  info.innerText = "";
}

function suppr() {
  form.fenetre.value = "";
}
