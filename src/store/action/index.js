import  {COMPLETE_PENDING, CREATE_PENDING, DELETE_PENDING} from "./constanst"

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