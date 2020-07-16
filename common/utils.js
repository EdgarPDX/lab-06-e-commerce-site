

export function findById(items, id){
    //Looping array
    for (let i = 0; i < items.length; i++){
        const item = items[i];

        if (item.id === id) {
            return item;
        }
    }
    return null;
}

export function calcLineTotal(quantity, price){
    const amount = quantity * price;
    return roundCurrency(amount);
}

function roundCurrency(amount) {
    return Math.round(amount * 100) / 100;
}

export function calcOrderItem(cart, CARS) {
    //initialize cart order as 0
    let orderTotal = 0;

    //Loop through cart
    for (let i = 0; i < cart.length; i++){
        //grab a item from cart
        const lineItem = cart[i];
        //look through products and cart to find matching items
        const car = findById(CARS, lineItem.id);
        //calculating line total price * amount of same item
        const lineTotal = calcLineTotal(lineItem.quantity, car.price);
        orderTotal += lineTotal;
    }
    return roundCurrency(orderTotal);
}

export function getCart(){
    const rawCart = localStorage.getItem('CART');
    const cart = JSON.parse(rawCart) || [];
    return cart;
}

