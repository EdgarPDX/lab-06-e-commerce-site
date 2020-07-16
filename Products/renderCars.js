import { getCart, findById } from '../common/utils.js';


export function renderCars(cars){
    const liElement = document.createElement('li');
    liElement.classList.add(cars.category);
    const title = (cars.description);
    liElement.title = title;

    const h1Element = document.createElement('h1');
    h1Element.textContent = (cars.name);
    liElement.append(h1Element);

    const imgElement = document.createElement('img');
    const imgSRC = (cars.image);
    imgElement.src = imgSRC;
    liElement.append(imgElement);

    const pTag = document.createElement('p');
    pTag.classList.add('price');
    pTag.textContent = `$${cars.price}.00`;
    liElement.append(pTag);

    const button = document.createElement('button');
    const buttonValue = (cars.id);
    button.value = buttonValue;
    button.textContent = 'Add';
    pTag.append(button);
    
    button.addEventListener('click', () =>{
        //console.log(cars.id);
        const cart = getCart();

        const carsInCart = findById(cart, cars.id);
       
        //need to increment quantity if item is already there || 
        if (carsInCart) {
            carsInCart.quantity++;
        } else {
            const newCar = {
                id: cars.id,
                quantity:1
            };
            cart.push(newCar);
        }
        const stringyCart = JSON.stringify(cart);
        localStorage.setItem('CART', stringyCart);
        


        
    });

    return liElement;
}