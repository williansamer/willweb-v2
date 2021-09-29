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

    let buscarTranslatePorti = localStorage.getItem("translate-porti");
    let translatePortiDados = JSON.parse(buscarTranslatePorti);

        for(let i = 0; i < span.length; i++){
            span[i].innerHTML = translatePortiDados[spans[i]];
        }
}

function clickId(){

    if(id.innerHTML != spanPt){
        id.innerHTML = spanPt;
        localStorage.setItem("idioma", spanPt);
        localStorage.setItem("translate-porti", JSON.stringify(pt));
        localStorage.setItem("portifolioPt", JSON.stringify(portifolioPt));
        onload();

    }else{
        id.innerHTML = spanEn;
        localStorage.setItem("idioma", spanEn);
        localStorage.setItem("translate-porti", JSON.stringify(en));
        localStorage.setItem("portifolioEn", JSON.stringify(portifolioEn));
        onload();
    }
}

function sendEmail(){

    let email = document.querySelector("#email").value;
    let message = document.querySelector("#message").value;

    let posts = {email, message}

    let options = { method: "POST",
                    headers: new Headers({"content-type": "application/json"}),
                    body: JSON.stringify(posts)
                    }
    
    fetch("http://localhost:3000/", options)
        .then(res=>{
            console.log(res)
        })
    return;
}

//______________________________________________________________________________
