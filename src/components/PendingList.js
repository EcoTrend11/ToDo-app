import { useSelector } from "react-redux"
import ButtonCompleted from "./ButtonCompleted"
import ButtonDelete from "./ButtonDelete"
import NoPending from "./NoPending"
import style from "./PendingList.module.css"


const PendingList = () =>{

    let value = useSelector(function(state){
        return state.pending
    })
   if(!value){
       return(
           <div>
               <NoPending/>
           </div>
       )
   }
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
                        <td className={style.buttonContainer}><ButtonCompleted value={e.value} id={e.id}/><ButtonDelete id={e.id}/></td>
                    </tr>
                    </>
                )}
            </tbody>
            </table>
        </div>
    )
}

export default PendingList