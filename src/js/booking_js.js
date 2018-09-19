
$(document).ready(function () {
    
    //message box
    var name = $("#name").val();
    
    $('.submit_btn').click(function() {
        var name = $("#name").val();
        var result = confirm(name+"님으로 예약할가요?");
        if(result == true) { //yes
        } else { //no
            event.preventDefault()
        }
    });

});

    
    