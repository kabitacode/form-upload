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
    inputs[19] = $('#alamat_tmpt_kerja');
    inputs[20] = $('#telepon_tmpt_kerja');
    inputs[21] = $('#alamat_tinggal_skrng');
    inputs[22] = $('#status_tinggal');
    inputs[23] = $('#nama_pemilik');
    inputs[24] = $('#telepon_pemilik');
    inputs[25] = $('#pendidikan_sekarang');
    inputs[26] = $('#nama_lembaga');
    inputs[27] = $('#alamat_lembaga');
    inputs[28] = $('#info_tambahan');
    inputs[29] = $('#pesan');
    inputs[30] = $('#setuju');
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
    errors[27] = 'Harus diisi.';
    errors[28] = 'Harus diisi.';
    errors[29] = 'Harus diisi.';
    
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


  function cek_kosong1(){
    var foto=$('#foto').val();
    var ktp=$('#ktp').val();
    var dokumen=$('#dokumen').val();
    var err='';

    if (foto=='') {
        $('#foto').css('border', '1px solid #FF3200');
        err+='<span style="color: red">Foto Selfie Harus Di Upload.</span></br>';
    }
    if (ktp=='') {
        $('#ktp').css('border', '1px solid #FF3200');
        err+='<span style="color: #FF3200">KTP Wajib Di Upload.</span></br>';
    }
    if (dokumen=='') {
        $('#dokumen').css('border', '1px solid #FF3200');
        err+='<span style="color: #FF3200;">Dokumen Berharga Harus Di Upload.</span></br>';
    }

    var foto_selfie=$('#foto_selfie').val();
    var ktp_wajib=$('#ktp_wajib').val();
    var dokumen_berharga=$('#dokumen_berharga').val();
    var err='';

    if (foto_selfie=='') {
        $('#foto_selfie').css('border', '1px solid #FF3200');
        err+='<span style="color: red">Foto Selfie Harus Di Upload.</span></br>';
    }
    if (ktp_wajib=='') {
        $('#ktp_wajib').css('border', '1px solid #FF3200');
        err+='<span style="color: #FF3200">KTP Wajib Di Upload.</span></br>';
    }
    if (dokumen_berharga=='') {
        $('#dokumen_berharga').css('border', '1px solid #FF3200');
        err+='<span style="color: #FF3200;">Dokumen Berharga Harus Di Upload.</span></br>';
    }

    if (foto !='' & ktp !='' & dokumen !='') {
        err.hide;
        }

    if (err=='') {
       return true;
    }else{
       $('#err_notif1').html(err);
       
    }
}
 
 function cek_kosong2(){
    var nama_lengkap=$('#nama_lengkap').val();
    var nama_panggilan=$('#nama_panggilan').val();
    var telepon_1=$('#telepon_1').val();
    var telepon_2=$('#telepon_2').val();
    var email=$('#email').val();
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;   
    var err='';

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

   // Validate Email
   if (reg.test(email) == false) {
    $('#email').css('border-color', 'red');
    err+='<span style="color: #FF3200">Email Harus diisi dan masukan email yang Benar.</span></br>';
    }

    if (nama_lengkap !='' & nama_panggilan !='' & telepon_1 !='' & telepon_2 !='' & email !='') {
    err.hide;
    }
// End

    if (err=='') {
       return true;
    }else{
       $('#err_notif2').html(err);
       
    }
}
 
