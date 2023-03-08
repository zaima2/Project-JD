import Mock from "mockjs";
import {SliderItem} from "../types/miaosha"



const data = {
    startTime:"@date(T)",
    endTime:"@date(T)",
    "goods|10-20":[
        {id:"@guid",path:"/",thumb:"@image",title:"@cword(10,20)",price:"@float(0,1000000,0,100)"}
    ] as SliderItem[]
} ;

Mock.mock("/api/miaosha","get",{
    code:0,
    msg:"获取成功",
    data
})