import {saveTodo,ADD_TODO, GET_TODOS} from '../actions/todoAction'

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
           data.list.push({id: state.id ++, title:action.payload.title})
           return data
       case GET_TODOS:  
                 console.log(action.payload.data)
                 if(action.error){

                 }
                 else{
                    let tododata = {...state}
                    tododata.list = action.payload.data
                    return tododata
                 }
                 
                 
       
           default:
           return state

  }



}
export default saveTodoReducer