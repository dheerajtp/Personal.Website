var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Hi There..')
    .pauseFor(2500)
    .deleteAll()
    .typeString('I am <strong>Dheeraj TP</strong>..,')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Welcome To My Personal Website...!')
    .pauseFor(2500)
    .start();


    $(".carousel").swipe({

        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
      
          if (direction == 'left') $(this).carousel('next');
          if (direction == 'right') $(this).carousel('prev');
      
        },
        allowPageScroll:"vertical"
      
      });