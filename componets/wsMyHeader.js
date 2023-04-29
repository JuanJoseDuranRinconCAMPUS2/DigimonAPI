export let wsMyHeader = {
    displayNavbar(p1){
        return`
        <nav class="navbar">
        <div class="title">DigimonWiki</div>
        <a href="#" class="toggle">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </a>
        <div class="navbar-links">
            <ul>
                <li><a href="#introduccion">Digimon</a></li>
                <li><a href="#">Digimons</a></li>
                <li><a href="#">Juegos De Digimon</a></li>
            </ul>
        </div>
    </nav>
        `
    },
    displaySectionInicial(p1){
        return`
        <div id="introduccion">
            <h2 class="border" id="digimon">Digimon</h2>
            <h2 class="wave" id="digimon">Digimon</h2>
            <p>
                Digimon (デジモン Dejimon), término tomado de Digital Monsters (デジタルモンスター Dejitaru Monsutaa), es una popular franquicia japonesa, que incluye series de anime, manga, juego de cartas coleccionables, juguetes, videojuegos y otro tipo de merchandising. Los Digimon son formas de vida inteligente que viven en el "Digital World" (Mundo Digital), un plano paralelo a la tierra, ubicado en la red de comunicaciones del planeta.
            </p>
        </div>
        `
    }
}

self.addEventListener("message", (e)=>{
    postMessage(wsMyHeader[`${e.data.module}`](e.data.data));
    
})