const ShowButton = ({ show, setShow}) =>{
    function onClick (){
        if(show)setShow(false)
        if(!show)setShow(true)
    }
    return(
        <div>
            <button onClick={onClick}>mostrar</button>
        </div>
    )
}

export default ShowButton