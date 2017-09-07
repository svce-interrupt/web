window.sr = ScrollReveal();

sr.reveal('.fromLeft',{
    duration: 1300,
    origin:'left',
    easing:'cubic-bezier(1,-0.03, 0.15, 1.23)',
    distance: '100px'
});

sr.reveal('.fromRight',{
    duration: 1300,
    origin:'right',
    easing:'cubic-bezier(1,-0.03, 0.15, 1.23)',
    distance: '100px'
});

sr.reveal('.item',{
    duration: 1300,
    easing:'cubic-bezier(1,-0.03, 0.15, 1.23)',
    origin: 'bottom',
    scale: 0.001
});

sr.reveal('.logo',{
    duration: 1000,
    origin:'bottom',
    scale:0.0001,
    easing:'cubic-bezier(1,-0.03, 0, 2.31)',
    delay:500
});

$(document).ready(function(){
  $('.modal').modal({
    ready: function () {
        $('ul.tabs').tabs();
    }
  });

	$(".button-collapse").sideNav({
      closeOnClick: true,
      draggable: true,
  });

  $(".logo").hover3d({
    selector: ".logo__card",
		shine: true,
		sensitivity: 20,
  });

  $('.btn-floating').click(function(e) {
    var link = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(link).offset().top
    }, 900);
    e.preventDefault();
  });

  $('.nav-scroll').click(function(e) {
    var link = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(link).offset().top
    }, 900);
    e.preventDefault();
  });

  typer('.typed-text')
    .line()
    .pause(1000)
    .continue('September 25th.', 200)
    .pause(3000)
    .back(15, 100)
    .continue('Save the Date.', 200)
    .pause(1000)
    .back(15, 100)
    .continue('September 25th.', 200)
    .pause(1000)
    .end();
  $("#reg-form").validate({
    rules: {
      fname: {
          required: true,
          minlength: 2
      },
      lname: {
          required: true,
          minlength: 2
      },
      mobile_num: {
          required: true,
          minlength: 10,
          maxlength: 10
      },
      col:{
          required:true,
          minlength:4,
          maxlength:15
      },
      email: {
          required: true,
          email:true
      },
      pass: {
          required: true,
          minlength: 5
      },
      confirm_pass: {
          required: true,
          minlength: 5,
          equalTo: "#pass"
      }
    },
//For custom messages
    messages: {
        fname: {
            required: "Please enter your first name.",
            minlength: "You sure you're named with one letter?"
        },
        lname: {
            required: "Please enter your last name.",
            minlength: "You sure you're named with one letter?"
        },
        email: {
            required: "Please enter your email address.",
            email: "Please enter a valid email address."
        },
        pass: {
            required: "Please enter a password.",
            minlength: "Password must be atleast 5 characters."
        },
        confirm_pass: {
            required: "Please confirm your password.",
            minlength: "Password must be atleast 5 characters.",
            equalTo: "Password does not match."
        }
    },
    errorPlacement: function(error, element) {
      error.appendTo( element.next() );
  }

  });

});
