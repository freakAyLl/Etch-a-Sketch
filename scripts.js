const body=document.querySelector('#gridContainer');
for(let i =0; i<256;i++){
    let div = document.createElement('div')
    div.style.cssText = 'height: 38px; width: 38px; border: black 1px solid; display: inline-block;'
    div.classList.add(`1`)
    body.appendChild(div)
    div.addEventListener('mouseleave',()=>{
        console.log("cliking")
        div.style.backgroundColor= '#'+Math.floor(Math.random()*16777215).toString(16);
        console.log(div.style.backgroundColor)
    })
}

function createGrid(){
    div.style.backgroundColor=white;
}