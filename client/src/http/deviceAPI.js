
import {$http, $authHttp} from './index'

export const createType = async (type) => {
    const {data} = await $authHttp.post('/api/type', type)
    return data
}
export const fetchTypes = async () => {
    const {data} = await $http.get('/api/type')
    return data
}

export const createBrand = async (brand) => {
    const {data} = await $authHttp.post('api/brand', brand)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $http.get('/api/brand')
    return data
}

export const fetchBrand = async (id) => {
    const brand = await $http.get('/api/brand/' + id)
    return brand;
}

export const createDevice = async (device) => {
    const {data} = await $authHttp.post('/api/device',device)
    return data
}

export const fetchDevices = async (typeId, brandId, page, limit) => {
    const {data} = await $http.get('/api/device', {params : { typeId, brandId, page, limit }})
    return data
}

export const fetchOneDevice = async (id) => {
    const {data} = await $http.get('/api/device/' + id)
    return data
}

