<?php
require_once './Classes/PHPExcel.php';
require_once './function.php';
require_once './excel_template.php';

// Create PHPExcel object
$excel = new PHPExcel();

$data = $_POST;

$image = $_FILES;

// remove gridlines
$excel->getActiveSheet()->setShowGridlines(false);

// Excel Template
excelTemplate($excel);

// input cell
data($excel, $data);

cellImg($image["foto_selfie"], 'I28');
cellImg($image["ktp_wajib"], 'I38');
cellImg($image["dokumen_berharga"], 'I46');


// Redirect to browser Download
//
header('Content-Tyype: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
header('Content-Disposition: attachment; filename="text.xlsx"');
header('Cache-Control: max-age=0');

// Write the result to a file
$file = PHPExcel_IOFactory::createWriter($excel, 'Excel2007');
// Output to php output
$file->save('php://output');

?>

<?php

// A list of permitted file extensions
$allowed = array('png', 'jpg', 'gif','zip');

if(isset($_FILES['upl']) && $_FILES['upl']['error'] == 0){

    $extension = pathinfo($_FILES['upl']['name'], PATHINFO_EXTENSION);

    if(!in_array(strtolower($extension), $allowed)){
        echo '{"status":"error"}';
        exit;
    }

    if(move_uploaded_file($_FILES['upl']['tmp_name'], 'uploads/'.$_FILES['upl']['name'])){
        echo '{"status":"success"}';
        exit;
    }
}

echo '{"status":"error"}';
exit;