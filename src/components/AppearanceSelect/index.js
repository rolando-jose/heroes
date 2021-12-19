import React, {useEffect, useState} from "react"
import {connect, useDispatch, useSelector} from "react-redux"
import {orderByTraits} from "../../redux/actions"
import {APPEARANCE_FILTERS} from "../../constants"

/* Componente utilizadp para contener
el select de caracteristicas fisicas para ordenar los cards  */

export const AppearanceSelect = () => {
    const [selectedValue, setSelectedValue] = useState('')
    const dispatch = useDispatch()

    useEffect(() => {
        selectedValue !== '' && dispatch(orderByTraits(selectedValue))
    }, [selectedValue])

    return (
        <select onChange={ev => setSelectedValue(ev.target.value)}>
            {Object.keys(APPEARANCE_FILTERS).map(filterKey => {
                return (
                    <option key={filterKey} value={APPEARANCE_FILTERS[filterKey]}>{APPEARANCE_FILTERS[filterKey]}</option>
                )
            })}
        </select>
    )
}

