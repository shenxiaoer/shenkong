$(function(){
    window.onresize();
    $(".optbtn").click(function(){
        $(".list").css("height",360);
        $(".list").slideToggle(1000)
    })
    //手机图片轮播
    var bgwidth=$(".zsshowbg img").outerWidth();
    var bgnum=$(".zsshowbg img").length;
    $(".zsshowbg").css("width",bgwidth*bgnum);
    var t=setInterval(move,2000)
    var flag;
    function move(){
        $(".zsshowbg").finish();
        $(".zsshowbg").animate({"marginLeft":-bgwidth},function(){
            $(".zsshowbg img:first").appendTo($(".zsshowbg"))
            $(".zsshowbg").css("margin-left",0)
            flag=true;
        })
    }
    function move2(){
        $(".zsshowbg").finish();
        $(".zsshowbg img:last").prependTo($(".zsshowbg"))
        $(".zsshowbg").css("margin-left",-bgwidth)
        $(".zsshowbg").animate({"marginLeft":0},function(){

            flag=true;
        })
    }
    $(".zsleft,.zsright").hover(function(){
        clearInterval(t);
    },function(){
        t=setInterval(move,2000)
    })
    $(".zsleft").click(function(){
        if(flag){
            move();
            flag=false;
        }
    })
    $(".zsright").click(function(){
        if(flag){
            move2();
            flag=false;
        }
    })
    //返回顶部
    $(window).scroll(function(){
        if($(document).scrollTop()>=100){
            $("#gotop").css("display","block")
        }
        if($(document).scrollTop()<100){
            $("#gotop").css("display","none")
        }
        if($(document).scrollTop()>$(".skills").offset().top-200){
            $(".inn:eq(0)").css({animation:"bg1 2s linear 3 forwards"})
            $(".inn:eq(1)").css({animation:"bg2 2s linear 3 forwards"})
            $(".inn:eq(2)").css({animation:"bg3 2s linear 3 forwards"})
            $(".inn:eq(3)").css({animation:"bg1 2s linear 3 forwards"})
            $(".inn:eq(4)").css({animation:"bg1 2s linear 3 forwards"})
            $(".inn:eq(5)").css({animation:"bg3 2s linear 3 forwards"})

        }
    })

    $("#gotop").click(function(){
        var aa=document.documentElement.scrollTop!=0?document.documentElement:document.body;
        $(aa).animate({scrollTop:0},500);
    })
   $(".web-box").hover(function(){
        $(".web-box").find(".zhezhao").finish();
        $(".web-box").find(".zhezhao").eq($(this).parent().index()-1).slideToggle(1000);
    });
    $(".col-l-2.text-left").hover(function(){
        $(".col-l-2.text-left").eq($(this).index()-1).find(".mes").css({animation:"left 2s ease forwards"})
    },function(){
        $(".col-l-2.text-left").eq($(this).index()-1).find(".mes").css({animation:"right 2s ease forwards"})
    })

    //整站轮播
    var options = [
        {top:40, left:0, zIndex:1},
        {top:20, left:60, zIndex:2},
        {top:0, left:130, zIndex:3},
        {top:20, left:240, zIndex:2},
        {top:40, left:345, zIndex:1},
    ];
    var size=[
        {width:365, height:252},
        {width:405, height:280},
        {width:445, height:308},
        {width:405, height:280},
        {width:366, height:252},
    ]
    $(".focusBox li").each(function(index,obj){
        $(obj).css(options[index])
        $(obj).find("img").css(size[index])
    })
    var ul=$(".focusBox ul")
    var tt=setInterval(moved1,3000)
    function moved1(){
        $(".focusBox li:last").css({animation:"none"})
        $(".focusBox li:first").find("img").css(size[size.length-1])
        $(".focusBox li:first").css({top:40,left:270}).appendTo(ul)
        $(".focusBox li:not(li:last)").each(function(index,obj){
            $(obj).css(options[index])
            $(obj).find("img").css(size[index])
        })
        $(".focusBox li:last").css({animation:"daoright 0.5s linear forwards"})
    }
    function moved2(){
        $(".focusBox li:first").css({animation:"none"})
        $(".focusBox li:last").find("img").css(size[0])
        $(".focusBox li:last").css({top:40,left:75,zIndex:1}).prependTo(ul)
        $(".focusBox li:not(:first)").each(function(index,obj){
            $(obj).css(options[index+1])
            $(obj).find("img").css(size[index+1])
        })
        $(".focusBox li:first").css({animation:"daoleft 0.5s linear forwards"})
    }
    $(".focusBox").hover(function(){
        clearInterval(tt)
    },function(){
        tt=setInterval(moved1,3000)
    })
    $(".prev").click(function(){
        moved1();
    })
    $(".next").click(function(){
        moved2();
    })
    $(".autotit").each(function(index,obj){
        $(obj).click(function(){
            $(".autotit").removeClass("active").eq(index).addClass("active");
            $(".autocon").css("display","none").eq(index).css("display","block");
        })
    })
})

window.onresize=function(){
    var widths=$(window).width();
    var bh=$(".web-box").height();
    var th=$(".trueCar").height();
    $(".zhezhao").css({height:bh-th});
    if(widths>830){
        $(".conleft").css({
                display:"block"
            })
        $(".conright").css({
                width:"30%",float:"left","margin-left":"4%"
            })
    }else{
        $(".conleft").css({
            display:"none"
        })
        $(".conright").css({
            width:"50%","margin":"0 auto"
        })
    }
    if(widths<=740){
        $(".header-t").css("display","block")
        $(".header").css("display","none")
    }else{
        $(".header-t").css("display","none")
        $(".header").css("display","block")
    }
    if(widths<810){
        $(".jieshao").css({marginTop:"50px"})
    }
    if(widths<=910){
        $(".focusBox").css({display:"none"})
        $(".jieshao").css({display:"block"})
    }else{
        $(".jieshao").css({display:"none"})
        $(".focusBox").css({display:"block"})
    }
    if(widths<680){
        $(".banbox").css({width:"100%",height:"",background:"url(./image/banner4.png)no-repeat center top",backgroundSize:"contain"})
    }else if(widths<1070){
        $(".banbox").css({background:"url(./image/banner2.png) right center"})
    }else if(widths<1190){
        $(".banbox").css({background:"url(./image/banner1.png) right center"})
    }else{
        $(".banbox").css({background:"url(./image/banner.png) right center"})
    }
}
