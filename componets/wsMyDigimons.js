export let wsMyDigimons = {

}


self.addEventListener("message", (e)=>{
    postMessage(wsMyDigimons[`${e.data.module}`](e.data.data));
})