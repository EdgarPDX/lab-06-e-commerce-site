



export function renderLineItem(lineItem, car){
    const trElement = document.createElement('tr');

    //Adding table elements
    const nameColumn = document.createElement('td'); 
    nameColumn.classList.add('cart-cars');
    nameColumn.textContent = (car.name);
    trElement.append(nameColumn);

    const qtyColumn = document.createElement('td');
    qtyColumn.textContent = Number(lineItem.quantity);
    trElement.append(qtyColumn);

    const priceColumn = document.createElement('td');
    priceColumn.textContent = `$${car.price}.00`;
    trElement.append(priceColumn);

    return trElement;                       
}