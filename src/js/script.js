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