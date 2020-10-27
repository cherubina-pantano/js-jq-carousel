// SLIDER

$(document).ready( function () {

   // Al click del maouse passo all'img successiva
  $('.next').click( function () {
    nextPrevImg('next');
  });

  // Al click del maouse torno all'img precedente
  $('.prev').click( function () {
    nextPrevImg('prev');
  });

});


/*
 FUNZIONI:
 per scorrere le immagini avanti e indietro
*/

function nextPrevImg(direction) {
  var imgActive = $('.images img.active');
  var circleActive = $('.nav i.active');
  var imgFirst = $('.images img.first');
  var circleFirst = $('.nav i.first');
  var imgLast = $('.images img.last');
  var circleLast = $('.nav i.last');

  // Reset per togliere la classe 'active' ai precedenti
  imgActive.removeClass('active');
  circleActive.removeClass('active');

  // Direzione --> NEXT
  if(direction === 'next') {
    if(imgActive.hasClass('last') ) {
      imgFirst.addClass('active');
      circleFirst.addClass('active');
    }
    else {
      imgActive.next('img').addClass('active');
      circleActive.next('i').addClass('active');
    }
  }

  // Direzione <-- PREV
  else if (direction === 'prev') {
    if(imgActive.hasClass('first') ) {
      imgLast.addClass('active');
      circleLast.addClass('active');
    }
    else {
      imgActive.prev('img').addClass('active');
      circleActive.prev('i').addClass('active');
    }

  }
}
