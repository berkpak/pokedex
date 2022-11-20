const pokemonContainer = document.querySelector('.pokemon-container');

const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  posion: '#d6b3ff',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5',
  ice: '#e0f5ff',
};

const pokemonCount = 151;

const initPokemons = async () => {
  for (let i = 1; i <= pokemonCount; i++) {
    await fetchPokemon(i);
  }
};

const fetchPokemon = async id => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  pokemonCard(data);
};

initPokemons();

function pokemonCard(pokemon) {
  const pokemonEl = document.createElement('div');
  pokemonEl.classList.add('pokemon-card');

  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const id = pokemon.id.toString().padStart(3, '0');
  const type = pokemon.types[0].type.name;
  const color = colors[type];

  pokemonEl.style.backgroundColor = `${color}`;

  const html = `
      <img 
      src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png" 
      />
      <span class ="id">#${id}</span>
      <h3 class = "name">${name}</h3> 
      <p class = "type">Type: ${type}</p>
  `;
  pokemonEl.innerHTML = html;
  pokemonContainer.appendChild(pokemonEl);
}
