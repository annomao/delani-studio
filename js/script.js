$(document).ready( function(){
  //functions for hide and show div
  
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