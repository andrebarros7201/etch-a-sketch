const container = document.querySelector(".container");

// Choose random color from list
const getColor = () => {
    const colors = ['red', 'blue', 'green', 'pink', ' orange', 'yellow', 'white', 'black', 'grey'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Gets all the smaller divs and adds an event listener that changes color on mouse over
const changeDivColor = () => {
    const squares = document.querySelectorAll('.item');

    squares.forEach(square =>{
        square.addEventListener('mouseover', () =>{
            const color = getColor();
            square.style.backgroundColor = `${color}`;
        });
    });
}

// Remove all the container children
const resetGrid = () => {
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
}

const createGrid = (size) => {

    resetGrid();

    if(size > 100){
        size = 100;
        alert('Max grid size is 100x100!');
    }

    for (let index = 1; index <= size; index++) { 
        const itemContainer = document.createElement('div');
        itemContainer.id = `itemContainer-${index}`;
        itemContainer.classList.add('itemContainer');
    
        for (let j = 1; j <= size; j++){

            const item = document.createElement('div');
            item.id = `item-${index}-${j}`;
            item.classList.add('item');
            itemContainer.appendChild(item);  
        }
    
        container.appendChild(itemContainer);
    }   
    changeDivColor();
}

// Button that asks for grid dimensions
const btn = document.querySelector('#changeGridSize');

btn.addEventListener('click', () => {
    const size = prompt('Select the grid size (n*n)');
    createGrid(size);
})

// Create the initial grid
createGrid(16);

const clearButton = document.querySelector('#clear');

clearButton.addEventListener('click', () =>{
    const squares = document.querySelectorAll('.item');
    squares.forEach(square =>{
        square.style.backgroundColor = 'white';
    })
})