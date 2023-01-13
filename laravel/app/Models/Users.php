<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model;
use Illuminate\Support\Str;


class Users extends Model
{
    use HasFactory;
    protected $connection = 'mongodb';
    protected $collection = 'users';
    protected $fillable = ['id', 'name'];

    public function parent()
    {
        return $this->belongsTo(Users::class);
    }
}