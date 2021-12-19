import {StatsSelect} from "../OrderSelect";
import {AppearanceSelect} from "../AppearanceSelect";
import {SearchInput} from "../SearchInput";
import {Logo, OptionsGrid, OrderContainer} from "./styles";
import {useSelector} from "react-redux";

/*
Este componente actua como
* contenedor de las opciones de filtrado y header
del sitio
*/

export const OptionsContainer = () => {
    const status = useSelector(state => state.heroes.status)
    return (
        <OptionsGrid>
            <Logo>Superheroes {status === 'loading' && status}</Logo>
            <SearchInput/>
            <OrderContainer>
            <h5>
                Order by
            </h5>
            <StatsSelect/>
            <AppearanceSelect/>
            </OrderContainer>
        </OptionsGrid>
    )
}