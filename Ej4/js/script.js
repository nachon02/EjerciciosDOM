const DATA = [
  { name: "Juan", lastname: "Perez" },
  { name: "Roberto", lastname: "Carlos" },
  { name: "Fulano", lastname: "Detal" },
  { name: "Gian", lastname: "Laic" },
  { name: "Fernando", lastname: "Saavedra" },
];

// Escribe el código necesario aquí
document.addEventListener("DOMContentLoaded", function (){
  DATA.forEach(persona =>{
    const valores = (persona.name +" "+ persona.lastname);
    const contenedor = document.getElementById('container');
    // for (const valor of valores) {
    //   console.log(valor)
    // }
    contenedor.innerHTML += `<p> ${valores} </p>`;

});
});
//
