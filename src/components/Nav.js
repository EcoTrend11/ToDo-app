import { useState } from "react"
import { useDispatch } from "react-redux"
import { cretePending } from "../store/action"
import  style from "./Nav.module.css"


const Nav = () =>{
    const [id, setId] = useState(1)
    const [value ,setValue] =useState("")
    const dispatch = useDispatch()

    function onChange(e) {
        let value = e.target.value
        setValue(value)
    }

    function onSubmit (e){
        e.preventDefault();
        if(value.length !==0){
            dispatch(cretePending(value , id));
            setValue("");
            setId(id +1)
        }
        else{
            alert("required value")
        }

    } 

    return(
        <div className="prueba">
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <h3 class="navbar-brand">ToDo List</h3>
                    <form  onSubmit={onSubmit} class="d-flex">
                    <input className={style.input} value={value} onChange={onChange}  type="search" placeholder="Create ..." aria-label="Search"/>
                    <button  class="btn btn-outline-success" type="submit" >Create</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Nav