<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Indirizzo extends Model
{
    use HasFactory;

    protected $fillable = [
        'persona_id',
        'via',
        'cap',
        'citta',
        'provincia',
        'stato',
    ];

    public function persona()
    {
        return $this->belongsTo(Persona::class);
    }
}
