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
        // $(this).toggleClass("active");
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
    $(this).toggleClass("active");
    $(".menu").toggleClass("active");
    // if($(window).width()>=768) {
    //     $(".header_bag").toggleClass("active");
    // }else {
    //     $(".header").toggleClass("active");
    // }
})

$(".sc").click(function(){
    // $(".sc_list").toggleClass("active");
    $(".sc_list").slideToggle(300);
})
$(".sc_list>li").click(function(){
    let abbr = $(this).data("abbr");
    $(".ca").text(abbr);
    $(".sc_list").slideUp(300);
    // $(".sc_list").removeClass("active");
})

$(".product-list_save").click(function(){
    $(this).toggleClass("active");
})

$(".collect").click(function(){
    if($(this).hasClass("active")) {
        $(this).removeClass("active");
        // $(this).find(".collect_text").show();
    }else {
        $(this).addClass("active");
        // $(this).find(".collect_text").delay(2000).fadeOut(500);
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

$(".product_intro_change").click(function(){
    $(this).toggleClass("active");
    $(this).find(".product_intro_change_list").slideToggle(300);
})

$(".product_spec_item").click(function(){
    $(this).parents(".product_spec_li").find(".product_spec_list").slideToggle(300);
    $(this).find(".product_spec_icon").toggleClass("active");
})
$(".product_spec_list_item").click(function(){
    let price = $(this).data("price");
    let spec = $(this).text();
    $(this).parents(".product_spec_list").slideUp(300);
    $(this).parents(".product_spec_li").find(".product_spec_icon").removeClass("active");
    $(".product_change_price").text(price);
    $(this).parents(".product_spec_li").find(".product_spec_chosen").text(spec);
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
    let toggleHeight = 300;
    if($(window).scrollTop()>toggleHeight) {
        $(".product_detail_slider_pagi").fadeOut();
    }else {
        $(".product_detail_slider_pagi").fadeIn();
    }
})
