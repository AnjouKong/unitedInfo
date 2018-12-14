/*----------------------公共函数---------------------------------*/
//除法函数
function accDiv(arg1, arg2) {
    var t1 = 0, t2 = 0, r1, r2, n;
    try {
        t1 = arg1.toString().split(".")[1].length;
    }
    catch (e) {
        t1 = 0;
    }
    try {
        t2 = arg2.toString().split(".")[1].length;
    }
    catch (e) {
        t2 = 0;
    }
    with (Math) {
        r1 = Number(arg1.toString().replace(".", ""));
        r2 = Number(arg2.toString().replace(".", ""));
        n = Math.max(t1, t2);
        return (r1 / r2) * pow(10, t2 - t1);
    }
}

//乘法函数
function accMul(arg1, arg2) {
    var t1 = 0, t2 = 0, r1, r2;
    try {
        t1 = arg1.toString().split(".")[1].length;
    }
    catch (e) {
        t1 = 0;
    }
    try {
        t2 = arg2.toString().split(".")[1].length;
    }
    catch (e) {
        t2 = 0;
    }
    with (Math) {
        r1 = Number(arg1.toString().replace(".", ""));
        r2 = Number(arg2.toString().replace(".", ""));
        return (r1 * r2) / pow(10, t2 + t1);
    }
}
//加法函数
function accAdd(arg1, arg2) {
    var t1 = 0, t2 = 0, m;
    try {
        t1 = arg1.toString().split(".")[1].length;
    }
    catch (e) {
        t1 = 0;
    }
    try {
        t2 = arg2.toString().split(".")[1].length;
    }
    catch (e) {
        t2 = 0;
    }
    with (Math) {
        m = Math.pow(10, Math.max(t1, t2));
        console.log(arg1 * m + arg2 * m);
        precision = (t1 >= t2) ? t1 : t2;
        return ((arg1 * m + arg2 * m) / m).toFixed(precision);
    }
}

//减法函数
function accSubtr(arg1, arg2) {
    var t1 = 0, t2 = 0, m, n;
    try {
        t1 = arg1.toString().split(".")[1].length;
    }
    catch (e) {
        t1 = 0;
    }
    try {
        t2 = arg2.toString().split(".")[1].length;
    }
    catch (e) {
        t2 = 0;
    }
    with (Math) {
        //动态控制精度长度
        n = Math.max(t1, t2);
        m = Math.pow(10, n);
        //return (arg1  * m - arg2 * m) / m;
        return ((arg1 * m - arg2 * m) / m).toFixed(n);
    }
}

//给String类型增加一个div方法，调用起来更加方便。
String.prototype.div = function (arg) {
    return accDiv(this, arg);
};

//给String类型增加一个mul方法，调用起来更加方便。
String.prototype.mul = function (arg) {
    return accMul(arg, this);
};

//给String类型增加一个add方法，调用起来更加方便。
String.prototype.add = function (arg) {
    return accAdd(arg, this);
};

//给String类型增加一个subtr方法，调用起来更加方便。
String.prototype.subtr = function (arg) {
    return accSubtr(this, arg);
};

//获取URL中参数
//参数 name 链接中的参数名称
//返回 参数值
function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var queryStr = decodeURI(window.location.search.substr(1));
    var matchStr = queryStr.match(reg);
    if (matchStr != null) {
        return (matchStr[2]);
    }
    return null;
}
