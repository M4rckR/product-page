const d = document;

d.addEventListener('DOMContentLoaded', () => {
    const cabecera = document.querySelector('#cabecera')
    const cuerpo = document.querySelector('#cuerpo')
    const cuerpo__contenedor = document.querySelector('#cuerpo__contenedor')

    cabecera.addEventListener('click', (e) => {
        alternarMenu(e)
    })

    cuerpo.addEventListener('click',(e)=> {
        continuarFlujo(e)
    })

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

    function continuarFlujo(e) {
        e.preventDefault();
        if(e.target.classList.contains('seleccion')){
            const buySection = document.createElement('SECTION')
            buySection.classList.add('absolute', 'left-0', 'right-0', 'top-0', 'bottom-0', 'z-20')


            const buySectionBox = document.createElement('ARTICLE')
            buySectionBox.classList.add('top-24' ,'sticky', 'bg-white', 'py-8', 'px-6', 'mx-4','border')
            
            const tituloModal = document.createElement('H4')
            tituloModal.textContent = 'Back this project'
            tituloModal.classList.add('font-bold', 'text-2xl', 'mb-2')
            buySectionBox.appendChild(tituloModal)

            const parrafoModal = document.createElement('p')
            parrafoModal.textContent = 'Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?'
            parrafoModal.classList.add('text-m-da-gray', 'mb-8')
            buySectionBox.appendChild(parrafoModal)

            const contenedorPlanes = document.createElement('section')
            buySectionBox.appendChild(contenedorPlanes)


            // Numero 1
            const plan1 = document.createElement('div')
            plan1.classList.add('border','rounded-sm','py-8', 'px-6')
            plan1.innerHTML = `
                <div class="flex items-center gap-2 font-bold mb-4">
                    <div class="w-6 h-6 rounded-full border cursor-pointer"></div>
                    <p>Pledge with no reward</p>
                </div>
                <!-- <p class="text-m-da-gray">Choose to support us without a reward if you simply believe in our project. As a backer, 
                you will be signed up to receive product updates via email.</p>  -->
                
                <p class="text-m-da-gray">Proyecto postergado por ser exageradamente largo, ire aprendiendo react, ya me quedo claro JS</p>
            `
            contenedorPlanes.appendChild(plan1)
            
            buySection.appendChild(buySectionBox)
            cuerpo__contenedor.appendChild(buySection)
        }
    } 

})