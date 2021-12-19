import React, {useEffect, useState} from "react"
import {useDispatch} from "react-redux"
import {orderByStat} from "../../redux/actions"
import {POWER_FILTERS} from "../../constants"

/* Componente para el select de ordenar por powerstats  */

export const StatsSelect = () => {
    const [selectedValue, setSelectedValue] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        selectedValue !== '' && dispatch(orderByStat(selectedValue))
    }, [selectedValue])

    return (
        <select onChange={ev => setSelectedValue(ev.target.value)}>
            {Object.keys(POWER_FILTERS).map(filterKey => {
                return (
                    <option key={filterKey} value={POWER_FILTERS[filterKey]}>{POWER_FILTERS[filterKey]}</option>
                )
            })}
        </select>
    )
}