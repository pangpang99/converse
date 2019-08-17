$(function(){
    $.ajax({
        url:"header.html",
        //因为请求的是静态HTML文件的内容,所以,返回的是HTML片段,不是json
        //dataType:"json"//不用写
        success:function(result){
   console.log(result)
   //查找当前 主页面中空白的id为header的元素
   //用result获得html片段创建新<header>元素代替id为header的空<header>元素
   $(result).replaceAll("#header");
   //动态创建一个<link>元素引用header.css 并将<link>自动添加到<head>元素中
   $(`<link rel="stylesheet" href="css/header.css">`).appendTo("header");
   $(`<link rel="stylesheet" href="css/comm.css">`).appendTo("header");
   $(`<link rel="stylesheet" href="css/zhuce.css">`).appendTo("header");
   $(`<link rel="stylesheet" href="css/denglv.css">`).appendTo("header");

        }
    })
})