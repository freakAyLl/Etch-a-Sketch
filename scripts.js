const gridContainer=document.querySelector('#gridContainer');
window.addEventListener('load', blankGrid);
resetBtn.addEventListener('click', changeSize)

//rid
function blankGrid(){
    fillGrid(16);
    changeSize(16);
}

//changesize

function changeSize(numCols){
 grid.style.gridTemplateColumns=`repeat(${numCols}, 1fr)`
}
//fill grid
function fillGrid(numCols){
    for(let i=0; numCols*numCols;i++){
        const gridBlock=document.createElement('div');
        gridBlock.classList.add('grid-block');
        gridBlock.addEventListener('mouseleave', randomColor)
        gridContainer.appendChild(gridBlock);
    }
}
//randomColor
function randomColor(){
    div.style.backgroundColor= '#'+Math.floor(Math.random()*16777215).toString(16);
}
//cleargrid
function clearGrid(){

}


