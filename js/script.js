$(document).ready( function(){
  //functions for hide and show div on hover
  $(".descriptions-icon").mouseover(
    function() {
      var index = $(".descriptions-icon").index(this);
      $(".descriptions-icon").eq(index).hide();
      $(".descriptions").eq(index).show();
  }).mouseout(
    function() {
      var index = $(".descriptions-icon").index(this);
      $(".descriptions-icon").eq(index).show();
      $(".descriptions").eq(index).hide();
    });
  //functions to show hide dive when clicked
  // $(".descriptions-icon img").click(function() {
  //   var index = $(".descriptions-icon").index(this);
  //   $(".descriptions").eq(index).show();
  //   $(".descriptions-icon").eq(index).hide();
  // });
  // $(".descriptions").click(function() {
  //   var index = $(".descriptions").index(this);
  //   $(".descriptions-icon").eq(index).show();
  //   $(".descriptions").eq(index).hide();
  // });

  //function for received message popup
  $("#contact-form").submit(function(e){
    e.preventDefault();
    var name = $("input").first().val();
    var message = "Hello " + name + " " + "we have received your message. Thank you for reaching out to us."
    $("#recieved-message").text(message)
    $("#dialog" ).dialog({
      modal:true,
      show: { effect: "blind", duration: 800 },
      width:500,
      height:300
    });
    $("#contact-form").trigger("reset");
  });

});