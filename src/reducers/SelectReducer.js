export default (state={},action)=>{
    switch(action.type){
        case "SELECT_STREAM":
            return {...action.payload}
    }
    return state
}