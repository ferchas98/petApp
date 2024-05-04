import { fetchPetByKey } from "./modules/petsApi.js";

/*Para extraer parámetros de la url:*/

/*1: Guardamos la url en una variable*/
const url = window.location.href;

/*2: Creamos una instancia del objeto URLSearch params*/
const params = new URLSearchParams(new URL(url).search);

/*3: Extraemos el parámetro que deseamos*/
let petKey = params.get("petKey");
console.log(petKey);

const printPetData = async (petKey) => {
  let petData = await fetchPetByKey(petKey);
  console.log(petData);
  let { name, color, cost, picture, presentation } = petData;

  document.getElementById("pet-picture").setAttribute("src", picture);
  document.getElementById("pet-name").innerText = name;
  document.getElementById("pet-presentation").innerText = presentation;
  document.getElementById("pet-specie").innerText = color;
  document.getElementById("pet-breed").innerText = cost;
};

printPetData(petKey);
