$(function(){
    console.log('team page loaded')
    
    $.getJSON('./team-content.json',{
        format: 'json'
    }).done(function(data){
        console.log(data.data)
        $.map(data.data, function(data){
            var person_synopsis = "<div class='tile'>"+
                                "<div class='avatar' alt='team member' style='background-image: url("+data.img_src+")'></div>"+
                                "<div class='text-wrap'>"+
                                    "<h5 class='bold'>"+data.name+"</h5>"+
                                    "<p class='light'>"+data.position+"</p>"+
                                "</div>"+
                                "<button class='team-profile-btn btn-clear-purple' data-person-id='"+data.id+"'>"+
                                    'View Profile'+
                                    '<img src="assets/img/icon_right_purple.svg" alt="right">'+
                                "</button>"+
                              "</div>"
            $('#people-wrapper').append(person_synopsis);
        })
                              
    }).fail(function(error){
        console.log(error)
    })
})