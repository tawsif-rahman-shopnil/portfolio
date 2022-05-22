 // smooth scroll
    $("a").on("click", function(event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $("html, body").animate({

                scrollTop: $(hash).offset().top - 50

            }, 850);

        }

    });
    document.addEventListener('DOMContentLoaded',function(event){
        // array with texts to type in typewriter
        var dataText = [ "Web Development", "Wordpress", "UI/UX Design", "Graphics Design"];
        
        // type one text in the typwriter
        // keeps calling itself until the text is finished
        function typeWriter(text, i, fnCallback) {
          // check if text isn't finished yet
          if (i < (text.length)) {
            // add next character to h1
           document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
      
            // wait for a while and call this function again for next character
            setTimeout(function() {
              typeWriter(text, i + 1, fnCallback)
            }, 250);
          }
          // text finished, call callback if there is a callback function
          else if (typeof fnCallback == 'function') {
            // call callback after timeout
            setTimeout(fnCallback, 1);
          }
        }
        // start a typewriter animation for a text in the dataText array
         function StartTextAnimation(i) {
           if (typeof dataText[i] == 'undefined'){
              setTimeout(function() {
                StartTextAnimation(0);
              }, 20000);
           }
           // check if dataText[i] exists
          if (i < dataText[i].length) {
            // text exists! start typewriter animation
           typeWriter(dataText[i], 0, function(){
             // after callback (and whole text has been animated), start next text
             StartTextAnimation(i + 1);
           });
          }
        }
        // start the text animation
        StartTextAnimation(0);
      });
    // hide navbar on mobile after click
    $('.navbar-nav a').on('click', function() {
        $('.navbar-collapse').collapse('hide');
    });

    // carousel resume
    $('.owl-carousel').owlCarousel({
        items: 1,
        margin: 10
    });

    // collapse show on resume
    $('.collapse-show').collapse();

    // porfolio filterizr
    $('.filtr-container').imagesLoaded( function() {
        var filterizr = $('.filtr-container').filterizr();
    });

    // portfolio filter
    $('.portfolio-filter-menu li').on('click', function() {
        $('.portfolio-filter-menu li').removeClass('active');
        $(this).addClass('active');
    });

    // portfolio magnific popup
    $('.portfolio').each(function() { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: '.portfolio-popup', // the selector for portfolio item
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });

    // navbar on scroll
    $(window).on("scroll", function() {

        var vScroll = $(this).scrollTop();

        if( vScroll > 100) {
            $(".navbar").addClass("fix");
        }
        else {
            $(".navbar").removeClass("fix");
        }

    });
