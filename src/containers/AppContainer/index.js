import {OptionsContainer} from "../../components/OptionsContainer";
import HeroesDashboard from "../../components/HeroesDashboard";
import {AppContainerGrid, AppGrid} from "./styles";

/* Este componente actua como contenedor de la vista principal  */

export const AppContainer = () => {

    return (
        <AppContainerGrid>
            <OptionsContainer/>
            <AppGrid>
                <HeroesDashboard/>
            </AppGrid>
        </AppContainerGrid>
    )
}