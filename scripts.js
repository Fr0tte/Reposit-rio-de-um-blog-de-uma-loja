
const form = document.querySelector(".form-site")
const mascara = document.querySelector(".mascara-formulario")




function cliqueiNoBotao() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}



function esconderForm() {
    form.style.left = "-400px"
    form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"
}


function formulario() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

window.location.hash = 'novo-id';

window.addEventListener('load', function() {
    // Seleciona todos os elementos dentro do body
    const elements = document.querySelectorAll('body *');
    
    // Adiciona a classe com um pequeno delay para cada elemento
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('fade-in');
      }, 100 * index); // Delay progressivo
    });
  });