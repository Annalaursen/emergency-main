document.querySelector("#diskokugle").addEventListener("click", infodiskokugle);
document.querySelector("#kage").addEventListener("click", infokage);
document.querySelector("#gaver").addEventListener("click", infogaver);

function infodiskokugle() {
  console.log("infodiskokugle");
  document.querySelector(".info-text > h2").textContent = "Hvad skal vi lave?";
  document.querySelector(".placeholder").textContent =
    "Her er ideer til hvad man kan lave til en fødselsdag";
  document.querySelector("#efficiency").textContent =
    "Først skal du finde ud af hvad du har af ønsker til din fødselsdag. SKal det være en lile eller stor fødselsdag?, hvor mange skal inviteres? Skal det være en aften, frokost, morgen eller endda en heldags-ting? Det er vigtigt at gøre sig nogle overvejelser når man skal planlægge en fødselsdag.";
  document.querySelector("#requirement").textContent = "hej";
}

function infokage() {
  console.log("infokage");
  document.querySelector(".info-text > h2").textContent = "Hvad skal vi spise?";
  document.querySelector(".placeholder").textContent =
    "Her er ideer til hvad man kan spise til en fødselsdag";
  document.querySelector("#efficiency").textContent = "hejjjjj";
  document.querySelector("#requirement").textContent = "hejsaaaa";
}

function infogaver() {
  console.log("infogaver");
  document.querySelector(".info-text > h2").textContent =
    "Hvad skal man ønske sig?";
  document.querySelector(".placeholder").textContent =
    "Her er ideer til hvad man kan ønske sig i gave til en fødselsdag";
  document.querySelector("#efficiency").textContent = "ved ik endnu";
  document.querySelector("#requirement").textContent = "aaaa";
}
