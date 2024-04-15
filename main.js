"use strict";

const catList = document.querySelector(".js-list");

//let catData_1.raceMsg = '';
//let catData_2.raceMsg = '';
//let catData_3.raceMsg = '';

const catData_1 = {
    img : `https://dev.adalab.es/gato-siames.webp`,
    name : `Anastacio`,
    desc : `Porte elegante, su patrón de color tan característico y sus ojos
            de un azul intenso, pero su historia se remonta a Asía al menos
            hace 500 años, donde tuvo su origen muy posiblemente.`,
    race : `Siamés`,
};
/*
    const cat1Img = `https://dev.adalab.es/gato-siames.webp`;
    const cat1Name = `Anastacio`;
    const cat1Desc = `Porte elegante, su patrón de color tan característico y sus ojos
    de un azul intenso, pero su historia se remonta a Asía al menos
    hace 500 años, donde tuvo su origen muy posiblemente.`;
    const cat1Race = `Siamés`;
*/

if (catData_1.race === "") {
    catData_1.raceMsg = `Uy que despiste, no sabemos su raza`;
} else {
    catData_1.raceMsg = catData_1.race;
};

const catData_2 = {
    img: `https://dev.adalab.es/sphynx-gato.webp`,
    name: `Fiona`,
    desc: `Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.`,
    race:``,
};

/*const cat2Img = `https://dev.adalab.es/sphynx-gato.webp`;
const cat2Name = `Fiona`;
const cat2Desc = `Produce fascinación y curiosidad. Exótico, raro, bello, extraño… hasta con pinta de alienígena han llegado a definir a esta raza gatuna que se caracteriza por la «ausencia» de pelo.`;
const cat2Race = ``;*/

if (catData_2.race === "") {
    catData_2.raceMsg = `Uy que despiste, no sabemos su raza`;
} else {
    catData_2.raceMsg = catData_2.race;
};

const catData_3 = {
    img: `https://dev.adalab.es/maine-coon-cat.webp`,
    name: `Cielo`,
    desc: `Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
            bella mirada se ha convertido en una de sus señas de identidad.
            Sus ojos son grandes y las orejas resultan largas y en punta.`,
    race: `Maine Coon`,
};

/*const cat3Img = `https://dev.adalab.es/maine-coon-cat.webp`;
const cat3Name = `Cielo`;
const cat3Desc = `Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
bella mirada se ha convertido en una de sus señas de identidad.
Sus ojos son grandes y las orejas resultan largas y en punta.`;
const cat3Race = ``;*/

if (catData_3.race === "") {
    catData_3.raceMsg = `Uy que despiste, no sabemos su raza`;
} else {
    catData_3.raceMsg = catData_3.race;
};

const catOne = `<li class="card">
                    <article>
                    <img
                        class="card_img"
                        src="${catData_1.img}"
                        alt="gatito"/>
                    <h3 class="card_title">${catData_1.name.toUpperCase()}</h3>
                    <h4 class="card_race">${catData_1.raceMsg}</h4>
                    <p class="card_description">${catData_1.desc}</p>
                    </article>
                </li>`;

const catTwo = `<li class="card">
                    <article>
                        <img class="card_img" src="${catData_2.img}" alt="sphynx-cat"/>
                        <h3 class="card_title">${catData_2.name.toUpperCase()}</h3>
                        <h4 class="card_race">${catData_2.raceMsg}</h4>
                        <p class="card_description">${catData_2.desc}</p>
                    </article> 
                </li>`;

const catThree = `<li class="card">
                    <article>
                        <img
                        class="card_img"
                        src="${catData_3.img}"
                        alt="maine-coon-cat"/>
                        <h3 class="card_title">${catData_3.name.toUpperCase()}</h3>
                        <h4 class="card_race">${catData_3.raceMsg}</h4>
                        <p class="card_description">${catData_3.desc}</p>
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

/* Dentro funcion manejadora - añadir nuevo gato
    0. preventDefault
    1. Variables: input foto, nombre, raza, descripción
    2. Recoja el valor de los input
            
    3. innerHTML en una nueva <li> en catList
    `<li class="card">
        <article>
        <img
            class="card_img"
            src="${photo}"
            alt="gatito"/>
        <h3 class="card_title">${name}</h3>
        <h4 class="card_race">${race}</h4>
        <p class="card_description">${description}</p>
        </article>
    </li>`
*/

const btnNewCat = document.querySelector('.js-btn-new');
const inputImg = document.querySelector('.js-input-img');
const inputName = document.querySelector('.js-input-name');
const inputRace = document.querySelector('.js-input-race');
const inputDesc = document.querySelector('.js-input-desc');

const catData = {
    img: ``,
    name: ``,
    race: ``,
    desc: ``,
};

function renderKitten(catData) {
    const cat = 
     `<li class="card">
         <article>
             <img
                 class="card_img"
                 src="${catData.img}"
                 alt="gatito"/>
             <h3 class="card_title">${catData.name}</h3>
             <h4 class="card_race">${catData.race}</h4>
             <p class="card_description">${catData.desc}</p>
         </article>
         </li>`;
    return cat;
}

function addNewKitten(event) {
    event.preventDefault();
    console.log("funciona!");
    const valueImg = inputImg.value;
    const valueName = inputName.value;
    const valueRace = inputRace.value;
    const valueDesc = inputDesc.value;

    const newCatDataObject = {
        img: valueImg,
        name: valueName,
        race: valueRace,
        desc: valueDesc,
    }

    catDataList.push(newCatDataObject);

    renderKitten(catDataList); //aqui faltan arrays para que funcione

    //catList.innerHTML += renderKitten(valueImg, valueName, valueRace, valueDesc); //tendremos que renderizar cat1 cat2 cat3
    
    newForm.classList.add('collapsed');
    //newForm.reset(); //????
}

btnNewCat.addEventListener('click', addNewKitten);



//
const input_search_desc = document.querySelector('.js_in_search_desc');
const btnSearch = document.querySelector('.js_btn_buscar');


const filterCat = (event) => {
    event.preventDefault();
    console.log(`click`);
    const descrSearchText = input_search_desc.value;
    
    if (catOne.includes(descrSearchText)) {
        catList.innerHTML = catOne;
    }
    if (catTwo.includes(descrSearchText)) {
        catList.innerHTML += catTwo;
    }
    if (catThree.includes(descrSearchText)) {
        catList.innerHTML += catThree;
    }
};

btnSearch.addEventListener('click', filterCat);

/*{
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
};*/
