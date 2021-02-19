"use strict";

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [];

let globalAnimals;

// The prototype for all animals: 
const Animal = {
    name: "",
    desc: "-unknown animal-",
    type: "",
    age: 0
};

function start( ) {
    console.log("ready");

    // TODO: Add event-listeners to filter and sort buttons

    document.querySelector(".filter1").addEventListener('click', filterCats);
    document.querySelector(".filter2").addEventListener('click', filterDogs);
    document.querySelector(".filter3").addEventListener('click', filterDragons);
    document.querySelector(".filter4").addEventListener('click', filterAll);

    loadJSON();

    
}


async function loadJSON() {
    const response = await fetch("animals.json");
    const jsonData = await response.json();
    
    // when loaded, prepare data objects
    prepareObjects( jsonData );
}

function prepareObjects( jsonData ) {
    allAnimals = jsonData.map( preapareObject );

    // TODO: This might not be the function we want to call first
    displayList(allAnimals);
}

function preapareObject( jsonObject ) {
    const animal = Object.create(Animal);
    
    const texts = jsonObject.fullname.split(" ");
    animal.name = texts[0];
    animal.desc = texts[2];
    animal.type = texts[3];
    animal.age = jsonObject.age;

    return animal;
}


function displayList(animals) {
    // clear the list
    document.querySelector("#list tbody").innerHTML = "";

    // build a new list
    animals.forEach( displayAnimal );
}

function displayAnimal( animal ) {
    // create clone
    const clone = document.querySelector("template#animal").content.cloneNode(true);

    // set clone data
    clone.querySelector("[data-field=name]").textContent = animal.name;
    clone.querySelector("[data-field=desc]").textContent = animal.desc;
    clone.querySelector("[data-field=type]").textContent = animal.type;
    clone.querySelector("[data-field=age]").textContent = animal.age;

    // append clone to list
    document.querySelector("#list tbody").appendChild( clone );
}




//cat filter

function filterCats() {
    console.log("filter: cats");
    createFilterCats(allAnimals);
    const catList = createFilterCats(allAnimals);
    displayList(catList);

}

function createFilterCats(animals) {
    return animals.filter(isCat);
}

function isCat(animals) {
    if (animals.type === "cat") {
        return true;
    }
    else {
        return false;
    }
}

//dog filter

function filterDogs() {
    console.log("filter: dogs");
    createFilterDogs(allAnimals);
    const dogList = createFilterDogs(allAnimals);
    displayList(dogList);

}

function createFilterDogs(animals) {
    return animals.filter(isDog);
}

function isDog(animals) {
    if (animals.type === "dog") {
        return true;
    }
    else {
        return false;
    }
}

//dragon filter

function filterDragons() {
    console.log("filter: Dragons");
    createFilterDragons(allAnimals);
    const dragonList = createFilterDragons(allAnimals);
    displayList(dragonList);

}

function createFilterDragons(animals) {
    return animals.filter(isDragon);
}

function isDragon(animals) {
    if (animals.type === "dragon") {
        return true;
    }
    else {
        return false;
    }
}

//show all

function filterAll() {
    console.log("filter: all")
    displayList(allAnimals);
}