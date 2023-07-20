<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class EmpleoController extends Controller
{
    public function __construct()
    {}

    public function insert(Request $request)
    {

        return response()->json($request, 200);
    }
}
