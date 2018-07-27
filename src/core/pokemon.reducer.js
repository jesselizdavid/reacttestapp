import { POKEMON_ACTIONS } from './pokemon.actions';

const INITIAL_STATE = {
    pokemonInputOne: '',
    pokemonInputTwo: ''
}

export const pokemonReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case POKEMON_ACTIONS.UPDATE_INPUT_FIELD: {
            return {
                ...state,
                [action.payload.inputKey]: action.payload.value

            }
        }
        default: {
            return state
        }
    }
}
