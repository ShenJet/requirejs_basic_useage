//使用define函数，定义一个模块。

define(function(){
    function fun1(){
        console.log("im fun1 in module 03a.js")
        alert("im fun1 in module 03a.js")
    }
    return {
        name:"03a",
        fn:fun1
    }
})