//grab everything we need
const btnMenu = document.getElementById('mobile-menu-button');
const menu = document.getElementById('mobile-menu');

const mobileButtons = document.querySelectorAll('.selectMenu')

//add event listener
export const showMobileMenu = () =>{
    btnMenu.addEventListener('click', ()=>{
        menu.classList.toggle("hidden");
    })
}

export const closeMobileMenu = () =>{
    mobileButtons.forEach(button=>
        button.addEventListener('click', ()=>{
            menu.classList.add("hidden");
        }))
}


