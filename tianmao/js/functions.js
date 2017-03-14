//兼容性的通过类名来获取
function getClass(selector,obj){
	if(typeof selector!="string"){
		return false
	}
	obj=obj||document
	if(document.getElementsByClassName){
		return document.getElementsByClassName(selector)
	}else{
		var alls=document.getElementsByTagName("*")
		var arr=[]
		for (var i = 0; i < alls.length; i++){
			if(checkClass(alls[i].className,selector)){
				arr.push(alls[i])
			}
		}
		return arr
	}
} 
function checkClass(longstr,str){
	var arr=longstr.split(" ")
	for(var i= 0; i < arr.length; i++) {
		if(arr[i]==str){
			return true
		}
	}
	return false
}
//2.兼容性的获取或设置某一个元素对象的文本内容
function getText(obj,val){
	if(val==undefined){
		if(obj.textContent){
			return obj.textContent;
		}else{
			return obj.innerText;
		}
	}else{
		if(typeof obj.textContent=="string"){
			obj.textContent=val
		}else{
			obj.innerText=val
		}
	}
}
//3.兼容性的取获取一个元素对象的css样式
function getStyle(obj,arrt){
	if(obj.currentStyle){
		return obj.currentStyle[arrt]
	}else{
		return getComputedStyle(obj,null)[arrt]
	}
}

