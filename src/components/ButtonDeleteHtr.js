import { useDispatch } from "react-redux"
import { deletePendingHistory } from "../store/action"
import style from "./ButtonDeleteHtr.modulce.css"

const ButtonDeleteHtr = ({id}) =>{
    const dispatch = useDispatch()
    function onClick (){
        dispatch(deletePendingHistory(id))
    }
    return(
        <div className={style.container}>
            <button onClick={onClick} type="button" class="btn btn-danger">Delete</button>
        </div>
    )
}

export default ButtonDeleteHtr