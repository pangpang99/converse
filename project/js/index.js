//登录注册

// 轮播图
var wrap = document.querySelector(".wrap");
        var next = document.querySelector(".arrow_right");
        var prev = document.querySelector(".arrow_left");
		var container = document.querySelector(".container");
        var dots = document.getElementsByClassName("sp1");
        
        next.onclick = function () {
            next_pic();
        }
        prev.onclick = function () {
            prev_pic();
        }
		function next_pic () {
            var newLeft;
            if(wrap.style.left === "-11400px"){/*-3600*/
                newLeft = -3800; /**1200*/
            }else{
                newLeft = parseInt(wrap.style.left)-1900;/*-600*/
            }
            wrap.style.left = newLeft + "px";
			index++;
            if(index > 4){
                index = 0;
            }
			showCurrentDot();
        }
        function prev_pic () {
            var newLeft;
            if(wrap.style.left === "0px"){
                newLeft = -7600;/*-2400*/
            }else{
                newLeft = parseInt(wrap.style.left)+1900;/*600*/
            }
            wrap.style.left = newLeft + "px";
			index--;
            if(index < 0){
                index = 4;
            }
            showCurrentDot();
        }
		var timer = null;
        function autoPlay () {
            timer = setInterval(function () {
                next_pic();
                showCurrentDot ()
            },3000);
        }
        autoPlay();
        container.onmouseenter = function () {
            clearInterval(timer);
        }
        container.onmouseleave = function () {
            autoPlay();    
        }
		var index = 0;
        
        function showCurrentDot () {
            for(var i = 0; i < dots.length; i++){
                dots[i].classList.remove("on");;
            }   
               dots[index].classList.add("on");
        }
		 function btn(){
			for (var i = 0, len = dots.length; i < len; i++){
            (function(i){
                dots[i].onclick = function () {
                    var dis = index - i;
                    if(index == 4 && parseInt(wrap.style.left)!==-9500){/*-3000*/
                        dis = dis - 5;     
                    }
                    if(index == 0 && parseInt(wrap.style.left)!== -1900){/*-600*/
                        dis = 5 + dis;
                    }
                    wrap.style.left = (parseInt(wrap.style.left) +  dis * 1900)+"px";/*600*/
                    index = i;
                    showCurrentDot();
                }
            })(i);            
			 }
		 }
		 btn()