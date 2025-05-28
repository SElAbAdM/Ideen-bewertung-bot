function  bewerteidee()  {
  const  idee =
document.getElementById("idee").value.tr
im();

  if (!idee)  {

document.getElementById("antwort").inner
Text = "Bitte gib eine Idee ein.";
    return;
  }

// Simpler Bewertungsalgorithmus
let punkte = 0;

if (idee.tolowerCase().includes("ai")

idee.tolowerCase().includes("künstliche intelligenz")) {
   punkte  +=  2;
  }
  if
(idee.tolowerCase():includes("nachaltigkeit")
idee.tolowerCase():includes("green)) {
   punkte  +=  1;
  }

let bewertung = "Durchschnittlich";

if (punkte >= 4) {
  bewertung = "Sehr vielversprechend";
} else if (punkte  >=  2) {
  bewertung = "Gut - hat Potenzial!";
)


document.gentElementById("antwort").inner
Text = "Bewertung:  ${bewertung}";
}
