async function fetchData(){

    const pokemonInput = document.getElementById("pokemonName");
    const pokemonName = pokemonInput.value.toLowerCase();
    document.querySelector(".pokemon-right").style.display = "block";

    
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    try{
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;

        const imgElement = document.getElementById("pokemonSprite");
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

        const nameDisplay = document.getElementById("pokemonTitle");
        nameDisplay.textContent = data.name.toUpperCase();

        const typeDisplay = document.getElementById("pokeType");
        typeDisplay.textContent = data.types[0].type.name;
       
        const heightDisplay = document.getElementById("pokeHeight");
        heightDisplay.textContent = (data.height / 10) + " m";

        const weightDisplay = document.getElementById("pokeWeight");
        weightDisplay.textContent = (data.weight / 10) + " kg";

        const abilityDisplay = document.getElementById("pokeAbility");
        abilityDisplay.textContent = data.abilities[0].ability.name;
    }
    catch(error){
        console.log(error);
    }

    
}