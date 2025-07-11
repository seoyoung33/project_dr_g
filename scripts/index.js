const mainAd = new Swiper ('#main_ad',{
    loop:true,
    direction:'horizontal',
    autoplay:{delay:5000,},
    speed:2000,
    pagination:{
        el:'.swiper-pagination',
        type:'bullets'
    }
});