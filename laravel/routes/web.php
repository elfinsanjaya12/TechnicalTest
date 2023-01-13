<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HisotryUsersController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
    

//     $books = Book::all();
//     $data['chart_data'] = json_encode($books);

//     return view('welcome', $data);
// });


Route::resource('/', HisotryUsersController::class)->names('books');