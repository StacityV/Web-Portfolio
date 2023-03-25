

function toggleMenu(){
    mainMenu = document.querySelector(".header-menu");
    mainMenu.classList.toggle("menuStyle");
}

function change(){
    // alert("sdfsdfdsf");
    console.log(window.screen.width);
    var e = document.querySelector("del");
    if (e != null && window.screen.width < 550){
        e.innerHTML = "----------------";
    }else{
        e.innerHTML = "---------------------------------------------";
    }
}