function cek_kosong3() {

    var nama_facebook=$('#nama_facebook').val();
    var email_facebook=$('#email_facebook').val();
    var nama_instagram=$('#nama_instagram').val();
    var nama_twitter=$('#nama_twitter').val();
    var err ='';
    
    if (nama_facebook=='') {
        $('#nama_facebook').css('border-color', 'red');
        err+='<span style="color: red">Nama Facebook Harus diisi.</span></br>';
    }
    if (email_facebook=='') {
        $('#email_facebook').css('border-color', 'red');
        err+='<span style="color: red">Email Facebook Harus diisi.</span></br>';
    }
    if (nama_instagram=='') {
        $('#nama_instagram').css('border-color', 'red');
        err+='<span style="color: red">Nama Instagram Harus diisi.</span></br>';
    }
    if (nama_twitter=='') {
        $('#nama_twitter').css('border-color', 'red');
        err+='<span style="color: #FF3200">Nama Twitter Harus diisi.</span></br>';
    }

    if (nama_facebook !='' & email_facebook !='' & nama_instagram !='' & nama_twitter !='') {
        err.hide;
        }

    if (err=='') {
        return true;
     }else{
        $('#err_notif3').html(err);
        
     }

}
function cek_kosong4(){


    var jenis_alat=$('#jenis_alat').val();
    var tanggal=$('#tanggal').val();
    var acara=$('#acara').val();
    var cabang_zenon=$('#cabang_zenon').val();
    var err = '';

    if (jenis_alat =='') {
        $('#jenis_alat').css('border-color', 'red');
        err+='<span style="color: #FF3200">Jenis Alat Harus diisi</span></br>';
    }
    if (tanggal =='') {
        $('#tanggal').css('border-color', 'red');
        err+='<span style="color: #FF3200">Tanggal Harus diisi</span></br>';
    }
    if (acara =='') {
        $('#acara').css('border-color', 'red');
        err+='<span style="color: #FF3200">acara Harus diisi</span></br>';
    }
    if (cabang_zenon =='') {
        $('#cabang_zenon').css('border-color', 'red');
        err+='<span style="color: #FF3200">Cabang Zenon Harus diisi</span></br>';
    }

    if (jenis_alat !='' & tanggal !='' & acara !='' & cabang_zenon !='') {
        err.hide;
        }


    if (err=='') {
        return true;
     }else{
        $('#err_notif4').html(err);
        
     }
}

function cek_kosong5() {

    var mengetahui_zenon=$('#mengetahui_zenon').val();
    var sewa=$('#sewa').val();
    var sewaatasnama=$('#sewa_atas_nama').val();
    var err ='';

    if (mengetahui_zenon=='') {
        $('#mengetahui_zenon').css('border-color', 'red');
        err+='<span style="color: #FF3200">Mengetahui Zenon Harus diisi</span></br>';
    }
    if (sewa=='') {
        $('#sewa').css('border-color', 'red');
        err+='<span style="color: #FF3200">Nama Tempat Sewa Harus diisi</span></br>';
    }
    if (sewaatasnama=='') {
        $('#sewa_atas_nama').css('border-color', 'red');
        err+='<span style="color: #FF3200">Sewa Atas Nama Harus diisi</span></br>';
    }

    if (mengetahui_zenon !='' & sewa !='' & sewaatasnama !='') {
        err.hide;
        }

    if (err=='') {
        return true;
     }else{
        $('#err_notif5').html(err);
        
     }
}

function cek_kosong6() {

    var nama_keluarga=$('#nama_keluarga').val();
    var hubungan_penyewa=$('#hubungan_penyewa').val();
    var hp=$('#hp').val();
    var alamat_keluarga=$('#alamat_keluarga').val();
    var err ='';

    if (nama_keluarga =='') {
        $('#nama_keluarga').css('border-color', 'red');
        err+='<span style="color: #FF3200">Nama Keluarga Harus diisi</span></br>';
    }
    if (hubungan_penyewa =='') {
        $('#hubungan_penyewa').css('border-color', 'red');
        err+='<span style="color: #FF3200">Hubungan Penyewa Harus diisi</span></br>';
    }
    if (hp =='') {
        $('#hp').css('border-color', 'red');
        err+='<span style="color: #FF3200">Nomor Telepon/HP Harus diisi</span></br>';
    }
    if (alamat_keluarga =='') {
        $('#alamat_keluarga').css('border-color', 'red');
        err+='<span style="color: #FF3200">Alamat Keluarga Harus diisi</span></br>';
    }

    if (nama_keluarga !='' & hubungan_penyewa !='' & hp !='' & alamat_keluarga !='') {
        err.hide;
        }

    if (err=='') {
        return true;
     }else{
        $('#err_notif6').html(err);
        
     }
}

