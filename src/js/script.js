// Login Pop-Up
$(document).ready(function() {
  var loginPopup = $("#loginPopup");
  var loginBtn = $("#loginBtn");
  var closeBtn = $(".login-popup .close-btn");

  function fadeIn(element) {
    element.fadeTo(300, 1);
    element.css("display", "flex");
  }

  function fadeOut(element) {
    element.fadeTo(300, 0, function() {
      element.css("display", "none");
    });
  }

  function showLoginPopup() {
    fadeIn(loginPopup);
  }

  function hideLoginPopup() {
    fadeOut(loginPopup);
  }

  loginBtn.on("click", showLoginPopup);
  closeBtn.on("click", hideLoginPopup);

  $(window).on("click", function(event) {
    if (event.target === loginPopup[0]) {
      hideLoginPopup();
    }
  });
});

// Show Password
function togglePasswordVisibility() {
  var passwordInput = $("#passwordInput");
  var passwordToggle = $("#passwordToggle");

  if (passwordInput.prop("type") === "password") {
    passwordInput.prop("type", "text");
    passwordToggle.removeClass("fa-eye").addClass("fa-eye-slash");
  } else {
    passwordInput.prop("type", "password");
    passwordToggle.removeClass("fa-eye-slash").addClass("fa-eye");
  }
}

// Back to Top Button
$(document).ready(function() {
  var $mybutton = $("#btn-back-to-top");

  $(window).scroll(function() {
    scrollFunction();
  });

  function scrollFunction() {
    if ($(this).scrollTop() > 20) {
      $mybutton.fadeIn();
    } else {
      $mybutton.fadeOut();
    }
  }

  $mybutton.click(function() {
    $("body,html").animate({ scrollTop: 0 }, 0);
  });
});

// Parallax
$(document).ready(function() {
  function parallaxScroll() {
    var parallaxElements = $('.parallax');
  
    parallaxElements.each(function() {
      var scrollPosition = $(window).scrollTop();
      var parallaxOffset = scrollPosition * 0.3; 
    
      $(this).find('.bg-image').css('transform', 'translateY(' + parallaxOffset + 'px)');
    });
  }

  $(window).scroll(function() {
    parallaxScroll();
  });
});

// Efek Fade-In
$(document).ready(function() {
  var fadeIn = $(".scroll-animation, .fade-in-down");

  function fadeInElements() {
    fadeIn.each(function() {
      var scrollPosition = $(window).scrollTop();
      var elementOffsetTop = $(this).offset().top;
      var windowHeight = $(window).innerHeight();

      if (scrollPosition > elementOffsetTop - windowHeight && !$(this).hasClass("fade-in")) {
        $(this).addClass("fade-in");
      }
    });
  }

  fadeInElements();
  $(window).scroll(function() {
    fadeInElements();
  });
});