/******************************

 项目名称：水果文案
 有问题联系作者微信：yushouyu2333
 使用说明：此脚本仅供学习与交流.
         请勿转载与贩卖！
 ⚠️⚠️⚠️

*******************************


[rewrite_local]
^https:\/\/mmm\.mirzibaba\.com\/api\/user url script-response-body https://raw.githubusercontent.com/yansheng666/Qxconf/main/sgwa.js
[mitm] 
hostname = mmm.mirzibaba.com

[rewrite_local]
^https:\/\/leyou\.jingtanwl\.cn\/api\/user url script-response-body https://raw.githubusercontent.com/yansheng666/Qxconf/main/sgwa.js
[mitm] 
hostname = leyou.jingtanwl.cn

[rewrite_local]
^https:\/\/gzq\.jingtanwl\.cn\/api\/user url script-response-body https://raw.githubusercontent.com/yansheng666/Qxconf/main/sgwa.js
[mitm] 
hostname = gzq.jingtanwl.cn

*******************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const yansheng = '/getUserInfo';
const yansheng1 = '/copyImgArticle';

if (url.indexOf(yansheng) != -1){
    obj.data.isVip = 1;
    obj.data.vipEndTime = "大佬，恭喜您成为尊贵的vip";
    obj.data.downloadNumber = 1000;
    body = JSON.stringify(obj);
}

if (url.indexOf(yansheng1) != -1){
    obj.data.isVip = 1;
    obj.data.downloadNumber = 997;
    //obj.data.downloaded = 997;
    body = JSON.stringify(obj);
}

$done({body});
