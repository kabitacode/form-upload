<?php

// excel template
function excelTemplate($excel)
{
   global $title, $fontStyle, $borderStyle, $fillStyle, $fillStyle2, $fillStyle3, $fillStyle4;

   // title cell style
   $titleCell = array('B6', 'B12', 'B17', 'B22', 'B26', 'B31', 'B37', 'B41', 'E4', 'E5:F5', 'E6:F6', 'E14', 'E28', 'E36', 'E44', 'H5:I5', 'H27');
   for ($i = 0; $i < count($titleCell); $i++) {
      cellStyle($excel, $titleCell[$i], $title);
   }
   // Set Column Width
   cellWidth($excel, 'A', 2);
   cellWidth($excel, 'B', 35);
   cellWidth($excel, 'C', 35);
   cellWidth($excel, 'D', 4);
   cellWidth($excel, 'E', 40);
   cellWidth($excel, 'F', 40);
   cellWidth($excel, 'G', 4);
   cellWidth($excel, 'H', 20);
   cellWidth($excel, 'I', 40);

   $excel->getActiveSheet()->getStyle('B2:C45')->getAlignment()->setVertical(PHPExcel_Style_Alignment::VERTICAL_CENTER);
   $excel->getActiveSheet()->getStyle('E4:F46')->getAlignment()->setVertical(PHPExcel_Style_Alignment::VERTICAL_CENTER);
   $excel->getActiveSheet()->getStyle('h6:I49')->getAlignment()->setVertical(PHPExcel_Style_Alignment::VERTICAL_TOP);

   // Merging 
   $mergeCells = array('B6:C6', 'B12:C12', 'B17:C17', 'B22:C22', 'B26:C26', 'B31:C31', 'B37:C37', 'B41:C41', 'E4:F4', 'E6:F6', 'E14:F14', 'E28:F28', 'E36:F36', 'E44:F44', 'H6:H8', 'H9:H11', 'H12:H14', 'H15:H17', 'I6:I8', 'I9:I11', 'I12:I14', 'I15:I17', 'H27:i27', 'H28:H37', 'H38:H45', 'H46:H52', 'I28:I37', 'I38:I45', 'I46:I52');

   for ($i = 0; $i < count($mergeCells); $i++) {
      $excel->getActiveSheet()->mergeCells($mergeCells[$i]);
   }

   cellStyle($excel, 'B2:C2', $fontStyle);
   cellStyle($excel, 'B3:C3', $fontStyle);
   cellStyle($excel, 'B5:C45', $borderStyle);
   cellStyle($excel, 'B5:C45', $fontStyle);
   cellStyle($excel, 'H20:I24', $borderStyle);
   cellStyle($excel, 'H20:I24', $fontStyle);
   cellStyle($excel, 'E5:F46', $borderStyle);
   cellStyle($excel, 'E5:F46', $fontStyle);
   cellStyle($excel, 'H6:I17', $borderStyle);
   cellStyle($excel, 'H6:I17', $fontStyle);
   cellStyle($excel, 'H27:I52', $borderStyle);
   cellStyle($excel, 'H27:I52', $fontStyle);

   // cell background style
   cellStyle($excel, 'H20:H22', $fillStyle);
   cellStyle($excel, 'H23:H24', $fillStyle2);
   cellStyle($excel, 'B2:C2', $fillStyle3);
   cellStyle($excel, 'B3:C3', $fillStyle4);


   // Templpate Form Registration
   $excel->setActiveSheetIndex(0)
      ->setCellValue('B2', 'Tanggal Register')
      ->setCellValue('B3', 'Tanggal Verif');

   // Header Data
   $excel->setActiveSheetIndex(0)
      ->setCellValue('B5', 'Keterangan')
      ->setCellValue('C5', 'Data');

   $excel->getActiveSheet()->getStyle('B5:C5')->applyFromArray(
      array(
         'fill' => array(
            'type' => PHPExcel_Style_Fill::FILL_SOLID,
            'color' => array('rgb' => 'd0d0d0')
         ),
         'font' => array(
            'bold' => true,
            'name' => 'Arial',
            'size' => 10
         )
      )
   );

   // Data Pribadi
   $excel->setActiveSheetIndex(0)
      ->setCellValue('B6', 'DATA PRIBADI')
      ->setCellValue('B7', 'Nama lengkap')
      ->setCellValue('B8', 'Nama panggilan')
      ->setCellValue('B9', 'Telepon-1')
      ->setCellValue('B10', 'Telepon-2')
      ->setCellValue('B11', 'Email');

   // Media Sosial
   $excel->setActiveSheetIndex(0)
      ->setCellValue('B12', 'MEDIA SOSIAL')
      ->setCellValue('B13', 'Facebook')
      ->setCellValue('B14', 'Email facebook')
      ->setCellValue('B15', 'Instagram')
      ->setCellValue('B16', 'Twitter');

   // Rencana Sewa
   $excel->setActiveSheetIndex(0)
      ->setCellValue('B17', 'RENCANA SEWA')
      ->setCellValue('B18', 'Jenis alat')
      ->setCellValue('B19', 'Tanggal Register')
      ->setCellValue('B20', 'Acara')
      ->setCellValue('B21', 'Cabang Zenon');

   // Data Penunjang
   $excel->setActiveSheetIndex(0)
      ->setCellValue('B22', 'DATA PENUNJANG')
      ->setCellValue('B23', 'Mengetahui zenon dari mana?')
      ->setCellValue('B24', 'Sebelumnya sewa dimana?')
      ->setCellValue('B25', 'Atas nama siapa?');

   // Keluarga yang Serumah
   $excel->setActiveSheetIndex(0)
      ->setCellValue('B26', 'KELUARGA YG SERUMAH')
      ->setCellValue('B27', 'Atas nama siapa?')
      ->setCellValue('B28', 'Hubungan dengan penyewa')
      ->setCellValue('B29', 'Telepon (HP)')
      ->setCellValue('B30', 'Alamat');

   // Pekerjaan
   $excel->setActiveSheetIndex(0)
      ->setCellValue('B31', 'PEKERJAAN')
      ->setCellValue('B32', 'Pekerjaan sekarang')
      ->setCellValue('B33', 'Nama tempat kerja')
      ->setCellValue('B34', 'Jabatan kerja')
      ->setCellValue('B35', 'Alamat tempat kerja')
      ->setCellValue('B36', 'Telpon tempat kerja');

   // Alamat tinggal sekarang
   $excel->setActiveSheetIndex(0)
      ->setCellValue('B37', 'ALAMAT TINGGAL SEKARANG')
      ->setCellValue('B38', 'Status alamat tinggal sekarang')
      ->setCellValue('B39', 'Nama pemilik')
      ->setCellValue('B40', 'Telpon pemilik');

   // Pendidikan
   $excel->setActiveSheetIndex(0)
      ->setCellValue('B41', 'PENDIDIKAN')
      ->setCellValue('B42', 'Pendidikan sedang berjalan/terakhir')
      ->setCellValue('B43', 'Nama lembaga pendidikan')
      ->setCellValue('B44', 'Alamat lembaga pendidikan')
      ->setCellValue('B45', 'Info tambahan (angkatan masuk)');

   // Verifikasi part
   $excel->setActiveSheetIndex(0)
      ->setCellValue('E4', 'Verifikasi');

   $excel->getActiveSheet()->getStyle('E4')->applyFromArray(
      array(
         'fill' => array(
            'type' => PHPExcel_Style_Fill::FILL_SOLID,
            'color' => array('rgb' => 'bed1f1')
         ),
         'font' => array(
            'bold' => true,
            'name' => 'Arial',
            'size' => 10
         ),
         'alignment' => array(
            'horizontal' => PHPExcel_Style_Alignment::HORIZONTAL_CENTER
         )
      )
   );

   // Header Verif
   $excel->setActiveSheetIndex(0)
      ->setCellValue('E5', 'PROS (+)')
      ->setCellValue('F5', 'CONS (-)');


   // Umum
   $excel->setActiveSheetIndex(0)
      ->setCellValue('E6', '## UMUM')
      ->setCellValue('E7', '-Cek daftar blacklist:')
      ->setCellValue('E8', '-Cek validasi NIK KTP (Via App dan web KPU):')
      ->setCellValue('E9', '-Cek keamanan data (semua dokumen):')
      ->setCellValue('E10', '-Tracking nama:')
      ->setCellValue('E11', '-Tracking HP:')
      ->setCellValue('E12', '-Apakah pemilik sebuah vendor:')
      ->setCellValue('E13', '');

   // Medsos Fb
   $excel->setActiveSheetIndex(0)
      ->setCellValue('E14', '## MEDSOS FB')
      ->setCellValue('E15', '-dp muka:')
      ->setCellValue('E16', '-foto selfie:')
      ->setCellValue('E17', '-awal bikin:')
      ->setCellValue('E18', '-LU:')
      ->setCellValue('E19', '-Interval post:')
      ->setCellValue('E20', '-valid bday:')
      ->setCellValue('E21', '-valid kerjaan:')
      ->setCellValue('E22', '-valid sekolah:')
      ->setCellValue('E23', '-valid hub, suami istri:')
      ->setCellValue('E24', '-portfolio:')
      ->setCellValue('E25', '-mf:')
      ->setCellValue('E26', '-lainnya:')
      ->setCellValue('E27', '');

   // Medsos Ig
   $excel->setActiveSheetIndex(0)
      ->setCellValue('E28', '## MEDSOS IG')
      ->setCellValue('E29', '-dp muka:')
      ->setCellValue('E30', '-post:')
      ->setCellValue('E31', '-follower:')
      ->setCellValue('E32', '-portfolio:')
      ->setCellValue('E33', '-selfie:')
      ->setCellValue('E34', '-LU:')
      ->setCellValue('E35', '');

   // Medsos Tw
   $excel->setActiveSheetIndex(0)
      ->setCellValue('E36', '## MEDSOS TW')
      ->setCellValue('E37', '-dp muka:')
      ->setCellValue('E38', '-join:')
      ->setCellValue('E39', '-post:')
      ->setCellValue('E40', '-follower:')
      ->setCellValue('E41', '-selfie:')
      ->setCellValue('E42', '-LU:')
      ->setCellValue('E43', '');

   // Website
   $excel->setActiveSheetIndex(0)
      ->setCellValue('E44', '## WEBSITE')
      ->setCellValue('E45', 'website pribadi/vendor:')
      ->setCellValue('E46', 'whois:');

   // Header Note
   $excel->setActiveSheetIndex(0)
      ->setCellValue('H5', 'NOTE')
      ->setCellValue('I5', 'KETERANGAN');

   $excel->setActiveSheetIndex(0)
      ->setCellValue('H6', 'KEKURANGAN DATA:')
      ->setCellValue('H9', 'KESIMPULAN CCO:')
      ->setCellValue('H12', 'KESIMPULAN SPV:')
      ->setCellValue('H15', 'KESIMPULAN CCO:');

   $excel->setActiveSheetIndex(0)
      ->setCellValue('H20', 'LEVEL CCO')
      ->setCellValue('H21', 'LEVEL SPV:')
      ->setCellValue('H22', 'LEVEL GM')
      ->setCellValue('H23', 'LEVEL AKHIR')
      ->setCellValue('H24', 'STATUS');

   $excel->setActiveSheetIndex(0)
      ->setCellValue('H27', 'UPLOAD FOTO & DOKUMEN')
      ->setCellValue('H28', 'Foto selfie terbaru')
      ->setCellValue('H38', 'KTP (Wajib)')
      ->setCellValue('H46', 'Dokumen berharga lain');
}
