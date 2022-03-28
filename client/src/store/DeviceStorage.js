import {makeAutoObservable} from 'mobx'

export default class DeviceStorage{
    constructor(){
        this._types = [
            {id : 1, name :'Холодильники'},
            {id : 2, name :'Смартфоны'}
        ]
        this._devices = [
            {id : 1, name : 'Iphone 12 pro', price : 25000, rating : 5, img : 'http://localhost:5000/2436bbc2-3572-4a93-b110-3f9e40898341.jpg'},
            {id : 2, name : 'Iphone 12 pro', price : 25000, rating : 5, img : 'http://localhost:5000/2436bbc2-3572-4a93-b110-3f9e40898341.jpg'},
            {id : 3, name : 'Iphone 12 pro', price : 25000, rating : 5, img : 'http://localhost:5000/2436bbc2-3572-4a93-b110-3f9e40898341.jpg'},
            {id : 4, name : 'Iphone 12 pro', price : 25000, rating : 5, img : 'http://localhost:5000/2436bbc2-3572-4a93-b110-3f9e40898341.jpg'}
        ];
        this._brands = [
            {id : 1, name :'Samsung'},
            {id : 2, name :'Apple'}
        ];        
        makeAutoObservable(this)
    }

    setDevices(devices){
        this._devices = devices
    }

    setTypes(types){
        this._types = types
    }    

    setBrands(brands){
        this._brands = brands
    }

    get devices(){
        return this._devices
    }

    get types(){
        return this._types
    }

    get devices(){
        return this._brands
    }

}