const navLine= document.querySelector('#navLine');
const navItem= document.querySelector('.navItem')
const nav= document.querySelector('.nav');

function clickOnNav (){
    console.log("clicked")
    // console.log(nav.childNodes.style.display='block');
    // console.log(e.target);
    navItem.style.display = 'block';
}

navLine.addEventListener('click', clickOnNav);
    // console.log(e.target);