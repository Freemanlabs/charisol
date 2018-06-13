$(function(){
    $.getJSON('./team-content.json',{
        format: 'json'
    }).done(function(data){
        $.map(data.data, function(data){
            var person_synopsis = "<div class='tile'>"+
                                "<div class='avatar-wrapper no-reveal'>"+
                                    "<div class='avatar' alt='team member' style='background-image: url("+data.img_src+")'></div>"+
                                "</div>"+
                                "<div class='text-wrap'>"+
                                    "<div class='sub-text-wrapper'>"+
                                        "<h5 class='bold sub-text no-reveal'>"+data.name+"</h5>"+
                                    "</div>"+
                                    "<div class='sub-text-wrapper'>"+
                                        "<p class='light sub-text no-reveal'>"+data.position+"</p>"+
                                    "</div>"+
                                "</div>"+
                                "<button class='team-profile-btn btn-clear-purple' data-person-id='"+data.id+"'>"+
                                    'View Profile'+
                                    '<img src="assets/img/icon_right_purple.svg" alt="right">'+
                                "</button>"+
                              "</div>"
            $('#people-wrapper').append(person_synopsis);
        })
                              
    }).fail(function(error){})
})