var drop = false;


addEventListener("DOMContentLoaded", function (){
    const drop_menu = document.querySelector(".drop_menu");
    const menu_icon = document.querySelector("#menu_icon");

    document.querySelector(".talk").onclick = () => {
        window.location.href = '#contact';
    }
    document.querySelector(".arrow").onclick = () => {
        window.location.href = '#home';
    }
    document.querySelectorAll(".drop_menu a").forEach( link => {
        link.onclick = () => {
            drop_menu.style.display  = "none";
            menu_icon.src ="./assets/menu.png"
            drop = false;
        }
        
    });
    document.querySelector(".menu_icon").onclick = () => {

        if(drop === false){
            drop_menu.style.display  = "flex";
            menu_icon.src = "./assets/delete.png"
            drop = true;
        }
        else{
            drop_menu.style.display  = "none";
            menu_icon.src ="./assets/menu.png"
            drop = false;
        }
    
    }
})


