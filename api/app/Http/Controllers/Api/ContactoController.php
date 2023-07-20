<?php

namespace App\Http\Controllers\Api;

use Daw\DTO\ContactosDTO;
use Illuminate\Http\Request;
use Daw\Service\ContactoService;
use PhpParser\Node\Stmt\TryCatch;
use App\Http\Controllers\Controller;
use App\Http\Requests\ContactoRequest;

use Daw\Service\impl\ContactoServiceImpl;
use Illuminate\Support\Facades\Validator;


class ContactoController extends Controller
{
    private ContactoService $contactoService;
    function __construct()
    {
        $this->contactoService = new ContactoServiceImpl();
    }

    public function insert(ContactoRequest $request)
    {
        $commonRules = [
            'nombre' => 'required|string|min:2|max:30|regex:/^[A-Za-z\s\xF1\xD1]+$/',
            'email' => 'required|email',
            'movil' => 'required|string|min:7|max:12|regex:/^([0-9])*$/',
        ];

        $validator = Validator::make($request->all(), $commonRules);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $contacto = new ContactosDTO(
            null,
            $request->nombre,
            $request->email,
            $request->movil,
            $request->empresa,
            $request->mensaje,
            0
        );

        try {
            if ($this->contactoService->insert($contacto)) {
                return response()->json("Formulario de contacto guardado correctamente", 200);
            } else {
                return response()->json("Ocurrió un error al guardar los datos", 400);
            }
        } catch (\Throwable $th) {
            return response()->json("Ocurrió un error inesperado en el servidor", 500);
        }
    }
}
