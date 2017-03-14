$(function(){
    var box=$(".box");
    var nav=$("nav");
    var canvas=$("canvas")
    var canbox=$(".canvas")
    var copy=$(".copy")
    var cobj=canvas[0].getContext("2d");
    window.onresize();
    $(".mainmenu").hover(function(){
        $(this).find(".son").finish();
            $(this).css({
                zIndex:1000
            });
        $(this).find(".son").slideToggle(100)
    })
    
    var obj=new draw(cobj,canbox,copy[0]);
    //文件
    $(".mainmenu").find("li").click(function(){
        var index=$(this).index(".mainmenu li");
        if(index==0){
            if(obj.arr.length>0){
                var yes= window.confirm("需要保存吗");
                if(yes==true){
                    location.href=canvas[0].toDataURL().replace("image/png","image/octet-stream");
                }
                obj.arr=[];
                cobj.clearRect(0,0,canvas.width(),canvas.height());
            }
        }else if(index==1){
            cobj.clearRect(0,0,canvas.width(),canvas.height());
            if(obj.arr.length==0){
                alert("top");
                return false;
            }
            obj.arr.pop();
            cobj.putImageData(obj.arr[obj.arr.length-1],0,0);
        }else if(index==2){
            location.href=canvas[0].toDataURL().replace("image/png","image/octet-stream");
        }
    })
    //形状
    $(".menu:nth-of-type(1)").find("li").click(function(){
        $(".menu:nth-of-type(6)").find("li").css({background:"none"})
        $(".menu:nth-of-type(2)").find("li").eq(0).css({background: "none"});
        $(".menu:nth-of-type(1)").find("li").css({background:"none"})
        $(".menu:nth-of-type(7)").find("li").css({background:"none"})
        $(".menu:nth-of-type(1)").find("li").eq($(this).index()).css({background:"rgba(213,230,247,0.8)"})
            obj.type=$(this).attr("data-role");
            obj.drawFun();
    })
    //画图方式
    $(".menu:nth-of-type(2)").find("li").click(function(){
        $(".menu:nth-of-type(6)").find("li").css({background:"none"})
        $(".menu:nth-of-type(7)").find("li").css({background:"none"})
        if($(this).attr("data-role")=="pen") {
            $(".menu").find("li").css({background: "none"})
            $(".menu:nth-of-type(2)").find("li").eq($(this).index()).css({background: "rgba(213,230,247,0.8)"})
            obj.pen();
        }else{
            $(".menu:nth-of-type(2)").find("li").css({background:"none"})
            $(".menu:nth-of-type(2)").find("li").eq($(this).index()).css({background:"rgba(213,230,247,0.8)"})
            obj.style=$(this).attr("data-role");
            obj.drawFun();
        }
    })
    //线条宽度
    $(".menu:nth-of-type(3)").find("li").click(function(){
        $(".menu:nth-of-type(3)").find("li").css({background:"none"})
        $(".menu:nth-of-type(7)").find("li").css({background:"none"})
        $(".menu:nth-of-type(3)").find("li").eq($(this).index()).css({background:"rgba(213,230,247,0.8)"})
        obj.lineWidth=$(this).attr("data-role");
        if($(["data-role"=="pen"]).attr("background")&&$(["data-role"=="pen"]).attr(background)!="none"){
            obj.pen();
            return false;
        }
        if(obj.type==""){
            return false;
        }
        obj.drawFun();

    })
    //线条颜色
    $(".menu:nth-of-type(4)").find("input").change(function(){
        obj.strokeColor=$(this).val();
        $(".menu:nth-of-type(7)").find("li").css({background:"none"})
        if($(["data-role"=="pen"]).attr("background")&&$(["data-role"=="pen"]).attr("background")!="none"){
            obj.pen();
            return false;
        }
        if(obj.type==""){
            return false;
        }
        obj.drawFun();
    })
    //填充颜色
    $(".menu:nth-of-type(5)").find("input").change(function(){
        obj.fillColor=$(this).val();
        $(".menu:nth-of-type(7)").find("li").css({background:"none"})
        if(obj.type==""){
            return false;
        }
        obj.drawFun();
    })
    //擦除
    $(".menu:nth-of-type(6)").find("li").click(function(){
        $(".menu").find("li").css({background:"none"})
        $(".menu:nth-of-type(2)").find("li").eq(0).css({background:"none"});
        $(".menu:nth-of-type(6)").find("li").eq($(this).index()).css({background:"rgba(213,230,247,0.8)"})
        obj.xpsize=$(this).attr("data-role");
        obj.clear();
    })
    //选择
    $(".menu:nth-of-type(7)").find("li").click(function(){
        $(".menu:nth-of-type(7)").find("li").css({background:"rgba(213,230,247,0.8)"})
        obj.select();
    })
})

window.onresize=function(){
    var box=$(".box");
    var canvas=$("canvas")
    var canbox=$(".canvas")
    var copy=$(".copy")
    copy.css({height:box.height()-112})
    canbox.css({height:box.height()-112})
    canvas.attr({width:box.width(),height:box.height()-112})
}
