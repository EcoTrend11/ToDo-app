import  {COMPLETE_PENDING, CREATE_PENDING, DELETE_PENDING, DELETE_PENDING_HISTORY, INCOMPLETE_PENDING} from "./constanst"

export function cretePending (value, id){
    return{
        type: CREATE_PENDING,
        payload : {
            value,
            id
        }
    }
}

export function CompletePending(value , id){
    return{
        type : COMPLETE_PENDING,
        payload : {
            value,
            id
        }
    }
}

export function deletePending(id){
    return{
        type: DELETE_PENDING,
        payload : id
    }
}

export function incompletePending(value, id){
    return{
        type : INCOMPLETE_PENDING,
        payload : {
            value,
            id
        }
    }
}

export function deletePendingHistory(id){
    return{
        type: DELETE_PENDING_HISTORY,
        payload : id
    }
}