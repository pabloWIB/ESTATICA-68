$(".arrow").click(function(){
    $(this).toggleClass("active");
  });
  
  $(".overlay").click(function(){
    $(".arrow").removeClass("active");
  });