const LEFT = "left";
const RIGHT = "right";

function creatingContainer(){
  let id = document.querySelector(".id");
  let section = document.querySelector(".section");
  section.innerHTML = '';

  if(id.innerHTML === spanPt){
    for(let i of portifolioPt){
      let container = document.createElement("div");

      container.classList.add("container-porti");

      definingSide(i, container);
      section.appendChild(container);
      console.log(container)
    }
  } else if(id.innerHTML === spanEn){
    for(let i of portifolioEn){
      let container = document.createElement("div");

      container.classList.add("container-porti");

      definingSide(i, container);
      section.appendChild(container);
    }
  }
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