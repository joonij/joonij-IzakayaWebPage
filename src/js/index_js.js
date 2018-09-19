$(document).ready(function () {
    
    $(".blackout img").draggable({      // 드래그  
        axis: "y"
        ,stop : function(){ // 드래그 종료시 실행
            $(this).animate({ top : "-20%" }, 1000, 'easeOutElastic' );
        }
    });
    $(".drop").droppable({
        drop: function(event, ui) {
            $(".blackout").addClass("start");
        }
    });

});