<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\NewsletterRequest;
use Daw\DTO\NewsletterDTO;
use Daw\Service\impl\NewsletterServiceImpl;
use Daw\Service\NewsletterService;


class NewsletterController extends Controller
{
    private NewsletterService $newsletterService;
    function __construct()
    {
        $this->newsletterService = new NewsletterServiceImpl();
    }
    public function insert(NewsletterRequest $request)
    {
        $newsletter = new NewsletterDTO(null, $request->email, 1, 0);

        try {
            if ($this->newsletterService->insert($newsletter)) {
                return response()->json("El email fue guardado correctamente", 200);
            } else {
                return response()->json("El email " . $request->email . " ya fue registrado", 400);
            }
        } catch (\Throwable $th) {
            return response()->json("Ocurrió un error inesperado en el servidor", 500);
        }
    }
}
