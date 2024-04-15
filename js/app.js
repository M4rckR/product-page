const d = document;

d.addEventListener('DOMContentLoaded', () => {
    const cabecera = document.querySelector('#cabecera')

    function alternarMenu (e) {
        if(e.target.classList.contains('icono-menu')){
            let boxMenu = cabecera.querySelector('.caja-menu');
            boxMenu.classList.toggle('translate-x-[50rem]')
            if(boxMenu.classList.contains('translate-x-[50rem]')){
                cabecera.querySelector('.icono-menu').src = 'images/icon-hamburger.svg'
            }
            else if(!boxMenu.classList.contains('translate-x-[50rem]') ) {
                cabecera.querySelector('.icono-menu').src = 'images/icon-close-menu.svg'
            }
            return
        }
    }

    cabecera.addEventListener('click', (e) => {
        alternarMenu(e)
    })
})