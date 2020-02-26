
import todoservice from '../../../services/todoService'
export const ADD_TODO = 'ADD_TODO'
export const GET_TODOS = "Get_Todos"

export const saveTodo = (data) =>  ({
        

          type: ADD_TODO,
          payload: data


})

export const getTodos = ()=>({

    type: GET_TODOS,
    payload: todoservice.getTodos()
})