function $(selector,obj){
	var obj=obj||document
	if (typeof selector=="string") {
		selector=selector.replace(/^\s*|\s*$/g,"")
		if(selector.charAt(0)=="."){
			return getClass(selector.slice(1),obj)
		}else if(selector.charAt(0)=="#"){
			return obj.getElementById(selector.slice(1))
		}else if(/^[a-z|1-6]{1,10}$/g.test(selector)){
      		return obj.getElementsByTagName(selector)
   		} 
	}else if(typeof selector=="function"){
		//只能调用一次，多次调用会把前面的覆盖掉
		/*window.onload=function(){
			selector()
		}*/
		//修改后可以添加多个相同事件
		addEvent(window,"load",selector)
	}
}
//获取某个对象当中的子元素
//obj父元素；
//type：true或false或为空
//true获取元素节点和非空文本
//false获取元素节点
//默认值为false
function getChilds(obj,type){
	type=type==undefined?false:type;
	var aa=obj.childNodes;
	var arr=[];
	for (var i = 0; i < aa.length; i++) {
		if(!type){
			if(aa[i].nodeType==1){
				arr.push(aa[i])
			}
		}else{
			if(aa[i].nodeType==1||(aa[i].nodeType==3&&trim(aa[i].nodeValue)!="")){
				arr.push(aa[i])
			}
		}
	}
	return arr
}
//去除某个字符串两边的空格
function trim(str){
	return str.replace(/^\s*|\s*$/g,"")
}
//获得某个对象的第一个子元素
function getFirst(obj){
	return getChilds(obj)[0]
}
//获得某个对象的最后一个子元素
function getLast(obj){
	return getChilds(obj)[getChilds(obj).length-1]
}
//获得某个对象的下一个兄弟元素
function getNext(obj){
	var next=obj.nextSibling
	if(next==null){
		return null
	}
	while(next.nodeType!=1){
		next=next.nextSibling
		if(next==null){
			return null
		}
	}
	return next
}
//获得某个对象的上一个兄弟元素
function getPrevious(obj){
	var pre=obj.previousSibling
	if(pre==null){
		return false
	}
	while(pre.nodeType!=1){
		pre=pre.previousSibling
		if(pre==null){
	 		return null
		}
	}
	return pre
}
//
function getParent(obj){
	return obj.parentNode
}
//将a添加到b的前面
function addBefore(a,b){
	var parent=b.parentNode
	parent.insertBefore(a,b)
}
//将a添加到b的后面
function addAfter(a,b){
	var next=getNext(b)
	var parent=b.parentNode
	if(next==null){
		parent.appendChild(a)
	}else{
		parent.insertBefore(a,next)
	}
}
//删除某个元素节点
function removeObj(obj){
	var parent=obj.parentNode;
	parent.removeChild(obj)
}
//用newobj替换oldobj
function replaceObj(newobj,oldobj){
	var parent=oldobj.parentNode;
	parent.replaceChild(newobj,oldobj)
}
//返回某个克隆对象的结果
//参数bull  true克隆全部包括内部元素
//false  仅克隆元素节点
function cloneObj(obj,bull){
	bull=false||bull
	return obj.cloneNode(bull)
}
//将obj追加到parent中
function appendObj(parent,obj){
	parent.appendChild(obj)
}
//获取元素对象到窗体左边的距离
function getLeft(obj){
	//将元素对象的父节点赋值给newobj
	var newobj=obj.parentNode
	var left=obj.offsetLeft
	//判断newobj的节点名字是不是BODY，不是进行while；否则元素到屏幕左边的距离就是left
	while(newobj.nodeName!="BODY"){
		//再判断newobj的position属性是不是静态定位，不是进行if，给left重新赋值为元素到父元素的距离、父元素到祖元素的距离、父元素的左边框宽度的和；否则给newobj重新赋值将父元素的父元素
		if(getStyle(newobj,"position")!="static"){
			left=left+newobj.offsetLeft+parseInt(getStyle(newobj,"borderLeftWidth"))
		}
		newobj=newobj.parentNode
	}
	return left	
}
//获取元素对象到窗体上边的距离
function getTop(obj){
	var newobj=obj.parentNode
	var top=obj.offsetTop
	while(newobj.nodeName!="BODY"){
		if(getStyle(newobj,"position")!="static"){
			top=top+newobj.offsetTop+parseInt(getStyle(newobj,"borderTopWidth"))
		}
		newobj=newobj.parentNode
	}
	return top
}
//添加事件
function addEvent(obj,event,fun){
	if(obj.addEventListener){
		obj.addEventListener(event,fun,false)
	}else{
		obj.attachEvent("on"+event,fun)
	}
}
//删除事件
function addRemove(obj,event,fun){
	if(obj.removeEventListener){
		obj.removeEventListener(event,fun,false)
	}else{
		obj.detachEvent("on"+event,fun)
	}
}
//获取屏幕尺寸
function offsetWindow(){
	var obj={}
	obj.height=document.documentElement.clientHeight
	obj.width=document.documentElement.clientWidth
	return obj
}
//滚轮向上向下的事件
function mousewheel(obj,fun1,fun2){
	if(document.attachEvent){
		obj.attachEvent("onmousewheel",scrollFn); //IE、 opera
	}else if(document.addEventListener){
		obj.addEventListener("mousewheel",scrollFn,false);
		//chrome,safari -webkit
		obj.addEventListener("DOMMouseScroll",scrollFn,false);
		//firefox -moz-
	}
	function scrollFn(e){
		var ev=e||window.event;
		//在ff中获取滚轮方向，向上滚动是-3；向下滚动是3
		//在IE和谷歌中获取滚轮方向，向上滚动是120；向下滚动是-120；
		if(ev.detail==-3||ev.wheelDelta==120){
			fun1.call(obj)
		}else if(ev.detail==3||ev.wheelDelta==-120){
			fun2.call(obj)
		}
	}
}



  //判断某个元素是否包含有另外一个元素
 function contains (parent,child) {
  if(parent.contains){
     return parent.contains(child) && parent!=child;
  }else{
    return (parent.compareDocumentPosition(child)===20);
  }
 }

 //判断鼠标是否真正的从外部移入，或者是真正的移出到外部；

  function checkHover (e,target) {
   if(getEvent(e).type=="mouseover"){
      return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
   }else{
    return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
    }
  }


//鼠标移入移除事件
/*
  obj   要操作的对象
  overfun   鼠标移入需要处理的函数
  outfun     鼠标移除需要处理的函数
*/
function hover (obj,overfun,outfun) {
    if(overfun){
      obj.onmouseover=function  (e) {
        if(checkHover(e,obj)){
           overfun.call(obj,[e]);
        }
      }
    }
    if(outfun){
      obj.onmouseout=function  (e) {
        if(checkHover(e,obj)){
           outfun.call(obj,[e]);
        }
      }
    }
} 
function getEvent(e){
  return e||window.event;
} 