$(document).ready(
    function errbor(){
    
    var inputs = [];
    inputs[0] = $('#nama_lengkap');
    inputs[1] = $('#nama_panggilan');
    inputs[2] = $('#email');

    var errors = [];
    errors[0] = 'This field is required'; 
    errors[1] = 'This field is required'; 
    errors[2] = 'Enter a valid e-mail address'; 

    var expressions = [];
    expressions[0] = '';
    expressions[1] = /regex/ ;

       // Template function with event handlers
       var showFormValidation = function showFormValidation(input, error, expression) {
        input.on('focusout', function() {
            if(input.val() == expression) {
                $(this).next('.validation').show();
                $(this).next('.validation').html(error);
                $(this).css({'box-shadow': '0 0 3px #FF3200',
                             '-moz-boxshadow': '0 0 3px #FF3200',
                            '-webkit-boxshadow': '0 0 3px #FF3200',
                             '-o-boxshadow': '0 0 3px #FF3200',
                             'border': '1px solid #FF3200'
                            });
            } else if(input.val() != expression) {
                $(this).next('.validation').hide();
                $(this).css({'box-shadow': 'none',
                             '-moz-boxshadow': 'none',
                            '-webkit-boxshadow': 'none',
                             '-o-boxshadow': 'none',
                             'border': '1px solid grey'
                            });
            }
        });
    };

    for(i=0; i < errors.length; i++) { 
        showFormValidation( inputs[i], errors[i], expressions[0]);
    }

  });

 
// $('input[type="text"]').click(function(){
//     $('input[type="text"]').removeClass('red-error');
//     $(this).addClass('red-error');
// });

// Slide
$("#nextbtn1").on("click", function(){
    $('#form2').addClass("active");
 
    $('#form1').removeClass("active"); 
 
 });
 
 $("#backbtn2").on("click", function(){
    $('#form1').addClass("active");
 
    $('#form2').removeClass("active"); 
 
 });
 
 
 function cek_kosong2(){
    var nama_lengkap=$('#form2 #nama_lengkap').val();
    var err='';
    if (nama_lengkap=='') {
       err+='<span style="color:red;s">nama lengkap mohon diisi.</span><br>';
    }
    if ($('#form2 #nama_panggilan').val()=='') {
       err+='<span style="color:red;">nama panggilan mohon diisi.</span><br>';

    }
 
    if (err=='') {
       return true;
    }else{
       $('#err_notif1').html(err);
       return false;
    }
 }
 
//  $("#nama_lengkap").on("click", function errb(){
  
//         if ($('#nama_lengkap').val() == '') { $('#nama_lengkap').css('border-color', 'red'); 

//     }else{ 
    
//         $('#nama_lengkap').css('border-color', ''); }
 

//  });
 
 $("#backbtn3").on("click", function(){
    
    $('#form2').addClass("active");
 
    $('#form3').removeClass("active"); 

 });
 $("#nextbtn2").on("click", function(){
    if(cek_kosong2()){
    $('#form3').addClass("active");
 
    $('#form2').removeClass("active"); 
    }
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

// // Validation
// $(document).ready(function () {
// $('#form2').validate({

//     rules:{

//         nama_lengkap:{
//             required: true
//         },

//         email:{
//             required: true
//         },

//         nama_panggilan:{
//             required: true
//         }
//     }
// });
// });

// function validasi() {
//     var nl = document.getElementById("nama_lengkap").value;
//     var np = document.getElementById("nama_panggilan").value;
//     if (nl != "" && np!="") {
//         return true;
//     }else{
//         $('#nama_lengkap').css('border-color', 'red');
//     }
// }

// Fungsi Untuk Upload File
$(function(){

    var ul = $('#MyForm #foto_list');

    $('.form-input .filename').click(function(){
        // Simulate a click on the file input button
        // to show the file browser dialog
        $(this).parent().find('input').click();
    });

    // Initialize the jQuery File Upload plugin
    $('#foto_selfie').fileupload({

        // This element will accept file drag/drop uploading
        dropZone: $('.form_input'),

        // This function is called when a file is added to the queue;
        // either via the browse button, or via drag/drop:
        add: function (e, data) {

            var tpl = $('<li class="working"><input type="text" value="0" data-width="48" data-height="48"'+
                ' data-fgColor="#0788a5" data-readOnly="1" data-bgColor="#3e4043" /><p></p><span></span></li>');

            // Append the file name and file size
            tpl.find('p').text(data.files[0].name)
                         .append('<i>' + formatFileSize(data.files[0].size) + '</i>');

            // Add the HTML to the UL element
            data.context = tpl.appendTo(ul);

            // Initialize the knob plugin
            tpl.find('input').knob();

            // Listen for clicks on the cancel icon
            tpl.find('span').click(function(){

                if(tpl.hasClass('working')){
                    jqXHR.abort();
                }

                tpl.fadeOut(function(){
                    tpl.remove();
                });

            });

            // Automatically upload the file once it is added to the queue
            var jqXHR = data.submit();
        },

        progress: function(e, data){

            // Calculate the completion percentage of the upload
            var progress = parseInt(data.loaded / data.total * 100, 10);

            // Update the hidden input field and trigger a change
            // so that the jQuery knob plugin knows to update the dial
            data.context.find('input').val(progress).change();

            if(progress == 100){
                data.context.removeClass('working');
            }
        },

        fail:function(e, data){
            // Something has gone wrong!
            data.context.addClass('error');
        }

    });

    // Prevent the default action when a file is dropped on the window
    $(document).on('drop dragover', function (e) {
        e.preventDefault();
    });

    // Helper function that formats the file sizes
    function formatFileSize(bytes) {
        if (typeof bytes !== 'number') {
            return '';
        }

        if (bytes >= 1000000000) {
            return (bytes / 1000000000).toFixed(2) + ' GB';
        }

        if (bytes >= 1000000) {
            return (bytes / 1000000).toFixed(2) + ' MB';
        }

        return (bytes / 1000).toFixed(2) + ' KB';
    }

});
