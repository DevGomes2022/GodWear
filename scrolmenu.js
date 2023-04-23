const cor = document.getElementById("cor")

document.addEventListener('scroll',ocultar)

function ocultar(){
    if(window.scrollY > 50){
        cor.style.backgroundColor = "#0e5f96"
        cor.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.4)"
        cor.style.transition = "0.3s"
    }
    else{
        cor.style.backgroundColor = "transparent"
        cor.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0)"
    }
}

ocultar()