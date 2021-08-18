let id = document.querySelector(".id");


onload = function(){
    let span = document.querySelectorAll(".span");
    let dado = localStorage.getItem("idioma");

    if(dado === null){
        id.innerHTML = spanPt;
        creatingContainer();
    } else{
        id.innerHTML = dado;
        creatingContainer();
    }

    let buscarTranslate = localStorage.getItem("translate");
    let translateDados = JSON.parse(buscarTranslate);

        for(let i = 0; i < span.length; i++){
            span[i].innerHTML = translateDados[spans[i]];
        }
}

function clickId(){

    if(id.innerHTML != spanPt){
        id.innerHTML = spanPt;
        localStorage.setItem("idioma", spanPt);
        localStorage.setItem("translate", JSON.stringify(pt));
        localStorage.setItem("portifolioPt", JSON.stringify(portifolioPt));
        onload();

    }else{
        id.innerHTML = spanEn;
        localStorage.setItem("idioma", spanEn);
        localStorage.setItem("translate", JSON.stringify(en));
        localStorage.setItem("portifolioEn", JSON.stringify(portifolioEn));
        onload();
    }
}
