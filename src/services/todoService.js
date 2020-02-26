import axios from 'axios'

let url= "http://localhost:4000/users/getTodos"

export default {
getTodos() {

    return axios.get(url);
    // return new Promise((resolve,reject)=>{

    //     axios.get(url).then(res=>{
    //         resolve(res)
    //     })
    //     .catch(err=>{
    //         reject(err)
    //     })
    // })
}
}
