import cart from '../data/cart.js';
import CARS from '../Products/cars.js';
import { findById, calcOrderItem } from '../common/utils.js';
import { renderLineItem } from './render-line-items.js';

const tbody = document.querySelector('tbody');
//grabbing order-total row
const orderTotalColumn = document.getElementById('order-total');


for (let i = 0; i < cart.length; i++){
    const cartItem = cart[i];

    const car = findById(CARS, cartItem.id);
    const dom = renderLineItem(cartItem, car);

    tbody.appendChild(dom);
}

const orderTotal = calcOrderItem(cart, CARS);
orderTotalColumn.textContent = `$${orderTotal}.00`;


