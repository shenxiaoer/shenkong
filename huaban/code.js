function code(obj){
    this.w=150;
    this.h=30;
    this.num=4;
    this.linenum=10;
    this.obj=obj;
    this.yinzi=["a","b","c","d","e","f","A","B","C","D"];
    this.canvas=this.createCanvas();
    this.cobj=this.canvas.getContext("2d");
}
code.prototype={
    createCanvas:function(){
        var canvas=document.createElement("canvas");
        canvas.width=this.w;
        canvas.height=this.h;
        canvas.style.background="#ccc";
        this.obj.appendChild(canvas);
        return canvas;
    },
    getLetter:function(){
        var arr=[];
        for(var i=0;i<this.num;i++){
            var rand=Math.floor(Math.random()*this.yinzi.length)
            while(this.check(arr,this.yinzi[rand])){
                rand=Math.floor(Math.random()*this.yinzi.length)
            }
            arr.push(this.yinzi[rand])
        }
        return arr;
    },
    check:function(arr,val){
        for(var i=0;i<arr.length;i++){
            if(arr[i]==val){
                return true;
            }
        }
        return false;
    },
    run:function(){
        var arr=this.getLetter();
        this.str=arr.join("").toLowerCase();
        for(var i=0;i<arr.length;i++){
            var a=Math.random()*60-30;
            this.cobj.save();
            this.cobj.translate(30*i+20,0)
            this.cobj.rotate(a*Math.PI/180)
            this.cobj.font="26px 黑体";
            this.cobj.textBaseline="top";
            this.cobj.fillText(arr[i],0,0)
            this.cobj.restore()
        }
        this.line();
        var that=this;
        this.canvas.onclick=function(){
            that.cobj.clearRect(0,0,that.w,that.h);
            that.run();
        }
    },
    line:function(){
        for(var i=0;i<this.linenum;i++){
            var startx=Math.random()*this.w;
            var starty=Math.random()*this.h;
            var endx=Math.random()*this.w;
            var endy=Math.random()*this.h;
            this.cobj.beginPath();
            this.cobj.moveTo(startx,starty);
            this.cobj.lineTo(endx,endy);
            this.cobj.stroke();
            this.cobj.closePath();
        }
    }
}