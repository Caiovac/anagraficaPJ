<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Indirizzo extends Model
{
    use HasFactory;

    protected $table = 'indirizzi';

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
