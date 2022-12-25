#果之圈文案

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
