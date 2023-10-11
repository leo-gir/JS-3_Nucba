const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const btn = document.getElementById("btn-buscar");
const input = document.getElementById("input");
const container = document.getElementById("container");
const small = document.getElementById("small");

const pizza = JSON.parse(localStorage.getItem("pizza")) || [];

const saveLocalStorage = (pizza) => {
  localStorage.setItem('pizza', JSON.stringify(pizza));
}

const renderCard = (pizza) => {
  return `
  <div class="card">
                <h3>${pizza.nombre}</h3>
                <img src="${pizza.imagen}" alt="${pizza.nombre}">
                <p class="precio">Precio: $${pizza.precio}</p>
                <p class="ingredientes">Ingredientes: ${pizza.ingredientes}</p>
            </div>
  `
}

const handleClick = () => {
  const value = input.value;
  const pizza = pizzas.find(e => Number(e.id) === Number(value));
  console.log(pizza);
  if(input.value===""){
    small.textContent = 'Debes ingresar un número'
    container.innerHTML = '';
  }
  else if(!pizza){
    small.textContent = 'La pizza que buscas no existe'
    container.innerHTML = '';
  }

  container.innerHTML = renderCard(pizza);
  saveLocalStorage(pizza);
  small.textContent = '';
}

const renderPizza = () => {
  if(!pizza) return;
  container.innerHTML = renderCard(pizza)
}

const init = () => {
  document.addEventListener('DOMContentLoaded', renderPizza)
  btn.addEventListener('click', handleClick);
}

init();