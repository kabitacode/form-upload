// =================Validation======================
// Add the novalidate attribute when the JS loads
var forms = document.querySelectorAll('.validate');
for (var i = 0; i < forms.length; i++) {
    forms[i].setAttribute('novalidate', true);
}


// Validate the field
var hasError = function (field) {

    // Don't validate submits, buttons, file and reset inputs, and disabled fields
    if (field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') return;

    // Get validity
    var validity = field.validity;

    // If valid, return null
    if (validity.valid) return;

    // If field is required and empty
    if (validity.valueMissing) return 'Please fill out this field.';

    // If not the right type
    if (validity.typeMismatch) {

        // Email
        if (field.type === 'email') return 'Please enter an email address.';

        // URL
        if (field.type === 'url') return 'Please enter a URL.';

    }

    // If too short
    if (validity.tooShort) return 'Please lengthen this text to ' + field.getAttribute('minLength') + ' characters or more. You are currently using ' + field.value.length + ' characters.';

    // If too long
    if (validity.tooLong) return 'Please shorten this text to no more than ' + field.getAttribute('maxLength') + ' characters. You are currently using ' + field.value.length + ' characters.';

    // If number input isn't a number
    if (validity.badInput) return 'Please enter a number.';

    // If a number value doesn't match the step interval
    if (validity.stepMismatch) return 'Please select a valid value.';

    // If a number field is over the max
    if (validity.rangeOverflow) return 'Please select a value that is no more than ' + field.getAttribute('max') + '.';

    // If a number field is below the min
    if (validity.rangeUnderflow) return 'Please select a value that is no less than ' + field.getAttribute('min') + '.';
  
      // If pattern doesn't match
    if (validity.patternMismatch) {

        // If pattern info is included, return custom error
        if (field.hasAttribute('title')) return field.getAttribute('title');

        // Otherwise, generic error
        return 'Please match the requested format.';

    }

    // If all else fails, return a generic catchall error
    return 'The value you entered for this field is invalid.';

};


// Show an error message
var showError = function (field, error) {

    // Add error class to field
    field.classList.add('error');
  
    // If the field is a radio button and part of a group, error all and get the last item in the group
    if (field.type === 'radio' && field.name) {
        var group = document.getElementsByName(field.name);
        if (group.length > 0) {
            for (var i = 0; i < group.length; i++) {
                // Only check fields in current form
                if (group[i].form !== field.form) continue;
                group[i].classList.add('error');
            }
            field = group[group.length - 1];
        }
    }

    // Get field id or name
    var id = field.id || field.name;
    if (!id) return;

    // Check if error message field already exists
    // If not, create one
    var message = field.form.querySelector('.error-message#error-for-' + id );
    if (!message) {
        message = document.createElement('div');
        message.className = 'error-message';
        message.id = 'error-for-' + id;
        
        // If the field is a radio button or checkbox, insert error after the label
        var label;
        if (field.type === 'radio' || field.type ==='checkbox') {
            label = field.form.querySelector('label[for="' + id + '"]') || field.parentNode;
            if (label) {
                label.parentNode.insertBefore( message, label.nextSibling );
            }
        }

        // Otherwise, insert it after the field
        if (!label) {
            field.parentNode.insertBefore( message, field.nextSibling );
        }

    }
    
    // Add ARIA role to the field
    field.setAttribute('aria-describedby', 'error-for-' + id);

    // Update error message
    message.innerHTML = error;

    // Show error message
    message.style.display = 'block';
    message.style.visibility = 'visible';

};


// Remove the error message
var removeError = function (field) {

    // Remove error class to field
    field.classList.remove('error');
    
    // Remove ARIA role from the field
    field.removeAttribute('aria-describedby');

    // If the field is a radio button and part of a group, remove error from all and get the last item in the group
    if (field.type === 'radio' && field.name) {
        var group = document.getElementsByName(field.name);
        if (group.length > 0) {
            for (var i = 0; i < group.length; i++) {
                // Only check fields in current form
                if (group[i].form !== field.form) continue;
                group[i].classList.remove('error');
            }
            field = group[group.length - 1];
        }
    }

    // Get field id or name
    var id = field.id || field.name;
    if (!id) return;
    

    // Check if an error message is in the DOM
    var message = field.form.querySelector('.error-message#error-for-' + id + '');
    if (!message) return;

    // If so, hide it
    message.innerHTML = '';
    message.style.display = 'none';
    message.style.visibility = 'hidden';

};


// Listen to all blur events
document.addEventListener('blur', function (event) {

    // Only run if the field is in a form to be validated
    if (!event.target.form.classList.contains('validate')) return;

    // Validate the field
    var error = hasError(event.target);
  
    // If there's an error, show it
    if (error) {
        showError(event.target, error);
        return;
    }

    // Otherwise, remove any existing error message
    removeError(event.target);

}, true);


// Check all fields on submit
document.addEventListener('submit', function (event) {

    // Only run on forms flagged for validation
    if (!event.target.classList.contains('validate')) return;

    // Get all of the form elements
    var fields = event.target.elements;

    // Validate each field
    // Store the first field with an error to a variable so we can bring it into focus later
    var error, hasErrors;
    for (var i = 0; i < fields.length; i++) {
        error = hasError(fields[i]);
        if (error) {
            showError(fields[i], error);
            if (!hasErrors) {
                hasErrors = fields[i];
            }
        }
    }

    // If there are errrors, don't submit form and focus on first element with error
    if (hasErrors) {
        event.preventDefault();
        hasErrors.focus();
    }

    // Otherwise, let the form submit normally
    // You could also bolt in an Ajax form submit process here

}, false);



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
 
 
//  function cek_kosong2(){
//     var nama_lengkap=$('#form2 #nama_lengkap').val();
//     var err='';
//     if (nama_lengkap=='') {
//        err+='<span style="color:red;s">nama lengkap mohon diisi.</span><br>';
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
    // if(cek_kosong2()){
    $('#form3').addClass("active");
 
    $('#form2').removeClass("active"); 
    // }
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
