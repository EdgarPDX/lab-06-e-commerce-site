

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

