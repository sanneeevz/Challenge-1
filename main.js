
var bar = new ProgressBar.Line(container, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 14000,
  color: '#FFEA82',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  from: {color: '#FC9303'},
  to: {color: '#7CE319'},
  step: (state, bar) => {
    bar.path.setAttribute('stroke', state.color);
  }
});

bar.set(1);
bar.animate(0.4);  // Number from 0.0 to 1.0


