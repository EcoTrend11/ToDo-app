import { useState } from "react"
import { useDispatch } from "react-redux"
import { cretePending } from "../store/action"


const Nav = () =>{
    const [id, setId] = useState(1)
    const [value ,setValue] =useState()
    const dispatch = useDispatch()

    function onChange(e) {
        let value = e.target.value
        setValue(value)
    }

    function onSubmit (e){
        console.log(id)
        e.preventDefault();
        dispatch(cretePending(value , id));
        setValue("");
        setId(id +1)

    } 

    return(
        <div>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <h3 class="navbar-brand">ToDo List</h3>
                    <form  onSubmit={onSubmit} class="d-flex">
                    <input value={value} onChange={onChange} class="form-control me-2" type="search" placeholder="Create ..." aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Create</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Nav