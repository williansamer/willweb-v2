let id = document.querySelector(".id");


onload = function(){
    let span = document.querySelectorAll(".span");
    let dado = localStorage.getItem("idioma");
    let buscarTranslate = localStorage.getItem("translate");
    let translateDados = JSON.parse(buscarTranslate);

    if(dado === null){
        id.innerHTML = spanPt;
        localStorage.setItem("idioma", spanPt);
    } else{
        id.innerHTML = dado;
        
    }

        for(let i = 0; i < span.length; i++){
            span[i].innerHTML = translateDados[spans[i]];
        }
}

function clickId(){

    if(id.innerHTML != spanPt){
        id.innerHTML = spanPt;
        localStorage.setItem("idioma", spanPt);
        localStorage.setItem("translate", JSON.stringify(pt));
        onload();

    }else{
        id.innerHTML = spanEn;
        localStorage.setItem("idioma", spanEn);
        localStorage.setItem("translate", JSON.stringify(en));
        onload();
    }
}

//__________________________________________________________________________________

let totalSlider = document.querySelectorAll(".slider-item").length;
   
let currentItem = 0;

document.querySelector(".slider-back").style.width = `calc(100vw * ${totalSlider})`;

    setInterval(() => {
        currentItem ++;
        if(currentItem > (totalSlider -1)){
            currentItem =0;
            };
        updateMargin();
    }, 5000);

function updateMargin(){
    let sliderItemWidth = document.querySelector(".slider-item").clientWidth;
    let newMargin = (currentItem * sliderItemWidth);

    document.querySelector(".slider").style.marginLeft =
    `-${newMargin}px`;
}

//______________________________________________________________________

let totalBoxItem = document.querySelectorAll(".box-item").length;

let arrowLeft = document.querySelector(".left span");
let arrowRigth = document.querySelector(".right span");

let currentBoxItem = 0;

document.querySelector(".slider-back").style.width = `calc((100vw - 330px) * ${totalBoxItem})`;
arrowLeft.style.display = "none";

document.addEventListener("keyup", function(event){
    if(event.key === "ArrowLeft"){
        goPrev();
    }
    if(event.key === "ArrowRight"){
        goNext();
    }
})

function goPrev(){
    if(currentBoxItem === 0){
        arrowLeft.style.display = "none";
    } else if(currentBoxItem === 1){
        currentBoxItem--;
        arrowLeft.style.display = "none";
    } else if(currentBoxItem !== 0){
        currentBoxItem--;
    }
    updateMarginBox();
}

function goNext(){
    currentBoxItem++;
    arrowLeft.style.display = "block";
    if(currentBoxItem > (totalBoxItem - 1)){
        currentBoxItem = 0;
        arrowLeft.style.display = "none";
    }
    updateMarginBox();
}

function updateMarginBox(){
    let eachBoxItem = document.querySelector(".box-item").clientWidth;
    let newMarginBox = eachBoxItem * currentBoxItem;

    document.querySelector(".box-back").style.marginLeft =
    `-${newMarginBox}px`;
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