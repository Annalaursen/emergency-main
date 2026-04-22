document.querySelector("#diskokugle").addEventListener("click", infodiskokugle);
document.querySelector("#kage").addEventListener("click", infokage);
document.querySelector("#gaver").addEventListener("click", infogaver);

function infodiskokugle() {
  console.log("infodiskokugle");
  document.querySelector(".info-text > h2").textContent = "Hvad skal vi lave?";
  document.querySelector(".placeholder").textContent =
    "Her er ideer til hvad man kan lave til en fødselsdag";
  document.querySelector("#efficiency").textContent =
    "En fødselsdag er en oplagt mulighed for at samle venner og familie og skabe gode minder sammen. Der findes mange forskellige måder at fejre en fødselsdag på, alt efter alder, interesser og budget. Man kan for eksempel holde en klassisk fødselsdagsfest derhjemme med musik, pynt og lækker mad. Det kan være alt fra en hyggelig middag til en større fest med dans og lege. Temafester er også en sjov idé, hvor gæsterne klæder sig ud – det kunne være alt fra 80’er-tema til farvefest eller noget helt kreativt. Hvis man er mere til oplevelser, kan man planlægge en dag ude. Det kunne være en tur i biografen, bowling, escape room eller måske en tur i en forlystelsespark. For dem der elsker naturen, kan en picnic i en park, en strandtur eller en vandretur være en hyggelig og afslappet måde at fejre dagen på. En anden idé er at lave aktiviteter sammen, som fx at bage kage, lave mad sammen eller spille brætspil og konkurrencer. Man kan også arrangere små lege eller quizzer for at skabe ekstra underholdning. Det vigtigste ved en fødselsdag er ikke nødvendigvis, hvad man laver, men at man er sammen med mennesker, man holder af. Uanset om det er en stor fest eller en stille fejring, handler det om at skabe en god stemning og nyde dagen.";
  document.querySelector("#requirement").textContent = "";
}

function infokage() {
  console.log("infokage");
  document.querySelector(".info-text > h2").textContent = "Hvad skal vi spise?";
  document.querySelector(".placeholder").textContent =
    "Her er ideer til hvad man kan spise til en fødselsdag";
  document.querySelector("#efficiency").textContent =
    "Til en fødselsdag er maden en vigtig del af fejringen, og der er mange muligheder at vælge imellem. Man kan for eksempel servere klassiske retter som pizza, burger, hotdogs eller sandwiches, som de fleste godt kan lide. Det er nemt og passer godt til en afslappet fest. Man kan også lave en buffet med forskellige retter, så der er noget for alle. Det kan være salater, pasta, snacks og små retter, som gæsterne selv kan vælge imellem. Snacks som chips, slik og sodavand er også populære til fødselsdage. Kagen er selvfølgelig en vigtig del af dagen. Mange vælger en lagkage, chokoladekage eller cupcakes. Man kan også pynte kagen, så den passer til temaet eller fødselaren. Det vigtigste er, at maden passer til stemningen og at alle kan lide det, så man får en hyggelig og sjov fødselsdag.";
  document.querySelector("#requirement").textContent = "";
}

function infogaver() {
  console.log("infogaver");
  document.querySelector(".info-text > h2").textContent =
    "Hvad skal man ønske sig?";
  document.querySelector(".placeholder").textContent =
    "Her er ideer til hvad man kan ønske sig i gave til en fødselsdag";
  document.querySelector("#efficiency").textContent =
    "Når man har fødselsdag, kan det være svært at finde på gode ønsker. Det er en god idé at tænke over, hvad man mangler, eller hvad man længe har ønsket sig. Mange ønsker sig ting som tøj, sko, smykker eller elektronik, fordi det er noget, man kan bruge i hverdagen. Man kan også ønske sig oplevelser i stedet for ting. Det kan for eksempel være biografture, gavekort, en tur ud at spise eller en oplevelse med venner og familie. Oplevelser kan være gode, fordi man får minder, som varer længere end ting. Hvis man har en hobby, kan man ønske sig noget, der passer til den, som fx sportsudstyr, tegnesager, bøger eller spil. Det gør det både sjovere og nemmere at dyrke det, man interesserer sig for. Det vigtigste er, at man ønsker sig noget, man bliver glad for, og som passer til ens egne interesser. Det behøver ikke være dyre ting – det er tanken og glæden, der tæller.";
  document.querySelector("#requirement").textContent = "";
}

const form = document.querySelector("form");

function cancelPopup(event) {
  event.preventDefault();

  form.querySelector(":user-invalid").focus();
}

form.addEventListener("invalid", cancelPopup, true);

const sliderInput = document.querySelector("#slider");
const sliderValue = document.querySelector("#slider-value");

function updateHeadingValue() {
  sliderValue.value = sliderInput.value;
}

sliderInput.addEventListener("input", updateHeadingValue);