function cek_kosong7() {

    var pekerjaan_sekarang=$('#pekerjaan_sekarang').val();
    var nama_tmpt_kerja=$('#nama_tmpt_kerja').val();
    var jabatan_kerja=$('#jabatan_kerja').val();
    var alamat_kerja=$('#alamat_tmpt_kerja').val();
    var telepon_tmpt_kerja=$('#telepon_tmpt_kerja').val();
    var err ='';

    if (pekerjaan_sekarang =='') {
        $('#pekerjaan_sekarang').css('border-color', 'red');
        err+='<span style="color: #FF3200">Pekerjaan Sekarang Harus diisi</span></br>';
    }
    if (nama_tmpt_kerja =='') {
        $('#nama_tmpt_kerja').css('border-color', 'red');
        err+='<span style="color: #FF3200">Nama Tempat Kerja Harus diisi</span></br>';
    }
    if (jabatan_kerja =='') {
        $('#jabatan_kerja').css('border-color', 'red');
        err+='<span style="color: #FF3200">Jabatan Kerja Harus diisi</span></br>';
    }
    if (alamat_kerja =='') {
        $('#alamat_tmpt_kerja').css('border-color', 'red');
        err+='<span style="color: #FF3200">Alamat Tempat Kerja Harus diisi</span></br>';
    }
    if (telepon_tmpt_kerja =='') {
        $('#telepon_tmpt_kerja').css('border-color', 'red');
        err+='<span style="color: #FF3200">Telepon Tempat Kerja Harus diisi</span></br>';
    }

    if (pekerjaan_sekarang !='' & nama_tmpt_kerja !='' & jabatan_kerja !='' & alamat_kerja !='' & telepon_tmpt_kerja !='') {
        err.hide;
        }

    if (err=='') {
        return true;
     }else{
        $('#err_notif7').html(err);
        
     }
}

function cek_kosong8() {
     
    var alamat_tinggal_skrng=$('#alamat_tinggal_skrng').val();
    var status_tinggal=$('#status_tinggal').val();
    var nama_pemilik=$('#nama_pemilik').val();
    var telepon_pemilik=$('#telepon_pemilik').val();
    var err ='';

    if (alamat_tinggal_skrng =='') {
        $('#alamat_tinggal_skrng').css('border-color', 'red');
        err+='<span style="color: #FF3200">Alamat Tinggal Sekarang Harus diisi</span></br>';
    }
    if (status_tinggal =='') {
        $('#status_tinggal').css('border-color', 'red');
        err+='<span style="color: #FF3200">Status Tinggal Harus diisi</span></br>';
    }
    if (nama_pemilik =='') {
        $('#nama_pemilik').css('border-color', 'red');
        err+='<span style="color: #FF3200">Nama Pemilik Harus diisi</span></br>';
    }
    if (telepon_pemilik =='') {
        $('#telepon_pemilik').css('border-color', 'red');
        err+='<span style="color: #FF3200">Telepon Pemilik Harus diisi</span></br>';
    }

    if (alamat_tinggal_skrng !='' & status_tinggal !='' & nama_pemilik !='' & telepon_pemilik !='') {
        err.hide;
        }

    if (err=='') {
        return true;
     }else{
        $('#err_notif8').html(err);
        
     }
}

