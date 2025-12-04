<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Persona extends Model
{
    use HasFactory;

    protected $table = 'persone';

    protected $fillable = [
        'nome',
        'cognome',
        'data_nascita',
        'codice_fiscale',
        'sesso',
    ];

    public function indirizzo()
    {
        return $this->hasOne(Indirizzo::class);
    }

    public function familiari()
    {
        return $this->hasMany(Familiare::class);
    }
}
