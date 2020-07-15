import cart from '../data/cart.js';
import CARS from '../Products/cars';
import { findById } from '../common/utils.js';
import { renderLineItem } from './render-line-items.js';

const tbody = document.querySelector('tbody');

for (let i = 0; i < cart.length; i++){
    const cartItem = cart[i];

    const car = findById(CARS, cartItem.id);
    const dom = renderLineItem(cartItem, car);

    tbody.append(dom);
}


