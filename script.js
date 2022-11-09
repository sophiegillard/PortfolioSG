const navLinks = [...document.querySelectorAll('.selectMenu')];
const sections = [...document.querySelectorAll('.section')];

let sectionPosition;

const positionCalc = () =>{
    sectionPosition = sections.map(section => section.offsetTop)
}

const addScrollSmooth =(e)=>{
    const linkIndex = navLinks.indexOf(e.target);
    window.scrollTo({
        top:sectionPosition[linkIndex],
        behavior: "smooth"
    })
}

positionCalc();
console.log(sectionPosition)

navLinks.forEach(link => link.addEventListener("click", addScrollSmooth))