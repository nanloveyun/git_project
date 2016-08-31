$(function(){//这里是闭包
			//切换搜索框
    (function(){
			var aLi = $('.menu li')
			var oText = $('#search').find('.form .text')
			var iNow = 0;
			var arrText = [
			'例如：荷棠鱼坊烧鱼 或 樱花日本料理',
			'例如：昌平区育新站龙旗广场2号楼609室',
			'例如：万达影院双人情侣券',
			'例如：东莞出事了，大老虎是谁？',
			'例如：北京初春降雪，天气变幻莫测'
		   ];
		oText.val(arrText[iNow]);
			aLi.each(function(index){
				$(this).click(function(){
					aLi.attr('class','gradient');
					$(this).attr('class','active');
					iNow = index;
					oText.val(arrText[iNow]);
			});
	    });	
	    oText.focus(function(){
	    	if($(this).val() == arrText[iNow]){
	    		$(this).val('');
	    	}
	    });
	    oText.blur(function(){
	    	if($(this).val() == ''){
	    		$(this).val(arrText[iNow]);
	    	}
	    });
	    
	})();
	// update 文字弹性滑动
	(function(){
		var oDiv = $('.update');
		var oUl = oDiv.find('ul');
		var iH = 0;
		var arrData = [
			{ 'name':'萱萱', 'time':4, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/' },
			{ 'name':'畅畅', 'time':5, 'title':'广东3天抓获涉黄疑犯', 'url':'http://www.miaov.com/2013/#curriculum' },
			{ 'name':'萱萱', 'time':6, 'title':'国台办回应王郁琦', 'url':'http://www.miaov.com/2013/#about' },
			{ 'name':'畅畅', 'time':7, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/#message' },
			{ 'name':'萱萱', 'time':8, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/' },
			{ 'name':'畅畅', 'time':9, 'title':'广东3天抓获涉黄疑犯', 'url':'http://www.miaov.com/2013/#curriculum' },
			{ 'name':'萱萱', 'time':10, 'title':'国台办回应王郁琦', 'url':'http://www.miaov.com/2013/#about' },
			{ 'name':'畅畅', 'time':11, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/#message' }
		]; 
		var str = '';
		var iNow = 0;
		var oBtnUp = $('.updateUpBtn');
		var oBtnDown = $('.updateDownBtn');
		for(var i=0;i<arrData.length;i++){
		str +='<li><a href="'+arrData[i].url +'"><strong>'+arrData[i].name +'</strong><span>'+ arrData[i].time + '分钟前 </span>写了一篇新文章：'+ arrData[i].title +'…</a></li>';
		}
		oUl.html( str );
		var aLi = oUl.find('li');
		iH = aLi.height();
		oBtnUp.click(function(){
			doMove(-1);
		});
		oBtnDown.click(function(){
			doMove(1);
		});
		oDiv.hover(function (){
			clearInterval( timer );
		}, autoPlay);
		
		function autoPlay() {
			timer = setInterval(function () {
				doMove(-1);
			}, 2500);
		}
		autoPlay();
		function doMove(num){
			iNow += num;
			if ( Math.abs(iNow) > arrData.length-1 ) {
				iNow = 0;
			}
			if ( iNow > 0 ) {
				iNow = -(arrData.length-1);
			}
//			console.log(iH*iNow +'px');
			oUl.animate({top:iH*iNow +'px'},500);
			
		}
	})();
	//选项卡切换
	(function(){
		fnTab($('.tabNav1'),$('.tabCon1'),'click');
		fnTab($('.tabNav2'),$('.tabCon2'),'click');
		fnTab( $('.tabNav3'), $('.tabCon3'), 'mouseover' );
		fnTab( $('.tabNav4'), $('.tabCon4'), 'mouseover' );
		function fnTab(oNav,aCon,sEvent){
			var aEle = oNav.children();
		aCon.hide().eq(0).show();//显示第一个ul
		aEle.each(function(index){
			$(this).on(sEvent, function(){
				aEle.removeClass('active').addClass('gradient');
				$(this).removeClass('gradient').addClass('active');
				aEle.find('a').attr('class','triangle_down_gray');
				$(this).find('a').attr('class','triangle_down_red');
				aCon.hide().eq(index).show();
			});
			
		});
		}
	})();
   //图像焦点图自动播放
   (function(){
   	  var oDiv = $('#fade');
   	  var aUlLi = oDiv.find('ul li');
   	  var aOlLi = oDiv.find('ol li');
   	  var oP = oDiv.find('p');
   	  var arr = [ '爸爸去哪儿啦~', '人像摄影中的光影感', '娇柔妩媚、美艳大方' ];
   	  var iNow = 0;
   	  var timer = null;
   	  
   	  
   	 fnFade();
   	   aOlLi.click(function(){
   	   	iNow = $(this).index();
   	    fnFade();
   	   })
   	   oDiv.hover(function (){//当鼠标移入时自动播放暂停，移开则继续自动播放
			clearInterval( timer );
		}, autoPlay);
		
		function autoPlay() {
			timer = setInterval(function () {
				iNow++;
//				if(iNow == aUlLi.length ){
//					iNow = 0;
//				}
              iNow%=arr.length;//等同于上面一句
				fnFade();
			}, 1000);
		}
		autoPlay();
   	   function fnFade(){
   	   	  aUlLi.each(function(index){//each循环每一个li
   	   	  	if(index != iNow){
   	   	  		aUlLi.eq(index).fadeOut().css('z-index','1');
   	   	  		aOlLi.eq(index).removeClass('active')
   	   	  	}else{
   	   	  		aUlLi.eq(index).fadeIn().css('z-index','2');
   	   	  		aOlLi.eq(index).addClass('active')
   	   	  	}
   	   	  	oP.text(arr[iNow]);
   	   	
   	   });
   	   }
   	  
   	 
   })();
   //日历提示
   (function(){
   	var aSpan = $('.calendar h3 span');
   	var aImg = $('.calendar .img');
   	var oPro = $('.today_info');
   	var oImg = oPro.find('img');
   	var oStrong = oPro.find('strong');
   	var oP = oPro.find('p');
   	//hover(inFunction,outFunction)   inFunction必需。规定 mouseover 事件发生时运行的函数。outFunction可选。规定 mouseout 事件发生时运行的函数。
   	aImg.hover(function(){
   		var iTop = $(this).parent().position().top;//$(this)指向这个图片。它的父级是li
   		var iLeft = $(this).parent().position().left;
   		var num = $(this).parent().index();//找到所在的索引值
   		var Day = num%aSpan.size();//找到日期在星期几的下面
   		oPro.show().css({"left":iLeft+55,'top':iTop-30});
   		 oStrong.text(aSpan.eq(Day).text());
        oImg.attr('src',$(this).attr('src'));
        oP.text($(this).attr('info'))
   	},function(){
   		oPro.hide();
   	})
   })();
   //BBS高亮显示
   (function(){
   	var aLi = $('.bbs ol li');
   	aLi.each(function(index){
   		aLi.hover(function(){
   			aLi.removeClass('active');
   			$(this).addClass('active');
   		})
   	})
// 	aLi.mouseover(function(){
// 		aLi.removeClass('active').eq($(this).index()).addClass('active');
// 	})
   })();
   //HOT鼠标提示效果
   (function(){
   	var arr = [
			'',
			'用户1<br />人气1',
			'用户名：性感宝贝<br />区域：朝阳CBD<br />人气：124987',
			'用户3<br />人气3',
			'用户4<br />人气4',
			'用户5<br />人气5',
			'用户6<br />人气6',
			'用户7<br />人气7',
			'用户8<br />人气8',
			'用户9<br />人气9',
			'用户10<br />人气10'
		];
   	$('.hot_area li').mouseover(function(){
   		if ( $(this).index() == 0 ) return;
   			$('.hot_area li p').remove();
   			//console.log($(this).width())
   			$(this).append('<p style="width:'+ ($(this).width()-12)+'px; height:'+ ($(this).height()-12)+'px;">'+ arr[$(this).index()] +'</p>');

   	})
   })();
});