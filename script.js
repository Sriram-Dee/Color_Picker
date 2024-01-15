let getById=(id)=> document.getElementById(id);
let hexText = getById('hex');
let bgColor = getById('bgColor');
let btn = getById('btn')
let copy=getById('copy');
let hexValues=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
function changeBg(){
    var hexCode='#';

    for(i=1; i<=6; i++){
        let randomIndex = Math.floor(Math.random()*16);
        hexCode += hexValues[randomIndex];
    };
    // console.log(hexCode);
    
    bgColor.style.backgroundColor=hexCode;
    hexText.innerText=hexCode;
    hexText.style.color=hexCode;
    btn.style.backgroundColor=hexCode;

    copy.addEventListener('click',()=>{
        navigator.clipboard.writeText(hexCode);
        alert(hexCode+' Hex code Copied')
        // console.log('Copied');
    })
}

