const slider = tns({
    container: '.portfolio__carousel',
    items: 3,
    slideBy: 'page',
    autoplay: false,
    gutter: 31,
    controls: false,
    navPosition: 'bottom'
  });

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
    autoHeight: true,
    gutter: 50,
    navPosition: 'bottom'
  });

document.querySelector(".dot_prev2").addEventListener('click', function () {
  slider2.goTo('prev');
});
document.querySelector(".dot_next2").addEventListener('click', function () {
  slider2.goTo('next');
});