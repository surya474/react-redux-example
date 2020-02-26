




export const ADD_USER = 'Add_User'
export const UPDATE_USER = "Update_User" 



const addUser = (data)=> ({
     type:ADD_USER,
     payload: data

})

const updateUser = (data) => ({

    type: UPDATE_USER,
    payload: data
})



export { addUser  ,  updateUser}