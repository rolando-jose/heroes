import {POWER_FILTERS, APPEARANCE_FILTERS} from "../constants"

export const getHeroesByPower = (store, action) => {
    const allHeroes = store.heroes
    switch (action.payload) {
        case POWER_FILTERS.COMBAT:
            return allHeroes.sort((a, b) => (b.powerstats.combat > a.powerstats.combat) ? 1 : -1)
        case POWER_FILTERS.POWER:
            return allHeroes.sort((a, b) => (b.powerstats.power > a.powerstats.power) ? 1 : -1)
        case POWER_FILTERS.SPEED:
            return allHeroes.sort((a, b) => (b.powerstats.speed > a.powerstats.speed) ? 1 : -1)
        case POWER_FILTERS.INTELLIGENCE:
            return allHeroes.sort((a, b) => (b.powerstats.intelligence > a.powerstats.intelligence) ? 1 : -1)
        case POWER_FILTERS.DURABILITY:
            return allHeroes.sort((a, b) => (b.powerstats.durability > a.powerstats.durability) ? 1 : -1)
        case POWER_FILTERS.STRENGTH:
            return allHeroes.sort((a, b) => (b.powerstats.strength > a.powerstats.strength) ? 1 : -1)
        default:
            return allHeroes
    }
}

export const getHeroesByAppearance = (store, action) => {
    const allHeroes = store.heroes
    switch (action.payload) {
        case APPEARANCE_FILTERS.EYE_COLOR:
            return allHeroes.sort((a, b) => (a.appearance.eyeColor > b.appearance.eyeColor) ? 1 : -1)
        case APPEARANCE_FILTERS.GENDER:
            return allHeroes.sort((a, b) => (a.appearance.gender > b.appearance.gender) ? 1 : -1)
        case APPEARANCE_FILTERS.HAIR_COLOR:
            return allHeroes.sort((a, b) => (a.appearance.hairColor > b.appearance.hairColor) ? 1 : -1)
        case APPEARANCE_FILTERS.RACE:
            return allHeroes.sort((a, b) => (a.appearance.race > b.appearance.race) ? 1 : -1)
        case APPEARANCE_FILTERS.HEIGHT:
            return allHeroes.sort((a, b) => {
                return (parseInt(b.appearance.height[1].split(' ')[0]) > parseInt(a.appearance.height[1].split(' ')[0])) ? 1 : -1
            })
        case APPEARANCE_FILTERS.WEIGHT:
            return allHeroes.sort((a, b) => (a.appearance.weight[1].split(' ') > b.appearance.weight[1].split(' ')) ? 1 : -1)
        default:
            return allHeroes
    }
}