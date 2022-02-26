const menu = document.getElementById('menu');
const indicador = document.getElementById ('indicador');
const secciones = document.querySelectorAll('.seccion');

let tamañoIndicador = menu.querySelector('a').offsetWidth;
indicador.style.width = tamañoIndicador + 'px';

let indexSeccionActiva;

//observador
const observer = new IntersectionObserver((entradas, observer) => {
    entradas.forEach(entrada => {
        if(entrada.isIntersecting) {
            indexSeccionActiva = [...secciones].indexOf(entrada.target);
            indicador.style.transform = `translatex(${tamañoIndicador * indexSeccionActiva}px)`;
        }
    })
}, {
    rootMargin: '-50px 0px 0px 0px',
    threshold: 0.2
});

//se oculta la primera seccion al principio

//asignar un observador a las secciones

secciones.forEach(seccion => observer.observe(seccion));

//Evento cuando la pantalla cambie de tamaño

const onResize = () => {
    //calcula el nuevo tamaño del indicador
    tamañoIndicador = menu.querySelector('a').offsetWidth;

    //cambiamos el tamaño del indicador.
    indicador.style.width = `${tamañoIndicador}px`;

    //volvemos a posicionar el indicador.
    indicador.style.transform =  `translatex(${tamañoIndicador * indexSeccionActiva})`;
}

window.addEventListener('resize', onResize);

