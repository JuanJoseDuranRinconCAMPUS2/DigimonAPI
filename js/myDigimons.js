
function muestraDigimons(digimons) {
    const wsDigimons = new Promise((resolve) => {
        const ws = new Worker("./componets/wsMyDigimons.js", {type: "module"});
        let id = [];
        let count = 0;
        ws.postMessage({module:"displayDigimons", data: digimons}) 
        id = [".digimons"]
        ws.addEventListener("message", (e)=>{
            let doc = new DOMParser().parseFromString(e.data, "text/html");
            document.querySelector(id[count]).append(...doc.body.children);
            (id.length-1==0) ? ws.terminate(): count++;
        if (count == 2) {
            resolve();
          }  
        });
                  
    });
    wsDigimons.then(() => {
 
    });
}
export default{
    showInterfazDigimons(){
        async function getDigimons(){
            
            const url = 'https://digimon-api.vercel.app/api/digimon?limit=30';
            try {
                const response = await fetch(url);
                let result = await response.json();
                result = result.slice(0, 51);
                result.forEach(val => {
                    muestraDigimons(val) 
                });      
                console.log(result);
            } catch (error) {
                console.error(error);
            }
        }

        getDigimons();
        }
    }


