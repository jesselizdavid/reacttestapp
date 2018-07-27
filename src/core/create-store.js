import { createStore, applyMiddleware } from 'redux';
import { pokemonReducer } from "./pokemon.reducer"
import thunk from 'redux-thunk';

export const store = createStore(
    pokemonReducer,
    undefined,
    applyMiddleware(thunk)
);