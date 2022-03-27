import { useState } from "react"
import History from "./History"
import ShowButton from "./ShowButton"

const PendingHistory = () =>{

    const [show , setShow] = useState(false)

    return(
        <div>
            <ShowButton  show={show} setShow={setShow}/>
            <History show={show}/>
        </div>
    )
}

export default PendingHistory