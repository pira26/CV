$('.first.circle').circleProgress({
  value: 0.60
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html(parseInt(60 * progress) + '<i>%</i>');
});

$('.second.circle').circleProgress({
  value: 0.55
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html(parseInt(55 * progress) + '<i>%</i>');
});

$('.third.circle').circleProgress({
  value: 0.3
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html(parseInt(30 * progress) + '<i>%</i>');
});

$('.fourth.circle').circleProgress({
  value: 0.25
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html(parseInt(25 * progress) + '<i>%</i>');
});

$('.fifth.circle').circleProgress({
  value: 0.20
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html(parseInt(20 * progress) + '<i>%</i>');
});

$('.sixth.circle').circleProgress({
  value: 0.30
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html(parseInt(30 * progress) + '<i>%</i>');
});

$('.seventh.circle').circleProgress({
  value: 0.95
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html(parseInt(95 * progress) + '<i>%</i>');
});

$('.eight.circle').circleProgress({
  value: 0.60
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html(parseInt(60 * progress) + '<i>%</i>');
});

$('.nineth.circle').circleProgress({
  value: .55
}).on('circle-animation-progress', function(event, progress) {
  $(this).find('strong').html(parseInt(55 * progress) + '<i>%</i>');
});