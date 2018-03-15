$(document).ready(function(){
  $(".fa-search").click(function(){
    $(".input").toggleClass("active");
    /*now, whenever someone click the icon, active toggle class should be added to the input field */
    /*similarly, whenever, someone clicks an icon, active toggle should be added to label field*/
    $("#search").toggleClass("active")
  });

  $(".input").focus(function(){
    $("#search").addClass("move");
  });

  $(".input").focusout(function(){
    $("#search").removeClass("move");
  });

});
