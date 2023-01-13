<?php

namespace App\Http\Controllers;

use App\Models\HistoryUsers;
use Illuminate\Http\Request;


class HisotryUsersController extends Controller
{
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $historyUser = HistoryUsers::with('user')->get();   
        return view('welcome', compact('historyUser'));
    }
}