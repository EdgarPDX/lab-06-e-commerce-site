import CARS from './cars.js';
import { renderCars } from './renderCars.js';

const list = document.getElementById('cars-list');

for (let i = 0; i < CARS.length; i++) {
    const car = CARS[i];
    const element = renderCars(car);
    list.appendChild(element);
}