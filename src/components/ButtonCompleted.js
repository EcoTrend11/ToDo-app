import { useDispatch } from "react-redux"
import { CompletePending } from "../store/action"

const ButtonCompleted =({value, id})=>{
    const dispatch = useDispatch()

    function onClick (){
        dispatch(CompletePending(value , id))
    }

    return(
        <div>
            <button onClick={onClick}>
                completed
            </button>
        </div>
    )
}

export default ButtonCompleted