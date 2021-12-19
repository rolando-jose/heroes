import {Container, Grid, Header} from "./style";
import {APPEARANCE_FILTERS, POWER_FILTERS} from "../../constants";

/* Componente de card para cada heroe.
* Esta disenado con styled components para cada seccion del card  */

export const HeroCard = ({hero}) => {
    return <Container>
        <Header>
            <p>{hero.name}</p>
            <img width='300px' height='300px' src={hero.images ? hero.images.lg : hero.image.url}/>
        </Header>
        <Grid>
            <div>
                <span>Power Stats</span>
                {Object.keys(POWER_FILTERS).map((key,index) => {
                    return <p key={hero.id+key+index}>{`${POWER_FILTERS[key]}: ${Object.values(hero.powerstats)[index]}`}</p>
                })}
            </div>
            <div>
                <span>Appearance</span>
                {Object.keys(APPEARANCE_FILTERS).map((key,index) => {
                    return <p key={hero.id+key+index}>{`${APPEARANCE_FILTERS[key]}: ${Object.values(hero.appearance)[index]}`}</p>
                })}
            </div>
        </Grid>
    </Container>
}
