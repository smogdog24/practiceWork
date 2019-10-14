$(document).ready(function(){
    $('#first_name').keyup(function(){
        var data = $("#first_name").serialize()
        $.ajax({
            method: "POST",
            url: "/name",
            data: data
        })
        .done(function(res){
            console.log(res)
            $('#usernameMsg').html(res)
        })
    })
})