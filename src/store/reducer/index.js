import { COMPLETE_PENDING, CREATE_PENDING, DELETE_PENDING, DELETE_PENDING_HISTORY, INCOMPLETE_PENDING } from "../action/constanst"

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
    if( action.type === COMPLETE_PENDING){
        let id = action.payload.id
        let payload = action.payload
        let pendingList= [...state.pending]
        let filter = pendingList.filter(e => e.id !== id)
        if(!state.pendingHistory){
            return{
                ...state,
                pending: filter,
                pendingHistory : [payload]
            }
        }
        if(state.pendingHistory){
            let newPendingHistory = state.pendingHistory.concat(payload)
            return{
                ...state,
                pending : filter,
                pendingHistory : newPendingHistory
            }
        }
    }
    if( action.type === DELETE_PENDING){
        let id = action.payload
        let pendingList =[ ...state.pending]
        let filter = pendingList.filter(e => e.id !== id)
        return{
            ...state,
            pending : filter
        }
    }
    if( action.type === INCOMPLETE_PENDING){
        let payload = action.payload
        let id = action.payload.id
        let pendingHistoryList = [...state.pendingHistory]
        let filter = pendingHistoryList.filter( e => e.id !==id)
        if(!state.pending){
            return{
                ...state,
                pending : [payload],
                pendingHistory : filter
            }
        }
        if(state.pending){
            let newPending = state.pending.concat(payload)
            return{
                ...state,
                pending : newPending,
                pendingHistory : filter
            }
        }
    }
    if(action.type ===  DELETE_PENDING_HISTORY){
        let id = action.payload
        let pendingHistoryList = [ ...state.pendingHistory]
        let filter = pendingHistoryList.filter(e => e.id !== id)
        return{
            ...state,
            pendingHistory : filter
        }
    }
    return{
        state
    }
}

export default reducer