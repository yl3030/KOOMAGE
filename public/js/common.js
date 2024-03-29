$(".product_spec_title").click(function(){
    $(this).parents("li").find(".product_spec_content").slideToggle(300).css("display","flex");
    $(this).toggleClass("active");
})

$(".product_tab-m_title").click(function(){
    $(this).parents("li").find(".product_tab-m_content").slideToggle(300);
    $(this).toggleClass("active");
})

$(".product_spec_item>li").click(function(){
    if(!$(this).parents(".product_spec_item").hasClass("single-item")){
        $(this).toggleClass("active").siblings("li").removeClass("active");
    }
})

$(".menu_second_account").click(function(){
    if($(window).width()>=768){
        $("#menu_third_account").toggleClass("active");
    }else {
        $(this).parents(".menu_second_item").find(".menu_third-m").slideToggle(300);
    }
})
$(".menu_third_a").click(function(){
    $(this).toggleClass("active");
    if($(window).width()>=768){
        let form = $(this).data("form");
        $(form).toggleClass("active");
    }else {
        $(this).parents(".menu_third_item").find(".menu_forth-m").slideToggle(300);
    }
})

$(".header_menu").click(function(){
    if($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(".menu").removeClass("active");
        $("body").css("overflow","auto");
    }else {
        $(this).addClass("active");
        $(".menu").addClass("active");
        $("body").css("overflow","hidden");
    }
})

$(".sc").click(function(){
    $(".sc_list").slideToggle(300);
})
$(".sc_list>li").click(function(){
    let abbr = $(this).data("abbr");
    $(".ca").text(abbr);
    $(".sc_list").slideUp(300);
})

$(".product-list_save").click(function(){
    $(this).toggleClass("active");
})

$(".collect").click(function(){
    if($(this).hasClass("active")) {
        $(this).removeClass("active");
    }else {
        $(this).addClass("active");
    }
   
})

$(".footer_join_input").focus(function(){
    $(this).parents(".footer_join").addClass("focus");
})


$(".footer_join_send").click(function(){
    $(this).parents(".footer_join").addClass("send");
})

$(".init_pic").click(function(){
    $(this).fadeOut(800);
    $(".init").removeClass("active");
    $("body").removeClass("noscroll");
})

$(".product_intro_change_title").click(function(){
    $(this).parents(".product_intro_change").toggleClass("active");
    $(this).parents(".product_intro_change").find(".product_intro_change_list").slideToggle(300);
})

$(".product_intro_change li").click(function(){
    $(this).addClass("active").siblings("li").removeClass("active");
    $(this).parents(".product_intro_change_list").slideUp(300);
})

function intro(){
    if($(window).width()>=1100) {
        let likeTop = $(".product_like").offset().top;
        let windowHeight = $(window).height();
        let toggleTop = likeTop - windowHeight - 10;
        let introHeight = $(".product_intro").height();
        let mainHeight = $(".product_main").height();
        let newTop = mainHeight - introHeight;
        // let mainHeight = $(".product_main").height();
        // let introHeight = $(".product_intro").height() + 100;
        // let scHeight = $(".sc").height();
        // let newTop = scHeight + mainHeight - introHeight + 20;
        if($(window).scrollTop() > toggleTop) {
            $(".product_intro").addClass("scroll");
            // $(".product_intro").css("top",newTop);
        }else {
            $(".product_intro").removeClass("scroll");
            // $(".product_intro").css("top","150px");
        }
    }
}
intro();

$(".product_main_slider .carousel-inner").click(function(){
    if($(window).width() > 991) {
        $(this).parents(".product_main_slider").toggleClass("active");
        $(".product_info").fadeToggle(300);
        $(".product_like.product-list").fadeToggle(300);
        if($(this).parents(".product_main_slider").hasClass("active")) {
            $(".product_intro").fadeOut(300);
        }else {
            $(".product_intro").delay(350).fadeIn(300);
        }
    }
})

$(".product_main_close").click(function(){
    $(".product_main_slider").removeClass("active");
    $(".product_info").fadeIn(300);
    $(".product_like.product-list").fadeIn(300);
    $(".product_intro").delay(350).fadeIn(300);
})

$(window).on("resize scroll",function(){
    if($(window).width() <= 991) {
        $(".product_main_slider").removeClass("active");
        $(".product_info").fadeIn(300);
        $(".product_like.product-list").fadeIn(300);
        $(".product_intro").fadeIn(300);
    }
})

$(".product_info_item").click(function(){
    if($(this).find(".product_spec_icon").hasClass("active")) {
        $(this).find(".product_spec_icon").removeClass("active");
        $(this).parents(".product_info_li").find(".product_info_hide").slideUp(300);
    }else {
        $(this).find(".product_spec_icon").addClass("active");
        $(this).parents(".product_info_li").find(".product_info_hide").slideDown(300);
        $(this).parents(".product_info_li").siblings(".product_info_li").find(".product_spec_icon").removeClass("active");
        $(this).parents(".product_info_li").siblings(".product_info_li").find(".product_info_hide").slideUp(300);
    }
    intro();
})

$(".product_spec_item").click(function(){
    $(this).parents(".product_spec_li").find(".product_spec_list").slideToggle(300);
    $(this).find(".product_spec_icon").toggleClass("active");
    $(this).parents(".product_spec_li").siblings(".product_spec_li").find(".product_spec_list").slideUp(300);
    $(this).parents(".product_spec_li").siblings(".product_spec_li").find(".product_spec_icon").removeClass("active");
    let specWidth, specWidthMax=0;
    $(this).parents(".product_spec_li").find(".product_spec_list_item>span").each(function(){
        specWidth = $(this).width();
        if(specWidth > specWidthMax) {
            specWidthMax = specWidth;
        }
        // console.log("specWidthMax=" + specWidthMax + ",specWidth=" + specWidth);
    })
    $(this).parents(".product_spec_li").find(".product_spec_list_item>span").each(function(){
        $(this).width(specWidthMax + 1);
    })
})
$(".product_spec_list_item").click(function(){
    if($(window).width() < 768 && $(this).parents(".product_spec_list").hasClass("frame")) {
        if(!$(this).hasClass("active")) {
            $(this).addClass("active");
        }else {
            $(this).removeClass("active");
            let spec = $(this).find("span").text();
            $(this).parents(".product_spec_list").slideUp(300);
            $(this).parents(".product_spec_li").find(".product_spec_icon").removeClass("active");
            $(this).parents(".product_spec_li").find(".product_spec_chosen").text(spec);
        }    
    }else {
        let price = $(this).data("price");
        let spec = $(this).find("span").text();
        $(this).parents(".product_spec_list").slideUp(300);
        $(this).parents(".product_spec_li").find(".product_spec_icon").removeClass("active");
        $(".product_change_price").text(price);
        $(this).parents(".product_spec_li").find(".product_spec_chosen").text(spec);
    }
})


$(document).click(function (event) {
    // join
    var footerForm = $(".footer_join");
    if (!footerForm.is(event.target) && footerForm.has(event.target).length === 0) {
        $(".footer_join").removeClass("focus");
        $(".footer_join").removeClass("send");
    }

    // change
    var change = $(".product_intro_change");
    if (!change.is(event.target) && change.has(event.target).length === 0) {
        $(".product_intro_change").removeClass("active");
        $(".product_intro_change_list").slideUp(300);
    }
   
});

$(window).on("resize scroll",function(){
    intro();
    if($(window).scrollTop()>0) {
        $(".sc_list").fadeOut(300);
    }
})
