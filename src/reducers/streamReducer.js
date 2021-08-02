import {
CREATE_STREAM,EDIT_STREAM,FETCH_STREAMS,FETCH_STREAM,DELETE_STREAM
} from "../actions/types"
import _ from "lodash"

export default (state={}, action)=>{
    switch(action.type){
        case FETCH_STREAMS:
               return {...state,..._.mapKeys(action.payload,"_id")}
        case FETCH_STREAM:
            console.log(action.payload.id,state)
            return {...state,[action.payload.id]:action.payload}
         case CREATE_STREAM:   
             
            return {...state,[action.payload.id]:action.payload}
         case EDIT_STREAM:
             return {...state,[action.payload.id]:action.payload}
          case DELETE_STREAM:
              console.log(state,action.payload._id)
              return _.omit(state,action.payload._id)          
        default: return state
    }
}