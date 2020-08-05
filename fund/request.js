const axios = require('axios').default

// create an axios instace
const service = axios.create({
    baseURL: 'https://fundsuggest.eastmoney.com',
    timeout: 5000
})

// request interceptor
service.interceptors.request.use(
    response => {
        return response
    },
    error => {
        // do someting with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    response => {
        const res = response.data

        if(res.ErrCode !== 0){
            console.log(res)
            console.log(res.ErrMsg)
            return Promise.reject(new Error(res.ErrMsg || 'Error'))
        }else{
            return res
        }
    },
    error => {
        console.log(error)
        return Promise.reject(error)
    }
)

module.exports = service