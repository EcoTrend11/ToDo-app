import { useDispatch } from "react-redux"
import { deletePending } from "../store/action"
import style from "./ButtonDelete.module.css"
const ButtonDelete = ({id}) =>{

    const dispatch = useDispatch()
    function onClick(){
        dispatch(deletePending(id))
    }
    return(
        <div className={style.container }>
            <button onClick={onClick} type="button" class="btn btn-danger">Delete</button>
        </div>
    )
}

export default ButtonDelete