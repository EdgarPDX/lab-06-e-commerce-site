import CARS from '../Products/cars.js';
import { findById, calcOrderItem, getCart } from '../common/utils.js';
import { renderLineItem } from './render-line-items.js';


const cart = getCart();


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

const button = document.getElementById('place-order');

button.addEventListener('click', ()=>{
    //const cart = getCart();
    //const message = JSON.stringify(cart, true, 2);
    //const orderPlaced = makeCartList(message); 
       
      
    //const alertNotice = alert(orderPlaced);
  

});
