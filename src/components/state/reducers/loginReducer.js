
import { ADD_USER,UPDATE_USER} from '../actions/loginAction'

const initialstate= {
    logedin: false,
    updated: false,
    schema:  {
        title: "Todo",
        type: "object",
        required: ["title"],
        properties: {
          title: {type: "string", title: "Title"},
        }
      }

}

export const loginReducer = (state = initialstate, action) =>{
            
    switch (action.type) {
        case ADD_USER :
            return {
                ...state,
                logedin:true
            }

        case UPDATE_USER :
            return {
                ...state,
                updated:true
            }

         default:
                return state;

    }

}