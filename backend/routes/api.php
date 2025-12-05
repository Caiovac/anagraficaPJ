<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PersonaController;

Route::get('/persone', [PersonaController::class, 'index']);
Route::get('/persone/{id}', [PersonaController::class, 'show']);
