(function ($) {

  $(document).ready(function () {
    // TODO SVG Sprite init in IE/SAFARI
    svg4everybody();
  });

  new Swiper('.welcome--wrap .swiper-container', {
    speed: 1000,
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: '.welcome--wrap .swiper-next_btn',
      prevEl: '.welcome--wrap .swiper-prev_btn',
    },
  });

  new Swiper('.forsale--wrap .swiper-container', {
    speed: 1000,
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: '.forsale--wrap .swiper-next_btn',
      prevEl: '.forsale--wrap .swiper-prev_btn',
    },
  });

  // TODO Tabs
  function tabsGlobal(on, target, tabsWrap, tabActive, boxWrap, boxItem, fade = 300) {
    $(target).on(on, function (event) {
      event.preventDefault();
      if ($(this).hasClass(tabActive)) {
        return false
      }
      $(tabsWrap).find('.' + tabActive).removeClass(tabActive);
      $(this).addClass(tabActive);
      $(boxItem).hide();
      $(boxWrap).find('.' + $(this).attr('name')).stop(true).fadeIn(fade);
    });
  }
  // TODO Tabs init
  tabsGlobal('click', '.child_btn', '.top-product__btn', 'adult_btn', '.top-product__content', '.top-product__box');

  // TODO Select global init
  $('.select-gl__value').on('click', function (event) {
    event.preventDefault();
    if ($(this).hasClass('select__active')) {
      $(this).toggleClass('select__active').next().fadeToggle(100);
    } else {
      $('.select-gl__value').removeClass('select__active').next().fadeOut(100);
      $(this).toggleClass('select__active').next().fadeToggle(100);
    }
  });

  $('.select-gl__item').on('click', function () {
    $(this).parents('.select-gl').find('.selected').removeClass('selected');
    $(this).addClass('selected');
    $(this).parents('.select-gl').find('.select-gl__value span').text($(this).text());
  });

  // TODO Select with icon items
  $('.select-fix-js .select-gl__item').on('click', function () {
    let icon = $(this).find('.icons-js').clone();
    $(this).parents('.select-gl__this').children('.select-gl__value').find('.icons-js').remove();
    $(this).parents('.select-gl__this').children('.select-gl__value').prepend(icon);
  });

  // TODO Wrapper click close select
  $('.wrapper').on('click', function () {
    $('.select-gl__value').removeClass('select__active').next().fadeOut(100);
  });

  $('.select-gl__this').on('click', function (event) {
    event.stopPropagation();
  });

  // TODO Counter
  $('.counter__plus').on('click', function (event) {
    event.preventDefault();
    let num = parseInt($(this).prev().val());
    num++;
    if (num > 200) {
      num = 200;
    } else {
      $(this).next().val(num);
    }
    $(this).prev().val(num);
    $(this).parents('.counter').find('.counter__minus').removeClass('counter__disabled');
  });
  $('.counter__minus').on('click', function (event) {
    event.preventDefault();
    let num = parseInt($(this).next().val());
    num--;
    if (num !== 0) {
      $(this).next().val(num);
    } else {
      num = 1;
    }
    if (num == 1) {
      $(this).addClass('counter__disabled');
    }
  });
  $('.counter input').on('keyup', function (event) {
    let num = $(this).val();
    if (parseInt($(this).val()) > 9999) {
      $(this).removeAttr('type');
    } else {
      $(this).attr('type', 'number');
    }
    if (parseInt($(this).val()) <= 0) {
      $(this).val(num.substr(1))
    }
    if (event.keyCode === 69 || event.keyCode === 187 || event.keyCode === 107 || event.keyCode === 109 || event.keyCode === 189 || event.keyCode === 190 || event.keyCode === 188 || event.keyCode === 110) {
      $(this).val(parseInt(num))
    }
  }).on('focusout', function () {
    if ($(this).val() === '') {
      $(this).val(1)
    }
  });

  // TODO Copyright auto update
  function copyrightUpdate(el) {
    let d = new Date(), copyright = $(el);
    copyright.text(`?? ${d.getFullYear()}. ` + copyright.attr('data-lang'));
  }
  copyrightUpdate('.copyright')

})(jQuery);