import { useSelector } from "react-redux"
import ButtonCompleted from "./ButtonCompleted"

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
      <th scope="col">Completed</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
      {value.map((e,index) =>
      
        <>
        <tr>
            <th scope="row">{index+1}</th>
            <td>{e.data}</td>
            <td><ButtonCompleted/></td>
            <td><button> eliminar</button></td>
        </tr>
        </>
      )}
  </tbody>
</table>
        </div>
    )
}

export default PendingList