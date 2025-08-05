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
const bestItems = new Swiper ('#best_items',{
    loop:true,
    direction:'horizontal',
    scrollbar: {
        el: '.scrollbar1',
        draggable: true,
    },
    navigation:{
        nextEl:'#best_items~.swiper-button-next',
        prevEl:'#best_items~.swiper-button-prev',
    },
    breakpoints:{
        1250:{
            slidesPerView:5,
            spaceBetween:45,
        },
    }
});
const newItems = new Swiper ('#new_items',{
    loop:true,
    direction:'horizontal',
    scrollbar: {
        el: '.scrollbar2',
        draggable: true,
    },
    navigation:{
        nextEl:'#new_items~.swiper-button-next',
        prevEl:'#new_items~.swiper-button-prev',
    },
    breakpoints:{
        1250:{
            slidesPerView:5,
            spaceBetween:45,
        },
    }
});
const videoAll = new Swiper ('#video_all',{
    loop:true,
    direction:'horizontal',
    scrollbar: {
        el: '.scrollbar3',
        draggable: true,
    },
    navigation:{
        nextEl:'#video_all~.swiper-button-next',
        prevEl:'#video_all~.swiper-button-prev',
    },
});
const bnr = new Swiper ('#ad_bnr_swiper',{
    loop:true,
    direction:'horizontal',
})