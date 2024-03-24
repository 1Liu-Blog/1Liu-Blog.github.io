
// 获取url中的参数
function geturl(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.href.split("?");
  if (r.length > 1) {
      r = r[1].match(reg);
      if (r != null) return decodeURI(r[2]);
      return null;
  }
}