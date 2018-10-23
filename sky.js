class ShowStar{
    constructor(){

    }
    static get inputProperties(){
        return ["--star--opacity","--star-density"];
    }
    paint(ctx,paintSize,properties){
        let xMax = paintSize.width;
        let yMax = paintSize.height;
        let starOpacity = properties.get("--star--opacity");
        let starDensity = properties.get("--star-density").toString() || 1;
        starDensity > 1 && (starDensity==1);
        let num = Math.round((xMax + yMax) * starDensity);
        //画星星
        for(let i = 0;i < num;i++){
            //随便设置随机数，
            let x = Math.floor(Math.random()*xMax+1);
            let y = Math.floor(Math.random()*yMax+1);
            let size = Math.floor(Math.random()*2+1);
            let o1 = Math.floor(Math.random()*9+1);
            let o2 = Math.floor(Math.random()*9+1);
            let opacity = +("."+(o1+o2))*starOpacity;
            let hue = Math.floor(Math.random()*360+1);
            ctx.fillStyle = `hsla(${hue},30%,80%,${opacity})`
            ctx.fillRect(x,y,size,size);
        }
        ctx.fillRect(0,0,xMax,yMax);
    }
}
registerPaint("show-star",ShowStar);