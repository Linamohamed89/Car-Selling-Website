
let menu=document.querySelector('#menu-btn');
let navbar=document.querySelector('.navbar');




menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


document.querySelector('#login-btn').oneclick = () =>{
    document.querySelector('.login-form-container').classList.toggle('active');
}

document.querySelector('.close-login-form').oneclick = () =>{
    document.querySelector('.login-form-container').classList.remove('active');
}



window.onscroll = () =>{


    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('.active');
    }else{
        document.querySelector('.header').classList.remove('.active');
    }
    menu.classList.remove('fa-times');
    navbar.classList.toggle('active');
}




document.querySelector('.home').onmousemove = (e) =>{

    document.querySelectorAll('.home-parallax').forEach(elm =>{

        let speed = elm.getAttribute('data-speed');

        let x = (window.innerWidth - e.pageX * speed) / 90;
        let y = (window.innerHeight - e.pageY * speed) / 90;

        elm.computedStyleMap.transform = 'translateX(${y}px) translateX(${y}px)';
    });
};



document.querySelector('.home').onmouseleave = () =>{

    document.querySelectorAll('.home-parallax').forEach(elm =>{

        elm.computedStyleMap.transform = 'translateX(0px) translateX(0px)';
    });
};

window.onload = () =>{


    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('.active');
    }else{
        document.querySelector('.header').classList.remove('.active');
    }
}