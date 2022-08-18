import axios from 'axios'

const $http = axios.create({
    baseURL : process.env.REACT_APP_API_URL
})

const $authHttp = axios.create({
    baseURL : process.env.REACT_APP_API_URL
})

const interceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHttp.interceptors.request.use(interceptor)

export {
    $http, 
    $authHttp
}