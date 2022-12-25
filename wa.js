#/*****************
 
 项目名称：文案合集
 有问题联系作者微信：yushouyu2333
 使用说明：此脚本仅供学习与交流.
         请勿转载与贩卖！
         ⚠️⚠️⚠️

#*******************/

#水果文案
[rewrite_local]
^https:\/\/mmm\.mirzibaba\.com\/api\/user url script-response-body https://raw.githubusercontent.com/yansheng666/Qxconf/main/sgwa.js
#乐优文案
rewrite_local]
^https:\/\/leyou\.jingtanwl\.cn\/api\/user url script-response-body https://raw.githubusercontent.com/yansheng666/Qxconf/main/sgwa.js
#果之圈文案
[rewrite_local]
^https:\/\/gzq\.jingtanwl\.cn\/api url script-response-body https://raw.githubusercontent.com/yansheng666/Qxconf/main/gzqwa.js

###主机名###

[mitm] 
hostname = mmm.mirzibaba.com,leyou.jingtanwl.cn,gzq.jingtanwl.cn
