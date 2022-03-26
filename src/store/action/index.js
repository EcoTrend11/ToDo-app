import  {CREATE_PENDING} from "./constanst"

export function cretePending (data){
    return{
        type: CREATE_PENDING,
        payload : {
            data
        }
    }
}