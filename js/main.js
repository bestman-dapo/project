    let closeButton = document.querySelector('.closeButton');
    let navMenu = document.querySelector('.nav-menu');
    let hamburger = document.querySelector('.hamburger');


    hamburger.addEventListener('click', (e)=>{
        navMenu.classList.add('openNav');
    })

    closeButton.addEventListener('click', (e)=>{
        navMenu.classList.remove('openNav');
    })

scrollAnim = () => {
    let loader = document.querySelectorAll('.loader');
    let interestTab = document.querySelectorAll('.interestTab');
    let randomFactImg = document.querySelector('.randomFactImg');
    

    for (let i = 0; i < loader.length; i++) {
        let elementPos = loader[i].getBoundingClientRect().top;
        let windowHt = window.innerHeight;
        let revealpoint = 10;

        if (elementPos < windowHt ) {
            loader[i].classList.add('moveIn');
        }else{
            loader[i].classList.remove('moveIn');
        }
    }
    for (let i = 0; i < interestTab.length; i++) {
        let elementPos = interestTab[i].getBoundingClientRect().top;
        let windowHt = window.innerHeight;
        let revealpoint = 0;

        if (elementPos < windowHt ) {
            interestTab[i].classList.add('pop');
        }else{
            interestTab[i].classList.remove('pop');
        }
    }

    let elementPos = randomFactImg.getBoundingClientRect().top;
    let windowHt = window.innerHeight;
    let revealpoint = 10;

    if (elementPos < windowHt - revealpoint  ) {
        randomFactImg.classList.add('fromLeft');
    }
        
        
    
        
}

window.addEventListener('scroll', scrollAnim);