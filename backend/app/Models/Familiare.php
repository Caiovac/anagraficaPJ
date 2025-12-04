<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Familiare extends Model
{
    use HasFactory;

    protected $fillable = [
        'persona_id',
        'nome',
        'cognome',
        'relazione',
        'data_nascita',
    ];

    public function persona()
    {
        return $this->belongsTo(Persona::class);
    }
}
