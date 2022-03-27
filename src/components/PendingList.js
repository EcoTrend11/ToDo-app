import { useSelector } from "react-redux"
import ButtonCompleted from "./ButtonCompleted"
import ButtonDelete from "./ButtonDelete"

const PendingList = () =>{

    let value = useSelector(function(state){
        return state.pending
    })
   if(!value){
       return(
           <div>
               no hay pending
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
                        <td>{e.value}</td>
                        <td><ButtonCompleted value={e.value} id={e.id}/><ButtonDelete id={e.id}/></td>
                    </tr>
                    </>
                )}
            </tbody>
            </table>
        </div>
    )
}

export default PendingList