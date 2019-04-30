import {
  REQUEST_POKEMONS,
  RECEIVE_POKEMONS,
  FILTER_POKEMONS,
} from '../constants/Page';

const initialState = {
  isFetched: false,
  pokemons: [],
  displayedPokemons: [],
};

export default function page(state = initialState, action) {
  const { pokemons, displayedPokemons } = action;
  switch (action.type) {
    case REQUEST_POKEMONS:
      return {
        ...state,
        isFetched: true,
      };

    case RECEIVE_POKEMONS:
      return {
        ...state,
        pokemons,
        isFetched: false,
      };

    case FILTER_POKEMONS:
      return {
        ...state,
        displayedPokemons,
      };

    default:
      return state;
  }
}
