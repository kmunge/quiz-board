//==== Business logic====//

$(document).ready(function() {
$("#blankForm").submit(function(event){
    var quiz1 = $("#quiz1").val();
    var quiz2 = $("#quiz2").val();
    var quiz3 = $("#quiz3").val();
    var quiz4 = $("#quiz4").val();

    var resultScore = parseInt(quiz1)+parseInt(quiz2)+parseInt(quiz3)+parseInt(quiz4);
    $("#finish").text("You Scored: " + resultScore + " out of 100");


//==== User Interface ====//
    $("#finish").show();
    event.preventDefault();
});

});
