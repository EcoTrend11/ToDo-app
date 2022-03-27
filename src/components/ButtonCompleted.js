import { useDispatch } from "react-redux"
import { CompletePending } from "../store/action"
import style from "./ButtonCompleted.modulce.css"

const ButtonCompleted =({value, id})=>{
    const dispatch = useDispatch()

    function onClick (){
        dispatch(CompletePending(value , id))
    }

    return(
        <div className={style.container }>
            <button onClick={onClick} type="button" class="btn btn-success">completed</button>
        </div>
    )
}

export default ButtonCompleted