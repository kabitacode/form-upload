$("#nextbtn1").on("click", function(){
   $('#form2').addClass("active");

   $('#form1').removeClass("active"); 

});

$("#backbtn2").on("click", function(){
   $('#form1').addClass("active");

   $('#form2').removeClass("active"); 

});
$("#nextbtn2").on("click", function(){
   $('#form3').addClass("active");

   $('#form2').removeClass("active"); 

});

$("#backbtn3").on("click", function(){
   $('#form2').addClass("active");

   $('#form3').removeClass("active"); 

});
$("#nextbtn3").on("click", function(){
   $('#form4').addClass("active");

   $('#form3').removeClass("active"); 

});

$("#backbtn4").on("click", function(){
   $('#form3').addClass("active");

   $('#form4').removeClass("active"); 

});
$("#nextbtn4").on("click", function(){
   $('#form5').addClass("active");

   $('#form4').removeClass("active"); 

});

$("#backbtn5").on("click", function(){
   $('#form4').addClass("active");

   $('#form5').removeClass("active"); 

});
$("#nextbtn5").on("click", function(){
   $('#form6').addClass("active");

   $('#form5').removeClass("active"); 

});

$("#backbtn6").on("click", function(){
   $('#form5').addClass("active");

   $('#form6').removeClass("active"); 

});
$("#nextbtn6").on("click", function(){
   $('#form7').addClass("active");

   $('#form6').removeClass("active"); 

});

$("#backbtn7").on("click", function(){
   $('#form6').addClass("active");

   $('#form7').removeClass("active"); 

});
$("#nextbtn7").on("click", function(){
   $('#form8').addClass("active");

   $('#form7').removeClass("active"); 

});

$("#backbtn8").on("click", function(){
   $('#form7').addClass("active");

   $('#form8').removeClass("active"); 

});
$("#nextbtn8").on("click", function(){
   $('#form9').addClass("active");

   $('#form8').removeClass("active"); 

});

$("#backbtn9").on("click", function(){
   $('#form8').addClass("active");

   $('#form9').removeClass("active"); 

});
$("#nextbtn9").on("click", function(){
   $('#form10').addClass("active");

   $('#form9').removeClass("active"); 

});

$("#backbtn10").on("click", function(){
   $('#form9').addClass("active");

   $('#form10').removeClass("active"); 

});

// Tooltipster
$(document).ready(function() {
    $('.tooltipster-custom').tooltipster({
        position: 'right',
        trigger: 'hover',
        animation: 'fade',
        theme: 'tooltipster-light'
    });
 
 });