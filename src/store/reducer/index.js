import { CREATE_PENDING } from "../action/constanst"

const initialState = {
    pending:[],
    pendingHistory: []
}

function reducer ( state = initialState, action ){
    if(action.type ===  CREATE_PENDING){
        let value = action.payload
        if(!state.pending){
            return{
                ...state,
                pending : [value],
                valor :value
            }
        }
        if(state.pending){

            let newPending = state.pending.concat(value)
            return{
                ...state,
                pending : newPending
            }
        }
    }
    return{
        state
    }
}

export default reducer