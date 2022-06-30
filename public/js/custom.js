
// Dropdown Menu
window.dropdown = function () { // eslint-disable-line no-unused-vars
    return {
      show: false,
      touch: false,
      open: function open() {
        if (this.show == false) {
          this.show = true;
          return false;
        }
      },
      close: function close() {
        this.show = false;
        this.touch = false;
        return;
      },
      touchOpen: function touchOpen() {
        this.touch = true;
        this.open();
      },
      isOpen: function isOpen() {
        return this.show === true
      },
      isTouch: function isTouch() {
        return this.touch === true
      },
    }
  }
  
// popup close 
$(document).ready(function(){
  $(".cancel-icon").click(function(){
    $(".hilfe-fur-fixed").remove();
  });
});
// scroll hide popup
var p = $( ".hilfe-fur-sec" ).first();
var position = p.position();
$(window).scroll(function() {
  var scrollDistance = $(window).scrollTop();
  if( scrollDistance >= position.top - 200 ){
    $(".hilfe-fur-fixed").hide();
  } else{
    $(".hilfe-fur-fixed").show();
  }
});

// radio btn on click add
$(document).on('keyup','.custom-input', function() {
  $(this).prev().prop('checked', true);
  $('.radio-input').trigger('change');
});
$(document).on('click','.custom-input', function() {
  $(this).prev().prop('checked', true);
  $('.radio-input').trigger('change');
});


// search dropdown
  $(function() {
    $('#search-menu').removeClass('toggled');
  
    $('#search-icon').click(function(e) {
      e.stopPropagation();
      $('#search-menu').toggleClass('toggled');
      $("#popup-search").focus();
    });
    
    $('#search-menu input').click(function(e) {
      e.stopPropagation();
    });
  
    $('#search-menu, body').click(function() {
      $('#search-menu').removeClass('toggled');
    });
  });

// our-recommendations owl carousel
$( document ).ready(function() {
  if($('.our-recommendations-slider').length) {   
  $('.our-recommendations-slider').owlCarousel({
    autoplay: true,
    margin:0,
    dots: true,
    nav: false,
    items: 3,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1023: {
        items: 3,
      }
    }
  }); 
  }
});

// testimonials-slider 
$( document ).ready(function() {
  if($('.testimonials-slider').length) {
  $('.testimonials-slider').owlCarousel({
    autoplay: false,
    margin:0,
    loop:true,
    dots: true,
    nav: true,
    navText : ["<i class='fa-solid fa-arrow-right-long'></i>","<i class='fa-solid fa-arrow-left'></i>"],
    items: 3,
    responsive: {
      0: {
        items: 1,
      },
      992: {
        items: 1,
      }
    }
  });
}
});

// loop-slider
$( document ).ready(function() {
  if($('.loop-slider').length) {
  $('.loop-slider').owlCarousel({
    margin:20,
    loop:true,
    dots: false,
    center: true,
    stagePadding: 180,
    nav: true,
    navText : ["<img src='./images/index/left-arrow.png'>","<img src='./images/index/right-arrow.png'>"],
    items: 1,
    responsive: {
      0: {
        items: 1,
        stagePadding: 40,
        margin:0,
      },
      768: {
        items: 1,
        stagePadding: 100,
        margin:0,
      },
      1024: {
        items: 1
      }
    }
  });
}
});

// 
// post slider
$( document ).ready(function() {
  if($('.post-slider').length) {
  $('.post-slider').owlCarousel({
    autoplay: true,
    margin:30,
    loop:true,
    dots: false,
    nav: false,
    items: 3,
    responsive: {
      0: {
        items: 1,
        stagePadding: 60,
        margin:10,
      },
      768: {
        items: 3,
        margin:20,
      },
      1024: {
        items: 3,
      }
    }
  });
}
});

