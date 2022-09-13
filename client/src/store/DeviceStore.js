
import { makeAutoObservable } from "mobx";

export default class DeviceStorage{
    constructor(){
        this._brands=[
            // {id:1, name : 'Samsung'},
            // {id:2, name : 'Sony'},
            // {id:3, name : 'Panasonic'},
            // {id:4, name : 'Toshiba'},
            // {id:5, name : 'Akai'},
            // {id:6, name : 'Technics'},
            // {id:7, name : 'Toshiba'},
            // {id:8, name : 'Akai'},
            // {id:9, name : 'Technics'}                                        
        ]

        this._types=[
            // {id:1, name : 'Холодильники'},
            // {id:2, name : 'Смартфоны'},
            // {id:3, name : 'Телевизоры'},
            // {id:4, name : 'Плиты'}

        ]

        this._devices = [
            // {id:1, name : 'Galaxy S21 Ultra 5G Prime2', price : 15000, rating : 5, img:'https://damion.club/uploads/posts/2022-01/1643138500_5-damion-club-p-kot-v-chernikh-ochkakh-5.jpg'},
            // {id:2, name : 'Xperia PRO-I', price : 12400, rating : 5, img:'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350'},           
            // {id:3, name : 'Sony S21 Ultra 5G Prime2', price : 15000, rating : 5, img:'https://uprostim.com/wp-content/uploads/2021/05/image032-6.jpg'},
            // {id:4, name : 'Xiaomi PRO-II', price : 12400, rating : 5, img:'https://uprostim.com/wp-content/uploads/2021/05/image051-7.jpg'},           
            // {id:5, name : 'Galaxy S21 Ultra 5G Prime2', price : 15000, rating : 5, img:'https://damion.club/uploads/posts/2022-01/1643160455_1-damion-club-p-kot-sportsmen-1.jpg'},
            // {id:6, name : 'LG PI', price : 12400, rating : 5, img:'https://damion.club/uploads/posts/2022-01/1643160455_1-damion-club-p-kot-sportsmen-1.jpg'}           
        ]

        this._selectedType={}
        this._selectedBrand={}
        this._page=1
        this._totalCount=0
        this._limit=3   
        this._selectedDevice={}
        this._basket=[]

        makeAutoObservable(this)
    }

    setBasket(basket){
        this._basket=basket
    }

    setBrands(brands){
        this._brands=brands
    }
    setTypes(types){
        this._types=types
    }
    setDevices(devices){
        this._devices=devices
    }
    setSelectedType(type){
        this._selectedType=type
    }
    setSelectedBrand(brand){
        this._selectedBrand=brand
    }

    setPage(page){
        this._page=page
    }

    setTotalCount(totalCount){
        this._totalCount=totalCount
    }

    setLimit(limit){
        this._limit=limit
    }

    setSelectedDevice(device){
        this._selectedDevice=device
    }

    get page(){
        return this._page
    }

    get totalCount(){
        return this._totalCount
    }

    get limit(){
        return this._limit
    }

    get brands(){
        return this._brands
    }

    get types(){
        return this._types
    }

    get devices(){
        return this._devices
    }

    get selectedType(){
        return this._selectedType
    }

    get selectedBrand(){
        return this._selectedBrand
    }

    get selectedDevice(){
        return this._selectedDevice
    }

    get getBasket(){
        return this._basket
    }



}