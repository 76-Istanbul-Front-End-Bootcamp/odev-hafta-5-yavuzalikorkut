import data from "./data.js"
import {createTableElements} from "./main.js";

/*
  ALWAYS USE IMPORTED data ARRAY TO MAKE MANIPULATIONS

  ID for allcities table is #allcities
  ID for singlecity table is #singlecity
/*

/*
* PASS ARRAY TO createTableElements function to fill tables
* first argument - data
* second argument - tableId
* Example createTableElements([{name: "Istanbul"}], "allcities");
*/

/*
    ids for buttons and select

    Population - bigger than 500.000 => #populationBigger
    land area - less than 1000 => #landAreaLess
    Does any city has population less than 100.000? => #isPopulationLess
    Does every city has land area bigger than 100? => #isLandBigger
    city select => #selectcity
*/

/* RESET ACTION */
document.querySelector("#reset").addEventListener("click", () => {
    createTableElements(data, "allcities");
    createTableElements([], "singlecity")
});

/* START CODING HERE */

//bigger
const populationBiggerButton = document.getElementById("populationBigger");

populationBiggerButton.addEventListener("click", () => {
    const biggerCities = data.filter(city => city.population > 500000);
    createTableElements(biggerCities, "allcities");
});

//less
const landAreaLessButton = document.getElementById("landAreaLess");

landAreaLessButton.addEventListener("click", () => {
    const landAreaLessCities = data.filter(city => city.landArea < 1000);
    createTableElements(landAreaLessCities, "allcities");
});


//alert for less
const isPopulationLessButton = document.getElementById("isPopulationLess");

isPopulationLessButton.addEventListener("click", () => {
    const isAnyLess = data.some(city => city.population < 100000);
    (isAnyLess) ? alert("Yes") : alert("No");
});

//alert for bigger
const isLandBiggerButton = document.getElementById("isLandBigger");

isLandBiggerButton.addEventListener("click", () => {
    const isLandBigger = data.some(city => city.landArea > 100);
    (isLandBigger) ? alert("Yes") : alert("No");
});

//fill 
const cityNames = data.map(city => city.name);
const select = document.querySelector(".custom-select");
select.innerHTML = ""; // clear list items

cityNames.forEach((element) => {
    const option = document.createElement("option");
    option.setAttribute("value",element);
    option.textContent = element;
    select.appendChild(option);
});

//find
select.addEventListener("change", (e) => {
    const selectedCity = data.find(city => city.name === e.target.value);
    createTableElements([selectedCity], "singlecity");
});