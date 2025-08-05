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
/*  */
const bestItems = new Swiper ('#best_items',{
    loop:true,
    direction:'horizontal',
    scrollbar: {
        el: '.scrollbar1',
        draggable: true,
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
    breakpoints:{
        1250:{
            slidesPerView:5,
            spaceBetween:45,
        },
    }
})