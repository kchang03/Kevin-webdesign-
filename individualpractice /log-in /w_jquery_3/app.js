$(document).ready(function(){
  $(".input").on("focus",function(){
    $(".login-form").addClass("focused");
  })
$(".input-btn").on("click", function(e){
    e.preventDefault();
    $(".login-form").removeClass("focused") .addClass("loading");
  })
})
