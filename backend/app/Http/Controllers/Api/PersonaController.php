<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Persona;
use Illuminate\Http\Request;

class PersonaController extends Controller
{
    /**
     * GET /api/persone
     * Ritorna la lista di tutte le persone
     */
    public function index()
    {
        // SELECT * FROM persone
        return Persona::with(['indirizzo', 'familiari'])->get();
    }

    /**
     * GET /api/persone/{id}
     * Ritorna i dati di UNA persona
     */
    public function show($id)
    {
        // SELECT * FROM persone WHERE id = ?
        // se non la trova → 404 automatico
        return Persona::findOrFail($id);
    }

    

    /**
     * POST /api/persone
     * Crea una nuova persona
     */
    public function store(Request $request)
    {
        
    }

    /**
     * PUT /api/persone/{id}
     * Aggiorna una persona esistente
     */
    public function update(Request $request, $id)
    {
       
    }

    /**
     * DELETE /api/persone/{id}
     * Elimina una persona
     */
    public function destroy($id)
    {

    }
}
