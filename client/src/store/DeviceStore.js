
import { makeAutoObservable } from "mobx";

export default class DeviceStorage{
    constructor(){
        this._brands=[
            {id:1, name : 'Samsung'},
            {id:2, name : 'Sony'},
            {id:3, name : 'Panasonic'},
            {id:4, name : 'Toshiba'},
            {id:5, name : 'Akai'},
            {id:6, name : 'Technics'},
            {id:7, name : 'Toshiba'},
            {id:8, name : 'Akai'},
            {id:9, name : 'Technics'}                                        
        ]

        this._types=[
            {id:1, name : 'Холодильники'},
            {id:2, name : 'Смартфоны'},
            {id:3, name : 'Телевизоры'},
            {id:4, name : 'Плиты'}

        ]

        this._devices = [
            {id:1, name : 'Galaxy S21 Ultra 5G Prime2', price : 15000, rating : 5, img:'https://hi-tech.mail.ru/news/58868-cveta-iphone-14-i-iphone-14-pro-slili-v-set/imageset/2304289/'},
            {id:2, name : 'Xperia PRO-I', price : 12400, rating : 5, img:'https://hi-tech.mail.ru/news/58868-cveta-iphone-14-i-iphone-14-pro-slili-v-set/imageset/2304289/'},           
            {id:3, name : 'Sony S21 Ultra 5G Prime2', price : 15000, rating : 5, img:'https://hi-tech.mail.ru/news/58868-cveta-iphone-14-i-iphone-14-pro-slili-v-set/imageset/2304289/'},
            {id:4, name : 'Xiaomi PRO-II', price : 12400, rating : 5, img:'https://hi-tech.mail.ru/news/58868-cveta-iphone-14-i-iphone-14-pro-slili-v-set/imageset/2304289/'},           
            {id:5, name : 'Galaxy S21 Ultra 5G Prime2', price : 15000, rating : 5, img:'https://hi-tech.mail.ru/news/58868-cveta-iphone-14-i-iphone-14-pro-slili-v-set/imageset/2304289/'},
            {id:6, name : 'LG PI', price : 12400, rating : 5, img:'https://hi-tech.mail.ru/news/58868-cveta-iphone-14-i-iphone-14-pro-slili-v-set/imageset/2304289/'}           
        ]

        this._selectedType={}
        this._selectedBrand={}

        makeAutoObservable(this)
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




}