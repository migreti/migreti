/*
var s = Snap();

Snap.load("robotsvg.svg", function f{
  s.append( f.select("svg") );
} ) ;



var leftarm = s.select("#left_arm");

var lefteyeball = s.select("#left_eyeball");

lefteyeball.attr({
  fill: "black"
});
*/

var leftarm = $("#left_arm");

    TweenMax.to("#left_arm", 2, {
    rotation:60,

    transformOrigin:"right bottom"
});
