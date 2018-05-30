function listOn() {
    $('ul',this).slideDown(300)
};

function listOff() {
    $('ul',this).css('display','none')
}

$('ol>li').hover(listOn,listOff);


var scrollTime = 300;

$('a[href="#container1"]').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, scrollTime, 'linear');
});

$('a[href="#container2"]').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, scrollTime, 'linear');
});
$('a[href="#container3"]').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, scrollTime, 'linear');
});
$('a[href="#container4"]').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, scrollTime, 'linear');
});

$('div[id="back"]').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: 0
    }, scrollTime, 'linear');
});

$('#main').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: 0
    }, scrollTime, 'linear');

});

var nr = 0;
function geoImage() {
    alert('hi');
    if (nr < 1) {nr++}
    else{nr = 0};
    $('#gik').setAttribute('src','gik'+nr);
    setTimeout(geoImage(),300)
}