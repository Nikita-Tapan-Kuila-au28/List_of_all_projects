

const initialstate={
    users:[],
    

}

const loginReducer=(state=initialstate,action)=>{
    switch(action.type){
      case "REGISTER":
        return {
            ...state,
            users:[...state.users,action.payload]


        }
        default:
            return state;
    }

}
export default loginReducer;
