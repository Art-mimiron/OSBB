const slider = tns({
    container: '.portfolio__carousel',
    items: 3,
    slideBy: 'page',
    autoplay: false,
    gutter: 31,
    controls: false,
    navPosition: 'bottom',
    responsive: {
      0: {
        disable: true
      },
      768: {
        disable: false
      }
    }});

document.querySelector(".dot_prev").addEventListener('click', function () {
  slider.goTo('prev');
});
document.querySelector(".dot_next").addEventListener('click', function () {
  slider.goTo('next');
});

const slider2 = tns({
    container: '.feed__carousel',
    items: 2,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    gutter: 55,
    edgePadding: -2,
    autoHeight: true,
    navPosition: 'bottom',
    responsive: {
      0: {
        disable: true
      },
      1024: {
        disable: false
      },
      1441: {
        gutter: 0
      }

    }
  });

  document.querySelector(".dot_prev2").addEventListener('click', function () {
    slider2.goTo('prev');
  });
  document.querySelector(".dot_next2").addEventListener('click', function () {
    slider2.goTo('next');
  });

const sliderxs = tns({
    container: '.feed__carousel_xs',
    items: 1,
    slideBy: 'page',
    mouseDrag: true,
    autoplay: false,
    controls: false,
    center: true,
    gutter: 100,
    autoHeight: true,
    navPosition: 'bottom',
    responsive: {
      1024: {
        disable: true
      }
    }
  });

document.querySelector(".dot_prev2").addEventListener('click', function () {
  sliderxs.goTo('prev');
});
document.querySelector(".dot_next2").addEventListener('click', function () {
  sliderxs.goTo('next');
});

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu__list'),
  menuItem = document.querySelectorAll('.menu__list__item'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu__list_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('menu__list_active');
      })
  })
})