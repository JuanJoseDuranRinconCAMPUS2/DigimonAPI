async function getGames(){
    const url = 'https://digimon-api.vercel.app/api/digimon';
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
    const apiKey = 'ff31eeb8709b4c9dbaf5a640c17003e3';
    const url2 = `https://api.rawg.io/api/games?key=${apiKey}&search=digimon`;

    fetch(url2)
    .then(response => response.json())
    .then(data => {
        // Aquí puedes trabajar con los datos que devolvió la API
        console.log(data);
    })
    .catch(error => console.log(error));

    }



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
            getGames();
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