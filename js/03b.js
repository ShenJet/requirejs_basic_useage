//使用define函数，定义一个模块。

define(function(){
    return {
        name:"03b",
        type:typeof this,
        date:function () {
            var now = new Date();
            console.log(now)
            return now
        }
    }
})