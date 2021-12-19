import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getHeroes} from "./redux/actions";
import {AppContainer} from "./containers/AppContainer";

function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getHeroes())
    }, [dispatch])

    return (
        <AppContainer/>
    );
}

export default App;
