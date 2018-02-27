<?php

// fungsi styling cell
function cellStyle($excel, $cell, $style)
{
   $excel->getActiveSheet()->getStyle($cell)->applyFromArray($style);
}

// fungsi cell width
function cellWidth($excel, $column, $width)
{
   $excel->setActiveSheetIndex(0)->getColumnDimension($column)->setWidth($width);
}

// fungsi add gambar
function cellImg($img = '', $cell)
{
   global $excel;
   if($img["error"] != 0 ) {
      $excel->setActiveSheetIndex(0)
         ->setCellValue($cell, '');
   } else {
      $folder = "./images/";
      $name_file = $img['name'];
      $tmp_file = $img['tmp_name'];

      move_uploaded_file($tmp_file, $folder.$name_file);


      $Img = new PHPExcel_Worksheet_Drawing();

      $Img->setPath($folder.$name_file);
      $Img->setHeight(150);
      $Img->setCoordinates($cell);
      $Img->setWorksheet($excel->getActiveSheet());
   }
}

// cell input data
function data($excel, $data = '')
{
   global $image;
   // Tanggal Form Registration
   $excel->setActiveSheetIndex(0)
      ->setCellValue('C2', 'Tanggal Register')
      ->setCellValue('C3', 'Tanggal Verif');

   // Bagian Data Pribadi
   $excel->setActiveSheetIndex(0)
      ->setCellValue('C7', $data["nama_lengkap"])
      ->setCellValue('C8', $data["nama_panggilan"])
      ->setCellValue('C9', $data["telepon_1"])
      ->setCellValue('C10', $data["telepon_2"])
      ->setCellValue('C11', $data["email"]);

   // Media Sosial 
   $excel->setActiveSheetIndex(0)
      ->setCellValue('C13', $data["nama_facebook"])
      ->setCellValue('C14', $data["email_facebook"])
      ->setCellValue('C15', $data["nama_instagram"])
      ->setCellValue('C16', $data["nama_twitter"]);

   // Rencana Sewa
   $excel->setActiveSheetIndex(0)
      ->setCellValue('C18', $data["jenis_alat"])
      ->setCellValue('C19', $data["tanggal"])
      ->setCellValue('C20', $data["acara"])
      ->setCellValue('C21', $data["cabang_zenon"]);

   // Data Penunjang
   $excel->setActiveSheetIndex(0)
      ->setCellValue('C23', $data["mengetahui_zenon"])
      ->setCellValue('C24', $data["sewa"])
      ->setCellValue('C25', $data["sewa_atas_nama"]);

   // Keluarga yang Serumah
   $excel->setActiveSheetIndex(0)
      ->setCellValue('C27', $data["nama_keluarga"])
      ->setCellValue('C28', $data["hubungan_penyewa"])
      ->setCellValue('C29', $data["hp"])
      ->setCellValue('C30', $data["alamat_keluarga"]);

   // Pekerjaan
   $excel->setActiveSheetIndex(0)
      ->setCellValue('C32', $data["pekerjaan_sekarang"])
      ->setCellValue('C33', $data["nama_tmpt_kerja"])
      ->setCellValue('C34', $data["jabatan_kerja"])
      ->setCellValue('C35', $data["alamat_tmpt_kerja"])
      ->setCellValue('C36', $data["telepon_tmpt_kerja"]);

   // Alamat tinggal sekarang
   $excel->setActiveSheetIndex(0)
      ->setCellValue('C38', $data["status_tinggal"])
      ->setCellValue('C39', $data["nama_pemilik"])
      ->setCellValue('C40', $data["telepon_pemilik"]);

   // Pendidikan
   $excel->setActiveSheetIndex(0)
      ->setCellValue('C42', $data["pendidikan_sekarang"])
      ->setCellValue('C43', $data["nama_lembaga"])
      ->setCellValue('C44', $data["alamat_lembaga"])
      ->setCellValue('C45', $data["info_tambahan"]);

   // Umum
   $excel->setActiveSheetIndex(0)
      ->setCellValue('F7', '')
      ->setCellValue('F8', '')
      ->setCellValue('F9', '')
      ->setCellValue('F10', '')
      ->setCellValue('F11', '')
      ->setCellValue('F12', '')
      ->setCellValue('F13', '');

   // Medsos Fb
   $excel->setActiveSheetIndex(0)
      ->setCellValue('F15', '')
      ->setCellValue('F16', '')
      ->setCellValue('F17', '')
      ->setCellValue('F18', '')
      ->setCellValue('F19', '')
      ->setCellValue('F20', '')
      ->setCellValue('F21', '')
      ->setCellValue('F22', '')
      ->setCellValue('F23', '')
      ->setCellValue('F24', '')
      ->setCellValue('F25', '')
      ->setCellValue('F26', '')
      ->setCellValue('F27', '');

   // Medsos Ig
   $excel->setActiveSheetIndex(0)
      ->setCellValue('F29', '')
      ->setCellValue('F30', '')
      ->setCellValue('F31', '')
      ->setCellValue('F32', '')
      ->setCellValue('F33', '')
      ->setCellValue('F34', '')
      ->setCellValue('F35', '');

   // Medsos Tw
   $excel->setActiveSheetIndex(0)
      ->setCellValue('F37', '')
      ->setCellValue('F38', '')
      ->setCellValue('F39', '')
      ->setCellValue('F40', '')
      ->setCellValue('F41', '')
      ->setCellValue('F42', '')
      ->setCellValue('F43', '');

   // Website
   $excel->setActiveSheetIndex(0)
      ->setCellValue('F45', '')
      ->setCellValue('F46', '');


   $excel->setActiveSheetIndex(0)
      ->setCellValue('I6', '')
      ->setCellValue('I9', '')
      ->setCellValue('I12', '')
      ->setCellValue('I15', '');

   $excel->setActiveSheetIndex(0)
      ->setCellValue('I20', '')
      ->setCellValue('I21', '')
      ->setCellValue('I22', '')
      ->setCellValue('I23', '')
      ->setCellValue('I24', '');

   //cellFoto($image);
   //cellKtp($image);
   //cellDokumen($image);
}