function cek_kosong9() {
    

    var pendidikan_sekarang=$('#pendidikan_sekarang').val();
    var nama_lembaga=$('#nama_lembaga').val();
    var alamat_lembaga=$('#alamat_lembaga').val();
    var info_tambahan=$('#info_tambahan').val();
    var err ='';

    if (pendidikan_sekarang == '') {
        $('#pendidikan_sekarang').css('border-color', 'red');
        err+='<span style="color: #FF3200">Pendidikan Sekarang Harus diisi</span></br>';
    }
    if (nama_lembaga =='') {
        $('#nama_lembaga').css('border-color', 'red');
        err+='<span style="color: #FF3200">Nama Lembaga Harus diisi</span></br>';
    }
    if (alamat_lembaga =='') {
        $('#alamat_lembaga').css('border-color', 'red');
        err+='<span style="color: #FF3200">Alamat Lembaga Harus diisi</span></br>';
    }
    if (info_tambahan =='') {
        $('#info_tambahan').css('border-color', 'red');
        err+='<span style="color: #FF3200">Info Tambahan Harus diisi</span></br>';
    }

    if (pendidikan_sekarang !='' & nama_lembaga !='' & alamat_lembaga !='' & info_tambahan !='') {
        err.hide;
        }

    if (err=='') {
        return true;
     }else{
        $('#err_notif9').html(err);
        
     }
}

function cek_kosong10() {
    
    var pesan=$('#pesan').val();
    var err ='';

    if (pesan =='') {
        $('#pesan').css('border-color', 'red');
        err+='<span style="color: #FF3200">Pesan Harus diisi.</span></br>';
    }
    
    if (pesan !='') {
        err.hide;
        }

    if (err=='') {
        return true;
     }else{
        $('#err_notif10').html(err);
        
     }
}
 
