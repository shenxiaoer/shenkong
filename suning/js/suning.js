$(function(){
	//下拉
	$(".daohang").hover(function(){
		$(".xiala1box").css("display","block");
		$(this).css({background:"#fff",border:"1px solid #ddd",borderBottom:"1px solid #fff",marginLeft:"-1px",marginTop:"-1px"});
	},function(){
		$(".xiala1box").css("display","none");
		$(this).css({background:"0",border:"0",marginLeft:"0",marginTop:"0"});
	})

	$(".head-navbar").eq(2).hover(function(){
		$(".xiala2").css("display","block");
		$(this).css({background:"#fff",border:"1px solid #ddd",borderBottom:"1px solid #fff",margin:"-1px 4px 0 -1px"});
	},function(){
		$(".xiala2").css("display","none");
		$(this).css({background:"0",border:"0",margin:"0 5px 0 0"});
	})

	$(".head-navbar").eq(3).hover(function(){
		$(".xiala3").css("display","block");
		$(this).css({background:"#fff",border:"1px solid #ddd",borderBottom:"1px solid #fff",margin:"-1px 4px 0 -1px"});
	},function(){
		$(".xiala3").css("display","none");
		$(this).css({background:"0",border:"0",margin:"0 5px 0 0"});
	})

	$(".head-navbar").eq(5).hover(function(){
		$(".xiala4").css("display","block");
		$(this).css({background:"#fff",border:"1px solid #ddd",borderBottom:"1px solid #fff",margin:"-1px 4px 0 -1px"});
	},function(){
		$(".xiala4").css("display","none");
		$(this).css({background:"0",border:"0",margin:"0 5px 0 0"});
	})

	$(".head-navbar").eq(8).hover(function(){
		$(".xiala5").css("display","block");
		$(this).css({background:"#fff",border:"1px solid #ddd",borderBottom:"1px solid #fff",margin:"-1px 4px 0 -1px"});
	},function(){
		$(".xiala5").css("display","none");
		$(this).css({background:"0",border:"0",margin:"0 5px 0 0"});
	})

	//下拉(点击X关闭)
	$(".close a").click(function(){
		$(".xiala1box").css("display","none")
		$(".xiala4").css("display","none")
	})

	//banner
	//左右箭头显示/隐藏
	$(".banner").hover(function(){
		$(".left,.right").animate({opacity:1},200);
		clearInterval(t);
	},function(){
		$(".left,.right").animate({opacity:0},200);
		t=setInterval(move,5000);
	})
	//自动轮播
	var t=setInterval(move,5000);
	var num=0;
	var bgArr=["#631BBB","#9C05F2","#FF3C78","#FF9A02","#FC0067","#D12D12","#03105F","#AB05FF","#FF3BFF","#FE7C28","#631BBB","#9C05F2","#FF3C78","#FF9A02","#FC0067","#D12D12","#03105F","#AB05FF","#FF3BFF","#FE7C28","#631BBB","#9C05F2","#FF3C78"]
	function move(){
		num++;
		if(num>$(".btn").length-1){
			num=0;
		}
		$(".btn").css({background:"#fff"}).eq(num).css({background:"#FA0"}).parent().css("display","block").animate({top:-15},200).addClass("active").parent().css("background","rgba(0,0,0,0.8)");
		$(".bg").not(".active").animate({top:0}).css("display","none").parent().css("background","rgba(0,0,0,0.5)").end().end().removeClass("active");
		$(".innerbox a").css({display:"none",opacity:0.5}).eq(num).css({display:"block"}).animate({opacity:1},200);
		$(".banner-line").css("background",bgArr[num]);
	}
	
	//左右切换
	$(".right").click(function(){
		$(".bg").stop();
		move();
	})
	$(".left").click(function(){
		$(".bg").stop();
		num-=2;  
  		if(num<=-2){
    		num=$(".btn").length-2;
  		}
  		move();
	})

	//每一个按钮的移入移出事件
	 $(".btn").each(function(index){
        this.index=index;
        $(this).hover(function(){
        $(".innerbox a").css({display:"none",opacity:0.5}).eq(this.index).css("display","block").animate({opacity:1},300);
        $(".btn").css("background","#fff") 
        $(this).css("background","#FA0");
        },function(){
           num=this.index;	
        })
    })

	 //btn盒子的移入移出效果
    $(".banner-navbar2").each(function(index){
		this.index=index;
		var that=this;
		$(this).hover(function(){
			$(this).siblings().css("background","rgba(0,0,0,0.5").end().css("background","rgba(0,0,0,0.8)");
			$(".bg").css({top:0,display:"none"});
			var num=$(this).find(".btn").length;
			if(this.index<6){
			$(this).find(".bg").css({
				width:300,
				height:num*15,
				display:"block",
				top:-num*15,
				left:0
			}).find(".btn").css({
				margin:5,
				float:"left",
				display:"block"
			}).wrap("<div class='wrap'></div>").after("<a href='#'>这是一个链接</a>");
			}else{
			$(this).find(".bg").css({
				width:300,
				height:num*15,
				display:"block",
				top:-num*15,
				right:0,
				left:"",
				textAlign:"left"
			}).find(".btn").css({
				margin:5,
				float:"left",
				display:"block"
			}).wrap("<div class='wrap'></div>").after("<a href='#'>这是一个链接</a>");
			}
	    	//此时轮播图的切换 
			$(".btn").css("background","#fff");
			$(".innerbox a").css({display:"none","opacity":0.5});
			$(this).find(".btn").eq(0).css("background","#FA0")
			$(".innerbox").eq(this.index).find("a").eq(0).css("display","block").animate({opacity:1})
	    	//此时wrap 中的a的hover效果
			$(".wrap a").each(function(index){ 
				this.index=index;
				$(this).hover(function(){
					$(".wrap a").css("color","#fff");
					$(this).css("color","#FA0");
					$(".btn").css("background","#fff");
					$(this).prev().css("background","#FA0");
					$(".innerbox a").css({display:"none",opacity:0.5});
					$(".innerbox").eq(that.index).find("a").eq(this.index).css("display","block").animate({opacity:1})
				},function(){})
		})},function(){
		$(this).find(".bg").css({
			width:70,
			height:15,
			display:"block",
			left:0,
			top:-15,
			textAlign:"center"
		}).find(".btn").css({
			margin:"",
			display:"inline-block",
			float:""
		}).unwrap().next().remove();
		})
	})



	//右侧固定定位box
	//鼠标经过变色
	$(".fixed-nav").each(function(index){
		this.index=index;
		$(this).hover(function(){
			$(this).css("background","#FFAA01");
			if(this.index==0){
				$(".fixed-nav i").eq(0).css("backgroundPosition","7px 5px")
				$(".fixed-nav a").eq(0).css({background:"#FFAA01"})
			}else if(this.index==1){
				$(".fixed-nav i").eq(1).css({backgroundPosition:"8px -84px"})
				$(".fixed-nav a").eq(1).css({background:"#FFAA01"})
				$(".fixed-nav span").eq(0).css({display:"block",background:"#FFAA01",color:"#383838"}).animate({left:-43},300)			
			}else if(this.index==2){
				$(".fixed-nav i").eq(2).css("backgroundPosition","9px -114px")
				$(".fixed-nav a").eq(2).css({background:"#FFAA01"})
				$(".fixed-nav span").eq(1).css({display:"block",background:"#FFAA01",color:"#383838"}).animate({left:-43},300)
			}else if(this.index==3){
				$(".fixed-nav i").eq(3).css("backgroundPosition","7px -287px")
				$(".fixed-nav a").eq(3).css({background:"#FFAA01"})
				$(".fixed-nav span").eq(2).css({display:"block",background:"#FFAA01",color:"#383838"}).animate({left:-43},300)
			}else if(this.index==4){
				$(".fixed-nav i").eq(4).css("backgroundPosition","7px -204px")
				$(".fixed-nav a").eq(4).css({background:"#FFAA01"})
				$(".fixed-nav span").eq(3).css({display:"block",background:"#FFAA01",color:"#383838"}).animate({left:-73},300)
			}else if(this.index==5){
				$(".fixed-nav i").eq(5).css("backgroundPosition","8px -144px")
				$(".fixed-nav a").eq(5).css({background:"#FFAA01"})
				$(".fixed-nav img").css({display:"block"}).animate({left:-131},300)
			}else{
				$(".fixed-nav i").eq(6).css("backgroundPosition","7px -234px")
				$(".fixed-nav a").eq(6).css({background:"#FFAA01"})
				$(".fixed-nav span").eq(4).css({display:"block",background:"#FFAA01",color:"#383838"}).animate({left:-73},300)
			}			
		},function(){
			$(this).css("background","0");
			if(this.index==0){
				$(".fixed-nav i").eq(0).css("backgroundPosition","-28px 5px")
				$(".fixed-nav a").eq(0).css({background:"#383838"})
			}else if(this.index==1){
				$(".fixed-nav i").eq(1).css("backgroundPosition","-27px -84px")
				$(".fixed-nav a").eq(1).css({background:"#383838"})
				$(".fixed-nav span").eq(0).css({background:"#383838",color:"#FFAA01"}).animate({left:0},300,function(){
					$(this).css("display","none")
				})
			}else if(this.index==2){
				$(".fixed-nav i").eq(2).css("backgroundPosition","-26px -114px")
				$(".fixed-nav a").eq(2).css({background:"#383838"})
				$(".fixed-nav span").eq(1).css({background:"#383838",color:"#FFAA01"}).animate({left:0},300,function(){
					$(this).css("display","none")
				})
			}else if(this.index==3){
				$(".fixed-nav i").eq(3).css("backgroundPosition","-28px -287px")
				$(".fixed-nav a").eq(3).css({background:"#383838"})
				$(".fixed-nav span").eq(2).css({background:"#383838",color:"#FFAA01"}).animate({left:0},300,function(){
					$(this).css("display","none")
				})
			}else if(this.index==4){
				$(".fixed-nav i").eq(4).css("backgroundPosition","-27px -204px")
				$(".fixed-nav a").eq(4).css({background:"#383838"})
				$(".fixed-nav span").eq(3).css({background:"#383838",color:"#FFAA01"}).animate({left:0},300,function(){
					$(this).css("display","none")
				})
			}else if(this.index==5){
				$(".fixed-nav i").eq(5).css("backgroundPosition","-27px -144px")
				$(".fixed-nav a").eq(5).css({background:"#383838"})
				$(".fixed-nav img").animate({left:0},300,function(){
					$(this).css("display","none")
				})
			}else{
				$(".fixed-nav i").eq(6).css("backgroundPosition","-28px -234px")
				$(".fixed-nav a").eq(6).css({background:"#383838"})
				$(".fixed-nav span").eq(4).css({background:"#383838",color:"#FFAA01"}).animate({left:0},300,function(){
					$(this).css("display","none")
				})
			}
		})
	})

	//购物车变色
	$(".fixed-car").hover(function(){
		$(this).css({background:"#FFAA01"});
		$(".carbox").css({borderTop:"1px solid #FFAA01",borderBottom:"1px solid #FFAA01"})
		$(".carbox i").css("backgroundPosition","4px -23px")
		$(".carbox span").css("color","#383838")
	},function(){
		$(this).css({background:"0"});
		$(".carbox").css({borderTop:"1px solid #4D4D4D",borderBottom:"1px solid #4D4D4D"})
		$(".carbox i").css("backgroundPosition","-31px -23px")
		$(".carbox span").css("color","#fff")
	})

	//返回顶部
	$(".fixed-nav").eq(6).click(function(){
		var aa=document.documentElement.scrollTop!=0?document.documentElement:document.body;
		$(aa).animate({scrollTop:0},500);
	})


	//图片透明度效果
	$(".character,.finance-line,.floor-1,.floor-3,.floor-5").find("img").each(function(){
		$(this).hover(function(){
			$(this).css("opacity","0.8");
		},function(){
			$(this).css("opacity","1");
		})
	})


	//轮播
	var num2=0;
	var t2=setInterval(move2,4000);
	function move2(){
		num2++;
		if(num2==3){
			num2=0;
		}
		$(".shequ-sign").css("background","#fff").eq(num2).css("background","#FA0");
		$(".shequ-inners").animate({left:-1000},300,function(){
			$(".shequ-inner").first().insertAfter($(".shequ-inner").last());
			$(".shequ-inners").css("left","0");
			flag2=true;
		})
	}
	//苏宁社区(左右切换)
	$(".shequ-photobox").hover(function(){
		clearInterval(t2);
		$(".goleft,.goright").css("display","block").animate({opacity:1},300);
	},function(){
		t2=setInterval(move2,2000);
		$(".goleft,.goright").animate({opacity:0},100,function(){
			$(this).css("display","none");
		})
	})

	$(".goleft>a,.goright>a").hover(function(){
		$(this).css("background","rgba(0,0,0,0.65)");
	},function(){
		$(this).css("background","rgba(0,0,0,0.5)");
	})

	var flag1=true;
	var flag2=true;
	$(".goleft>a").click(function(){
		if(!flag1){
			return false;
		}
		flag1=false;
		num2--;
		if(num2==-1){
			num2=2;
		}
		$(".shequ-sign").css("background","#fff").eq(num2).css("background","#FA0");
		$(".shequ-inners").css("left",-1000);
  		$(".shequ-inner").last().insertBefore($(".shequ-inner").first());		
		$(".shequ-inners").animate({left:0},function(){
			flag1=true;
		});
	})
	$(".goright>a").click(function(){
		if(flag2){
			flag2=false;
			move2();
		}
	})


	//楼层跳转
	var floorNum=0;
	//导航鼠标经过事件
	$(".floorbox li").each(function(index){
		$(this).hover(function(){
			$(this).find("a").eq(0).css("display","none").end().eq(1).css({"display":"block","background":"#fff"});
		},function(){
			if(index==floorNum){
				return false;
			}
			$(this).find("a").eq(1).css("display","none").end().eq(0).css("display","block");
		})
	})

	//滚动条(对应楼层导航变化)
	$(window).scroll(function(){
		if($(window).scrollTop()>=800){
			$(".floorbox").css({"display":"block"}).animate({"opacity":1},300);
		}else{
			$(".floorbox").css({"display":"none","opacity":0})
		}
		$(".floor").each(function(index){
			if($(window).scrollTop()>=$(".floor").eq(index).offset().top-257&&($(window).scrollTop()<=$(".floor").eq(index).offset().top+257)){
				$(".floorbox li").eq(index).find("a").eq(0).css("display","none").end().eq(1).css({"display":"block","background":"#fff"});
				floorNum=index;
			}else{
				$(".floorbox li").eq(index).find("a").eq(1).css("display","none").end().eq(0).css({"display":"block"});
			}
		})
	})

	$(".floorbox li").each(function(index){
		$(this).click(function(){
			$(this).find("a").eq(0).css("display","none").end().eq(1).css({"display":"block","background":"#fff"});
			$(window).scrollTop($(".floor").eq(index).offset().top);
		})
	})

	//每层楼的选项卡
	$(".floor-1-hotbox,.floor-3-hotbox,.floor-5-hotbox").each(function(index2){
		$(this).find("a").each(function(index){
			$(this).click(function(){
				$(this).parent().siblings().css({"borderBottom":"0","fontWeight":"normal"}).end().css({"borderBottom":"3px solid #FF6B80","fontWeight":"bold"});
				$(".floor-1-photobox,.floor-3-photobox,.floor-5-photobox").eq(index2).find(".floor-1213").css("display","none").eq(index).css("display","block");
			})
		})
	})
})