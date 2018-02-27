

// Slide
$("#nextbtn1").on("click", function(){
    $('#form2').addClass("active");
 
    $('#form1').removeClass("active"); 
 
 });
 
 $("#backbtn2").on("click", function(){
    $('#form1').addClass("active");
 
    $('#form2').removeClass("active"); 
 
 });
 
 
//  function cek_kosong2(){
//     var nama_lengkap=$('#form2 #nama_lengkap').val();
//     var err='';
//     if (nama_lengkap=='') {
//        err+='<span style="color:red; text-align:center;">nama lengkap mohon diisi.</span><br>';
//     }
//     if ($('#form2 #nama_panggilan').val()=='') {
//        err+='<span style="color:red;">nama panggilan mohon diisi.</span><br>';
//     }
 
//     if (err=='') {
//        return true;
//     }else{
//        $('#err_notif1').html(err);
//        return false;
//     }
//  }
 
 $("#nama_lengkap").on("click", function(){
    // if(cek_kosong2()){
        if ($('#nama_lengkap').val() == '') { $('#nama_lengkap').css('border-color', 'red'); 

    }else{ 
    
        $('#nama_lengkap').css('border-color', ''); }
    // }else{
 
    // }
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

// Validation
$(document).ready(function () {
$('#form2').validate({

    rules:{

        nama_lengkap:{
            required: true
        },

        email:{
            required: true
        },

        nama_panggilan:{
            required: true
        }
    }
});
});