function muestraGames(games) {
    const wsDigimons = new Promise((resolve) => {
        const ws = new Worker("./componets/wsMyGames.js", {type: "module"});
        let id = [];
        let count = 0;
        ws.postMessage({module:"displayGaleryElements", data: games}) 
        id = [".container"]
        ws.addEventListener("message", (e)=>{
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector(id[count]).append(...doc.body.children);
            (id.length-1==0) ? ws.terminate(): count++;
        if (count <= 20) {
            resolve();
          }  
        });
                  
    });
    wsDigimons.then(() => {
        let slideIndex = 1;
        showSlides(slideIndex)

        function plusSlides(n){
            showSlides(slideIndex += n)
        }
        function currentSlide(n){
            showSlides(slideIndex = n)
        }

        let prev = document.querySelector(".prev")
        prev.addEventListener("click", (e)=>{
            plusSlides(-1)
        })
        let next = document.querySelector(".next")
        next.addEventListener("click", (e)=>{
            plusSlides(1)
        })
        function showSlides(n){
            let i;
            let slides = document.querySelectorAll(".mySlides");
            let quadrates = document.querySelectorAll(".quadrate"); 
            if(n > slides.length) slideIndex = 1
            if(n < 1) slideIndex = slides.length
            for(i = 0; i < slides.length; i++){
                slides[i].style.display = "none"
            }
            for(i = 0; i < quadrates.length;i++){
                quadrates[i].className = quadrates[i].className.replace("active","")
            }
            slides[slideIndex-1].style.display = "block";
            quadrates[slideIndex-1].className += " active";
        }
    });
}


function muestraButtons(buttons) {
    const wsDigimons = new Promise((resolve) => {
        const ws = new Worker("./componets/wsMyGames.js", {type: "module"});
        let id = [];
        let count = 0;
        ws.postMessage({module:"displayButtons", data: buttons}) 
        id = [".container", ".container"]
        ws.addEventListener("message", (e)=>{
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector(id[count]).append(...doc.body.children);
            (id.length-1==0) ? ws.terminate(): count++;
        if (count == 1) {
            resolve();
          }  
        });
                  
    });
    wsDigimons.then(() => {
        const buttons = document.querySelectorAll("#buttons");
        buttons.forEach(boton => boton.addEventListener("click", (event) => {
              const botonId = event.currentTarget.name;
              removerGalery();
              getGames(botonId);
          }))
    });
}

const removerGalery = function removerModal() {
    var divGalery = document.querySelectorAll(".mySlides");
    for (var i = 0; i < divGalery.length; i++) {
        divGalery[i].remove();
      }         
}

async function getGames(botonid){
    const apiKey = 'ff31eeb8709b4c9dbaf5a640c17003e3';
    const url = `https://api.rawg.io/api/games?key=${apiKey}&page=${botonid ? botonid : 1}&search=digimon`;
    try {
        const response = await fetch(url);
        let result = await response.json();
        console.log(result);
        result.results.forEach(val => {
            muestraGames(val) 
        });  
    } catch (error) {
        console.error(error);
    }
}
export default{
    showGalery(){
        
        getGames()
        muestraButtons();
    }

}