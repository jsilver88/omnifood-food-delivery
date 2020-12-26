$(document).ready(function () {
  // sticky navigation
  $('.js--section-features').waypoint(
    function (direction) {
      if (direction === 'down') {
        $('nav').addClass('sticky');
      } else {
        $('nav').removeClass('sticky');
      }
    },
    {
      offset: '60px;',
    }
  );

  // Scroll on buttons
  $('.js--scroll-to-plans').click(function () {
    $('html, body').animate(
      { scrollTop: $('.js--section-plans').offset().top },
      100
    );
  });
  $('.js--scroll-to-start').click(function () {
    $('html, body').animate(
      { scrollTop: $('.js--section-features').offset().top },
      100
    );
  });

  //   Animations on scroll
  $('.js--wp-1').waypoint(
    function (direction) {
      $('.js--wp-1').addClass('animate__fadeIn');
    },
    {
      offset: '50%',
    }
  );
  $('.js--wp-2').waypoint(
    function (direction) {
      $('.js--wp-2').addClass('animate__fadeIn');
    },
    {
      offset: '50%',
    }
  );
  $('.js--wp-3').waypoint(
    function (direction) {
      $('.js--wp-3').addClass('animate__fadeInUp');
    },
    {
      offset: '50%',
    }
  );
  $('.js--wp-4').waypoint(
    function (direction) {
      $('.js--wp-4').addClass('animate__fadeIn');
    },
    {
      offset: '50%',
    }
  );

  //   Mobile nav
  $('.js--nav-icon').click(function () {
    let nav = $('.js--main-nav');
    const icon = $('.js--nav-icon i');

    nav.slideToggle(200);

    if (icon.hasClass('ion-navicon-round')) {
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');
    } else {
      icon.addClass('ion-navicon-round');
      icon.removeClass('ion-close-round');
    }
  });
});
