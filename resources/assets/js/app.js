// *************************************************************************
// *************************************************************************
// *************************************************************************

require('./bootstrap');



// #ACCODION
// =========================================================================

$('.accordion__content').hide();
$('.accordion__content').first().show();
$('.accordion__panel').first().addClass('is--open');

$('.accordion__title').click(function() {
    $('.accordion__panel').removeClass('is--open');
    $(this).parent().addClass('is--open');
    $('.accordion__content').slideUp(200);
    $(this).next('.accordion__content').slideDown(200);
});



// #TABS
// =========================================================================



//from home page

var hash = location.hash;
href = hash.substr(hash.indexOf('#'));
href = href.substr(1, href.length);

var tabTitle = $('li[data-tab="' + href + '"]');
var tabContent = $('.tabs__content' + '[data-tab="' + href + '"]');

$('li[data-tab]').removeClass('is--active');
tabTitle.addClass('is--active');
$('.tabs__content').removeClass('is--active');
tabContent.addClass('is--active');



//click nav link

$('.dropdown-menu li a').click(function(){
    hash = $(this).attr('href');
    href = hash.substr(hash.indexOf('#'));
    href = href.substr(1, href.length);

    var tabTitle = $('li[data-tab="' + href + '"]');
    var tabContent = $('.tabs__content' + '[data-tab="' + href + '"]');

    $('li[data-tab]').removeClass('is--active');
    tabTitle.addClass('is--active');
    $('.tabs__content').removeClass('is--active');
    tabContent.addClass('is--active');
});


$('li[data-tab], .tabs__content').first().addClass('is--active');
$('.tabs__content').first().addClass('is--active');

$('li[data-tab]').click(function() {
    var thisTab = $(this).attr('data-tab');
    var tab = $('.tabs__content' + '[data-tab="' + thisTab + '"]');

    $('li[data-tab]').removeClass('is--active');
    $(this).addClass('is--active');
    $('.tabs__content').removeClass('is--active');
    tab.addClass('is--active');
});


// #ALERT NOTIFY
// =========================================================================

$('.alert--notify').click(function() {
    $(this).fadeOut(200);
});



// #OFF CANVAS
// =========================================================================

var offCanvasTrigger = document.querySelector('.off-canvas__trigger');
var offCanvas = document.querySelector('.off-canvas');

if (offCanvasTrigger) {
    offCanvasTrigger.addEventListener('click', function () {
        offCanvas.classList.add('is--open');
        overlay.classList.add('is--active');
    });
}



// #MODAL
// =========================================================================

var modalTrigger = document.querySelector('.modal__trigger');
var modal = document.querySelector('.modal');

if (modalTrigger) {
    modalTrigger.addEventListener('click', function () {
        modal.classList.add('is--open');
        overlay.classList.add('is--active');
    });
}



// #KEY CONTROL
// =========================================================================

$(document).keyup(function(e) {
    if (e.keyCode === 27) {
        overlay.classList.remove('is--active');
    }
});

if (offCanvas) {

    $(document).keyup(function(e) {
        if (e.keyCode === 27) {
            offCanvas.classList.remove('is--open');
        }
    });

}

if (modal) {

    $(document).keyup(function(e) {
        if (e.keyCode === 27) {
            modal.classList.remove('is--open');
        }
    });

}



// #OVERLAY
// =========================================================================

var overlay = document.querySelector('.overlay');

if (overlay) {
    overlay.addEventListener('click', function () {
        this.classList.remove('is--active');
    });
}

if (overlay) {
    overlay.addEventListener('click', function () {
        offCanvas.classList.remove('is--open');
    });
}

if (overlay) {
    overlay.addEventListener('click', function () {
        modal.classList.remove('is--open');
    });
}



// #DOCS
// =========================================================================



// //email form
var form = $('.form');

$(form).submit(function(e) {
  e.preventDefault();

  var formData = new FormData($(this)[0]);

  //if files => formData.append('file', $('input[type=file]')[0].files[0]);

  $.ajax({
    type: 'post',
    url: $(this).attr('action'),
    data: formData,
    processData: false,
    contentType: false
  })
  .done(function (response) {
    $('input').val('');
    $('textarea').val('');
    $('<div class="alert is--success">Your Message Was Sent! We\'ll be in touch.</div>').insertAfter(form);
    
    console.log('success' + response);
  })
  .fail(function (data) {
    $('input').val('');
    $('textarea').val('');
    $('<div class="alert is--error">Oh no! Something went wrong, try again.</div>').insertAfter(form);
    
    console.log('fail' + data);
  })

});


// #SLIDER
// =========================================================================

$('.slider').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable:false,
});

$('.slick-dots button').empty();


// //Date Checker
$(function() {
    var today = new Date().getDay();
    var now = new Date().getHours();
    var weAre = $('.our-hours');

    if (today < 6 ) {

        if ((now >= 9) && (now < 18)) {
            weAre.removeClass('closed');
            weAre.addClass('open');
        } else {
            weAre.removeClass('open');
            weAre.addClass('closed');
        }
    } else if (today == 6) {

        if ((now >= 9) && (now < 14)) {
            weAre.removeClass('closed');
            weAre.addClass('open');
        } else {
            weAre.removeClass('open');
            weAre.addClass('closed');
        }
    } else {
        weAre.removeClass('open');
        weAre.addClass('closed');
    }
});


// //Google Map

var map = new GMaps({
    el:'#map',
    lat:42.095621,
    lng: -83.107282
});

map.addMarker({
    lat:42.095621,
    lng: -83.107282,
    icon: "/assets/img/icon-location.png"
});
