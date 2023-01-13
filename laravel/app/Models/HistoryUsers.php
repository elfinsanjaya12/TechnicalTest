<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;
use App\Models\Users;

class HistoryUsers extends Eloquent
{
    use HasFactory;
    protected $connection = 'mongodb';
    protected $collection = 'historyusers';
    protected $fillable = ['_id', 'name', 'userId'];
    public function user()
    {
        return $this->belongsTo(Users::class, 'userId');
    }
  
}