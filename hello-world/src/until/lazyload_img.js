// 获取所有的图片标签
const imgs = document.getElementsByTagName("img");
// num用于统计当前显示到了哪一张图片，避免每次都从第一张图片开始检查是否露出
let num = 0;
let offset = 200; //距离可视区域200的时候就开始获取src，可自行配置

if (window.addEventListener) {
    window.addEventListener("scroll", debounce(lazyload, 600), false);
} else if (window.attachEvent) {
    window.attachEvent("onscroll", debounce(lazyload, 600), false);
} else {
    window.onscroll = function() { debounce(lazyload, 600) }
}

function lazyload() {
    console.log("滚动...");
    if (num >= imgs.length) {
        if (window.removeEventListener) {
            // 所有浏览器，除了 IE 8 及更早IE版本
            window.removeEventListener("scroll", debounce(lazyload, 600));
        } else if (x.detachEvent) {
            // IE 8 及更早IE版本
            window.detachEvent("scroll", debounce(lazyload, 600));
        }
    }
    for (let i = num; i < imgs.length; i++) {
        // 用可视区域高度减去元素顶部距离可视区域顶部的高度
        let viewHeight = getViewHeight();
        let scrollTop = getScrollTop();
        let elementOffsetTop = getOffsetTop(element);
        let distance = elementOffsetTop < viewHeight + scrollTop + offset;
        // 如果可视区域高度大于等于元素顶部距离可视区域顶部的高度，说明元素露出
        if (!img[i].attributes['data-loaded'] && distance >= 0) {
            // 给元素写入真实的src，展示图片
            imgs[i].src = imgs[i].getAttribute("data-src");
            // 做这个标识，滚动的时候只遍历哪些还没有加载的图片
            imgs[i].setAttribute('data-loaded', true);
            // 前i张图片已经加载完毕，下次从第i+1张开始检查是否露出
            num = i + 1;
        }
    }
}

// 防抖函数 为了防止频繁调用，使用防抖函数优化一下
function debounce(fn, delay = 500) {
    let timer = null;
    return function(...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.call(this, args);
        }, delay);
    };
}

//屏幕可视高度
function getViewHeight() {
    // 标准浏览器及IE9+ ||  IE 8 及 更早 IE 版本 || 低版本混杂模式
    return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
}

//滚动高度
function getScrollTop() {
    // 标准浏览器及IE9+ ||  IE 8 及 更早 IE 版本 || 低版本混杂模式
    return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
}

//offsetTop是元素与offsetParent的距离，循环获取直到页面顶部
function getOffsetTop(el) {
    return el.offsetParent ?
        el.offsetTop + getOffsetTop(el.offsetParent) :
        el.offsetTop
}