const hamburguer = document.getElementById('hamburguer');
const lista = document.querySelector('.lista');

hamburguer.addEventListener('click', () => {lista.classList.toggle('mostrar')});
