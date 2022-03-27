import { useDispatch } from "react-redux"
import { incompletePending } from "../store/action"
import style from "./ButtonImcompleteHts.module.css"

const ButtonIncompleHts = ({value, id}) =>{
    const dispatch = useDispatch()
    function onClick (){
        dispatch(incompletePending(value, id))
    }

    return(
        <div className={style.container }>
            <button onClick={onClick} type="button" class="btn btn-info">Incomplete</button>
        </div>
    )
}

export default ButtonIncompleHts