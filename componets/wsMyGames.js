export let wsMyGames = {
    displayGaleryElements(p1){
        return`
        <div class="mySlides">
                <div class="card">
                    <div class="header">
                        <div class="image">
                        </div>
                        <div class="date">
                            <span>${p1.released}</span>
                        </div>
                    </div>
                    <div class="info">
                        <a rel="noopener noreferrer" href="#" class="block">
                            <span class="title">${p1.name}</span>
                        </a>
                        <p class="description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit ...</p>
                    </div>
                </div>
        `
    }
}

self.addEventListener("message", (e)=>{
    postMessage(wsMyGames[`${e.data.module}`](e.data.data));
})