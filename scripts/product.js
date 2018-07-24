$(document).ready(function() {
    // quick view layover
    $('ul.product-list li').hover(function (){
        $(this).find('.detail-layover').slideDown();
    }, function() {
        $(this).find('.detail-layover').slideUp();
    });

    // collapse filter
    $('.filters h4').click(function() {
        $(this).find('i').toggleClass('fa-minus fa-plus');
        $(this).siblings().slideToggle();
    });

    // toggle filter options
    $('.list li').click(function(){
        $(this).find('i').toggleClass('fa-check-square fa-square');
    });

    // product description
    $('.quick-view').click(function() {
        var point = $(this).parents('.detail-layover');
        var populate = $('.product-desc');
        populate.find('img').attr('src', point.siblings('img').attr('src'));
        populate.find('h3').text(point.find('.prod-name span:first-child').text());
        populate.find('p.origin').text(point.find('.prod-origin').text());
        $('.overlay').addClass('show');
    });
    $('.product-desc .close').click(function() {
        $('.overlay').removeClass('show');
    });

    // update product quantity
    // add
    $('.qty-add').click(function() {
        var quantity = parseInt($('span.inner').text());
        quantity++;
        $('span.inner').text(quantity > 9 ? quantity : '0' + quantity);
    });
    // subtract
    $('.qty-sub').click(function() {
        var quantity = parseInt($('span.inner').text());
        if (quantity > 0) {
            quantity--;
            $('span.inner').text(quantity > 10 ? quantity : '0' + quantity);
        }
    });
});