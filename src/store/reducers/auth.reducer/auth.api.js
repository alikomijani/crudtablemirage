
import axios from 'axios'
export const login = (username, password) => {
return new Promise((resolve , reject)=>{
    axios.post('api/accounts/login' , {username, password})
    .then(res=>resolve(res.data))
    .catch(e=>{
        reject(e.response)
    })
})
};
