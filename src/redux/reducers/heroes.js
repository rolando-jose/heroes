import {
    FILTER_HERO_BY_APPEARANCE,
    FILTER_HERO_BY_POWERSTATS,
    GETTING_HEROES,
    HEROES_LOADED,
    HEROES_NOT_LOADED, SEARCH_BY_NAME,

} from "../actionTypes";
import {getHeroesByAppearance, getHeroesByPower} from "../selectors";

const initialState = {};

export default function(state = initialState, action) {

    switch (action.type) {
        case GETTING_HEROES: {
            return { ...state, status: 'loading' }
        }
        case HEROES_NOT_LOADED: {
            return { ...state, status: 'ERROR' }
        }
        case HEROES_LOADED: {
            return { ...state, status: 'loaded', heroes: action.payload.heroes.splice(0,100) }
        }
        case FILTER_HERO_BY_POWERSTATS: {
            return { ...state, heroes: getHeroesByPower(state, action) }
        }
        case FILTER_HERO_BY_APPEARANCE: {
            return { ...state, heroes: getHeroesByAppearance(state, action) }
        }
        case SEARCH_BY_NAME: {
            return { ...state, heroes: action.payload.heroes?.results }
        }
        default:
            return state;
    }
}
