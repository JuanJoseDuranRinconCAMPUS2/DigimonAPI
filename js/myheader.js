export default{
    showHeader(){
        const wsPromise = new Promise((resolve) => {
            const ws = new Worker("./componets/wsMyHeader.js", {type: "module"});
            let id = [];
            let count = 0;
            ws.postMessage({module:"displayNavbar", data: this.data})
            ws.postMessage({module:"displaySectionInicial", data: this.data})  
            id = ["#navbar", "#inicio"]
            ws.addEventListener("message", (e)=>{
                let doc = new DOMParser().parseFromString(e.data, "text/html");
                document.querySelector(id[count]).append(...doc.body.children);
                (id.length-1==0) ? ws.terminate(): count++;
            if (count == 1) {
                resolve();
              }  
            });
                      
        });
        wsPromise.then(() => {
     
            navbar(); /* line 60 */
        });
    },

    showDigimons(){
        const wsDigimons = new Promise((resolve) => {
            const ws = new Worker("./componets/wsMyHeader.js", {type: "module"});
            let id = [];
            let count = 0;
            ws.postMessage({module:"displayIntroDigimons", data: this.data}) 
            id = [".sectionDigimones"]
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
}


const navbar = function NavBar() {
    const NavbarPromise = new Promise((resolve, reject) => {
        const toggle = document.querySelector('.toggle');
        if (toggle) {
          resolve(toggle);
         
        } else {
          reject(new Error("El elemento #toggle no se encontró en el DOM"));
        }
      });
      
      NavbarPromise.then((toggle) => {
        const navbarLinks = document.getElementsByClassName('navbar-links')[0]
        toggle.addEventListener('click', () => {
            navbarLinks.classList.toggle('active')
        })
    });
}