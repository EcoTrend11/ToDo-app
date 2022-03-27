import style from "./ShowButton.module.css"
const ShowButton = ({ show, setShow}) =>{

    function onClick (){
        if(show)setShow(false)
        if(!show)setShow(true)
    }
    return(
        <div className={style.container }>
                <button onClick={onClick} type="button" class="btn btn-secondary">Show History</button>

        </div>
    )
}

export default ShowButton