$( document ).ready(function() {
   p = $("navigation").length;
   console.log(p)
   var w = $(" .nav > li ").outerWidth;
    $("#searcher").css('top', p.top);
    $("#searcher").css('left', p.left+w);
    console.log(p.top + " " + p.left+w)
});