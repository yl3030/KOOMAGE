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