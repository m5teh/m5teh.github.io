function showAdd () {
    $(".add-button").show(300);
}
$(".input-text").focus (
    function () {
        $(".input-text").animate ({
            width : '80%'
        }, 500, showAdd)
        
    }
)
$(".add-button").click (
    function () {
        var addContent = $(".input-text").val();
        if (! addContent.trim()) {
            alert('cc');
            return;
        }
         var task = document.createElement("div");
         var checkk = document.createElement("i");
         var deletee = document.createElement("i");
         var cont = document.createElement("p");
        $(checkk).addClass("fas fa-circle check");
         $(deletee).addClass ("fas fa-trash delete");
        cont.innerHTML = addContent;
        $(task).addClass("task");
        $(task).append(checkk, deletee,cont);
        $(".list-task").append(task);
        $(".add-button").hide();
        $(".input-text").animate ({
            width : '100px'
        }, 500)
        $(".input-text").val("");
    }
) 
$(document).on ("click",".delete", function() {
    $(this).parent().hide();
})
$(document).on ("click",".check", function() {
    $(this).css("color", "#f6b93b");
    $(this).parent().children("p").css ({"font-style":"italic","font-size":"120%"});
})
