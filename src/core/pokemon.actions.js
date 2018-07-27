export const POKEMON_ACTIONS = {
    LOAD: 'LOAD_POKEMON',
    UPDATE_INPUT_FIELD: 'UPDATE_INPUT_FIELD',
    SET: 'SET_POKEMON'
}

export const fetchPokemon = (dispatch, getState) => {
    const { pokemonInputOne, pokemonInputTwo } = getState();
    Promise.all([
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonInputOne}`)
            .then(res => res.json()),
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonInputTwo}`)
            .then(res => res.json()),
    ]).then(([pokemonOne, pokemonTwo]) => {
        console.log(pokemonOne)
        console.log(pokemonTwo)
    });
}
