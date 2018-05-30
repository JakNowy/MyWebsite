
function listOn() {
    $('ul',this).slideDown(300)
};

function listOff() {
    $('ul',this).css('display','none')
}

$('ol>li').hover(listOn,listOff);



$('a[href="#container1"]').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
});

$('a[href="#container2"]').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
});
$('a[href="#container3"]').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
});
$('a[href="#container4"]').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
});

$('div[id="back"]').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: 0
    }, 500, 'linear');
});

$('#main').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: 0
    }, 500, 'linear');

});

var nr = 0;
function geoImage() {
    alert('hi');
    if (nr < 1) {nr++}
    else{nr = 0};
    $('#gik').setAttribute('src','gik'+nr);
    setTimeout(geoImage(),300)
}