document.addEventListener("DOMContentLoaded", () => {

    //Seleccionar los dos elementos principales.
    let mobile_btn = document.querySelector(".navbar__mobile-btn");
    let mobile_menu = document.querySelector(".menu-mobile")


    // Función mostrar y ocultar menú.
    const showHiddenMenu = () => {
        let show = document.querySelector(".menu-mobile--show");

        if(show){
            mobile_menu.classList.remove("menu-mobile--show");
        } else{
            mobile_menu.classList.add("menu-mobile--show");
        }
    }

    // Al dar click al botón del menú muestra el menú de navegación.
    mobile_btn.addEventListener("click", showHiddenMenu);

    // Al redimensionar la pantalla por debajo de 1000px se oculta el menú si es necesario.
    window.addEventListener("resize", () =>{
        let window_width = document.body.clientWidth;

        if(window_width >= "1000"){
            mobile_menu.classList.remove("menu-mobile--show");
        }
    });

    // Cierra el menú con el botón x
    let btn_close = document.querySelector(".menu-mobile__btn-close");
   
    btn_close.addEventListener("click", showHiddenMenu);

    // Desplegar submenús.
    let menu_item = document.querySelectorAll(".menu-mobile__item");
     
    menu_item.forEach(item => {

        item.addEventListener("click", (event) =>{
            let submenu = item.lastElementChild;
            
            if(submenu.className === "menu-mobile__submenu-mobile"){
            
                if(submenu.style.display === "block"){
                    submenu.style.display = "none";
                } else{
                    submenu.style.display = "block";
                }
            }
        })
    })
});