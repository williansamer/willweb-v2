const LEFT = "left";
const RIGHT = "right";

let projetos = ["mySite",
                "willffer",
                "churrascometro",
                "pag-captura",
                "jogo-da-velha",
                "urna-eletrônica",
                "jogo-da-memoria",
                "slide-show",
                "formulario",
                "posto",
                "api-cep"];

let links = ["https://williansamer.github.io/willweb-v2/",
            "https://github.com/williansamer/estancia-v2",
            "https://williansamer.github.io/estancia-v2/Churrascometro/index.html",
            "https://williansamer.github.io/pagina-captura/",
            "https://williansamer.github.io/Jogo-da-velha/",
            "https://williansamer.github.io/urna-eletronica/",
            "https://williansamer.github.io/memoria-game/",
            "https://williansamer.github.io/estancia-v2/pag_imagens/index.html",
            "https://williansamer.github.io/formulario/",
            "https://williansamer.github.io/posto-v2/",
            "https://williansamer.github.io/api_CEP/"];

function creatingContainer(projetos){

  projetos.forEach(projeto =>{
    let container = document.createElement("div");

    container.classList.add("container-porti");

    definingSide(projeto, container);

  })
}

function definingSide(projeto, container){

  creatingSide(LEFT, projeto, container);
  creatingSide(RIGHT, projeto, container);
}

function creatingSide(side, projeto, container){
  let elementSide = document.createElement("div");

  elementSide.classList.add(side);

  if(side === LEFT){
    let linkDiv = createElement("a");
    linkDiv.style.textDecoration = "underline";
    //linkDiv.href = 
  }
}