// Slide
$("#nextbtn1").on("click", function(){
    if(cek_kosong1()){
    $('#form2').addClass("active");
 
    $('#form1').removeClass("active"); 
    }
 });
 
 $("#backbtn2").on("click", function(){
    $('#form1').addClass("active");
    $('#err_notif1').css('display', 'none');

    $('#form2').removeClass("active"); 
 
 });

 $("#backbtn3").on("click", function(){
    $('#form2').addClass("active");
    $('#err_notif2').css('display', 'none');

    $('#form3').removeClass("active"); 

 });
 $("#nextbtn2").on("click", function(){
    if(cek_kosong2()){
    $('#form3').addClass("active");

    $('#form2').removeClass("active"); 
    }
 });
 $("#nextbtn3").on("click", function(){
    if(cek_kosong3()){
    $('#form4').addClass("active");
 
    $('#form3').removeClass("active"); 
    }
 });
 
 $("#backbtn4").on("click", function(){
    $('#form3').addClass("active");
    $('#err_notif3').css('display', 'none');

    $('#form4').removeClass("active"); 
 
 });
 $("#nextbtn4").on("click", function(){
    if(cek_kosong4()){
    $('#form5').addClass("active");
 
    $('#form4').removeClass("active"); 
    }
 });
 
 $("#backbtn5").on("click", function(){
    $('#form4').addClass("active");
    $('#err_notif4').css('display', 'none');

    $('#form5').removeClass("active"); 
 
 });
 $("#nextbtn5").on("click", function(){
    if(cek_kosong5()){
    $('#form6').addClass("active");
 
    $('#form5').removeClass("active"); 
    }
 });
 
 $("#backbtn6").on("click", function(){
    $('#form5').addClass("active");
    $('#err_notif5').css('display', 'none');

    $('#form6').removeClass("active"); 
 
 });
 $("#nextbtn6").on("click", function(){
    if(cek_kosong6()){
    $('#form7').addClass("active");
 
    $('#form6').removeClass("active"); 
    }
 });
 
 $("#backbtn7").on("click", function(){
    $('#form6').addClass("active");
    $('#err_notif6').css('display', 'none');

    $('#form7').removeClass("active"); 
 
 });
 $("#nextbtn7").on("click", function(){
    if(cek_kosong7()){
    $('#form8').addClass("active");
 
    $('#form7').removeClass("active"); 
    }
 });
 
 $("#backbtn8").on("click", function(){
    $('#form7').addClass("active");
    $('#err_notif7').css('display', 'none');

    $('#form8').removeClass("active"); 
 
 });
 $("#nextbtn8").on("click", function(){
    if(cek_kosong8()){
    $('#form9').addClass("active");
 
    $('#form8').removeClass("active"); 
    }
 });
 
 $("#backbtn9").on("click", function(){
    $('#form8').addClass("active");
    $('#err_notif8').css('display', 'none');

    $('#form9').removeClass("active"); 
 
 });
 $("#nextbtn9").on("click", function(){
      if(cek_kosong9()){
    $('#form10').addClass("active");
 
    $('#form9').removeClass("active"); 
      }
 });

 $("#submit").on("click", function(){
    if(cek_kosong10()){
 
    }
});


 $("#backbtn10").on("click", function(){
    $('#form9').addClass("active");
    $('#err_notif9').css('display', 'none');

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

 var fi = $('#fileupload'); //file input 
//initialize blueimp fileupload plugin
var process_url = 'php/UploadHandler.php'; //PHP script
fi.fileupload({
    url: process_url,
    dataType: 'json',
    autoUpload: false,
    acceptFileTypes: /(\.|\/)(gif|jpe?g|png|mp4|mp3)$/i,
    maxFileSize: 1048576, //1MB
    // Enable image resizing, except for Android and Opera,
    // which actually support image resizing, but fail to
    // send Blob objects via XHR requests:
    disableImageResize: /Android(?!.*Chrome)|Opera/ 
    .test(window.navigator.userAgent),
    previewMaxWidth: 50,
    previewMaxHeight: 50,
    previewCrop: true,
    dropZone: $('#dropzone') //specify element for drop zone 
});
var progressBar = $('<div/>').addClass('progress').append($('<div/>').addClass('progress-bar')); //create progress bar
var uploadButton = $('<button/>').addClass('button btn-blue upload').text('Upload');    //create upload button

uploadButton.on('click', function () { //button click function
    var $this = $(this), data = $this.data();
    data.submit().always(function () { //upload the file
            $this.remove(); //remove this button
    });
});

fi.on('fileuploadadd', function (e, data) {
        data.context = $('<div/>').addClass('file-wrapper').appendTo('#files'); //create new DIV with "file-wrapper" class
        $.each(data.files, function (index, file){  //loop though each file
        var node = $('<div/>').addClass('file-row'); //create a new node with "file-row" class
        var removeBtn  = $('<button/>').addClass('button btn-red remove').text('Remove'); //create new remove button
        removeBtn.on('click', function(e, data){ //remove button function
            $(this).parent().parent().remove(); //remove file's wrapper to remove queued file
        });
        
        //create file info text, name and file size
        var file_txt = $('<div/>').addClass('file-row-text').append('<span>'+file.name + ' (' +format_size(file.size) + ')' + '</span>');
        
        file_txt.append(removeBtn); //add remove button inside info text element
        file_txt.prependTo(node).append(uploadButton.clone(true).data(data)); //add to node element
        progressBar.clone().appendTo(file_txt); //add progress bar
        if (!index){
            node.prepend(file.preview); //add image preview
        }
        
        node.appendTo(data.context); //attach node to data context
    });
});
fi.on('fileuploadprogress', function (e, data) {
    var progress = parseInt(data.loaded / data.total * 100, 10);
    if (data.context) {
        data.context.each(function () {
            $(this).find('.progress').attr('aria-valuenow', progress).children().first().css('width',progress + '%').text(progress + '%');
        });
    }
});
fi.on('fileuploaddone', function (e, data) { // invoke callback method on success
    $.each(data.result.files, function (index, file) { //loop though each file
        if (file.url){ //successful upload returns a file url
            var link = $('<a>') .attr('target', '_blank') .prop('href', file.url);
            $(data.context.children()[index]).addClass('file-uploaded');
            $(data.context.children()[index]).find('canvas').wrap(link); //create a link to uploaded file url
            $(data.context.children()[index]).find('.file-remove').hide(); //hide remove button
            var done = $('<span class="text-success"/>').text('Uploaded!'); //show success message
            $(data.context.children()[index]).append(done); //add everything to data context
        } else if (file.error) {
            var error = $('<span class="text-danger"/>').text(file.error); //error text
            $(data.context.children()[index]).append(error); //add to data context
        }
    });
});