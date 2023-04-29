
export default{
    showInterfazDigimons(){
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
    }
}