$(function(){
	var flag = false;
	var flag1 = false;//判断动画是否执行完成
	var k = $(window).height();//当前屏幕的高度
	$('#fullpage').fullpage({  //fullpage方法里面接受的是json对象
	
	    navigation: true,//显示项目导航
	    // navigationPosition: "left",左部
	    // loopBottom: true,底部继续滚动回顶部
	    scroollingSpeed: 1200,

	    //回调函数,屏幕滚动到另外一个屏时开始执行
	    afterLoad: function(anchorLink, index){
	    	if(index == 2 && flag == false) {
	    		$(".search").show().animate({"right": 370},1500,function(){
                    //方块走进来，沙发显示
	    			$(".sc").animate({"opacity": 1},500,function(){
	    				$(".search").hide();
	    				$(".st").show().animate({"height":30,"right":250,"bottom":452},500);
	    				$(".shafaslit").show().animate({"height":218},1000)
	                    $(".word2").animate({"opacity":1},500)
	    			    flag =true;
	    			});
	    		});
	    	}
	    },

	    //刚开始滚动屏幕时就触发
	    onLeave: function(index,nextIndex,direction) {
            if (index == 2 && nextIndex == 3 && flag==true && flag1 == false) {
            	$(".seach-2").show().animate({"bottom": -(k-250),"width":207,"left":260},2000, function(){
            		$(".img-a").animate({"opacity":1},500,function(){
            			$(".btn-a").animate({"opacity":1});
            		});
            	});
            	$(".cover").show();
            	flag1 = true;
            }

             if (index == 3 && nextIndex == 4 && flag1 == true) {
             	$(".seach-2").hide();
             	$(".st3").show().animate({"bottom":-((k-250)+50),"left":248},2000,function(){
             		$(this).hide();
             		$(".car-img").show();
             		$(".car").animate({"left": 2000},3000);
             	});
             }

	    },

	});
});
