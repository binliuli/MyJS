"use strict";
Object.defineProperty(exports, "__esModule", { value: !0 });
var isString = exports.isString = function(e) { return "String" === Object.prototype.toString.call(e).slice(8, -1) },
    isNumber = exports.isNumber = function(e) { return "Number" === Object.prototype.toString.call(e).slice(8, -1) },
    isBoolean = exports.isBoolean = function(e) { return "Boolean" === Object.prototype.toString.call(e).slice(8, -1) },
    isFunction = exports.isFunction = function(e) { return "Function" === Object.prototype.toString.call(e).slice(8, -1) },
    isNull = exports.isNull = function(e) { return "Null" === Object.prototype.toString.call(e).slice(8, -1) },
    isUndefined = exports.isUndefined = function(e) { return "Undefined" === Object.prototype.toString.call(e).slice(8, -1) },
    isObj = exports.isObj = function(e) { return "Object" === Object.prototype.toString.call(e).slice(8, -1) },
    isArray = exports.isArray = function(e) { return "Array" === Object.prototype.toString.call(e).slice(8, -1) },
    ua = navigator.userAgent.toLowerCase(),
    isWeChatBrowser = exports.isWeChatBrowser = function() { return "micromessenger" == ua.match(/microMessenger/i) },
    isDeviceMobile = exports.isDeviceMobile = function() { return /android|webos|iphone|ipod|balckberry/i.test(ua) },
    isQQBrowser = exports.isQQBrowser = function() { return !!ua.match(/mqqbrowser|qzone|qqbrowser|qbwebviewtype/i) },
    isTypeOfPhone = exports.isTypeOfPhone = function() { var e = navigator.userAgent.toString(); return console.log(e), e.indexOf("Android") > -1 || e.indexOf("Linux") > -1 ? { type: 1, msg: "安卓手机" } : e.indexOf("iPhone") > -1 ? { type: 2, msg: "苹果手机" } : e.indexOf("iPad") > -1 ? { type: 3, msg: "iPad" } : e.indexOf("Windows Phone") > -1 ? { type: 4, msg: "Windows Phone" } : { type: 0, msg: "未检测出来" } },
    removeHtmltag = exports.removeHtmltag = function(e) { return e.replace(/<[^>]+>/g, "") },
    getQueryString = exports.getQueryString = function(e) { var r = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"); return ((window.location.search.split("?")[1] || "").match(r) || [])[2] },
    getScrollPosition = exports.getScrollPosition = function() { var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window; return { x: void 0 !== e.pageXOffset ? e.pageXOffset : e.scrollLeft, y: void 0 !== e.pageYOffset ? e.pageYOffset : e.scrollTop } },
    scrollToTop = exports.scrollToTop = function e() { var r = document.documentElement.scrollTop || document.body.scrollTop;
        r > 0 && (window.requestAnimationFrame(e), window.scrollTo(0, r - r / 8)) },
    isCardID = exports.isCardID = function(e) { if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(e)) return { type: 1, msg: "你输入的身份证长度或格式错误" }; if (!{ 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外" }[parseInt(e.substr(0, 2))]) return { type: 2, msg: "你的身份证地区非法" }; var r = (e.substr(6, 4) + "-" + Number(e.substr(10, 2)) + "-" + Number(e.substr(12, 2))).replace(/-/g, "/"),
            t = new Date(r); if (r != t.getFullYear() + "/" + (t.getMonth() + 1) + "/" + t.getDate()) return { type: 3, msg: "身份证上的出生日期非法" }; for (var n = 0, a = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2], s = 0; s < e.length - 1; s++) n += e[s] * a[s]; var c = "10X98765432" [n % 11]; return e[e.length - 1] != c ? { type: 4, msg: "你输入的身份证号非法" } : { type: 5, msg: "合法身份证" } },
    numberToChinese = exports.numberToChinese = function(e) { for (var r = new Array("零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十"), t = new Array("", "十", "百", "仟", "萬", "億", "点", ""), n = ("" + e).replace(/(^0*)/g, "").split("."), a = 0, s = "", c = n[0].length - 1; c >= 0; c--) { switch (a) {
                case 0:
                    s = t[7] + s; break;
                case 4:
                    new RegExp("0{4}//d{" + (n[0].length - c - 1) + "}$").test(n[0]) || (s = t[4] + s); break;
                case 8:
                    s = t[5] + s, t[7] = t[5], a = 0 }
            a % 4 == 2 && 0 != n[0].charAt(c + 2) && 0 == n[0].charAt(c + 1) && (s = r[0] + s), 0 != n[0].charAt(c) && (s = r[n[0].charAt(c)] + t[a % 4] + s), a++ } if (n.length > 1) { s += t[6]; for (var o = 0; o < n[1].length; o++) s += r[n[1].charAt(o)] } return "一十" == s && (s = "十"), s.match(/^一/) && 3 == s.length && (s = s.replace("一", "")), s },
    changeToChinese = exports.changeToChinese = function(e) { if ("number" != typeof e) return { msg: "请输入number" }; if (e = new String(e), e = e.replace(/,/g, ""), e = e.replace(/ /g, ""), e = e.replace(/￥/g, ""), isNaN(e)) return { meg: "请检查小写金额是否正确" }; for (var r = String(e).split("."), t = "", n = r[0].length - 1; n >= 0; n--) { if (r[0].length > 10) return ""; var a = "",
                s = r[0].charAt(n); switch (s) {
                case "0":
                    a = "零" + a; break;
                case "1":
                    a = "壹" + a; break;
                case "2":
                    a = "贰" + a; break;
                case "3":
                    a = "叁" + a; break;
                case "4":
                    a = "肆" + a; break;
                case "5":
                    a = "伍" + a; break;
                case "6":
                    a = "陆" + a; break;
                case "7":
                    a = "柒" + a; break;
                case "8":
                    a = "捌" + a; break;
                case "9":
                    a = "玖" + a } switch (r[0].length - n - 1) {
                case 0:
                    a += "元"; break;
                case 1:
                    0 != s && (a += "拾"); break;
                case 2:
                    0 != s && (a += "佰"); break;
                case 3:
                    0 != s && (a += "仟"); break;
                case 4:
                    a += "万"; break;
                case 5:
                    0 != s && (a += "拾"); break;
                case 6:
                    0 != s && (a += "佰"); break;
                case 7:
                    0 != s && (a += "仟"); break;
                case 8:
                    a += "亿"; break;
                case 9:
                    a += "拾" } } if (-1 != e.indexOf("."))
            for (r[1].length > 2 && (r[1] = r[1].substr(0, 2)), i = 0; i < r[1].length; i++) { switch (tmpnewchar = "", perchar = r[1].charAt(i), perchar) {
                    case "0":
                        tmpnewchar = "零" + tmpnewchar; break;
                    case "1":
                        tmpnewchar = "壹" + tmpnewchar; break;
                    case "2":
                        tmpnewchar = "贰" + tmpnewchar; break;
                    case "3":
                        tmpnewchar = "叁" + tmpnewchar; break;
                    case "4":
                        tmpnewchar = "肆" + tmpnewchar; break;
                    case "5":
                        tmpnewchar = "伍" + tmpnewchar; break;
                    case "6":
                        tmpnewchar = "陆" + tmpnewchar; break;
                    case "7":
                        tmpnewchar = "柒" + tmpnewchar; break;
                    case "8":
                        tmpnewchar = "捌" + tmpnewchar; break;
                    case "9":
                        tmpnewchar = "玖" + tmpnewchar }
                0 == i && (tmpnewchar += "角"), 1 == i && (tmpnewchar += "分"), t += tmpnewchar }
        for (; - 1 != t.search("零零");) t = t.replace("零零", "零"); return t = t.replace("零亿", "亿"), t = t.replace("亿万", "亿"), t = t.replace("零万", "万"), t = t.replace("零元", "元"), t = t.replace("零角", ""), t = t.replace("零分", ""), "元" == t.charAt(t.length - 1) && (t += "整"), t },
    unique = exports.unique = function(e) { if (Array.hasOwnProperty("from")) return Array.from(new Set(e)); for (var r = {}, t = [], n = 0; n < e.length; n++) r[e[n]] || (r[e[n]] = !0, t.push(e[n])); return t };