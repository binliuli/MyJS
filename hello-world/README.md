# my.js

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

# 详解my.js封装方法
## 使用方法
### 第一种
```
import * as obj from "./until/my"
const s=58484.48585
console.log(obj.changeToChinese(s))
```
### 第二种
```
import {changeToChinese} from "./until/my"
const s=58484.48585
console.log(obj.changeToChinese(s))
```

## 1、是否是字符串
```
const s="283883"
console.log(obj.isString(s))
```
## 2、是否是数字
```
const s="283883"
console.log(obj.isNumber(s))
```
## 3、是否是boolean值
```
const s=true
obj.isBoolean(s)
```
### 4、是否是函数
```
obj.isFunction(s)
```
### 5、是否是null
```
obj.isNull(s)
```
### 6、是否是underfined
```
obj.isUndefined(s)
```
### 7、是否是对象
```
obj.isObj(s)
```
### 8、是否是数组
```
obj.isArray(s)
```
### 9、是否是微信浏览器
```
obj.isWeChatBrowser()
```
### 10、是否是移动端
```
obj.isDeviceMobile()
```
### 11、是否是QQ浏览器
```
obj.isQQBrowser()
```
### 12、去除html标签
```
obj.removeHtmltag(s)
```
### 13、获取网址url参数后面query参数 
```
http://localhost:8080/?type=dddd
obj.removeHtmltag('type') //dddd
```
### 14、获取滚动的坐标
```
obj.getScrollPosition()
```
### 15、滚动到顶部事件
```
obj.scrollToTop()
```
### 16、校验身份证号 （参数：string）
#### 身份证校验规则 https://blog.csdn.net/lbPro0412/article/details/81662637
```
obj.isCardID(s)
```
### 17、将阿拉伯数字翻译成中文的大写数字
```
obj.numberToChinese(num)
```
### 18、将数字转换为大写金额
#### 注意：小数点之后只能保留两位,系统将自动截断
```
obj.changeToChinese(num)
```
### 19、数组去重
```
obj.unique(arr)
```



















