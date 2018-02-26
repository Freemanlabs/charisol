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
            tolerance: 70
        });
    }
    $(".hamburger").on("click", function () {
        $(this).fadeToggle(), $("#menu-desktop").toggleClass("show"), o.toggle()
    }),

    $(".team .btn-clear-purple").on("click", function () {
        $(".content-cover").fadeIn(), $("#profile").toggleClass("show"), n.toggle()
    }),

    $(document).on("click", ".team-profile-btn", function () {
        var personID = ($(this).data('personId') - 1);
        $.getJSON('./team-content.json',{
            format: 'json'
        }).done(function(data){
            console.log(personID)
            var data_response = data.data
            var person_obj = data_response[personID]
            var profile_info =  "<div class='top-info'>"+
                                    "<div class='row'>"+
                                    "<div class='six columns'>"+
                                        "<img src='"+person_obj.img_src+"' alt='team member' class='avatar'>"+
                                    "</div>"+
                                    "<div class='six columns'>"+
                                        "<h5 class='bold'>"+person_obj.name+"</h5>"+
                                        "<p>"+ person_obj.position +"</p>"+
                                        "<span class='blue-badge'>"+
                                        "<span class='circle'></span>Core team</span>"+
                                    "</div>"+
                                    "</div>"+
                                "</div>"+
                                "<div class='m-t-md m-b-md'>"+
                                    "<p>"+person_obj.description+"</p>"+
                                "</div>";
                                
            var skills_info = function(){
                if(person_obj.skills == ""){
                    return ""
                }else{
                    var skill_string = ""

                    $.each(person_obj.skills, function(skill, skill_value){
                        skill_string = skill_string + (
                            "<p class='bold skills-heading'>"+skill+"</p>"+
                            "<p class='m-t-md skill-text'>"+
                                ($.each(skill_value, function(key, skill_val){
                                    console.log(key)
                                   return skill_val +","
                                })) +
                            "</p>"
                            )
                    })
                    console.log(skill_string)
                    return skill_string
                }
            }
            $('#profile-wrapper').html(profile_info + skills_info());
            $(".content-cover").fadeIn(), $("#profile").toggleClass("show"), n.toggle()
        }).fail(function(error){
            console.log(error)
        })
    }),

    $("#menu-desktop .close").on("click", function () {
        $(".hamburger").fadeToggle(), $("#menu-desktop").toggleClass("show"), o.close()
    }),

    $("#profile .close").on("click", function () {
        $(".content-cover").fadeOut(), $("#profile").toggleClass("show"), n.close()
    }), $(document).height() < $(window).height() && $("#panel").css("height", "100vh")

    $(".pricing-tile").hover(function(){
        $(".pricing-tile").removeClass('active');
        $(this).addClass('active')
    })
});