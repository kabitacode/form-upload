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

$errors = array();
$uploadedFiles = array();
$extension = array("jpeg","jpg","png","gif");
$bytes = 2048;
$KB = 2048;
$totalBytes = $bytes * $KB;
$UploadFolder = "UploadFolder";
 
$counter = 0;
 
foreach($_FILES["files"]["tmp_name"] as $key=>$tmp_name){
    $temp = $_FILES["files"]["tmp_name"][$key];
    $name = $_FILES["files"]["name"][$key];
     
    if(empty($temp))
    {
        break;
    }
     
    $counter++;
    $UploadOk = true;
     
    if($_FILES["files"]["size"][$key] > $totalBytes)
    {
        $UploadOk = false;
        array_push($errors, $name." file size is larger than the 1 MB.");
    }
     
    $ext = pathinfo($name, PATHINFO_EXTENSION);
    if(in_array($ext, $extension) == false){
        $UploadOk = false;
        array_push($errors, $name." is invalid file type.");
    }
     
    if(file_exists($UploadFolder."/".$name) == true){
        $UploadOk = false;
        array_push($errors, $name." file is already exist.");
    }
     
    if($UploadOk == true){
        move_uploaded_file($temp,$UploadFolder."/".$name);
        array_push($uploadedFiles, $name);
    }
}
 
if($counter>0){
    if(count($errors)>0)
    {
        echo "<b>Errors:</b>";
        echo "<br/><ul>";
        foreach($errors as $error)
        {
            echo "<li>".$error."</li>";
        }
        echo "</ul><br/>";
    }
     
    if(count($uploadedFiles)>0){
        echo "<b>Uploaded Files:</b>";
        echo "<br/><ul>";
        foreach($uploadedFiles as $fileName)
        {
            echo "<li>".$fileName."</li>";
        }
        echo "</ul><br/>";
         
        echo count($uploadedFiles)." file(s) are successfully uploaded.";
    }                               
}
else{
    echo "Please, Select file(s) to upload.";
}
?>
