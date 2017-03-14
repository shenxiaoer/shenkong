!function(t){function e(n){if(i[n])return i[n].exports;var a=i[n]={exports:{},id:n,loaded:!1};return t[n].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var i={};return e.m=t,e.c=i,e.p="",e(0)}([function(t,e,i){t.exports=i(1)},function(t,e,i){i(2),i(3),i(4),i(5),i(6),i(7),i(9),function(t){function e(){return Math.random()>.5?-1:1}function n(e,i){var a,o,s,r,l,c,d,u,f,p,m;if(e.length>1)return e.each(function(){n(t(this),i)}),this;if(!bricksData.hasOwnProperty(e.attr("id")))return this;if(s={onLoad:t.noop},r=t.extend({},s,i),l=bricksData[e.attr("id")],a=e.find(".J_brickBd"),o=e.find(".J_brickNav"),c=doT.template(h[l.left.length>1?"promoTemplateMiddle":"promoTemplateLarge"]),p='<div class="span4 span-first"><ul class="brick-promo-list clearfix">'+c(l.left)+"</ul></div>",m="",l.right.length>1){m='<div class="span16"><div id="'+(e.attr("id")+"-content")+'" class="tab-container">',f='<ul class="tab-list J_brickTabSwitch" data-tab-target="'+(e.attr("id")+"-content")+'">';for(var v=0,g=l.right.length;g>v;v+=1){var x=l.right[v].items;d=doT.template(h.itemTemplateMiddle1),u=doT.template(h.itemTemplateSmall),m+='<ul class="brick-list tab-content clearfix'+(0===v?" tab-content-active":" tab-content-hide")+'">'+d(x.splice(0,x.length-1))+u(x)+'<li class="brick-item brick-item-s"><div class="figure figure-more"><a href="'+l.right[v].area_url+'" target="_blank"><i class="iconfont">&#xe615;</i></a></div><a class="more" href="'+l.right[v].area_url+'" target="_blank">浏览更多<small>'+l.right[v].area_title+"</small></a></li></ul>",f+="<li"+(0===v?' class="tab-active"':"")+">"+l.right[v].area_title+"</li>"}f+="</ul>",m+="</div></div>"}else d=doT.template(h.itemTemplateMiddle2),f='<a class="more-link" href="'+l.right[0].area_url+'" target="_blank">查看全部<i class="iconfont">&#xe623;</i></a>',m='<div class="span16"><ul class="brick-list clearfix">'+d(l.right[0].items)+"</ul></div>";o.html(f),a.html('<div class="row">'+p+m+"</div>"),r.onLoad(e)}function a(i,n){var o,s,r,l,c,d,u;return i.length>1?(i.each(function(){a(t(this),n)}),this):bricksData.hasOwnProperty(i.attr("id"))?(s={onLoad:t.noop},r=t.extend({},s,n),l=bricksData[i.attr("id")],o=i.find(".J_brickBd"),c=doT.template(h.itemTemplateReview),u=l.sort(e).splice(0,4),d='<ul class="review-list clearfix">'+c(u)+"</ul>",o.html(d),void r.onLoad(i)):this}function o(e,i){function n(t){var e={book:{title:"图书",style:"orange",image:MI.GLOBAL_CONFIG.assetsSite+"/i/index/more-duokan.jpg",url:"http://www.duokan.com/list/1-1?from=xiaomi",desc:"海量好书，享受精品阅读时光<br />最美中文排版，千万读者首选！",text:"多看阅读"},theme:{title:"MIUI 主题",style:"green",image:MI.GLOBAL_CONFIG.assetsSite+"/i/index/more-miui.jpg",url:"http://zhuti.xiaomi.com/?from=mi",desc:"独创个性主题、百变锁屏与自由桌面<br />让你的手机与众不同！",text:"MIUI主题市场"},game:{title:"游戏",style:"red",image:MI.GLOBAL_CONFIG.assetsSite+"/i/index/more-game.jpg",url:"http://game.xiaomi.com/index.php?c=index&a=run",desc:"免费下载海量最新最安全的手机游戏<br />天天都有现金福利赠送",text:"小米游戏商店"},app:{title:"应用",style:"ocean",image:MI.GLOBAL_CONFIG.assetsSite+"/i/index/more-app.jpg",url:"http://app.mi.com/?from=mi",desc:"帮助小米手机和其他安卓手机用户<br />发现最好的安卓应用",text:"小米应用商店"}},i=doT.template(h.itemTemplateContent),n=doT.template(h.itemTemplateContentMore);return'<li class="content-item content-item-'+t+("book"===t?" content-item-first":"")+'"><h2 class="title">'+e[t].title+'</h2><ul class="item-list clearfix">'+i(l[t])+n(e[t])+"</ul></li>"}var a,s,r,l,c;return e.length>1?(e.each(function(){o(t(this),i)}),this):bricksData.hasOwnProperty(e.attr("id"))?(s={onLoad:t.noop},r=t.extend({},s,i),l=bricksData[e.attr("id")],a=e.find(".J_brickBd"),c='<ul class="content-list clearfix">'+n("book")+n("theme")+n("game")+n("app")+"</ul>",a.html(c),void r.onLoad(e)):this}function s(e,i){var n,a,o,r,l,c,d,u;return e.length>1?(e.each(function(){s(t(this),i)}),this):bricksData.hasOwnProperty(e.attr("id"))?(o={onLoad:t.noop},r=t.extend({},o,i),l=bricksData[e.attr("id")],n=e.find(".J_brickBd"),a=e.find(".J_brickNav"),c=doT.template(h.itemTemplateVideo),d='<a class="more-link" href="'+MI.GLOBAL_CONFIG.wwwSite+'/video/" target="_blank">查看全部<i class="iconfont">&#xe623;</i></a>',u='<ul class="video-list clearfix">'+c(l)+"</ul></div>",a.html(d),n.html(u),void r.onLoad(e)):this}function r(){("undefined"==typeof isCommentOpen||isCommentOpen)&&t.ajax({url:MI.GLOBAL_CONFIG.wwwSite+"/c/service/js/indexMD2015.js",cache:!0,dataType:"script",timeout:5e3,error:function(){return!1},success:function(){"undefined"!=typeof commentTotal&&(f=commentTotal,l(c,f))}})}function l(t,e){for(var i in e)if(e.hasOwnProperty(i)){var n=t.find('[data-gid="'+i+'"]').find(".rank");n.length&&n.text(e[i]+"人评价")}}var c=t(".J_itemBox"),d=t("#J_modalVideo"),h=i(10),u=i(11),f=null;jQuery(function(t){r(),u(t("#J_categoryList")),t("#J_homeSlider").xmSlide({width:1226,height:460,navigation:{effect:"fade"},effect:{fade:{speed:400}},play:{effect:"fade",interval:5e3,auto:!0,pauseOnHover:!0,restartDelay:2500}}),t(".J_carouselList").carousel({containerSelector:".home-star-goods",controlsSelector:".box-hd .more",controlsClass:"xm-controls-line-small",itemPerSlide:5}),t(".J_brickBox").on("visible.visibleWatcher",function(){t(this).data("visible")||(n(t(this),{onLoad:function(e){e.addClass("loaded").find(".J_brickTabSwitch").tabSwitch({events:"mouseenter"}),e.find(".brick-item").on({mouseenter:function(){t(this).addClass("brick-item-active")},mouseleave:function(){t(this).removeClass("brick-item-active")}}),f&&l(e,f),t.isFunction(t("body").linkSign)&&e.linkSign({live:!0})}}),t(this).data("visible",!0))}),t(".J_recommendBox").on("visible.visibleWatcher",function(){var e=t(this);e.data("visible")||(e.find(".J_brickBd").miRecommend({type:2,page:"Home",carouselControl:!0,carouselPage:!1,callback:function(){e.find(".xm-controls").appendTo(e.find(".J_brickNav"))}}),e.data("visible",!0))}),t(".J_reviewBox").on("visible.visibleWatcher",function(){t(this).data("visible")||(a(t(this),{onLoad:function(e){f&&l(e,f),t.isFunction(t("body").linkSign)&&e.linkSign({live:!0})}}),t(this).data("visible",!0))}),t(".J_contentBox").on("visible.visibleWatcher",function(){t(this).data("visible")||(o(t(this),{onLoad:function(e){e.find(".item-list").carousel({controlsClass:"xm-controls-block-small",pager:!0}),t.isFunction(t("body").linkSign)&&e.linkSign({live:!0})}}),t(this).data("visible",!0))}),t(".J_videoBox").on("visible.visibleWatcher",function(){t(this).data("visible")||(s(t(this),{onLoad:function(e){e.find(".J_videoTrigger").on("click",function(e){e.preventDefault(),d.find(".modal-hd .title").text(t(this).attr("data-video-title")).end().find(".modal-bd").html('<iframe width="880" height="536" src="http://player.youku.com/embed/'+t(this).attr("data-video")+'" frameborder="0" allowfullscreen></iframe>'),d.modal({show:!0,backdrop:"static"})}),d.on("hide",function(){d.find(".modal-hd .title").empty(),d.find(".modal-bd").empty()}),t.isFunction(t("body").linkSign)&&e.linkSign({live:!0})}}),t(this).data("visible",!0))}),c.visibleWatcher({offset:-300})})}(jQuery)},function(t,e){!function(t){function e(e){function i(t){f.push({x:t.pageX,y:t.pageY}),f.length>v&&f.shift()}function n(){m&&clearTimeout(m),d.exitMenu(this)&&(u&&d.deactivate(u),u=null)}function a(){m&&clearTimeout(m),d.enter(this),r(this)}function o(){d.exit(this)}function s(t){t!==u&&(u&&d.deactivate(u),d.activate(t),u=t)}function r(t){var e=l();e?m=setTimeout(function(){r(t)},e):s(t)}function l(){function e(t,e){return(e.y-t.y)/(e.x-t.x)}if(!u||!t(u).is(d.submenuSelector))return 0;var i=h.offset(),n={x:i.left,y:i.top-d.tolerance},a={x:i.left+h.outerWidth(),y:n.y},o={x:i.left,y:i.top+h.outerHeight()+d.tolerance},s={x:i.left+h.outerWidth(),y:o.y},r=f[f.length-1],l=f[0];if(!r)return 0;if(l||(l=r),l.x<i.left||l.x>s.x||l.y<i.top||l.y>s.y)return 0;if(p&&r.x===p.x&&r.y===p.y)return 0;var c=a,m=s;"left"===d.submenuDirection?(c=o,m=n):"below"===d.submenuDirection?(c=s,m=o):"above"===d.submenuDirection&&(c=n,m=a);var v=e(r,c),x=e(r,m),b=e(l,c),y=e(l,m);return b>v&&x>y?(p=r,g):(p=null,0)}var c,d,h=t(this),u=null,f=[],p=null,m=null,v=3,g=300;c={rowSelector:"> li",submenuSelector:"*",submenuDirection:"right",tolerance:75,enter:t.noop,exit:t.noop,activate:t.noop,deactivate:t.noop,exitMenu:t.noop},d=t.extend({},c,e),h.on("mouseleave",n).find(d.rowSelector).on({mouseenter:a,mouseleave:o,click:function(){s(this)}}),t(document).mousemove(i)}t.fn.miMenuAim=function(t){return this.each(function(){e.call(this,t)}),this}}(jQuery)},function(t,e){(function(){!function(t,e,i){var n,a,o;return o="xmSlide",a={width:940,height:528,responsiveWidth:960,start:1,navigation:{active:!0,effect:"slide"},pagination:{active:!0,effect:"slide"},play:{active:!1,effect:"slide",interval:5e3,auto:!1,swap:!0,pauseOnHover:!1,restartDelay:2500},effect:{slide:{speed:500},fade:{speed:300,crossfade:!0}},callback:{loaded:function(){},start:function(){},complete:function(){}}},n=function(){function e(e,i){this.element=e,this.options=t.extend(!0,{},a,i),this._defaults=a,this._name=o,this.init()}return e}(),n.prototype.init=function(){var i,n,a,o,s,r,l,c=this;return i=t(this.element),l=i.find("img").length>1?!1:!0,this.data=t.data(this),t.data(this,"animating",!1),t.data(this,"total",i.children().not(".xm-slider-navigation",i).length),t.data(this,"current",this.options.start-1),t.data(this,"vendorPrefix",this._getVendorPrefix()),"undefined"!=typeof TouchEvent&&(t.data(this,"touch",!0),this.options.effect.slide.speed=this.options.effect.slide.speed/2),i.css({overflow:"hidden"}),i.slidesContainer=i.children().not(".xm-slider-navigation",i).wrapAll("<div class='xm-slider-container'>",i).parent().css({overflow:"hidden",position:"relative"}),t(".xm-slider-container",i).wrapInner("<div class='xm-slider-control'>",i).children(),t(".xm-slider-control",i).css({position:"relative",left:0}),t(".xm-slider-control",i).children().addClass("xm-slider-slide").css({position:"absolute",top:0,left:0,width:"100%",zIndex:0,display:"none",webkitBackfaceVisibility:"hidden"}),t.each(t(".xm-slider-control",i).children(),function(e){var i;return i=t(this),i.attr("xm-slider-index",e)}),this.data.touch&&(t(".xm-slider-control",i).on("touchstart",function(t){return c._touchstart(t)}),t(".xm-slider-control",i).on("touchmove",function(t){return c._touchmove(t)}),t(".xm-slider-control",i).on("touchend",function(t){return c._touchend(t)})),i.fadeIn(0),i.find("img").each(e.devicePixelRatio<1.5?function(){t(this).attr("data-src-orig",t(this).attr("src"))}:function(){var e=t(this).attr("srcset");e&&e.split(" 2x")[0]&&t(this).attr("data-src-orig",e.split(" 2x")[0]).removeAttr("srcset")}),this.update(),this.data.touch&&!l&&this._setuptouch(),t(".xm-slider-control",i).children(":eq("+this.data.current+")").eq(0).fadeIn(0,function(){return t(this).css({zIndex:10})}),this.options.navigation.active&&!l&&(s=t("<a>",{"class":"xm-slider-previous xm-slider-navigation icon-slides icon-slides-prev",href:"#",title:"上一张",text:"上一张"}).appendTo(i),n=t("<a>",{"class":"xm-slider-next xm-slider-navigation icon-slides icon-slides-next",href:"#",title:"下一张",text:"下一张"}).appendTo(i)),t(".xm-slider-next",i).click(function(t){return t.preventDefault(),c.stop(!0),c.next(c.options.navigation.effect)}),t(".xm-slider-previous",i).click(function(t){return t.preventDefault(),c.stop(!0),c.previous(c.options.navigation.effect)}),this.options.play.active&&(o=t("<a>",{"class":"xm-slider-play xm-slider-navigation",href:"#",title:"Play",text:"Play"}).appendTo(i),r=t("<a>",{"class":"xm-slider-stop xm-slider-navigation",href:"#",title:"Stop",text:"Stop"}).appendTo(i),o.click(function(t){return t.preventDefault(),c.play(!0)}),r.click(function(t){return t.preventDefault(),c.stop(!0)}),this.options.play.swap&&r.css({display:"none"})),this.options.pagination.active&&(a=t("<ul>",{"class":"xm-slider-pagination"}).appendTo(i),t.each(new Array(this.data.total),function(e){var i,n;return i=t("<li>",{"class":"xm-slider-pagination-item"}).appendTo(a),n=t("<a>",{href:"#","data-xm-slider-item":e,html:e+1}).appendTo(i),n.click(function(e){return e.preventDefault(),c.stop(!0),c["goto"](1*t(e.currentTarget).attr("data-xm-slider-item")+1)})})),t(e).bind("resize",function(){return c.update()}),this._setActive(),this.options.play.auto&&!l&&this.play(),this.options.callback.loaded(this.options.start)},n.prototype._setActive=function(e){var i,n;return i=t(this.element),this.data=t.data(this),n=e>-1?e:this.data.current,t(".active",i).removeClass("active"),t(".xm-slider-pagination li:eq("+n+") a",i).addClass("active")},n.prototype.update=function(){var i,n,a;return i=t(this.element),a=i.width(),this.options.width=a,n=this.options.height,a<=this.options.responsiveWidth&&i.find("img").each(e.devicePixelRatio<1.5?function(){t(this).attr("data-src-r")&&t(this).attr("src",t(this).attr("data-src-r"))}:function(){t(this).attr("data-src-r-2x")?t(this).attr({src:t(this).attr("data-src-r-2x")}):t(this).attr("data-src-r")&&t(this).attr("src",t(this).attr("data-src-r"))}),a>this.options.responsiveWidth&&i.find("img").each(function(){t(this).attr({src:t(this).attr("data-src-orig")})}),t(".xm-slider-control, .xm-slider-container",i).css({width:a,height:n})},n.prototype.next=function(e){var i;return i=t(this.element),this.data=t.data(this),t.data(this,"direction","next"),void 0===e&&(e=this.options.navigation.effect),"fade"===e?this._fade():this._slide()},n.prototype.previous=function(e){var i;return i=t(this.element),this.data=t.data(this),t.data(this,"direction","previous"),void 0===e&&(e=this.options.navigation.effect),"fade"===e?this._fade():this._slide()},n.prototype["goto"]=function(e){var i,n;if(i=t(this.element),this.data=t.data(this),void 0===n&&(n=this.options.pagination.effect),e>this.data.total?e=this.data.total:1>e&&(e=1),"number"==typeof e)return"fade"===n?this._fade(e):this._slide(e);if("string"==typeof e){if("first"===e)return"fade"===n?this._fade(0):this._slide(0);if("last"===e)return"fade"===n?this._fade(this.data.total):this._slide(this.data.total)}},n.prototype._setuptouch=function(){var e,i,n,a;return e=t(this.element),this.data=t.data(this),a=t(".xm-slider-control",e),i=this.data.current+1,n=this.data.current-1,0>n&&(n=this.data.total-1),i>this.data.total-1&&(i=0),a.children(":eq("+i+")").css({display:"block",left:"100%"}),a.children(":eq("+n+")").css({display:"block",left:"-100%"})},n.prototype._touchstart=function(e){var i,n;return i=t(this.element),this.data=t.data(this),n=e.originalEvent.touches[0],this._setuptouch(),t.data(this,"touchtimer",Number(new Date)),t.data(this,"touchstartx",n.pageX),t.data(this,"touchstarty",n.pageY),e.stopPropagation()},n.prototype._touchend=function(e){var i,n,a,o,s,r,l,c=this;return i=t(this.element),this.data=t.data(this),r=e.originalEvent.touches[0],o=t(".xm-slider-control",i),o.position().left>.5*this.options.width||o.position().left>.1*this.options.width&&Number(new Date)-this.data.touchtimer<250?(t.data(this,"direction","previous"),this._slide()):o.position().left<-(.5*this.options.width)||o.position().left<-(.1*this.options.width)&&Number(new Date)-this.data.touchtimer<250?(t.data(this,"direction","next"),this._slide()):(a=this.data.vendorPrefix,l=a+"Transform",n=a+"TransitionDuration",s=a+"TransitionTimingFunction",o[0].style[l]="translateX(0px)",o[0].style[n]=.85*this.options.effect.slide.speed+"ms"),o.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",function(){return a=c.data.vendorPrefix,l=a+"Transform",n=a+"TransitionDuration",s=a+"TransitionTimingFunction",o[0].style[l]="",o[0].style[n]="",o[0].style[s]=""}),e.stopPropagation()},n.prototype._touchmove=function(e){var i,n,a,o,s;return i=t(this.element),this.data=t.data(this),o=e.originalEvent.touches[0],n=this.data.vendorPrefix,a=t(".xm-slider-control",i),s=n+"Transform",t.data(this,"scrolling",Math.abs(o.pageX-this.data.touchstartx)<Math.abs(o.pageY-this.data.touchstarty)),this.data.animating||this.data.scrolling||(e.preventDefault(),this._setuptouch(),a[0].style[s]="translateX("+(o.pageX-this.data.touchstartx)+"px)"),e.stopPropagation()},n.prototype.play=function(e){var i,n,a,o=this;return i=t(this.element),this.data=t.data(this),!this.data.playInterval&&(e&&(n=this.data.current,this.data.direction="next","fade"===this.options.play.effect?this._fade():this._slide()),t.data(this,"playInterval",setInterval(function(){return n=o.data.current,o.data.direction="next","fade"===o.options.play.effect?o._fade():o._slide()},this.options.play.interval)),a=t(i),this.options.play.pauseOnHover&&(a.unbind(),a.bind("mouseenter",function(){return t(".xm-slider-navigation",i).show(),o.stop()}),a.bind("mouseleave",function(){return t(".xm-slider-navigation",i).hide(),o.play()})),t.data(this,"playing",!0),t(".xm-slider-play",i).addClass("xm-slider-playing"),this.options.play.swap)?(t(".xm-slider-play",i).hide(),t(".xm-slider-stop",i).show()):void 0},n.prototype.stop=function(e){var i;return i=t(this.element),this.data=t.data(this),clearInterval(this.data.playInterval),this.options.play.pauseOnHover&&e&&t(".xm-slider-container",i).unbind(),t.data(this,"playInterval",null),t.data(this,"playing",!1),t(".xm-slider-play",i).removeClass("xm-slider-playing"),this.options.play.swap?(t(".xm-slider-stop",i).hide(),t(".xm-slider-play",i).show()):void 0},n.prototype._slide=function(e){var i,n,a,o,s,r,l,c,d,h,u=this;return i=t(this.element),this.data=t.data(this),this.data.animating||e===this.data.current+1?void 0:(t.data(this,"animating",!0),n=this.data.current,e>-1?(e-=1,h=e>n?1:-1,a=e>n?-this.options.width:this.options.width,s=e):(h="next"===this.data.direction?1:-1,a="next"===this.data.direction?-this.options.width:this.options.width,s=n+h),-1===s&&(s=this.data.total-1),s===this.data.total&&(s=0),this._setActive(s),l=t(".xm-slider-control",i),e>-1&&l.children(":not(:eq("+n+"))").css({display:"none",left:0,zIndex:0}),l.children(":eq("+s+")").css({display:"block",left:h*this.options.width,zIndex:10}),this.options.callback.start(n+1),this.data.vendorPrefix?(r=this.data.vendorPrefix,d=r+"Transform",o=r+"TransitionDuration",c=r+"TransitionTimingFunction",l[0].style[d]="translateX("+a+"px)",l[0].style[o]=this.options.effect.slide.speed+"ms",l.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",function(){return l[0].style[d]="",l[0].style[o]="",l.children(":eq("+s+")").css({left:0}),l.children(":eq("+n+")").css({display:"none",left:0,zIndex:0}),t.data(u,"current",s),t.data(u,"animating",!1),l.unbind("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd"),l.children(":not(:eq("+s+"))").css({display:"none",left:0,zIndex:0}),u.data.touch&&u._setuptouch(),u.options.callback.complete(s+1)})):l.stop().animate({left:a},this.options.effect.slide.speed,function(){return l.css({left:0}),l.children(":eq("+s+")").css({left:0}),l.children(":eq("+n+")").css({display:"none",left:0,zIndex:0},t.data(u,"current",s),t.data(u,"animating",!1),u.options.callback.complete(s+1))}))},n.prototype._fade=function(e){var i,n,a,o,s,r=this;return i=t(this.element),this.data=t.data(this),this.data.animating||e===this.data.current+1?void 0:(t.data(this,"animating",!0),n=this.data.current,e?(e-=1,s=e>n?1:-1,a=e):(s="next"===this.data.direction?1:-1,a=n+s),-1===a&&(a=this.data.total-1),a===this.data.total&&(a=0),this._setActive(a),o=t(".xm-slider-control",i),o.children(":eq("+a+")").css({display:"none",left:0,zIndex:10}),this.options.callback.start(n+1),this.options.effect.fade.crossfade?(o.children(":eq("+this.data.current+")").stop().fadeOut(this.options.effect.fade.speed),o.children(":eq("+a+")").stop().fadeIn(this.options.effect.fade.speed,function(){return o.children(":eq("+a+")").css({zIndex:0}),t.data(r,"animating",!1),t.data(r,"current",a),r.options.callback.complete(a+1)})):o.children(":eq("+n+")").stop().fadeOut(this.options.effect.fade.speed,function(){return o.children(":eq("+a+")").stop().fadeIn(r.options.effect.fade.speed,function(){return o.children(":eq("+a+")").css({zIndex:10})}),t.data(r,"animating",!1),t.data(r,"current",a),r.options.callback.complete(a+1)}))},n.prototype._getVendorPrefix=function(){var t,e,n,a,o;for(t=i.body||i.documentElement,n=t.style,a="transition",o=["Moz","Webkit","Khtml","O","ms"],a=a.charAt(0).toUpperCase()+a.substr(1),e=0;e<o.length;){if("string"==typeof n[o[e]+a])return o[e];e++}return!1},t.fn[o]=function(e){return this.each(function(){return t.data(this,"plugin_"+o)?void 0:t.data(this,"plugin_"+o,new n(this,e))})}}(jQuery,window,document)}).call(this)},function(t,e){!function(t){function e(i,n){function a(e){s=e.find(d.tabSelector),s.on(d.events,function(i){var n=s.index(t(this));if(i.preventDefault(),t(this).attr("href")&&t(this).attr("href").split("#")[1]){var a=t(window).scrollTop();window.location.hash=t(this).attr("href").split("#")[1],t("body, html").scrollTop(a)}o.each(function(){t(this).find(d.tabSelector).eq(n).addClass("tab-active").siblings(d.tabSelector).removeClass("tab-active")}),"function"==typeof d.onShow?d.onShow(l.eq(n),n):l.eq(n).removeClass("hide").show(),"function"==typeof d.onHide?d.onHide(l.eq(n).siblings(d.contentSelector),n):l.eq(n).siblings(d.contentSelector).addClass("hide").hide(),d.onLoad(e,n,d)})}var o,s,r,l,c,d;if(c={isSync:!1,events:"click",tabSelector:"li",containerSelector:".tab-container",contentSelector:".tab-content",onShow:null,onHide:null,onLoad:t.noop},d=t.extend({},c,n),d.isSync===!1){if(0===i.length)return i;if(i.length>1)return i.each(function(){e(t(this),n)}),i}o=t(i),r=o.first().attr("data-tab-target")?t("#"+o.first().attr("data-tab-target")):o.first().siblings(d.containerSelector),l=r.children(d.contentSelector),o.each(function(){a(t(this))}),d.onLoad(o,d)}t.fn.tabSwitch=function(t){return e(this,t),this}}(jQuery)},function(t,e){!function(t){function e(e){function i(){return 0>=x?!1:(y&&clearInterval(y),void(y=setTimeout(function(){var t=w===x-1?0:w+1;n(t),i()},p.pause)))}function n(t){return w===t?!1:(b.css({marginLeft:-v*m*t,transition:"margin-left "+p.speed/1e3+"s "+p.easing}),p.controls&&(0===t?d.addClass("control-disabled"):d.removeClass("control-disabled"),t===x-1?h.addClass("control-disabled"):h.removeClass("control-disabled")),p.pager&&u.find("li").eq(t).addClass("pager-active").siblings().removeClass("pager-active"),void(w=t))}function a(){for(var e='<ul class="xm-pagers">',i=0,a=x;a>i;i+=1)e+='<li class="pager'+(0===i?" pager-active":"")+'"><span class="dot">'+(i+1)+"</span></li>";e+="</ul>",u.html(e),u.find("li").off(".carousel").on("click.carousel",function(){t(this).addClass("pager-active").siblings().removeClass("pager-active"),n(u.find("li").index(t(this)))})}function o(){m=p.itemPerSlide||Math.ceil(r.width()/v),x=Math.ceil(l.length/m),1>=x||(n(0),p.pager&&a(),p.auto&&(i(),p.controls&&c.find(".control").off(".carousel").on({"mouseenter.carousel":function(){y&&clearTimeout(y)},"mouseleave.carousel":function(){i()}}),p.pager&&u.find(".pager").off(".carousel").on({"mouseenter.carousel":function(){y&&clearTimeout(y)},"mouseleave.carousel":function(){i()}})))}var s,r,l,c,d,h,u,f,p,m,v,g,x,b=t(this),y=0,w=-1;return f={itemSelector:"> li",itemWidth:null,itemHeight:null,itemPerSlide:null,containerSelector:null,controlsSelector:null,pagersSelector:null,speed:500,easing:"ease",auto:!1,pause:5e3,controls:!0,controlsClass:"xm-controls-line-small",pager:!1,onLoad:t.noop},p=t.extend({},f,e),l=b.find(p.itemSelector),p.itemPerSlide&&l.length<=p.itemPerSlide?this:(v=p.itemWidth||l.outerWidth(!0),g=p.itemHeight||l.outerHeight(),s=p.containerSelector?b.closest(p.containerSelector):b.parent(),s.addClass("xm-carousel-container"),r=b.wrap('<div class="xm-carousel-wrapper"></div>').closest(".xm-carousel-wrapper").css({height:g,overflow:"hidden"}),b.css("width",v*l.length),p.controls&&(c=t('<div class="xm-controls '+p.controlsClass+' xm-carousel-controls"><a class="control control-prev iconfont" href="javascript: void(0);">&#xe628;</a><a class="control control-next iconfont" href="javascript: void(0);">&#xe623;</a></div>'),p.controlsSelector?s.find(p.controlsSelector).append(c):c.insertAfter(r),d=c.find(".control-prev"),h=c.find(".control-next"),d.on("click",function(e){e.preventDefault(),t(this).hasClass("control-disabled")||n(w-1)}),h.on("click",function(e){e.preventDefault(),t(this).hasClass("control-disabled")||n(w+1)})),p.pager&&(u=t('<div class="xm-pagers-wrapper"></div>'),p.pagersSelector?s.find(p.pagersSelector).append(u):u.insertAfter(r)),o(),p.onLoad(b),void t(window).on("resize",o))}t.fn.carousel=function(t){return this.each(function(){e.call(this,t)}),this}}(jQuery)},function(t,e){!function(t){function e(e){function i(){for(var e=-1,i=t(document).scrollTop(),n=0,a=c.length;a>n&&i+s.viewport.height()>c[n];n+=1)e+=1;return e}function n(){var t=i();l!==t&&(l=t,r.filter(function(t){return l>=t}).addClass("is-visible").trigger("visible.visibleWatcher"),s.onVisible(r.eq(l),l))}function a(){r.each(function(){var e=t(this).attr("data-offset")?Number(t(this).attr("data-offset")):s.offset,i=e%1===0?e:e*s.viewport.height();c.push(t(this).offset().top+i)}),n(),s.onLoad()}var o,s,r=t(this),l=-1,c=[];o={viewport:t(window),visibleClass:"is-visible",offset:300,onLoad:t.noop,onVisible:t.noop},s=t.extend({},o,e),a(),s.viewport.on({"scroll.visibleWatcher":n,"resize.visibleWatcher":a})}t.fn.visibleWatcher=function(t){return this.each(function(){e.call(this,t)}),this}}(jQuery)},function(t,e,i){i(5),i(8),function(t){"use strict";function e(e){var n,o=l[a.type];switch(a.type){case 2:var s=t.cookie("userId"),c=t.cookie("mstuid"),d="?u="+c+"&i="+s+"&a="+a.cid;n=a.apiHost[2]+d,"Home"===a.page&&(n+="&c=AA");break;default:n=a.apiHost[a.type]+o+"/a/"+a.cid+"/v/3/i/"+a.gid}t.ajax({dataType:"JSONP",url:n,jsonpCallback:o,cache:!0,params:a,success:function(n){n.type=this.params.type,n.title=this.params.title,n.global=MI.GLOBAL_CONFIG,n.iHost=this.params.iHost,n.isBuy=this.params.isBuy,3===this.params.type&&n.r.slice(0,this.params.max);var a=t(e),o=doT.template(r);a.addClass("container").html(o(n));var s=a.find("ul[data-carousel-list=true]").eq(0);i(a,s,this.params),null!==this.params.callback&&"function"==typeof this.params.callback&&this.params.callback()}})}function i(e,i,a){3!==a.type&&i.carousel({containerSelector:e,controls:a.carouselControl,pager:a.carouselPage,itemHeight:330}),a.isBuy&&t(".J_xm-recommend-list").hover(function(){t(this).find(".J_xm-recommend-btn").show()},function(){t(this).find(".J_xm-recommend-btn").hide()}),n(e,a),t.isFunction(t("body").linkSign)&&e.linkSign({live:!0});var o=e.attr("id"),s=a.page;e.appear(),e.one("appear",function(){"undefined"!=typeof _msq&&_msq.push(["trackPanelShow",o,s])})}function n(e,i){var n=e.find("a"),a=s.page[i.page],o=s.api[i.type];t.each(n,function(e,i){var n,s=t(i).attr("data-stat-index"),r=c(t(i).attr("data-stat-text")),l=t(i).attr("data-stat-method"),d=t(i).attr("data-stat-addcart");n=d?"stat_"+a+d+"."+o+"_"+s+"_"+l:"stat_"+a+"."+o+"_"+s+"_"+l,t(i).attr({"data-stat-pid":n,"data-stat-aid":r})})}var a,o={cid:2,type:1,gid:"1152300005",title:"",cartMax:10,apiHost:["http://prs.www.mi.com/alsoview/get/callback/","http://prs.www.mi.com/alsobuy/get/callback/","http://rec.www.mi.com/guesslike/get","http://prs.www.mi.com/cart/get/callback/"],page:"Cart",iHost:"http://i1.mifile.cn/a1/",isBuy:!1,carouselControl:!1,carouselPage:!0,callback:null},s={page:{Home:"首页",ItemTail:"单品页底部",ComAll:"全部评论页",ComSuc:"评论成功页",AskAll:"全部提问页",AskDetail:"提问详情页",List:"列表页",Cart:"购物车",CartSuc:"加购成功",Saleoff:"下架页",Search:"搜索页",ErrorTip:"报错页"},api:["看了还看","买了还买","猜你喜欢","购物车推荐"]},r=multiline(function(){/*!@tpl
	  {{? it.title }}<h2 class="xm-recommend-title"><span>{{=it.title}}</span></h2>{{?}}
	  <div class="xm-recommend">
	    <ul class="{{? it.type === 3 }}row{{??}}xm-carousel-col-5-list xm-carousel-list clearfix{{?}}"
	    data-carousel-list="true">
	    {{~it.r :value:index}}
	      <li class="J_xm-recommend-list{{? it.type === 3 }} span4{{?}}">
	          <dl>
	              <dt>
	                  <a href="{{=it.global.itemSite}}/{{=value.c}}.html"
	                   data-stat-method="{{=it.v}}_{{=value.a}}" data-stat-index={{=index}}
	                   data-stat-text="{{=value.n}}" target="_blank">
	                   <img src="{{=it.iHost}}{{=value.i}}?width=140&height=140"
	                    srcset="{{=it.iHost}}{{=value.i}}?width=280&height=280 2x" alt="{{=value.n}}" />
	                  </a>
	              </dt>
	              <dd class="xm-recommend-name">
	                  <a href="{{=it.global.itemSite}}/{{=value.c}}.html"
	                  data-stat-method="{{=it.v}}_{{=value.a}}" data-stat-index={{=index}}
	                  data-stat-text="{{=value.n}}" target="_blank">
	                     {{=value.n}}
	                  </a>
	              </dd>
	              <dd class="xm-recommend-price">{{=value.p}}元</dd>
	              <dd class="xm-recommend-tips">
	                  {{? value.l }}{{=value.l}}人好评{{?}}
	                  {{? it.isBuy === true }}
	                  <a href="{{=it.global.cartSite}}/cart/add/{{=value.g}}-0-1"
	                  data-stat-method="{{=it.v}}_{{=value.a}}" data-stat-index={{=index}}
	                  data-stat-text="{{=value.n}}" data-stat-addcart="加购"
	                  class="btn btn-small btn-line-primary J_xm-recommend-btn">加入购物车</a>
	                  {{?}}
	              </dd>
	          </dl>
	      </li>
	    {{~}}
	    </ul>
	  </div>
	  */
console.log()}),l=["recommend_alsoview","recommend_alsobuy","recommend_guesslike","recommend_cart"],c=function(t){try{return t.replace(/\s/g,"")}catch(e){return t}};t.fn.miRecommend=function(i){a=t.extend(o,i),e(this)}}(jQuery)},function(t,e){!function(t){function e(){o=!1;for(var e=0,a=n.length;a>e;e++){var s=t(n[e]).filter(function(){return t(this).is(":appeared")});if(s.trigger("appear",[s]),i){var r=i.not(s);r.trigger("disappear",[r])}i=s}}var i,n=[],a=!1,o=!1,s={interval:250,force_process:!1},r=t(window);t.expr[":"].appeared=function(e){var i=t(e);if(!i.is(":visible"))return!1;var n=r.scrollLeft(),a=r.scrollTop(),o=i.offset(),s=o.left,l=o.top;return l+i.height()>=a&&l-(i.data("appear-top-offset")||0)<=a+r.height()&&s+i.width()>=n&&s-(i.data("appear-left-offset")||0)<=n+r.width()?!0:!1},t.fn.extend({appear:function(i){var r=t.extend({},s,i||{}),l=this.selector||this;if(!a){var c=function(){o||(o=!0,setTimeout(e,r.interval))};t(window).scroll(c).resize(c),a=!0}return r.force_process&&setTimeout(e,r.interval),n.push(l),t(l)}}),t.extend({force_appear:function(){return a?(e(),!0):!1}})}(jQuery)},function(t,e){jQuery(function(t){var e=document.all&&!window.XMLHttpRequest,i=t("body");e&&i.addClass("ie6")})},function(t,e){t.exports={promoTemplateLarge:multiline(function(){/*!@tpl
	{{~it :value:index}}
	  <li class="brick-item brick-item-l">
	    <a href="{{=value.url}}"
	      data-stat-aid="AA{{=value.adv_id}}"
	      data-stat-pid="2_{{=value.area_id}}_{{=index + 1}}_{{=value.space_id}}"
	      target="_blank"><img src="{{=value.image}}" width="160" height="160" alt="" /></a>
	  </li>
	{{~}}
	    */
console.log()}),promoTemplateMiddle:multiline(function(){/*!@tpl
	{{~it :value:index}}
	  <li class="brick-item brick-item-m">
	    <a href="{{=value.url}}"
	      data-stat-aid="AA{{=value.adv_id}}"
	      data-stat-pid="2_{{=value.area_id}}_{{=index + 1}}_{{=value.space_id}}"
	      target="_blank"><img src="{{=value.image}}" width="160" height="160" alt="" /></a>
	  </li>
	{{~}}
	   */
console.log()}),itemTemplateMiddle1:multiline(function(){/*!@tpl
	{{~it :value:index}}
	  {{? value.goods_id }}
	  <li class="brick-item brick-item-m" data-gid="{{= value.goods_id }}">
	    <div class="figure figure-img">
	      <a href="{{=value.url}}"
	        data-stat-aid="AA{{=value.adv_id}}"
	        data-stat-pid="2_{{=value.area_id}}_{{=index + 1}}_{{=value.space_id}}"
	        target="_blank"><img
	    src="{{=value.image}}" width="160" height="160" alt="{{=value.title}}" /></a>
	    </div>
	    <h3 class="title">
	      <a href="{{=value.url}}"
	        data-stat-aid="AA{{=value.adv_id}}"
	        data-stat-pid="2_{{=value.area_id}}_{{=index + 1}}_{{=value.space_id}}"
	        target="_blank">{{=value.title}}</a></h3>
	    <p class="price">
	      <span class="num">{{=value.sale_price}}</span>元
	      {{? value.origin_price > value.sale_price }}<del><span class="num">{{=value.origin_price}}</span>元</del>{{?}}
	    </p>
	    <p class="rank"></p>
	    {{? value.comment && value.comment.content }}
	    <div class="review-wrapper">
	      <a href="{{=value.url}}"
	        data-stat-aid="AA{{=value.adv_id}}"
	        data-stat-pid="2_{{=value.area_id}}_{{=index + 1}}_{{=value.space_id}}"
	        target="_blank">
	        <span class="review">{{= value.comment.content }}</span>
	        <span class="author">
	          来自于 {{= value.comment.user_name }} 的评价
	          <span class="date" data-date="{{= value.comment.add_time }}"></span>
	        </span>
	      </a>
	    </div>
	   {{? }}
	  </li>
	  {{?}}
	{{~}}
	   */
console.log()}),itemTemplateMiddle2:multiline(function(){/*!@tpl
	{{~it :value:index}}
	  {{? value.goods_id }}
	  <li class="brick-item brick-item-m" data-gid="{{= value.goods_id }}">
	    <div class="figure figure-img">
	      <a href="{{=value.url}}"
	        data-stat-aid="AA{{=value.adv_id}}"
	        data-stat-pid="2_{{=value.area_id}}_{{=index + 1}}_{{=value.space_id}}"
	        target="_blank">
	        <img src="{{=value.image}}" width="160" height="160" alt="{{=value.title}}" />
	      </a>
	    </div>
	    <h3 class="title"><a href="{{=value.url}}"
	      data-stat-aid="AA{{=value.adv_id}}"
	      data-stat-pid="2_{{=value.area_id}}_{{=index + 1}}_{{=value.space_id}}"
	      target="_blank">{{=value.title}}</a></h3>
	    <p class="desc">{{=value.desc}}</p>
	    <p class="price">
	      <span class="num">{{=value.sale_price}}</span>元
	      {{? value.origin_price > value.sale_price }}<del><span class="num">{{=value.origin_price}}</span>元</del>{{?}}
	    </p>
	  </li>
	  {{?}}
	{{~}}
	   */
console.log()}),itemTemplateSmall:multiline(function(){/*!@tpl
	{{~it :value:index}}
	  {{? value.goods_id }}
	  <li class="brick-item brick-item-s" data-gid="{{= value.goods_id }}">
	    <div class="figure figure-img">
	      <a href="{{=value.url}}"
	        data-stat-aid="AA{{=value.adv_id}}"
	        data-stat-pid="2_{{=value.area_id}}_{{=index + 1}}_{{=value.space_id}}"
	        target="_blank">
	        <img src="{{=value.image}}" width="80" height="80" alt="{{=value.title}}" />
	      </a>
	    </div>
	    <h3 class="title"><a href="{{=value.url}}"
	      data-stat-aid="AA{{=value.adv_id}}"
	      data-stat-pid="2_{{=value.area_id}}_{{=index + 1}}_{{=value.space_id}}"
	      target="_blank">{{=value.title}}</a></h3>
	    <p class="price"><span class="num">{{=value.sale_price}}</span>元</p>
	  </li>
	  {{?}}
	{{~}}
	   */
console.log()}),itemTemplateReview:multiline(function(){/*!@tpl
	{{~it :value:index}}
	  {{? value.goods_id }}
	  <li class="review-item{{?index === 0}} review-item-first{{?}}" data-gid="{{= value.goods_id }}">
	    <div class="figure figure-img">
	      <a href="{{=value.url}}"
	        data-stat-aid="AA{{=value.adv_id}}"
	        data-stat-pid="2_{{=value.area_id}}_{{=index + 1}}_{{=value.space_id}}"
	        target="_blank">
	        <img src="{{=value.image}}" width="296" height="220" alt="{{=value.title}}" />
	      </a>
	    </div>
	    {{? value.comment && value.comment.content }}
	    <p class="review"><a
	      href="{{= MI.GLOBAL_CONFIG.orderSite + '/comment/commentDetail/comment_id/' + value.comment.comment_id }}"
	      data-stat-aid="AA{{=value.adv_id}}"
	      data-stat-pid="2_{{=value.area_id}}_{{=index + 1}}_{{=value.space_id}}"
	      target="_blank">{{=value.comment.content}}</a></p>
	    <p class="author">
	      来自于 {{= value.comment.user_name }} 的评价
	      <span class="date" data-date="{{= value.comment.add_time }}"></span>
	    </p>
	    <div class="info">
	      <h3 class="title"><a href="{{=value.url}}"
	        data-stat-aid="AA{{=value.adv_id}}"
	        data-stat-pid="2_{{=value.area_id}}_{{=index + 1}}_{{=value.space_id}}"
	        target="_blank">{{=value.title}}</a></h3>
	      <span class="sep">|</span>
	      <p class="price"><span class="num">{{=value.sale_price}}</span>元</p>
	    </div>
	    {{? }}
	  </li>
	  {{?}}
	{{~}}
	   */
console.log()}),itemTemplateContent:multiline(function(){/*!@tpl
	{{~it :value:index}}
	<li>
	  <h4 class="name"><a href="{{=value.url}}"
	    data-stat-aid="AA{{=value.adv_id}}"
	    data-stat-pid="2_{{=value.area_id}}_{{=index + 1}}_{{=value.space_id}}"
	    tabindex="-1"
	    target="_blank">{{=value.title}}</a></h4>
	  <p class="desc"><a href="{{=value.url}}"
	   data-stat-aid="AA{{=value.adv_id}}"
	   data-stat-pid="2_{{=value.area_id}}_{{=index + 1}}_{{=value.space_id}}"
	   tabindex="-1"
	   target="_blank">{{=value.desc}}</a></p>
	  <p class="price"><a href="{{=value.url}}"
	   data-stat-aid="AA{{=value.adv_id}}"
	   data-stat-pid="2_{{=value.area_id}}_{{=index + 1}}_{{=value.space_id}}"
	   tabindex="-1"
	   target="_blank">{{=value.sale_price}}</a></p>
	  <div class="figure figure-img">
	    <a href="{{=value.url}}"
	      data-stat-aid="AA{{=value.adv_id}}"
	      data-stat-pid="2_{{=value.area_id}}_{{=index + 1}}_{{=value.space_id}}"
	      tabindex="-1"
	      target="_blank">
	      <img src="{{=value.image}}" width="160" height="140" alt="{{=value.title}}" />
	    </a>
	  </div>
	</li>
	{{~}}
	   */
console.log()}),itemTemplateContentMore:multiline(function(){/*!@tpl
	<li class="more">
	  <p class="desc">{{=it.desc}}</p>
	  <a class="btn btn-small btn-line-{{=it.style}}" href="{{=it.url}}"
	    tabindex="-1"
	    target="_blank">前往{{=it.text}}</a>
	  <img class="thumb" src="{{=it.image}}" width="160" height="140" alt="{{=it.text}}" />
	</li>
	   */
console.log()}),itemTemplateVideo:multiline(function(){/*!@tpl
	{{~it :value:index}}
	<li class="video-item{{?index === 0}} video-item-first{{?}}">
	  <div class="figure figure-img">
	    <a class="J_videoTrigger" href="javascript: void(0);"
	      data-stat-aid="AA{{=value.adv_id}}"
	      data-stat-pid="2_{{=value.area_id}}_{{=index + 1}}_{{=value.space_id}}"
	      data-video="{{=value.url}}" data-video-title="{{=value.title}}" title="点击播放视频">
	      <img src="{{=value.image}}" width="296" height="180" alt="{{=value.title}}" />
	      <span class="play"><i class="iconfont">&#xe601;</i></span>
	    </a>
	  </div>
	  <h3 class="title">
	    <a class="J_videoTrigger" href="javascript: void(0);"
	      data-stat-aid="AA{{=value.adv_id}}"
	      data-stat-pid="2_{{=value.area_id}}_{{=index + 1}}_{{=value.space_id}}"
	      data-video="{{=value.url}}" data-video-title="{{=value.title}}">{{=value.title}}</a>
	  </h3>
	  <p class="desc">{{=value.desc}}</p>
	</li>
	{{~}}
	   */
console.log()})}},function(t,e){t.exports=function(t){var e=$(t),i=e.find("> li");i.each(function(){var t,e=$(this).find(".children-list").find("> li");$(this).find(".children").addClass("children-col-"+Math.ceil(e.length/6)),e.length>6&&(t=$(document.createDocumentFragment()),e.each(function(e){e%6===0&&t.append($('<ul class="children-list children-list-col children-list-col-'+Math.ceil((e+1)/6)+'"></ul>')),$(this).appendTo(t.find(".children-list-col-"+Math.ceil((e+1)/6)))}),$(this).find(".children").html(t))}),e.miMenuAim({activate:function(t){$(t).addClass("category-item-active").find("img").each(function(){$(this).attr("src",$(this).attr("data-src"))})},deactivate:function(t){$(t).removeClass("category-item-active")},exitMenu:function(){return!0}})}}]);