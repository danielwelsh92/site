var bX = 200;
var bY = 200;
var bXv =2;
var bYv =0;

var g = 1;
var hits = 0;
var w;
var px = document.clientX;
var py = document.clientY;
var ball = document.getElementById("ball");
var bounceStr = 3;
ball.style.position = "absolute";
var windowHeight = $(window).height();
var scrollTop = $(window).scrollTop();
document.onmousemove = function(e){
    px = e.pageX;
    py = e.pageY;
}

function draw() {
    
     windowHeight = $(window).height();
     scrollTop = $(window).scrollTop();
    var viewBottom = scrollTop + windowHeight;

    w = ball.clientWidth;
    bYv += g;

    var distX = px - bX;
    var distY = py - bY;
    var distance = Math.sqrt( (distX*distX) + (distY*distY) );


    if(distance < w/2)
    {
        bXv = -distX/bounceStr;
        bYv = -distY/bounceStr;
        hits ++;
        document.getElementById("hits").innerText = ""+hits;
        // bXv =  (px + (bX - (w/2) )  )/100;
        // bYv =  (py + (bY - (w/2) )  )/100;

    }

    if((bY +bYv) + (w/2) >= viewBottom)
    {
        hits =0;
        document.getElementById("hits").innerText = ""+hits;
        bYv = Math.abs(bYv)* -0.9;

        if(Math.abs(bYv) < 1)
        {
            bY = viewBottom - (w/2);
            bYv =0;
        }
    }

    if((bX + bXv) + (w/2) >= $(window).width())
    {
        bXv  = Math.abs(bXv)*-1;
        bX  = $(window).width() - (w/2);
    }
    if((bX + bXv) - (w/2) <= 0)
    {
        bXv  = Math.abs(bXv);
    }
    
    bY+=bYv;

    bX += bXv;
    bXv*= 0.99;
    ball.style.left = bX-(w/2)+"px";
    ball.style.top = bY-(w/2)+"px";

}
setInterval(draw, 1000/60);