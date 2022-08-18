
import {$http, $authHttp } from './index'

export const createType = async (type)  => {
    const {data} = await $authHttp.post('/api/type', {type})
    return data
}

export const fetchTypes = async () => {
    const {data} = await $http.get('/api/type')
    return data
}