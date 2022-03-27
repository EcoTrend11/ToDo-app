import { useSelector } from "react-redux"
import ButtonDeleteHtr from "./ButtonDeleteHtr"
import ButtonIncompleHts from "./ButtonImcompleHts"
import style from "./History.module.css"
import NoHistory from "./NoHistory"

const History = ({show}) =>{
    
    
    let value = useSelector(function(state){
        return state.pendingHistory
    })
    

    if(!show){return(<></>)}
    if(!value){return<div><NoHistory/></div>}
    return(
        <div>   
            <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Pending</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {value.map((e,index) =>                
                    <>
                    <tr>
                        <th scope="row">{index+1}</th>
                        <td className={style.nameContainer} >{e.value}</td>
                        <td className={style.buttonContainer} ><ButtonIncompleHts value={e.value} id={e.id}/><ButtonDeleteHtr id={e.id}/></td>
                    </tr>
                    </>
                )}
            </tbody>
            </table>
    </div>

    )
}

export default History