import {useRef} from "react";
import {searchByName} from "../../redux/actions";
import {useDispatch} from "react-redux";

/* input para el input de busqueda por nombre  */

export const SearchInput = () => {

    const inputRef = useRef()
    const dispatch = useDispatch()

    return (
        <div>
            <input ref={inputRef} placeholder={'Search by name'} type="text"/>
            <button onClick={() => dispatch(searchByName(inputRef.current?.value))} value={'sfs'}>
                Search
            </button>
        </div>
    )
}