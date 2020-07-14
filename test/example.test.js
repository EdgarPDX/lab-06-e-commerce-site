// IMPORT MODULES under test here:
import { renderCars } from '../Products/renderCars.js';

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
