let spanPortifolio = document.querySelector("#span-portifolio");

let spanContactFooter = document.querySelector("#span-contactFooter");
let spanSend = document.querySelector("#span-send");
let spanCopy = document.querySelector("#span-copy");

let spanPt =  '<img src="./assets/willweb_Images/br.png" style="width: 15px;"> Português'
let spanEn = '<img src="./assets/willweb_Images/en.png" style="width: 15px;"> English'

let spans = ["spanPortifolio", "spanContactFooter", "spanSend", "spanCopy"];

let portifolioPt = [projetoPt("my-site",
              "./assets/img-portifolio/my-site.png",
              "Meu Site",
              "Site desenvolvido para mostrar aos clientes e futuros clientes todos os projetos desenvolvimento pela agência WillWeb.",
              "https://williansamer.github.io/willweb-v2/",
              "link - WillWeb"
            ),
            projetoPt("willffer",
              "./assets/img-portifolio/willffer.png",
              "Estância Willffer",
              "Projeto feito para mostrar todas as qualidades da estância por completo. Imagens e benefícios que a Rede Social não alcança.",
              "https://williansamer.github.io/estancia-v2/",
              "link - Estância"
            ),
            projetoPt("slide-show",
              "./assets/img-portifolio/slide-show.png",
              "Slide Show",
              "Design chamativo e agradável com objetivo de mostrar a imagem do produto. Versatilidade para o cliente verificar o que tanto deseja.",
              "https://williansamer.github.io/estancia-v2/pag_imagens/index.html",
              "link - Slide Show"
            ),
            projetoPt("churrascometro",
              "./assets/img-portifolio/churrascometro.png",
              "Churrascômetro",
              "Projeto a pedido do cliente para calcular diretamente do site a quantidade de carnes e bebidas na hora de churrasquear.",
              "https://williansamer.github.io/estancia-v2/Churrascometro/index.html",
              "link - Churrascômetro"
            ),
            projetoPt("jogo-da-memoria",
              "./assets/img-portifolio/jogo-da-memoria.png",
              "Jogo da Memória",
              "Jogo com transições em 3D nas cartas. Com ranking no final para desafiar o competidor a ser melhor que seus rivais.",
              "https://williansamer.github.io/memoria-game/",
              "link - Jogo da Memória"
            ),
            projetoPt("jogo-da-velha",
              "./assets/img-portifolio/jogo-da-velha.png",
              "Jogo da Velha",
              "Jogo simples para brincar um contra o outro.",
              "https://williansamer.github.io/Jogo-da-velha/",
              "link - Jogo da Velha"
            ),
            projetoPt("urna-eletronica",
              "./assets/img-portifolio/urna-eletronica.png",
              "Urna Eletrônica",
              "Cópia fiel da urna eletrônica(Sistema brasileiro de votação) com todos os dispositivos funcionando. Ótimo para praticar nas vésperas da votação",
              "https://williansamer.github.io/urna-eletronica/",
              "link - Urna Eletrônica"
            ),
            projetoPt("pag-captura",
              "./assets/img-portifolio/pag-captura.png",
              "Página de Captura",
              "Landing Page. Primeiro trabalho desenvolvido pela agency WillWeb. Vale à pena acrescentá-lo.",
              "https://williansamer.github.io/pagina-captura/",
              "link - Página de Captura"
            ),
            projetoPt("api-cep",
              "./assets/img-portifolio/api-cep.png",
              "Captura de CEP por API",
              "Formulário com sistema API para detectar qualquer endereço no Brasil com um CEP real.",
              "https://williansamer.github.io/api_CEP/",
              "link - CEP-api"
            ),
            projetoPt("formulario",
              "./assets/img-portifolio/formulario.png",
              "Formulário",
              "Formulário com sistema de verificação de erro e alguns campos a serem preenchidos de modo obrigatório.",
              "https://williansamer.github.io/formulario/",
              "link - Formulário"
            ),
            projetoPt("posto",
              "./assets/img-portifolio/posto.png",
              "Preço dos Postos(em andamento)",
              "Sistema ainda em andamento com o objeto de mostrar preços dos combustíveis de uma cidade para os cidadãos com buscas selecionáveis.",
              "https://williansamer.github.io/posto-v2/",
              "link - Posto"
            )]

