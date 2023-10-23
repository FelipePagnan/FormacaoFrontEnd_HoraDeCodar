// 1 - Adicionando eventos
const btn = document.querySelector("#my-button")

btn.addEventListener("click", function () {
    console.log("Clicou aqui")
})

// 2 - Removendo evento
const secondBtn = document.querySelector("#btn")

function imprimirMensagem() {
    console.log("Teste")
}

secondBtn.addEventListener("click", imprimirMensagem);

const thirBtn = document.querySelector("#other-btn")

thirBtn.addEventListener("Click", () => {
    console.log("Evento removido")
    secondBtn.removeEventListener("Click", imprimirMensagem)
})

// 3 - Argumento do evento
const myTitle = document.querySelector("#my-title")

myTitle.addEventListener("Click", (event) =>{
    console.log(event);
    console.log(event.offsetX);
    console.log(event.pointerType);
    console.log(event).target;
})

// 4 - propagação
const containerBtn = document.querySelector("#btn-container");
const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
  console.log("Evento 1");
});

btnInsideContainer.addEventListener("click", (e) => {
  // sem isso acontece a propagação
  e.stopPropagation();
  console.log("Evento 2");
});

// 5 - Removendo evento padrao
const a = document.querySelector("a")

a.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Não alterou a pagina")
})

// 6 - Eventos de tecla
document.addEventListener("keyup", (e) => {
    console.log(`Soltou a tecla ${e.key}`)
})

document.addEventListener("keyup", (e) => {
    console.log(`Apertou -a tecla ${e.key}`)
})

// 7 - Eventos de mouse
const mouseEvents = document.querySelector("#mouse")

mouseEvents.addEventListener("mousedown", () =>{
    console.log("Pressionou o botão")
})

mouseEvents.addEventListener("mouseup", () => {
    console.log("Soltou o botão")
})

mouseEvents.addEventListener("dblclick", () => {
    console.log("Clique duplo");
});

// 8 - Movimento do mouse
document.addEventListener("mousemove", (e) => {
    console.log(`No eixo X: ${e.x}`)
    console.log(`No eixo Y: ${e.y}`)
})

// 9 - Evento de scroll
window.addEventListener("scroll", (e) => {
    if (window.pageYOffset > 200) {
        console.log("Passamos de 200px")
    }
})

// 10 - Evento de focus/blur
const input = document.querySelector("#my-input")

input.addEventListener("focus", (e) => {
    console.log("Entrou no inpur")
})

input.addEventListener("blur", (e) => {
    console.log("saiu no input")
})

// 11 - evento de carregamento
window.addEventListener("load", () => {
    console.log("Página carregou!");
  });
  
  window.addEventListener("beforeunload", (event) => {
    event.preventDefault();
  });  

// 12 - debounce

const debounce = (f, delay) => {
    let timeout;
  
    return (...arguments) => {
      if (timeout) {
        clearTimeout(timeout);
      }
  
      timeout = setTimeout(() => {
        f.apply(arguments);
      }, delay);
    };
  };
  
  window.addEventListener(
    "mousemove",
    debounce(() => {
      console.log("Executando a cada 400ms");
    }, 400)
  );