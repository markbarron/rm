function positionPopup(){if(!$("#overlay_form").is(":visible"))return;$("#overlay_form").css({left:($(window).width()-$("#overlay_form").width())/2,top:($(window).width()-$("#overlay_form").width())/6,position:"absolute"})}function validateEmail(e){var t=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(e)}$(document).ready(function(){$(".button").hover(function(){$(this).toggleClass("hoveri",300)},function(){$(this).toggleClass("hoveri",300)});$(".main-section-w").backstretch(["img/state-bridge.png"],{duration:6e3,fade:750});$(function(){$("#counter").countdown("2013/11/7",function(e){$this=$(this);switch(e.type){case"seconds":case"minutes":case"hours":case"days":$this.find("span#"+e.type).html(e.value);break;case"finished":$this.hide()}})});$(".testi-w").cycle({fx:"fade",speed:2500})});$(document).ready(function(){$("#pop-contact").click(function(){$("#overlay_form").fadeIn(1e3);$("#popi-bg").css({opacity:"0.7"});$("#popi-bg").fadeIn("slow");positionPopup()});$("#close2").click(function(){$("#overlay_form").fadeOut(500);$("#popi-bg").fadeOut("slow")})});$(window).bind("resize",positionPopup);$(document).ready(function(){$("#contactform").submit(function(){return!1});$("#send").on("click",function(){var e=$("#email").val(),t=$("#message").val(),n=t.length,r=validateEmail(e);r==0?$("#email").addClass("error"):r==1&&$("#email").removeClass("error");n<2?$("#msg").addClass("error"):n>=2&&$("#msg").removeClass("error");if(r==1&&n>=2){$("input.submit-contact").replaceWith("<em>sending...</em>");$.ajax({type:"POST",url:"mailer.php",data:$("#contactform").serialize(),success:function(e){e=="true"&&$("em").fadeOut("fast",function(){$(this).before("<p> Your Message has been sent.</p>");setTimeout("$.fancybox.close()",1e3)})}})}})});$(function(){$("input:text, textarea").each(function(){var e=$(this).val();$(this).focus(function(){$(this).val("")});$(this).blur(function(){$(this).val()==""&&$(this).val(e)})})});$(document).ready(function(){$("#mc-embedded-subscribe-form").submit(function(){return!1});$("#mc-embedded-subscribe").on("click",function(){var e=$("#mce-EMAIL").val();$(".subscribe p").replaceWith("<p><span>Thank you !</span> You have been subscribed<p>");$.ajax({type:"POST",url:"subscriber.php",data:$("#mc-embedded-subscribe-form").serialize(),success:function(e){e=="true"&&$("em").fadeOut("fast",function(){$(this).before("<p> Your Message has been sent.</p>");setTimeout("$.fancybox.close()",1e3)})}})})});