<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;

class PdfController extends Controller
{
    public function upload(UploadedFile $pdfFile)
    {
        if ($pdfFile->isValid()) {
            // Genera un nombre único para el archivo PDF para evitar colisiones de nombres
            $fileName = uniqid('curriculum_') . '.' . $pdfFile->getClientOriginalExtension();

            // Almacena el archivo en la carpeta "pdfs" dentro del disco configurado en el filesystems.php
            $pdfFile->move('uploads/pdfs', $fileName);

            // También puedes guardar la información del archivo en la base de datos si es necesario.
            // Por ejemplo, si tienes un modelo "Pdf" con un campo "ruta_archivo", puedes hacer lo siguiente:
            // $pdf = new Pdf();
            // $pdf->ruta_archivo = 'pdfs/' . $fileName;
            // $pdf->save();

            return response()->json(['message' => 'Archivo PDF subido correctamente'], 200);
        }

        return response()->json(['message' => 'Error al subir el archivo PDF'], 500);
    }
}
