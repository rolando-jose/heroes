import {
    FILTER_HERO_BY_APPEARANCE,
    FILTER_HERO_BY_POWERSTATS,
    GETTING_HEROES,
    HEROES_LOADED,
    HEROES_NOT_LOADED,
    SEARCH_BY_NAME
} from "./actionTypes";

export const getHeroes = () => {
    return async (dispatch) => {
        dispatch({type: GETTING_HEROES});
        await fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
            .then((response) => response.json())
            .then(heroes => dispatch({
                type: HEROES_LOADED,
                payload: {heroes}
            })).catch(error => dispatch({type: HEROES_NOT_LOADED, payload: {error}}))
    }
}

export const orderByStat = (order) => {
    return async (dispatch) => {
        dispatch({type: FILTER_HERO_BY_POWERSTATS, payload: order})
    }
}

export const orderByTraits = (order) => {
    return async (dispatch) => {
        dispatch({type: FILTER_HERO_BY_APPEARANCE, payload: order})
    }
}

export const searchByName = (value) => {
    return async (dispatch) => {
        //dispatch({type: SEARCH_BY_NAME, payload: value})
        await fetch('https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/4924231237595062/search/'+value)
            .then((response) => response.json())
            .then(heroes => dispatch({
                type: SEARCH_BY_NAME,
                payload: {heroes}
            })).catch(error => dispatch({type: HEROES_NOT_LOADED, payload: {error}}))
    }
}