if ($(window).width() > 992) {

    $(window).scroll(function(){

       if ($(this).scrollTop() > 400) {

          $('#navbar-top').addClass("fixed-1");
          // add padding top to show content behind navbar
          $('body').css($('#navbar-top').outerHeight());
        }
        else{
          $('#navbar-top').removeClass("fixed-1");
           // remove padding top from body
        }

    });
  } // if end

if($(window).width() < 1133 && $(window).width() > 654) {
  console.log("hi")
  $("nav div").removeClass("d-inline")
  $("nav img").addClass("d-block , mx-auto")
}

if($(window).width() < 654) {
  console.log("hi")
  $("nav div").removeClass("d-inline")
  $("nav div").addClass("d-none")
  $("nav i").style

}

  (function(){
    let typed = new Typed('span.txt-rotate', {
      strings: ["I'm a Web Developer", "I'm a Front End Developer", "I'm a Graphic Designer"],
      typeSpeed: 100,
      backSpeed: 100,
      fadeOut: true,
      smartBackspace: true,
      loop: true
      });
    })();