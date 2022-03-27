import { useDispatch } from "react-redux"
import { deletePending } from "../store/action"

const ButtonDelete = ({id}) =>{

    const dispatch = useDispatch()
    function onClick(){
        dispatch(deletePending(id))
    }
    return(
        <div>
            <button onClick={onClick}>delete</button>
        </div>
    )
}

export default ButtonDelete