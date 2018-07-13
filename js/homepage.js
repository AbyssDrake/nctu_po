// nav hover 展開2個直角梯形
$(document).ready(function () {
    $('div.top').hover(function () {

        $(this).find('div[class^="navbox"]').show();
        $(this).addClass("hover");


    }, function () {

        $(this).find('div[class^="navbox"]').hide();
        $(this).removeClass("hover");
    });

});



// nav click 展開2個直角梯形
$(document).ready(function () {
    $('div.top').click(function () {
        // 點擊別的不會衝突 
        sibling = $(this).siblings(".click1")
        if (sibling) {
            sibling.find('div[class^="navbox"]').hide();
            sibling.removeClass("click1");
            sibling.find('div[id^="nav"]').removeClass("click1");
        }
        // 點擊show&hide
        if ($(this).hasClass("click1")) {
            $(this).find('div[class^="navbox"]').hide();
            $(this).removeClass("click1");
            $(this).find('div[id^="nav"]').removeClass("click1");
        } else {
            $(this).find('div[class^="navbox"]').show();
            $(this).addClass("click1");
            $(this).find('div[id^="nav"]').addClass("click1");
        }
    });
});

//left-side-bar
$(function () {
    $(".left-side-bar-element").hover(function () {
        $(this).css("color", "#FFFFFF");
        $(".right-bg").css("display", "inline");
    }, function () {
        $(this).css("color", "#f4a22c");
        $(".right-bg").css("display", "none");
    });

    //留言板
    $(".navbox7-left").hover(function () {
        $(this).css("color", "#FFFFFF");
        $(this).children("hr").css("border-color", "#FFFFFF");
        $("#navboxrw7_1").css("display", "none");
    }, function () {
        $(this).css("color", "#f4a22c");
        $(this).children("hr").css("border-color", "#f4a22c");
        $("#navboxrw7_1").css("display", "block");
    });

    //其他問題
    $("#navboxw7_3").hover(() => {
        $(".other-questions").css("display", "block");
    }, () => {
        $(".other-questions").css("display", "none");
    });
    //約用人員
    $("#navboxw7_5").hover(() => {
        $(".personnel").css("display", "block");
    }, () => {
        $(".personnel").css("display", "none");
    });
    //專兼任教師
    $("#navboxw7_8").hover(() => {
        $(".teachers").css("display", "block");
    }, () => {
        $(".teachers").css("display", "none");
    });


});

