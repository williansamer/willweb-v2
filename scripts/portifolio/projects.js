const LEFT = "left";
const RIGHT = "right";

let portifolio = [projeto("my-site",
              "./assets/img-portifolio/my-site.png",
              "Meu Site",
              "Site desenvolvido para mostrar aos clientes e futuros clientes todos os projetos desenvolvimento pela agência WillWeb.",
              "https://williansamer.github.io/willweb-v2/",
              "link - WillWeb"
            ),
            projeto("willffer",
              "./assets/img-portifolio/willffer.png",
              "Estância Willffer",
              "Projeto feito para mostrar todas as qualidades da estância por completo. Imagens e benefícios que a Rede Social não alcança.",
              "https://williansamer.github.io/estancia-v2/",
              "link - Estância"
            ),
            projeto("slide-show",
              "./assets/img-portifolio/slide-show.png",
              "Slide Show",
              "Design chamativo e agradável com objetivo de mostrar a imagem do produto. Versatilidade para o cliente verificar o que tanto deseja.",
              "https://williansamer.github.io/estancia-v2/pag_imagens/index.html",
              "link - Slide Show"
            ),
            projeto("churrascometro",
              "./assets/img-portifolio/churrascometro.png",
              "Churrascômetro",
              "Projeto a pedido do cliente para calcular diretamente do site a quantidade de carnes e bebidas na hora de churrasquear.",
              "https://williansamer.github.io/estancia-v2/Churrascometro/index.html",
              "link - Churrascômetro"
            ),
            projeto("jogo-da-memoria",
              "./assets/img-portifolio/jogo-da-memoria.png",
              "Jogo da Memória",
              "Jogo com transições em 3D nas cartas. Com ranking no final para desafiar o competidor a ser melhor que seus rivais.",
              "https://williansamer.github.io/memoria-game/",
              "link - Jogo da Memória"
            ),
            projeto("jogo-da-velha",
              "./assets/img-portifolio/jogo-da-velha.png",
              "Jogo da Velha",
              "Jogo simples para brincar um contra o outro.",
              "https://williansamer.github.io/Jogo-da-velha/",
              "link - Jogo da Velha"
            ),
            projeto("urna-eletronica",
              "./assets/img-portifolio/urna-eletronica.png",
              "Urna Eletrônica",
              "Cópia fiel da urna eletrônica(Sistema brasileiro de votação) com todos os dispositivos funcionando. Ótimo para praticar nas vésperas da votação",
              "https://williansamer.github.io/urna-eletronica/",
              "link - Urna Eletrônica"
            ),
            projeto("pag-captura",
              "./assets/img-portifolio/pag-captura.png",
              "Página de Captura",
              "Landing Page feito no início dos meus estudos.",
              "https://williansamer.github.io/pagina-captura/",
              "link - Página de Captura"
            ),
            projeto("api-cep",
              "./assets/img-portifolio/api-cep.png",
              "Captura de CEP por API",
              "Formulário com sistema API para detectar qualquer endereço no Brasil com um CEP real.",
              "https://williansamer.github.io/api_CEP/",
              "link - CEP-api"
            ),
            projeto("formulario",
              "./assets/img-portifolio/formulario.png",
              "Formulário",
              "Formulário com sistema de verificação de erro e alguns campos a serem preenchidos de modo obrigatório.",
              "https://williansamer.github.io/formulario/",
              "link - Formulário"
            ),
            projeto("posto",
              "./assets/img-portifolio/posto.png",
              "Preço dos Postos(em andamento)",
              "Sistema ainda em andamento com o objeto de mostrar preços dos combustíveis de uma cidade para os cidadãos com buscas selecionáveis.",
              "https://williansamer.github.io/posto-v2/",
              "link - Posto"
            )]

function projeto(nome, imagem, titulo, descricao, link, txtlink){
  return {nome, imagem, titulo, descricao, link, txtlink};
}

function creatingContainer(){
  let section = document.querySelector(".section");

  for(let i of portifolio){
    let container = document.createElement("div");

    container.classList.add("container-porti");

    definingSide(i, container);
    section.appendChild(container);
    console.log(container)
  }
  console.log(section)
}

function definingSide(i, container){

  creatingSide(LEFT, i, container);
  creatingSide(RIGHT, i, container);
}

function creatingSide(side, i, container){
  let elementSide = document.createElement("div");

  elementSide.classList.add(side);

  if(side === LEFT){
    let linkDiv = document.createElement("a");
    linkDiv.style.textDecoration = "underline";
    linkDiv.href = i.link;

      let imgDiv = document.createElement("img");
      imgDiv.classList.add("img");
      imgDiv.src = i.imagem;
      linkDiv.appendChild(imgDiv);

    elementSide.appendChild(linkDiv);
  } else if(side === RIGHT){
    let titleDiv = document.createElement("h3");
    titleDiv.classList.add("title-description");
    titleDiv.innerHTML = i.titulo;

    let descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("description");
    descriptionDiv.innerHTML = i.descricao;

    let linkDiv = document.createElement("div");
    linkDiv.classList.add("link");
      let linkA = document.createElement("a");
      linkA.style.textDecoration = "underline";
      linkA.href = i.link;
      linkA.innerHTML = i.txtlink;
      linkDiv.appendChild(linkA);
    
    elementSide.appendChild(titleDiv);
    elementSide.appendChild(descriptionDiv);
    elementSide.appendChild(linkDiv);
  }
  container.appendChild(elementSide);
}