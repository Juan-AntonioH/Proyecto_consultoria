<?php

use App\Models\Newsletter;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\EmpleoController;
use App\Http\Controllers\Api\ContactoController;
use App\Http\Controllers\Api\NewsletterController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
// Route::get('games', function () {
//     return response()->json("hola", 200);
// });

Route::post('contacto', [ContactoController::class, 'insert']);
Route::post('empleo', [EmpleoController::class, 'insert']);
Route::post('newsletter', [NewsletterController::class, 'insert']);
