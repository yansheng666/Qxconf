/*******************************
自有接口测试：会员信息改写（/member/info）
仅用于开发联调/测试环境
*******************************/
function safeParse(s){ try { return JSON.parse(s) } catch(e){ return null } }
function ensureObj(x){ return x && typeof x === 'object' && !Array.isArray(x) ? x : null }

try {
  var url = $request?.url || "";
  var raw = $response?.body || "";
  var obj = safeParse(raw);
  if (!obj) { $done({ body: raw }); return; }

  // 只处理精确路径 /member/info
  if (!/\/member\/info(\?|$)/.test(url)) {
    $done({ body: raw });
    return;
  }

  // 你的返回结构：{ success, code, data: {...}, msg }
  var data = ensureObj(obj.data) || {};
  
  // 按你的需求改写 —— 你可自行调整数值或文案
  data.buyCourse = true;                  // 原为 false，改为已购课程
  data.vipType   = 1;                     // 原为 0（非会员），设为 1（测试会员）
  // 保留 vipTime 不变；补充 vipEndTime（如需长期有效就给很远的时间）
  if (!data.vipEndTime) data.vipEndTime = "2099-12-31 23:59:59";

  // 也可以顺手把昵称做个标记，便于你在前端确认是否命中改写（可删）
  if (typeof data.nickname === "string") {
    if (!/（测试VIP）$/.test(data.nickname)) data.nickname += "（测试VIP）";
  }

  obj.data = data;

  // 保留 success/code/msg，不动其余字段
  $done({ body: JSON.stringify(obj) });

} catch (e) {
  // 出错直接透传原响应，避免影响正常流程
  $done({ body: $response.body });
}
