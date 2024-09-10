$(document).ready(function () {
    $("form").on("submit", function (e) {
        e.preventDefault();
    })
    $("button").click(function () {
        const novaTarefa = $("#nova-tarefa").val().trim();
        const novoItem = $("<li></li>").text(novaTarefa);
        $("ul").append(novoItem);
        $("#nova-tarefa").val("");
    });
    $("ul").on("click", "li", function () {
        console.log("clicando");
        $(this).css("text-decoration", "line-through");
    });

})

