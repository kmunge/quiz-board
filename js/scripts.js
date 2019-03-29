//===business logic===//

$(document).ready(function(){
    $("#blankForm").submit(function(event){
        var quiz1 = $("#quiz1").val();
        var quiz2 = $("#quiz2").val();

    var resultScore = parseInt(quiz1)=parseInt(quiz2);
    $("#Finish").text("You Scored: "+ resultScore + "out of 100");


    //=========user Interface=======//
    $("finish").show();
    event.preventDefault();
});
});