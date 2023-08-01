<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Controllers\PdfController;
use Illuminate\Http\Request;

class EmpleoController extends Controller
{
    public function __construct()
    {
    }

    public function insert(Request $request)
    {
        // Verifica si el formulario contiene el archivo PDF con el nombre "name"
        if ($request->hasFile('file') && $request->file('file')->isValid()) {
            $pdfFile = $request->file('file');
            // dd($pdfFile);
            // Llama a la función "upload" de PdfController para guardar el archivo
            $pdfController = new PdfController();
            $response = $pdfController->upload($pdfFile);

            // Asegúrate de que la respuesta del controlador PdfController sea una respuesta JSON
            if ($response && $response->getStatusCode() === 200) {
                return response()->json(['message' => 'Archivo PDF subido correctamente'], 200);
            } else {
                return response()->json(['message' => 'Error al guardar el archivo PDF'], 500);
            }
        }

        return response()->json(['message' => 'No se seleccionó ningún archivo PDF'], 400);
    }
}
