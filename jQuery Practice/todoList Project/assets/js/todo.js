//check off specific todos by clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

//click on x to delete lilst
$("ul").on("click", "span", function(event){
  event.stopPropagation();
  $(this).parent().fadeOut(300, function(){
    $(this).remove();
  });
});

$("input[type='text']").keypress(function(event){
  if(event.which === 13){ // check enter key
    //grab new todo list
    var todoText = $(this).val();
    $(this).val("");
    //add to todo list
    $("ul").append("<li> <i class='fa fa-trash'></i>" + todoText + "</li>");
  }
});

$(".fa-plus").click(function(){
  $("input[type='text']").fadeToggle();
});
