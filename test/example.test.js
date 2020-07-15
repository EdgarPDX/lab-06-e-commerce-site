// IMPORT MODULES under test here:
import CARS from '../Products/cars.js';
import { renderLineItem } from '../Shopping Cart/render-line-items.js';
import { renderCars } from '../Products/renderCars.js';
import { findById, calcLineTotal } from '../common/utils.js';

const test = QUnit.test;

test('Renders a car', assert => {
    //Arrange
    const lamborghini = {
        id:'lamborghini',
        name:'GALLARDO',
        image:'../assets/sportscar.png',
        category:'sports-car',
        price: 50.00,
        description:'Red, 2 Seater mid-engine sports car'
    };
    // Set up your arguments and expectations

    const expected = '<li class="sports-car" title="Red, 2 Seater mid-engine sports car"><h1>GALLARDO</h1><img src="../assets/sportscar.png"><p class="price">$50.00<button value="lamborghini">Add</button></p></li>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const dom = renderCars(lamborghini);
    const listItem = dom.outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    assert.equal(listItem, expected);
});

test('find product by id', assert => {
    //Arrange
    const id = 'lamborghini';
    
    
    // Set up your arguments and expectations
    const expected = 'lamborghini';

    // Call the function you're testing and set the result to a const
    const foundCar = findById(CARS, id);
    

    //Expect
    // Make assertions about what is expected versus the actual result
    assert.ok(foundCar);
    assert.equal(foundCar.id, expected);
});

test('calculates line total', assert => {
    //Arrange
    const quantity = 5;
    const price = 10.00;
    
    
    // Set up your arguments and expectations
    const expected = 50;

    // Call the function you're testing and set the result to a const
    const total = calcLineTotal(quantity, price);
    

    //Expect
    // Make assertions about what is expected versus the actual result
    assert.equal(total, expected);
});

test('Renders line items to dom', assert => {
    //Arrange
    const car = {
        id:'lamborghini',
        quantity:3,
    };
    const lamborghini = findById(CARS, car.id);
    
    // Set up your arguments and expectations
    const expected = `<tr><td class="cart-cars">GALLARDO</td><td>3</td><td>$50.00</td><td class="line-item-total">$150</td></tr>`;

    // Call the function you're testing and set the result to a const
    const dom = renderLineItem(car, lamborghini);
    const lineItem = dom.outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    assert.equal(lineItem, expected);
});

