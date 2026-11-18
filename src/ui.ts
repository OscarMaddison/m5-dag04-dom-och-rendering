// Dag 4: Funktioner som bygger sidans innehåll med DOM. Gör alla tester gröna på tests.html.
// Röda understrykningar tills du skrivit return är normalt. ratt.bild och ratt.beskrivning är valfria (string | undefined): använd ?? "" för att få en text.
// Regel: använd createElement och textContent. Använd INTE innerHTML med data.
import { formateraPris } from "./pris";
import type { Ratt } from "./typer";

// 1. Bygger ett kort för en rätt och returnerar det (anropar inte append själv).
//    <article data-id="1">
//      <img src="..." alt="Illustration av kardemummabulle">
//      <h3>Kardemummabulle</h3>
//      <p>Beskrivning</p>
//      <p class="pris">35 kr</p>
//    </article>
export function skapaRattKort(ratt: Ratt): HTMLElement {
  const nyArticle = document.createElement("article");
  nyArticle.classList.add("kort");
  nyArticle.dataset.id = `${ratt.id}`;

  const nyImg = document.createElement("img");
  if (ratt.bild) {
      nyImg.src = ratt.bild;
  }
  nyImg.alt = `Illustration av ${ratt.namn}`;
  nyArticle.append(nyImg);

  const nyH3 = document.createElement("h3");
  nyH3.textContent = ratt.namn;
  nyArticle.append(nyH3);

  const nyP = document.createElement("p");
  if (ratt.beskrivning) {
    nyP.textContent = ratt.beskrivning;
  }
  nyArticle.append(nyP);

  const nyPris = document.createElement("p");
  nyPris.classList.add("pris");
  nyPris.textContent = `${ratt.pris} kr`;
  nyArticle.append(nyPris);

  return nyArticle;
}

// 2. Töm containern och lägg in ett kort per rätt.
//    Är listan tom: visa <p class="tom">Inga rätter hittades.</p> istället.
export function visaMeny(container: HTMLElement, ratter: Ratt[]): void {
  while(container.firstChild) { 
    container.removeChild(container.firstChild); 
  } 
  if (ratter.length != 0) {
    for (const ratt of ratter) {
      const rattKort = skapaRattKort(ratt);
      container.append(rattKort);
    }
  } else {
    const tom = document.createElement("p");
    tom.classList.add("tom");
    tom.textContent = "Inga rätter hittades.";
    container.append(tom);
  }
}

// 3. Sätt rubrikens text: "Meny (8 rätter)". Ett enda: "Meny (1 rätt)".
export function uppdateraRubrik(element: HTMLElement, antal: number): void {
  // TODO
}

// 4. Markera EN rätt som dagens rätt: klassen "dagens" ska finnas på kortet med rätt
//    data-id, och inte på något annat kort. Anropas igen = markeringen flyttas.
export function markeraDagensRatt(container: HTMLElement, id: number): void {
  // TODO
}
