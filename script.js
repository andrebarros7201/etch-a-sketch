const container = document.querySelector(".container");

for (let index = 1; index <= 256; index++) {
    const item = document.createElement('div');
    item.id = `item-${index}`;
    item.classList.add('item');
    container.appendChild(item);    
}

