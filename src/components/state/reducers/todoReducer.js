import {saveTodo,ADD_TODO} from '../actions/todoAction'

const initialState= {
    list: [],
    id : 0
}
   
 

 const saveTodoReducer= (state = initialState, action) => {
     console.log("in reducer", state,action)
  switch (action.type)  {
       case ADD_TODO :
           let data= {...state}
           console.log(state)
           data.list.push({id: state.id ++, task:action.payload.title})
           return data

           default:
           return state

  }

}
export default saveTodoReducer