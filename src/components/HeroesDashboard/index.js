import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {HeroCard} from "../HeroCard";

/*
* Componente del grid de heroes.
* Se inicializa con los datos de la store al terminar la llamada
* a la api  */

const HeroesDashboard = () => {

    const data = useSelector(state => state.heroes)
    const [heroes, setHeroes] = useState([])

    useEffect(()=>{
       setHeroes(data.heroes)
    }, [data])

    return (
        <>
            {heroes && heroes.length
                ? heroes.map((hero) => {
                    return <HeroCard key={hero.id} hero={hero}/>;
                })
                : ''}
        </>
    )
}

export default HeroesDashboard;
