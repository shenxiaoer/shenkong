function draw(cobj,cbox,copy){
    this.cobj=cobj;
    this.cbox=cbox;
    this.copy=copy;
    this.clientW=cbox.width();
    this.clientH=cbox.height();
    this.strokeColor="#000";
    this.fillColor="#000";
    this.lineWidth=1;
    this.type="";
    this.style="stroke";
    this.arr=[];
    this.xpsize=6;
    this.xiangpi=this.createXP();
    this.sw=0;
    this.sh=0;
    this.sx=0;
    this.sy=0;
    this.s=this.createS();
}
draw.prototype={
    init:function(){
        this.cobj.strokeStyle=this.strokeColor;
        this.cobj.fillStyle=this.fillColor;
        this.cobj.lineWidth=this.lineWidth;
        this.s.css({display:"none"})
    },
    drawFun:function(){
        var that=this;
        //that.copy.onmousemove=null;
        //that.copy.onmouseup=null;

        that.copy.onmousedown=function(e){
            that.xiangpi.css("display","none");
            that.init();
            var startx= e.offsetX;
            var starty= e.offsetY;
            that.copy.onmousemove=function(e){
                that.cobj.clearRect(0,0,that.clientW,that.clientH)
                if(that.arr.length!=0){
                    that.cobj.putImageData(that.arr[that.arr.length-1],0,0)
                }
                var endx= e.offsetX;
                var endy= e.offsetY;
                if (that.type=="") {
                    return false;
                }
                that[that.type](startx,starty,endx,endy);
            }
            that.copy.onmouseup=function(){
                that.arr.push(that.cobj.getImageData(0,0,that.clientW,that.clientH));
                that.copy.onmousemove=null;
                that.copy.onmouseup=null;
            }
            e.preventDefault();
        }
    },
    line:function(x,y,x1,y1){
        this.cobj.beginPath();
        this.cobj.moveTo(x,y);
        this.cobj.lineTo(x1,y1);
        this.cobj.stroke();
        this.cobj.closePath();
    },
    rect:function(x,y,x1,y1){
        var w=x1-x;
        var h=y1-y
        this.cobj.beginPath();
        this.cobj.rect(x,y,w,h);
        this.cobj[this.style]();
        this.cobj.closePath();
    },
    circle:function(x,y,x1,y1){
        var r=Math.sqrt((x1-x)*(x1-x)+(y1-y)*(y1-y));
        this.cobj.beginPath();
        this.cobj.arc(x,y,r,0,Math.PI*2);
        this.cobj[this.style]();
        this.cobj.closePath();
    },
    pen:function(){
        var that=this;
        that.init();
        that.copy.onmousedown=function(e){
            var ox= e.offsetX;
            var oy= e.offsetY;
            that.cobj.beginPath();
            that.cobj.moveTo(ox,oy)
            that.copy.onmousemove=function(e){
                var cx= e.offsetX;
                var cy= e.offsetY;
                that.cobj.lineTo(cx,cy)
                that.cobj.stroke();
            }
            that.copy.onmouseup=function(){
                that.cobj.closePath();
                that.arr.push(that.cobj.getImageData(0,0,that.clientW,that.clientH));
                that.copy.onmousemove=null;
                that.copy.onmouseup=null;
            }
        }
    },
    createXP:function(){
        var that=this;
        return $("<div>").css({
            width:that.xpsize,
            height:that.xpsize,
            position:"absolute",
            left:0,top:0,border:"1px solid #000",display:"none"
        }).appendTo(that.cbox);
    },
    clear:function() {
        var that = this;
        that.copy.onmouseout=function(){
            that.xiangpi.css("display","none")
        }
        that.copy.onmousemove = function (e) {
            var ox = e.offsetX;
            var oy = e.offsetY;
            var left = ox - that.xpsize / 2;
            var top = oy - that.xpsize / 2;
            if (left < 0) {
                left = 0;
            }
            if (top < 0) {
                top = 0;
            }
            if (left > that.clientW - that.xpsize) {
                left = that.clientW - that.xpsize
            }
            if (top > that.clientH - that.xpsize) {
                top = that.clientH - that.xpsize
            }
            that.xiangpi.css({
                left:left,top:top,width:that.xpsize,height:that.xpsize,display:"block",background:"#fff"
            })
        }
        that.copy.onmousedown = function () {
            that.copy.onmousemove = function (e) {
                var ox = e.offsetX;
                var oy = e.offsetY;
                var left = ox - that.xpsize / 2;
                var top = oy - that.xpsize / 2;
                if (left < 0) {
                    left = 0;
                }
                if (top < 0) {
                    top = 0;
                }
                if (left > that.clientW - that.xpsize) {
                    left = that.clientW - that.xpsize
                }
                if (top > that.clientH - that.xpsize) {
                    top = that.clientH - that.xpsize
                }
                that.xiangpi.css({
                    left: left,top: top,width: that.xpsize,height: that.xpsize,display: "block"
                })
                that.cobj.clearRect(left, top, that.xpsize, that.xpsize)
            }
            that.copy.onmouseup = function () {
                that.copy.onmouseup = null;
                that.copy.onmousemove = null;
                that.arr.push(that.cobj.getImageData(0, 0, that.clientW, that.clientH));
                that.clear();
            }
        }
    },
    createS:function(){
        var that=this
        return $("<div>").css({
            position:"absolute",left:that.sx,top:that.sy,width:that.sw,height:that.sh,border:"1px dashed #000",display:"none"
        }).appendTo(that.cbox)
    },
    select:function(){
        var that=this;
        that.copy.onmousedown=function(e){
            var startx= e.offsetX;
            var starty= e.offsetY;
            that.sx=startx;
            that.sy=starty
            that.copy.onmousemove=function(e){
                var endx= e.offsetX;
                var endy= e.offsetY;
                that.sw=endx-startx;
                that.sh=endy-starty;
                that.s.css({
                    display:"block",left:that.sx,top:that.sy,width:that.sw,height:that.sh
                })
            }
            that.copy.onmouseup=function(){
                that.copy.onmousemove=null;
                that.copy.onmouseup=null;
                that.move();
            }
        }
    },
    move:function(){
        var that=this;
        var flag=true;
        that.copy.onmousemove=function(e){
            var startx= e.offsetX;
            var starty= e.offsetY;
            if(startx>that.sx&&startx<that.sx+that.sw&&starty>that.sy&&starty<that.sy+that.sh){
                that.copy.style.cursor="move";
                flag=true;
            }else{
                that.copy.style.cursor="default";
                flag=false;
            }
        }
        that.copy.onmousedown=function(e){
            if(!flag){
                return false;
            }
            var startx= e.offsetX;
            var starty= e.offsetY;
            var left,top,changex,changey,endx,endy;

            that.sdata=that.cobj.getImageData(that.sx,that.sy,that.sw,that.sh);
            that.cobj.clearRect(that.sx,that.sy,that.sw,that.sh);
            that.arr.push(that.cobj.getImageData(0,0,that.clientW,that.clientH))
            that.cobj.putImageData(that.sdata,that.sx,that.sy)

            that.copy.onmousemove=function(e){
                endx= e.offsetX;
                endy= e.offsetY;
                changex=startx-that.sx;
                changey=starty-that.sy;
                left=endx-changex;
                top=endy-changey;
                if(left<0){
                    left=0
                }
                if(left>that.clientW-that.sw){
                    left=that.clientW-that.sw;
                }
                if(top<0){
                    top=0
                }
                if(top>that.clientH-that.sh){
                    top=that.clientH-that.sh;
                }
                that.s.css({
                    left:left,top:top
                })
                that.cobj.clearRect(0,0,that.clientW,that.clientH);
                that.cobj.putImageData(that.arr[that.arr.length-1],0,0);
                that.cobj.putImageData(that.sdata,left,top)
            }
            that.copy.onmouseup=function(){
                that.sx=left;
                that.sy=top;
                that.copy.onmousemove=null;
                that.copy.onmouseup=null;
                that.move();
                that.arr.push(that.cobj.getImageData(0,0,that.clientW,that.clientH))

            }
        }
    }
}
