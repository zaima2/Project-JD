export interface Goods {
    id?:string,
    name: string,
    price: string,
    store: string,
    deliver: boolean,
    back7day: boolean,
    baitiaoPay: boolean,
    serviceSupport: Array<string> | string,
    brand: string,
    no: string,
    weight: string,
    ingradient: string,
    approperate: string,
    region: string,
    specification: string
}