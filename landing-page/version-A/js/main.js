$(document).ready(function(){


/* Button Hover Function */ 

$(".button").hover(
function() {
	$(this).toggleClass("hoveri", 300);

},
function() {
	$(this).toggleClass("hoveri", 300);
});


/* Backstretch Backgrounds Function */ 

$(".main-section-w").backstretch([
      "img/state-bridge.png"
  ], {duration: 6000, fade: 750});
 
$(function() {

/* Your Date Here */  
$('#counter').countdown("2013/11/7", function(event) {
      
        $this = $(this);

    switch(event.type) {
      case "seconds":
      case "minutes":
      case "hours":
      case "days":
      $this.find('span#'+event.type).html(event.value);
      break;
      case "finished":
        $this.hide();
        break;
    }
  });
});
 
$('.testi-w').cycle({ 
    fx:    'fade', 
    speed:  2500 
 });



});


/*---------  Contact Form -------*/

$(document).ready(function(){
$("#pop-contact").click(function(){
$("#overlay_form").fadeIn(1000);
$("#popi-bg").css({
"opacity": "0.7"
}); 
$("#popi-bg").fadeIn("slow");
positionPopup();
});
$("#close2").click(function(){
$("#overlay_form").fadeOut(500);
$("#popi-bg").fadeOut("slow");

});
 
});
    
function positionPopup(){
if(!$("#overlay_form").is(':visible')){
return;
}
$("#overlay_form").css({
left: ($(window).width() - $('#overlay_form').width()) / 2,
top: ($(window).width() - $('#overlay_form').width()) / 6,
position:'absolute'
});
}
$(window).bind('resize',positionPopup);

function validateEmail(email) { 
		var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return reg.test(email);
	}

	$(document).ready(function() {
		 
		$("#contactform").submit(function() { return false; });

		
		$("#send").on("click", function(){
			var emailval  = $("#email").val();
			var msgval    = $("#message").val();
			var msglen    = msgval.length;
			var mailvalid = validateEmail(emailval);
			
			if(mailvalid == false) {
				$("#email").addClass("error");
			}
			else if(mailvalid == true){
				$("#email").removeClass("error");
			}
			
			if(msglen < 2) {
				$("#msg").addClass("error");
			}
			else if(msglen >= 2){
				$("#msg").removeClass("error");
			}
			
			if(mailvalid == true && msglen >= 2) {
				 $("input.submit-contact").replaceWith("<em>sending...</em>");
				
				$.ajax({
					type: 'POST',
					url: 'mailer.php',
					data: $("#contactform").serialize(),
					success: function(data) {
						if(data == "true") {
							$("em").fadeOut("fast", function(){
								$(this).before("<p> Your Message has been sent.</p>");
								setTimeout("$.fancybox.close()", 1000);
							});
						}
					}
				});
			}
		});
	});

/*--------- Input auto-clear -------*/

    $(function(){
    $('input:text, textarea').each(function(){
    var txtval = $(this).val();
    $(this).focus(function(){
    $(this).val('')
    });
    $(this).blur(function(){
    if($(this).val() == ""){
    $(this).val(txtval);
    }
    });
    });
    });
    
    
$(document).ready(function() {
				
				$("#mc-embedded-subscribe-form").submit(function() { return false; });


		$("#mc-embedded-subscribe").on("click", function(){
			$("#header-signup-form").replaceWith("<p><span>Thank you !</span> You have been subscribed</p>");
		});
});


$(document).ready(function() {
				
				$("#mc-embedded-subscribe-form2").submit(function() { return false; });


		$("#mc-embedded-subscribe2").on("click", function(){
			$("#footer-signup-form").replaceWith("<p class='section-heading'><span class='brand-color'>Thank you!</span> We will keep you updated on the launch.</p>");
		});
});