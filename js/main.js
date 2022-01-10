$(document).ready(function(){
   
    //변수 ht에 브라우저의 높이값을 저장
    let ht = $(window).height();
    //브라우저의 높이값을 header의 높이값으로 지정
    $("header").height(ht);
    $("header .main_slider").height(ht);
   
    //header slick-slider 구동
    $("header .main_slider").slick({
        autoplay:true, //자동실행
        swipe:true, //마우스나 손으로 좌우이동가능
        pauseOnHover:false, //마우스호버시 계속실행
        autoplaySpeed:5000, //다음장까지 넘어가는 속도
        speed:1200, //애니메이션 속도
        dots:true, //페이지버튼
        fade:false //페이드
        
    });


    $('.visual-slider').slick({
        swipe:false,
        autoplay:true,
        pauseOnHover:false,
        slidesToShow:4,
        slidesToScroll:1,
        autoplaySpeed:7000,
        speed:1000,
        vertical:false,
        fade:false,
        arrows:true,
        dots:false

    });


    $(".visual1").on("click",function(){

        let videolink = "https://www.youtube.com/embed/6U7JkTMVhVA";

        $('.popup').css({"display":"block","opacity":0})
        .stop()
        .animate({"opacity":1},400);

        $(".popup .popup_inner .modal").find("iframe").attr("src","")
        $(".popup .popup_inner .modal").find("iframe").attr("src",videolink);

        $("body").css({"overflow":"hidden"});

    });
    $(".visual2").on("click",function(){

        let videolink = "https://www.youtube.com/embed/l9TiXaTEw40";

        $('.popup').css({"display":"block","opacity":0})
        .stop()
        .animate({"opacity":1},400);

        $(".popup .popup_inner .modal").find("iframe").attr("src","")
        $(".popup .popup_inner .modal").find("iframe").attr("src",videolink);

        $("body").css({"overflow":"hidden"});

    });
    $(".visual3").on("click",function(){

        let videolink = "https://www.youtube.com/embed/-7JxuVa3ync";

        $('.popup').css({"display":"block","opacity":0})
        .stop()
        .animate({"opacity":1},400);

        $(".popup .popup_inner .modal").find("iframe").attr("src","")
        $(".popup .popup_inner .modal").find("iframe").attr("src",videolink);

        $("body").css({"overflow":"hidden"});

    });
    $(".visual4").on("click",function(){

        let videolink = "https://www.youtube.com/embed/47ceXAEr2Oo";

        $('.popup').css({"display":"block","opacity":0})
        .stop()
        .animate({"opacity":1},400);

        $(".popup .popup_inner .modal").find("iframe").attr("src","")
        $(".popup .popup_inner .modal").find("iframe").attr("src",videolink);

        $("body").css({"overflow":"hidden"});

    });

    $(".btnClose").on("click",function(e){
        e.preventDefault();
        $('.popup').stop()
                  .animate({'opacity':0},400,function(){
                      $('.popup').css({'display':'none'});
                  });
        $('.popup .popup_inner .modal').find('iframe').attr('src','');
        $('body').css({'overflow-x':'hidden', 'overflow-y':'auto'});          
    });


    let menu = $("#section3 .section3-inner .product-list li");
    let shop = [

                "https://www.spongebobshop.com/collections/all-products/products/spongebob-squarepants-evil-tv-premium-tote-bag",
                "https://www.spongebobshop.com/collections/all-products/products/spongebob-squarepants-gary-snapperchat-meme-white-mug",
                "https://www.spongebobshop.com/collections/all-products/products/spongebob-squarepants-big-face-washable-face-masks-pack-of-3",
                "https://www.spongebobshop.com/collections/all-products/products/spongebob-squarepants-big-face-tie-dye-short-sleeve-t-shirt"
                
                
    ];

    menu.on("click",function(){
        let tg = $(this);
        let i = tg.index();
        let linkURL = shop[i];

        let newWindow = window.open("about:blank");
        newWindow.location.href = linkURL;
    });
});

