window.onload = function(){
	// 头部
	$("#top #more").click(function(){
		$("#more").hide();
		$("#hide").show();
		$("#show").stop(true).slideDown(1000);
	})
	$("#top #hide").click(function(){
		$("#more").show();
		$("#hide").hide();
		$("#show").stop(true).slideUp(1000);
	})

	// 透明轮播
	$(function(){
	var num = 0;
    function banner(){
    	$('.back_img div').eq(num).addClass('active').siblings().removeClass('active');
    }
    function next() {
		num++;
		if (num > $('.back_img div').length - 1) {
			num = 0;
		};
		banner();
	}
	time = setInterval(next,3000);
	})

	// 滚轮事件
	var box = document.getElementById('box');
    var section = document.getElementsByTagName('section');
    var num = section.length;
    var height = document.body.offsetHeight;
    var start = 0;
    var end = 0;
    var now = 0;
    changeFn(now);
    function scrollFn(evt){
        var event = evt || window.event;
        start = new Date().getTime();
        if ((end-start)<-1000) {
            if (event.wheelDelta==-120||event.detail==3) {
               now--;
               now = (now<-(num-1))?-(num-1):now;
            }else{
                now++;
                now=(now>0)?0:now;
            }
            box.style.top = now*height+"px";
            end = new Date().getTime();
            changeFn(-now);
        }else{
            return false;
        }
    }
    function changeFn(a){
        for (var i = 0; i < num; i++) {
            section[i].className = "";
        }
        section[a].className = "section";
    }
    function addEvent(ele,event,fun,ft) {
        if (ele.attachEvent) {
            ele.attachEvent('on'+event,fun);
        } else{
            ele.addEventListener(event,fun,ft);
        }
    }
    addEvent(box,'DOMMouseScroll',scrollFn,true);
    addEvent(box,'mousewheel',scrollFn,true);
       

    // 球体背景
    $('.more_star div').mouseover(function(){
    	$('.more_star span').css({"display":"block"});
    	$(this).css({"zIndex":"100"});
    })
    $('.more_star div').mouseout(function(){
    	$('.more_star span').css({"display":"none"});
    	$(this).css({"zIndex":"0"});
    })

}