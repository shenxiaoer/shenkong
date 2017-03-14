$(function(){
    window.onresize();
    $(".header2>.row:first-child").click(function(){
        $(".header2>.row").css("background","rgb(0,0,0)")
        $(".lists").css("height",$(window).height()-48)
        $(".lists").slideToggle(500)
    })
    var flag=true;
    $(".helplist").click(function(){
       this.index=$(this).index();
        if(flag){
            $(this).css({height:200,fontWeight:"bold"})
            $(".sonlist").eq(this.index).slideDown(500)
            flag=false
        }else{
            $(this).css({height:48,fontWeight:"normal"})
            $(".sonlist").eq(this.index).slideUp(500)
            flag=true
        }
    })



    //轮播
    //setInterval(move,2000);
    function move(){
        $(".banner").animate({marginLeft:-$(".bannerbox").width()},500,function(){
            $(".banner div:nth-of-type(1)").appendTo($(".banner"))
            $(".banner").css("marginLeft",0)
        })
    }
})

window.onresize=function(){
    var widths=$(window).width();
    if(widths<=740){
        $(".header2").css("display","block")
        $(".header1").css("display","none")
        $(".helps2").css("display","block")
        $(".helps1").css("display","none")
    }else{
        $(".header2").css("display","none")
        $(".header1").css("display","block")
        $(".helps2").css("display","none")
        $(".helps1").css("display","block")
    }
}
