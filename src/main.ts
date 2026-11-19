// Dag 4: DOM. Kör npm run dev och titta i Console (F12).
// querySelector kan ge null om elementet saknas. Hantera det med if eller ?. (TypeScript kräver det).
// Tips: document.querySelector<HTMLElement>("#id") säger vilken sorts element du får.
import { meny } from "./data";
import { visaMeny, uppdateraRubrik, markeraDagensRatt } from "./ui";
import { billigast } from "./meny";

// DEL 1: utforska DOM:en ----------------------------------------------
// 1. Hämta h1 med document.querySelector("h1") och skriv ut dess textContent.
// 2. Ändra texten i #hero-rubrik till "Välkommen in!"
// 3. Hämta alla länkar i menyn med document.querySelectorAll("nav a").
//    Loopa med for...of och skriv ut varje länks href och text.
// 4. Skapa ett nytt p-element (document.createElement), ge det texten
//    "Dagens tips: prova en kardemummabulle." och lägg det sist i #hero med append.
// 5. Lägg klassen "dagens" på #hero med classList.add. Ta bort den med classList.remove.
// 6. Säkerhetsförsök: sätt p.innerHTML = '<img src="x" onerror="console.log(\'Attack!\')">'
//    Vad händer i Console? Byt sedan till p.textContent med samma text. Vad händer nu?

//1
const rubrik = document.querySelector("h1");
let rubrikText: string = "";
if (rubrik != null) {
    rubrikText = rubrik?.textContent;
}
console.log(rubrikText);

//2
const heroRubrik = document.querySelector("#hero-rubrik");
if (heroRubrik != null) {
    heroRubrik.textContent = "Välkommen in!";
}

//3
const menyLankar = document.querySelectorAll("nav a");
for (const lank of menyLankar) {
    console.log(lank.getAttribute("href"), lank.textContent);
}

//4
const nyP = document.createElement("p");
nyP.textContent = "Dagens tips: prova en kardemummabulle.";
const hero = document.querySelector("#hero");
hero?.append(nyP);

//5
hero?.classList.add("dagens");
hero?.classList.remove("dagens");

//6
nyP.textContent = '<img src="x" onerror="console.log(\'Attack!\')">'    //innerHTML är farligt för det låter folk lägga in kod via externa filer

// DEL 2: koppla ihop med funktionerna i ui.js ----------------------------
// 7. Hämta #meny-lista och #meny-rubrik.
// 8. Anropa visaMeny med menyn, och uppdateraRubrik med antalet rätter.
// 9. Dagens rätt = den billigaste lunchen. Använd filter och billigast (från meny.js)
//    och markeraDagensRatt.

//7
const menyLista = document.querySelector("#meny-lista");
const menyRubrik = document.querySelector("#meny-rubrik");
