$(document).ready(function (){
    
    var inputs = [];
    inputs[0] = $('#nama_lengkap');
    inputs[1] = $('#nama_panggilan');
    inputs[2] = $('#telepon_1');
    inputs[3] = $('#telepon_2');
    inputs[4] = $('#email');
    inputs[5] = $('#nama_instagram');
    inputs[6] = $('#nama_twitter');
    inputs[7] = $('#jenis_alat');
    inputs[8] = $('#tanggal');
    inputs[9] = $('#acara');
    inputs[10] = $('#cabang_zenon');
    inputs[11] = $('#mengetahui_zenon');
    inputs[12] = $('#nama_keluarga');
    inputs[13] = $('#hubungan_penyewa');
    inputs[14] = $('#hp');
    inputs[15] = $('#alamat_keluarga');
    inputs[16] = $('#pekerjaan_sekarang');
    inputs[17] = $('#nama_tmpt_kerja');
    inputs[18] = $('#jabatan_kerja');
    inputs[19] = $('#telepon_tmpt_kerja');
    inputs[20] = $('#alamat_tinggal_skrng');
    inputs[21] = $('#status_tinggal');
    inputs[22] = $('#nama_pemilik');
    inputs[23] = $('#telepon_pemilik');
    inputs[24] = $('#pendidikan_sekarang');
    inputs[25] = $('#nama_lembaga');
    inputs[26] = $('#alamat_lembaga');
    inputs[27] = $('#info_tambahan');
    inputs[28] = $('#pesan');

    var errors = [];
    errors[0] = 'Harus diisi.'; 
    errors[1] = 'Harus diisi.'; 
    errors[2] = 'Harus diisi.';
    errors[3] = 'Harus diisi.';
    errors[4] = 'Harus diisi.';
    errors[5] = 'Harus diisi.';
    errors[6] = 'Harus diisi.';
    errors[7] = 'Harus diisi.';
    errors[8] = 'Harus diisi.';
    errors[9] = 'Harus diisi.';
    errors[10] = 'Harus diisi.';
    errors[11] = 'Harus diisi.';
    errors[12] = 'Harus diisi.';
    errors[13] = 'Harus diisi.';
    errors[14] = 'Harus diisi.';
    errors[15] = 'Harus diisi.';
    errors[16] = 'Harus diisi.';
    errors[17] = 'Harus diisi.';
    errors[18] = 'Harus diisi.';
    errors[19] = 'Harus diisi.';
    errors[20] = 'Harus diisi.';
    errors[21] = 'Harus diisi.';
    errors[22] = 'Harus diisi.';
    errors[23] = 'Harus diisi.';
    errors[24] = 'Harus diisi.';
    errors[25] = 'Harus diisi.';
    errors[26] = 'Harus diisi.';

    var expressions = [];
    expressions[0] = '';
    expressions[1] = '';
    expressions[2] = '';
    expressions[3] = '';
    expressions[4] = /regex/ ;

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
     
    var nama_lengkap=$('#nama_lengkap').val();
    var nama_panggilan=$('#nama_panggilan').val();
    var telepon_1=$('#telepon_1').val();
    var telepon_2=$('#telepon_2').val();
    var email=$('#email').val();
    var err='';
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    
    if (nama_lengkap=='') {
        $('#nama_lengkap').css('border-color', 'red');
        err+='<span style="color: red">Nama Lengkap Harus diisi.</span></br>';
    }
    if (nama_panggilan=='') {
        $('#nama_panggilan').css('border-color', 'red');
        err+='<span style="color: #FF3200">Nama Panggilan Harus diisi.</span></br>';
    }
    if (telepon_1=='') {
        $('#telepon_1').css('border-color', 'red');
        err+='<span style="color: #FF3200";>No Telepon/HP Harus diisi.</span></br>';
    }
    if (telepon_2=='') {
        $('#telepon_2').css('border-color', 'red');
        err+='<span style="color: #FF3200">No Telepon/HP Harus diisi.</span></br>';
    }
    // if (email=='') {
    //     $('#email').css('border-color', 'red');
    //     err+='<span style="color: #FF3200">Email Harus diisi.</span></br>';
    // }
    if (reg.test(email) == false) {
        $('#email').css('border-color', 'red');
        err+='<span style="color: #FF3200">Email Harus diisi dan masukan email yang Benar.</span></br>';
    }

    if (nama_lengkap !='' & nama_panggilan !='' & telepon_1 !='' & telepon_2 !='' & email !='') {
        err.hide;
    }

  

    if (err=='') {
       return true;
    }else{
       $('#err_notif1').html(err);
       
    }
}
 
//  $("#nama_lengkap").on("click", function errb(){
  
//         if ($('#nama_lengkap').val() == '') { $('#nama_lengkap').css('border-color', 'red'); 

//     }else{ 
    
//         $('#nama_lengkap').css('border-color', ''); }
 

//  });
 
 $("#backbtn3").on("click", function(){
    $('#form2').addClass("active");
    $('#err_notif1').css('display', 'none');

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
