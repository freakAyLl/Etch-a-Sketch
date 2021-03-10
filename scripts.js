const body=document.querySelector('#gridBody');
for(let i =0; i<256;i++){
    let div = document.createElement('div')
    div.style.cssText = 'background-color: white; height: 38px; width: 38px; border: black 1px solid; display: inline-block;'
    body.appendChild(div)
    console.log(div)
}

