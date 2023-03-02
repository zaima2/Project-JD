## 获取高频浏览的商品类型或者名称

路径：/api/getHighFrequentGoods
参数：无
是否需要身份验证：否
返回数据格式：

```json
{
    "code":0,
    "msg":"获取成功",
    "data":[
        {
            "id":"xxxx-xxxx-xxxxxx",
            "name":"iphone",
            "type":"goodsType"
        },
         {
            "id":"xxxx-xxxx-xxxxxx",
            "name":"厨房",
            "type":"category"
        }
    ]
}
```