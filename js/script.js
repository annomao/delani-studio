$(document).ready( function(){
  //functions for hide and show div on hover

  $( ".descriptions-icon" ).on({
    click: function() {
      var index = $(".descriptions-icon").index(this);
      $(".descriptions-icon").eq(index).hide();
      $(".descriptions").eq(index).show();}
  });
  $( ".descriptions" ).on({
    click: function() {
      var index = $(".descriptions").index(this);
      $(".descriptions-icon").eq(index).show();
      $(".descriptions").eq(index).hide();}
  });

  //fucntion to show white box and text on portfolio image hover
  $(".portfolio-size img").hover(
    function () {
      $(this).addClass("portfolio-hover");
      var index = $(".portfolio-size img").index(this);
      $(".portfolio-text").eq(index).show();
    },
    function () {
      $(this).removeClass("portfolio-hover");
      var index = $(".portfolio-size img").index(this);
      $(".portfolio-text").eq(index).hide();
    }
  );


  //function for received message popup
  $("#contact-form").submit(function(e){
    e.preventDefault();
    var name = $("input").first().val();
    var message = "Hello " + name + " " + "we have received your message. Thank you for reaching out to us."
    $("#recieved-message").text(message)
    //function that calls pop up
    $("#dialog" ).dialog({
      modal:true,
      show: { effect: "blind", duration: 800 },
      width:400,
      height:250,
      dialogClass: "no-close",
      buttons: [
        {
          text: "OK",
          click: function() {
            $( this ).dialog( "close" );
          }
        }
      ]
    });
    $("#contact-form").trigger("reset");
  });

});