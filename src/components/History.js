import { useSelector } from "react-redux"

const History = ({show}) =>{
    
    
    let value = useSelector(function(state){
        return state.pendingHistory
    })
    

    if(!show){return(<></>)}
    if(!value){return<div>NO HISTORY</div>}
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
                        <td><button>imcolpleto</button><button>delete</button></td>
                    </tr>
                    </>
                )}
            </tbody>
            </table>
    </div>

    )
}

export default History