[rewrite_local]
^https?:\/\/kaka-api-1\.caomaoweilai\.com\/member\/info url script-response-body https://raw.githubusercontent.com/yansheng666/Qxconf/main/kaka_vip_patch.js

[mitm]
hostname = kaka-api-1.caomaoweilai.com
/*******************************
自有接口测试：会员信息改写
支持 /member/info 等接口
*******************************/
function safeParse(s){ try { return JSON.parse(s) } catch(e){ return null } }
function ensureObj(x){ return x && typeof x === 'object' && !Array.isArray(x) ? x : null }

try {
  var url = $request.url || "";
  var raw = $response.body || "";
  var obj = safeParse(raw);
  if (!obj) { $done({ body: raw }); return; }

  // member/info
  if (url.indexOf("/member/info") !== -1) {
    var data = ensureObj(obj.data) || {};
    data.buyCourse = true; // 课程已购
    data.vipType   = 1;    // VIP 类型
    data.vipEndTime = "2099-12-31 23:59:59"; // 永久 VIP
    if (typeof data.nickname === "string" && !/（测试VIP）$/.test(data.nickname)) {
      data.nickname += "（测试VIP）";
    }
    obj.data = data;
  }

  // 这里可以继续 else if 增加更多接口的处理逻辑
  // else if (url.indexOf("/xxx/yyy") !== -1) { ... }

  $done({ body: JSON.stringify(obj) });

} catch (e) {
  $done({ body: $response.body });
}
