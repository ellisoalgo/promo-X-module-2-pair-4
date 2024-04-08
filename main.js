"use strict";

console.log ("hola");

const catList = document.querySelector(".js-list");

const catOne = `<li class="card">
<article>
  <img
    class="card_img"
    src="https://dev.adalab.es/gato-siames.webp"
    alt="gatito"
  />
  <h3 class="card_title">Anastacio</h3>
  <h4 class="card_race">Siamés</h4>
  <p class="card_description">
            Porte elegante, su patrón de color tan característico y sus ojos
            de un azul intenso, pero su historia se remonta a Asía al menos
            hace 500 años, donde tuvo su origen muy posiblemente.
   </p>
</article>
</li>`;

const catTwo = `<li class="card">
    <article>
        <img class="card_img" src="https://dev.adalab.es/sphynx-gato.webp" alt="sphynx-cat"/>
        <h3 class="card_title">Fiona</h3>
        <h4 class="card_race">Sphynx</h4>
        <p class="card_description"> 
            Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.
        </p>
    </article> 
</li>`;

const catThree = `<li class="card">
    <article>
        <img
        class="card_img"
        src="https://dev.adalab.es/maine-coon-cat.webp"
        alt="maine-coon-cat"
        />
        <h3 class="card_title">Cielo</h3>
        <h4 class="card_race">Maine Coon</h4>
        <p class="card_description">
        Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
        bella mirada se ha convertido en una de sus señas de identidad.
        Sus ojos son grandes y las orejas resultan largas y en punta.
        </p>
    </article>
</li>`;

catList.innerHTML = catOne + catTwo + catThree;

const btnAdd = document.querySelector ('.js-btn-add') ;

const newForm = document.querySelector ('.js-section-form') ;

btnAdd.addEventListener ('click', (event)=>{
    console.log ('Hello');
    newForm.classList.remove('collapsed');
}) ;

const btnCancel = document.querySelector('.js-btn-cancel') ;

const clearInput = document.querySelector('.js-input') ;

btnCancel.addEventListener ('click' , (event)=>{
    console.log ('Canceled');
    newForm.classList.add('collapsed');
    clearInput.reset ();
}) ;

const input_search_desc = document.querySelector('.js_in_search_desc');
const btnSearch = document.querySelector('.js_btn_buscar');

btnSearch.addEventListener('click', (ev)=>{
    ev.preventDefault();
    const descrSearchText = input_search_desc.value;
    catList.innerHTML = '';

    if(catOne.includes(descrSearchText) ) {
        catList.innerHTML = catOne;
    }
    if(catTwo.includes(descrSearchText) ) {
        catList.innerHTML += catTwo;
    }
    if(catThree.includes(descrSearchText) ) {
        catList.innerHTML += catThree;
    }
});
