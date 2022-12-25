/******************************

 项目名称：果之圈文案
 有问题联系作者微信：yushouyu2333
 使用说明：此脚本仅供学习与交流.
         请勿转载与贩卖！
 ⚠️⚠️⚠️

*******************************
[rewrite_local]
^https:\/\/gzq\.jingtanwl\.cn\/api url script-response-body https://raw.githubusercontent.com/yansheng666/Qxconf/main/gzqwa.js
[mitm] 
hostname = gzq.jingtanwl.cn
*******************************/


var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const yansheng = '/user/getUserInfo';
const fz = '/content/ContentCopy';
const bc = '/content/download';

if (url.indexOf(yansheng) != -1){
    obj.data.isVip = 1;
    obj.data.vipEndTime = "大佬，恭喜您成为尊贵的vip";
    body = JSON.stringify(obj);
}
if (url.indexOf(fz) != -1){
    obj.data.can = 1;
    obj.data.code = 1;
    body = JSON.stringify(obj);
}
if (url.indexOf(bc) != -1){
    obj.data.can = 1;
    obj.data.code = 1;
    body = JSON.stringify(obj);
}
$done({body});
