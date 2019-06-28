function phonechecker(str) {
  let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  regex.test(str)
  document.getElementById("resultat").innerHTML = regex.test(str)? "Format valide":"Format non valide" ;
}
let entrer = document.getElementById("entrer")
let numero = document.getElementById("numero")

entrer.addEventListener("click",() =>{
  phonechecker(numero.value)
  numero.value = ""
})
