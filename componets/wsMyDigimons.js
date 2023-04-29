export let wsMyDigimons = {
    displayDigimons(p1){
        
        return`
            <div class="digimon">
                        <div class="digimon-imagen">
                        <img src="${p1.img}" alt="${p1.name}" width="50px">
                        </div>
                        <div class="digimon-info">
                            <div class="nombre-contenedor">
                                <h2 class="digimon-nombre">${p1.name}</h2>
                                <p class="digimon-id">#${p1.level}</p>
                            </div>
                        </div>   
                    <div>
            `
    }
}

self.addEventListener("message", (e)=>{
    postMessage(wsMyDigimons[`${e.data.module}`](e.data.data));
})