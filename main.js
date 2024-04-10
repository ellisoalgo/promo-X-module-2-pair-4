"use strict";

console.log("hola");

const catList = document.querySelector(".js-list");

let cat1RaceMsg = '';
let cat2RaceMsg = '';
let cat3RaceMsg = '';


const cat1Img = `https://dev.adalab.es/gato-siames.webp`;
const cat1Name = `Anastacio`;
const cat1Desc = `Porte elegante, su patrón de color tan característico y sus ojos
de un azul intenso, pero su historia se remonta a Asía al menos
hace 500 años, donde tuvo su origen muy posiblemente.`;
const cat1Race = `Siamés`;

if (cat1Race === "") {
    cat1RaceMsg = `Uy que despiste, no sabemos su raza`;
} else {
    cat1RaceMsg = cat1Race;
};

const cat2Img = `https://dev.adalab.es/sphynx-gato.webp`;
const cat2Name = `Fiona`;
const cat2Desc = `Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.`;
const cat2Race = ``;

if (cat2Race === "") {
    cat2RaceMsg = `Uy que despiste, no sabemos su raza`;
} else {
    cat2RaceMsg = cat2Race;
};

const cat3Img = `https://dev.adalab.es/maine-coon-cat.webp`;
const cat3Name = `Cielo`;
const cat3Desc = `Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
bella mirada se ha convertido en una de sus señas de identidad.
Sus ojos son grandes y las orejas resultan largas y en punta.`;
const cat3Race = ``;

if (cat3Race === "") {
    cat3RaceMsg = `Uy que despiste, no sabemos su raza`;
} else {
    cat3RaceMsg = cat3Race;
};

const catOne = `<li class="card">
                    <article>
                    <img
                        class="card_img"
                        src="${cat1Img}"
                        alt="gatito"/>
                    <h3 class="card_title">${cat1Name.toUpperCase()}</h3>
                    <h4 class="card_race">${cat1RaceMsg}</h4>
                    <p class="card_description">${cat1Desc}</p>
                    </article>
                </li>`;

const catTwo = `<li class="card">
                    <article>
                        <img class="card_img" src="${cat2Img}" alt="sphynx-cat"/>
                        <h3 class="card_title">${cat2Name.toUpperCase()}</h3>
                        <h4 class="card_race">${cat2RaceMsg}</h4>
                        <p class="card_description">${cat2Desc}</p>
                    </article> 
                </li>`;

const catThree = `<li class="card">
                    <article>
                        <img
                        class="card_img"
                        src="${cat3Img}"
                        alt="maine-coon-cat"/>
                        <h3 class="card_title">${cat3Name.toUpperCase()}</h3>
                        <h4 class="card_race">${cat3RaceMsg}</h4>
                        <p class="card_description">${cat3Desc}</p>
                    </article>
                </li>`;

catList.innerHTML = catOne + catTwo + catThree;

const btnAdd = document.querySelector('.js-btn-add');

const newForm = document.querySelector('.js-section-form');

btnAdd.addEventListener('click', handleClickNewForm);

function showNewCatForm() {
    newForm.classList.remove('collapsed');
}
function hideNewCatForm() {
    newForm.classList.add('collapsed');
}

function handleClickNewForm(event) {
    event.preventDefault();
    if (newForm.classList.contains('collapsed')) {
        showNewCatForm();
    }
    else {
        hideNewCatForm();
    }
}

const btnCancel = document.querySelector('.js-btn-cancel');

const clearInput = document.querySelector('.js-input');

btnCancel.addEventListener('click', (event) => {
    console.log('Canceled');
    newForm.classList.add('collapsed');
    clearInput.reset();
});

const btnNewCat = document.querySelector('.js-btn-new');

btnNewCat.addEventListener('click', addNewKitten);

function addNewKitten(event) {
    
  }

const input_search_desc = document.querySelector('.js_in_search_desc');
const btnSearch = document.querySelector('.js_btn_buscar');

btnSearch.addEventListener('click', (ev) => {
    ev.preventDefault();
    const descrSearchText = input_search_desc.value;
    catList.innerHTML = '';

    if (catOne.includes(descrSearchText)) {
        catList.innerHTML = catOne;
    }
    if (catTwo.includes(descrSearchText)) {
        catList.innerHTML += catTwo;
    }
    if (catThree.includes(descrSearchText)) {
        catList.innerHTML += catThree;
    }
});
