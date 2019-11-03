function myFunction(x) {
    x.classList.toggle("change");
}
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 3,
            nav: false
        },
        1000: {
            items: 4,
            nav: true,
            loop: false
        }
    }
})



$(document).ready(function () {
    $('.contain').click(function () {
        $(".toogle-menu").toggle(3000);
    })
    $("#pages").click(function () {
        $(".home-menu").toggle(3000);
    })
})