// cell title
$title = array( 
   'fill' => array( 
      'type' => PHPExcel_Style_Fill::FILL_SOLID, 
      'color' => array('rgb' => 'f0f0f0')
   ), 
   'font' => array( 
      'bold' => true, 
      'size' => 10, 
      'name' => 'Arial'
   )
);


// cell border
$borderStyle = array(
   'borders' => array(
      'allborders' => array(
         'style' => PHPExcel_Style_Border::BORDER_THIN,
         'color' => array('rgb' => 'a6a6a6')
      )
   )
);

// cell font
$fontStyle = array(
   'font' => array(
      'size' => 10,
      'name' => 'Arial'

   )
);

// cell background
$fillStyle = array(
   'fill' => array(
      'type' => PHPExcel_Style_Fill::FILL_SOLID, 
      'color' => array('rgb' => 'f3bc93')
   ),
   'font' => array(
      'bold' => true
   )
);

$fillStyle2 = array(
   'fill' => array(
      'type' => PHPExcel_Style_Fill::FILL_SOLID, 
      'color' => array('rgb' => 'fedd8b')
   ),
   'font' => array(
      'bold' => true
   )
);

$fillStyle3 = array(
   'fill' => array(
      'type' => PHPExcel_Style_Fill::FILL_SOLID, 
      'color' => array('rgb' => 'ecc0c1')
   ),
   'font' => array(
      'bold' => true
   )
);

$fillStyle4 = array(
   'fill' => array(
      'type' => PHPExcel_Style_Fill::FILL_SOLID, 
      'color' => array('rgb' => 'b0cb96')
   ),
   'font' => array(
      'bold' => true
   )
);

?>
