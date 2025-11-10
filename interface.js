"use strict";

// opretter vores dara-struktur med et Array som indeholder objekter

const carInfo = [
  {
    className: "car1",
    carBrand: "Ford",
    carModel: "Mustang",
    releaseYear: "1974",
    color: "red",
    fuelType: "Disel",
  },

  {
    className: "car2",
    carBrand: "Volvo",
    carModel: "260",
    releaseYear: "2001",
    color: "blue",
    fuelType: "Disel",
  },

  {
    className: "car3",
    carBrand: "BMW",
    carModel: "900",
    releaseYear: "1999",
    color: "blue",
    fuelType: "Disel",
  },

  {
    className: "car4",
    carBrand: "Bus",
    carModel: "219",
    releaseYear: "1950",
    color: "yellow",
    fuelType: "Disel",
  },
];

// Venter med at kører JS koden indtil hele HTML-siden er indlæst
document.addEventListener("DOMContentLoaded", () => {
  //finder tooltipp id og gemmer det i en variabel
  const tooltip = document.getElementById("tooltip");

  // funktion der viser tooltip med bilopslysninger
  // Parameter: html = den tekst indenholder html-tags som skal vises i tooltip
  function showTooltip(html) {
    if (tooltip) {
      tooltip.innerHTML = html;
      // gør tooltip synlig med css klassen
      tooltip.classList.add("is-visible");

      setTimeout(function () {
        tooltip.classList.remove("is-visible");
      }, 8000); // tooltip forsvinder efter 8 sekunder
    }
  }

  carInfo.forEach((car) => {
    document.querySelectorAll("." + car.className).forEach((elem) => {
      elem.addEventListener("mouseover", () => {
        const carDetails = `
          <strong>${car.carBrand} ${car.Model} </strong>
          <br>
          Release Year: ${car.releaseYear} <br>
          Color: ${car.color} <br>
          Fuel:${car.fuelType}
        `;
        showTooltip(carDetails);
      });
    });
  });

  // Hent DOM-elementer

  const getRedcar = document.getElementById("redCar");
  const getPolicecar = document.getElementById("policeCar");
  const getBluecar = document.getElementById("blueCar");
  const getCar4 = document.getElementById("car4");

  const sun = document.querySelector(".sun");
  const scene = document.querySelector(".scene");

  // opretter lydobjekter

  const soundRedCar = new Audio();
  soundRedCar.src = "../sound/red-car-horn.wav";

  const soundPoliceCar = new Audio();
  soundPoliceCar.src = "../sound/police-car-sound.wav";

  const soundBlueCar = new Audio();
  soundBlueCar.src = "../sound/blue-car-sound.wav";

  if (getRedcar) {
    getRedcar.addEventListener("click", () => {
      soundRedCar.play();
    });
  }

  if (getPolicecar) {
    getPolicecar.addEventListener("click", () => {
      soundPoliceCar.play();
    });
  }

  if (getBluecar) {
    getBluecar.addEventListener("click", () => {
      soundBlueCar.play();
    });
  }

  if (sun && scene) {
    sun.addEventListener("click", () => {
      scene.classList.toggle("night");
    });
  }
});
