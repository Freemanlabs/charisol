$(function () {
  var e = 400;
  $(window).width() <= 425 && (e = 300, $("#menu-desktop, #profile").addClass("mobile"));
  var o = new Slideout({
    panel: document.getElementById("panel"),
    menu: document.getElementById("menu-desktop"),
    padding: e,
    side: "right",
    tolerance: 70
  });
  if (document.getElementById("profile")) {
    var n = new Slideout({
      panel: document.getElementById("panel"),
      menu: document.getElementById("profile"),
      padding: e,
      side: "left",
      tolerance: 70,
      touch: false
    });
  }
  $(".hamburger").on("click", function () {
    $(this).fadeToggle(), $("#menu-desktop").toggleClass("show"), o.toggle()
  }),

    $(".team .btn-clear-purple").on("click", function () {
      $(".content-cover").fadeIn(), $("#profile").toggleClass("show"), n.toggle()
    }),

    $(document).on("click", ".team-profile-btn", function () {
        $(".content-cover").fadeIn(), $("#profile").toggleClass("show"), n.toggle()
    }),

    $("#menu-desktop .close").on("click", function () {
      $(".hamburger").fadeToggle(), $("#menu-desktop").toggleClass("show"), o.close()
    }),

    $("#profile .close").on("click", function () {
      $(".content-cover").fadeOut(), $("#profile").toggleClass("show"), n.close()
    }), $(document).height() < $(window).height() && $("#panel").css("height", "100vh")

  $(".pricing-tile").hover(function () {
    $(".pricing-tile").removeClass('active');
    $(this).addClass('active')
  })

  $("#start-form").submit(function (e) {
    e.preventDefault();

    var form = $(this);

    var inputs = form.find("input, select, textarea");
    console.log(inputs)
    var serializedData = form.serialize();
    inputs.prop('disabled', true);
    form.css({ opacity: '0.4' })


    var request = $.ajax({
      url: './mailer.php',
      type: 'post',
      data: serializedData
    });

    request.done(function (response) {
      toastr.success('Request Sent Successfully');
      console.log(response);
    })
    request.fail(function (response) {
      console.log('failure')
      toastr.error('An error Occured. Couldnt send request"');
      console.log(response)
    })
    request.always(function () {
      inputs.prop('disabled', false);
      inputs.val("");
      form.css({ opacity: '1' });
    })
  })
});