function projetoPt(nome, imagem, titulo, descricao, link, txtlink){
  return {nome, imagem, titulo, descricao, link, txtlink};
}

let portifolioEn = [projetoEn("my-site",
              "./assets/img-portifolio/my-site.png",
              "My Website",
              "WebSite created to show clients and future clients all projects developed by the WillWeb agency.",
              "https://williansamer.github.io/willweb-v2/",
              "link - WillWeb"
            ),
            projetoEn("willffer",
              "./assets/img-portifolio/willffer.png",
              "Willffer Resort",
              "Project made to show all the qualities of the resort for whole. Images and benefits that the Social Network does not reach.",
              "https://williansamer.github.io/estancia-v2/",
              "link - Willffer Resort"
            ),
            projetoEn("slide-show",
              "./assets/img-portifolio/slide-show.png",
              "Slide Show",
              "Eye-catching and pleasant design with the objective of showing the product's image. Versatility for the customer to see what he's looking for",
              "https://williansamer.github.io/estancia-v2/pag_imagens/index.html",
              "link - Slide Show"
            ),
            projetoEn("churrascometro",
              "./assets/img-portifolio/churrascometro.png",
              "Barbecue Meter",
              "Customer-requested project to calculate directly from the website the amount of meat and beverages at the time of barbecue.",
              "https://williansamer.github.io/estancia-v2/Churrascometro/index.html",
              "link - Barbecue Meter"
            ),
            projetoEn("jogo-da-memoria",
              "./assets/img-portifolio/jogo-da-memoria.png",
              "Memory Game",
              "Game with 3D transitions on the cards. With ranking at the end to challenge the competitor to be better than their rivals.",
              "https://williansamer.github.io/memoria-game/",
              "link - Memory Game"
            ),
            projetoEn("jogo-da-velha",
              "./assets/img-portifolio/jogo-da-velha.png",
              "Tic-tac-toe",
              "Simple game to play against each other.",
              "https://williansamer.github.io/Jogo-da-velha/",
              "link - Tic-tac-toe"
            ),
            projetoEn("urna-eletronica",
              "./assets/img-portifolio/urna-eletronica.png",
              "Electronic Ballot Box",
              "Faithful copy of the electronic ballot box (Brazilian voting system) with all devices working. Great for practicing on the eve of voting.",
              "https://williansamer.github.io/urna-eletronica/",
              "link - Electronic Ballot Box"
            ),
            projetoEn("pag-captura",
              "./assets/img-portifolio/pag-captura.png",
              "Page Capture",
              "Landing Page. First work developed by agency WillWeb. It is worth adding it.",
              "https://williansamer.github.io/pagina-captura/",
              "link - Page Capture"
            ),
            projetoEn("api-cep",
              "./assets/img-portifolio/api-cep.png",
              "Zip Code by API",
              "Form with API system to detect any address in Brazil with a real zip code.",
              "https://williansamer.github.io/api_CEP/",
              "link - Zip Code by API"
            ),
            projetoEn("formulario",
              "./assets/img-portifolio/formulario.png",
              "Registration Page",
              "Form with an error checking system and some fields to be filled in obligatorily.",
              "https://williansamer.github.io/formulario/",
              "link - Registration Page"
            ),
            projetoEn("posto",
              "./assets/img-portifolio/posto.png",
              "Fuel Price(in progress)",
              "System still in progress with the object of showing fuel prices of a city to citizens with selectable searches.",
              "https://williansamer.github.io/posto-v2/",
              "link - Fuel Price"
            )]

function projetoEn(nome, imagem, titulo, descricao, link, txtlink){
  return {nome, imagem, titulo, descricao, link, txtlink};
}