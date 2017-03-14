$(function(){
	var biaotis=$(".pinpaitc-biaoti")
	var shangbiaos=$(".pinpaib-center")
	if(document.documentElement.scrollTop==0){
		document.documentElement.scrollTop=0
	}else{
		document.documentElement.scrollTop=132
	}

	for (var i = 0; i < biaotis.length; i++) {
		biaotis[i].index=i;
		biaotis[i].onmouseover=function(e){
			for (var i = 0; i < biaotis.length; i++) {
				biaotis[i].style.borderBottom="none"
			}
			biaotis[this.index].style.borderBottom="2px solid black"
		}
		biaotis[i].onmouseout=function(e){
			for (var k = 0; k < biaotis.length; k++) {
				biaotis[k].style.borderBottom="none"
			}
		}
		biaotis[i].onclick=function(){
			for (var j = 0; j < shangbiaos.length; j++) {
				shangbiaos[j].style.display="none"
				biaotis[j].style.fontWeight="normal"
				biaotis[j].style.color="#6f6f6f"
			}
			shangbiaos[this.index].style.display="block"
			biaotis[this.index].style.fontWeight="bold"
			biaotis[this.index].style.color="black"
			biaotis[this.index].style.borderBottom="2px solid black"
		}		
	}
	//banner //background
	var bannernavs=$(".bannernav")
	var zhbanners=$(".zhbanner")
	var beijing=$(".ban")[0]
	var yanse=["#e8e8e8","#fcb54d","#9ed31f","#a5c301","#fbeef5","#f3dc68","#afdef8","#f1ad30","#555fb6","#f7f2f9","#e4d3bf","#d5ebf9","#f74167","#e6d4c8","#f1dfc7","#0587df"]
	for (var i = 0; i < bannernavs.length; i++) {
		bannernavs[i].index=i
		hover(bannernavs[i],function(){
			clearInterval(t)
			for (var j = 0; j < zhbanners.length; j++) {
				zhbanners[j].style.opacity="0"
				zhbanners[j].style.display="none"
				bannernavs[j].style.background="#181818"
				bannernavs[j].style.marginLeft="0"
			}
			zhbanners[this.index].style.display="block"
			animate(zhbanners[this.index],{opacity:1},1000)
			bannernavs[this.index].style.marginLeft="8px"
			bannernavs[this.index].style.background="#4A4A4A"
			for (var i = 0; i < yanse.length; i++) {
				beijing.style.background="#e8e8e8"
			}
			beijing.style.background=yanse[this.index]
		},function(){
			t=setInterval(move,2000);
			num=this.index+1
			for (var j = 0; j < zhbanners.length; j++) {
				zhbanners[j].style.display="block"
				bannernavs[j].style.background="#181818"
				bannernavs[j].style.marginLeft="0"
			}
		})
	}
	var num=1
	var t=setInterval(move,3000)
	function move(){
		if(num>15){
			num=0;
		}
		for (var i = 0; i < zhbanners.length; i++) {
			zhbanners[i].style.opacity="0"
		}
		animate(zhbanners[num],{opacity:1},1000)
		beijing.style.background=yanse[num]
		num++
	}
	//xin
	var sbiaos=$(".shangbiao")
	var xins=$(".xin")
	for (var i = 0; i < sbiaos.length; i++) {
		sbiaos[i].index=i
		sbiaos[i].onmouseover=function(){
			for (var i = 0; i < xins.length; i++) {
				xins[i].style.display="none"
			}
			xins[this.index].style.display="block"
		}
		sbiaos[i].onmouseout=function(){
			for (var i = 0; i < xins.length; i++) {
				xins[i].style.display="none"
			}
		}
	}
	//guding
	var gdbtns=$(".tgdyuansu")
	var gdys=$(".erjiyuansu")
	var tgdboxerweima=$(".tgdboxErweima")[0]
	var tgerweima=$(".tgErweima")[0]
	for (var i = 0; i < gdbtns.length; i++) {
		gdbtns[i].index=i;
		gdbtns[i].onmouseover=function(){
			var one=this
			one.flag=true
			gdys[this.index].style.display="block"
			// for (var j= 0; j < gdys.length; j++) {
			// 	gdys[j].style.opacity="0.2"
			// 	gdbtns[j].style.background="#000"
			// }
			gdbtns[this.index].style.background="red"
			animate(gdys[this.index],{left:-90,opacity:1},200,Tween.Cubic.easeInOut,function(){
				if(!one.flag){
					animate(this,{left:-120,opacity:0.2},200,Tween.Cubic.easeInOut,function(){
				this.style.display="none"
			})
				}
			})
		}
		gdbtns[i].onmouseout=function(){
			var one=this
			if(gdys[this.index].style.left=="-90px"){
				animate(gdys[this.index],{left:-120,opacity:0.2},200,Tween.Cubic.easeInOut,function(){
					this.style.display="none"
				})
			}else{
				one.flag=false
			}
			for (var j= 0; j < gdys.length; j++) {
				gdbtns[j].style.background="#000"
			}
		}
	}	
	tgdboxerweima.onmouseover=function(){
		tgerweima.style.display="block"
		tgerweima.style.opacity=1
		tgdboxerweima.style.background="red"
	}
	tgdboxerweima.onmouseout=function(){
		tgerweima.style.opacity=0.2
		tgerweima.style.display="none"
		tgdboxerweima.style.background="#000"
	}
	//顶部下拉
	var xialabtns=$(".xiala")
	var xialacaidans=$(".erjixxk")
	for (var i = 0; i < xialabtns.length; i++) {
		xialabtns[i].index=i;
		xialabtns[i].onmouseover=function(){
			for (var j = 0; j < xialacaidans.length;j++) {
				xialacaidans[j].style.display="none"
				xialabtns[j].style.background="none"
			}
			xialacaidans[this.index].style.display="block"
			xialabtns[this.index].style.background="#fff"
		}
		xialabtns[i].onmouseout=function(){
			for (var j = 0; j < xialacaidans.length;j++) {
				xialacaidans[j].style.display="none"
				xialabtns[j].style.background="none"
			}
		}
	}
	var xuanxiangka1=$(".xuanxiangka1")[0]
	var toperweima=$(".toperweima")[0]
	xuanxiangka1.onmouseover=function(){
		toperweima.style.display="block"
	}
	xuanxiangka1.onmouseout=function(){
		toperweima.style.display="none"
	}
	var loutupians=$(".loutupian")
	for (var i = 0; i < loutupians.length; i++) {
		loutupians[i].onmouseover=function(){
			this.style.marginLeft="10px"

		}
		loutupians[i].onmouseout=function(){
			this.style.marginLeft="0"
		}
	}
	//楼层的商标左右移动
	var loulcInnerbox=$(".loulc-innerobx")
	var xiangshang=$(".xiangshang")
	var xiangxia=$(".xiangxia")
		function tubiaolunbo(lou,leftbtn,rightbtn){
			var aa=setInterval(lunbo,2000)
			var flag1=true,flag2=true
			function lunbo(){
				animate(lou,{left:-191},1000,function(){
					flag1=true
					var one=getFirst(lou)
					lou.appendChild(one)
					lou.style.left=0
				})
			}
			leftbtn.onmouseover=rightbtn.onmouseover=function(){
				clearInterval(aa)
			}
			leftbtn.onmouseout=rightbtn.onmouseout=function(){
				aa=setInterval(lunbo,2000)
			}
			leftbtn.onclick=function(){
				if(flag1){
					flag1=false
					lunbo()
				}
			}
			rightbtn.onclick=function(){
				if(flag2){
					flag2=false
					var last=getLast(lou)
					var first=getFirst(lou)
					addBefore(last,first)
					lou.style.left="-191px"
					animate(lou,{left:0},1000,function(){
						flag2=true
					})
				}
			}	
		}
		tubiaolunbo(loulcInnerbox[0],xiangshang[0],xiangxia[0])
		tubiaolunbo(loulcInnerbox[1],xiangshang[1],xiangxia[1])
		tubiaolunbo(loulcInnerbox[2],xiangshang[2],xiangxia[2])
		tubiaolunbo(loulcInnerbox[3],xiangshang[3],xiangxia[3])
		tubiaolunbo(loulcInnerbox[4],xiangshang[4],xiangxia[4])
		tubiaolunbo(loulcInnerbox[5],xiangshang[5],xiangxia[5])
	//返回顶部
	var btnTop=$(".tgdboxTop")[0]
	var erjitop=$(".erjitop")[0]
	btnTop.onclick=function(){
		aa=document.documentElement.scrollTop!=0?document.documentElement:document.body;
		animate(aa,{scrollTop:0},500)
	}
	btnTop.onmouseover=function(){
		btnTop.style.background="red"
		erjitop.style.display="block"
		animate(erjitop,{left:-90,opacity:1},200,Tween.Cubic.easeInOut)
	}
	btnTop.onmouseout=function(){
		btnTop.style.background="none"
		animate(erjitop,{left:-120,opacity:0.2},200,Tween.Cubic.easeInOut,function(){
			erjitop.style.display="none"
		})
	}
	//楼层跳转
	var jump=$(".jump")[0]
	var btns=$("div",jump)
	var topsousuo=$(".topsousuo")[0]
	window.onscroll=function(){
		var obj=document.documentElement.scrollTop!=0?document.documentElement:document.body
		if(obj.scrollTop>=660){
			topsousuo.style.display="block"
			jump.style.display="block"
			btnTop.style.display="block"
		}
		if(obj.scrollTop<660){
			topsousuo.style.display="none"
			jump.style.display="none"
			btnTop.style.display="none"
		}	
	}
	var floor=$(".lou")
	for (var i = 0; i < btns.length; i++) {
		btns[i].aa=floor[i].offsetTop-50
		btns[i].onclick=function(){
			var obj=document.documentElement.scrollTop!=0?document.documentElement:document.body;
			animate(obj,{scrollTop:this.aa},500)
		}
	}
})

