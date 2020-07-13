// IMPORT MODULES under test here:
// import { example } from '../example.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<li id="sports-car" title="2 Seater Sports car"><h3>Lamboghini</h3><img src="../assets/sportscar.png"/><p class="price">$50.00<button value="sport-car">Add</button></p></li>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = false;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
