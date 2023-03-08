

/**
 * 将时间戳转换为指定格式时间
 * @param {string} timeStamp 时间戳
 * @param {boolean} raw 是否以原格式返回
 * @param {string} symbol 间隔符号
 * @param {boolean} time 格式化时间是否存在H:m:s
 * @returns 
 */

export default function (timeStamp:string | number,raw=false,symbol:string="-",time=false) {
  
    const date = new Date(+timeStamp);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2,'0');
    const day = date.getDate().toString().padStart(2,'0');
    const hour = date.getHours();
    const min = date.getMinutes();
    const seconds = date.getSeconds();

    if(!raw) {
        if(time) {   
            return year + symbol + month + symbol + day + " " + hour + ":" + min + ":" + seconds;
         } else {
             return year + symbol + month + symbol + day;
         }
    } else {
        return {
            year,
            month,
            day,
            hour,
            min,
            seconds
        }
    }

    
}