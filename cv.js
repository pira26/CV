$('.first.circle').circleProgress({
  value: 0.8
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html(parseInt(80 * progress) + '<i>%</i>');
});

$('.second.circle').circleProgress({
  value: 0.55
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html(parseInt(55 * progress) + '<i>%</i>');
});

$('.third.circle').circleProgress({
  value: 0.4
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html(parseInt(40 * progress) + '<i>%</i>');
});

$('.fourth.circle').circleProgress({
  value: 0.2
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html(parseInt(20 * progress) + '<i>%</i>');
});

$('.fifth.circle').circleProgress({
  value: 0.1
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html(parseInt(10 * progress) + '<i>%</i>');
});

$('.sixth.circle').circleProgress({
  value: 0.25
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html(parseInt(25 * progress) + '<i>%</i>');
});

$('.seventh.circle').circleProgress({
  value: 1
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html(parseInt(100 * progress) + '<i>%</i>');
});

$('.eight.circle').circleProgress({
  value: 0.65
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html(parseInt(65 * progress) + '<i>%</i>');
});

$('.nineth.circle').circleProgress({
  value: .55
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html(parseInt(55 * progress) + '<i>%</i>');
});