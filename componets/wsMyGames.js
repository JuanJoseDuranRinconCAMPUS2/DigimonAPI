export let wsMyGames = {
    displayGaleryElements(p1){
        return`
        <div class="mySlides">
                <div class="card">
                    <div class="header">
                        <div class="image" style="background-image: url(${p1.background_image ? p1.background_image : `./img/Digimon_Logo.webp`}); background-repeat: no-repeat;background-position:top; background-size: cover;">

                        </div>
                        <div class="date">
                            <span>${p1.released ? p1.released : "####/##/##"}</span>
                        </div>
                    </div>
                    <div class="info">
                        <a rel="noopener noreferrer" href="#" class="block">
                            <span class="title">${p1.name}</span>
                        </a>
                        <div class="digimon-tipos">
                        <p class="tipo">${p1.genres[0].name}</p>
                        </div>
                        <p class="description"></p>
                    </div>
                </div>
        `
    },
    displayButtons(p1){
        return`
        <div id="digimon-buttons"> 
            <button class="botonwiki 1" id="buttons" name="1">1</button>
            <button class="botonwiki 2" id="buttons" name="2">2</button>
            <button class="botonwiki 3" id="buttons" name="3">3</button>
        </div>
        `
    }
}

self.addEventListener("message", (e)=>{
    postMessage(wsMyGames[`${e.data.module}`](e.data.data));
})