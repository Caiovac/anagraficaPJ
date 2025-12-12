<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Familiare extends Model
{
    use HasFactory;

    protected $table = 'familiari';

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
