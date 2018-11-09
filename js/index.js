$(function(){

    $("main .right .top").click(function(e){
        if(e.target.nodeName == "LI"){
            let index = $("main .right .top li").index(e.target)
            $("main .right .top li").removeClass("hot").eq(index).addClass("hot")
            $("main .right .topbox").css("z-index","5").eq(index).css("z-index","10")
        }
    })

    $(".right .topbox ul").click(function(e){
        if(e.target.nodeName == "P"){
            // $(window).attr('href','details.html')
            // window.location.href="details.html"
            top.location="details.html"

        }
    })

})