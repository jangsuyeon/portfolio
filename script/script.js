// $(document).ready(function(){

//     $("#mv").slick({
//         prevArrow: $("#prev"),
//         nextArrow: $("#next"),
//         dots: true
//     });

//     $("#top").click(function(){
//         $("html").scrollTop(0);
//     });
    
// });

var num = 0;
function add(s){
    var chars = [];
    for(i=0; i<s.data[num].length; i++){
        chars[i] = s.data[num].charAt(i);
    }
    for(i=0; i<chars.length; i++){
        setTimeout(function(i){
            $(s.who).append(chars[i]);
        }, i*s.speed, i);
    }
    setTimeout(rem, chars.length*s.speed+s.time, s.who, s.speed, s);
}

function rem(who, speed, source){
    var t = $(who).text();
    for(i=0; i<t.length; i++){
        setTimeout(function(i){
            $(who).text(t.substr(0, t.length-i-1));
        }, i*speed/3, i);
    }
    num++;
    if(num >= source.data.length){
        num = 0;
    }
    setTimeout(add, t.length*speed/3+800, source);
}

function typing(source){
    $(source.who).empty();
    add(source);
}

$('.autoplay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });