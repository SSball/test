<?php

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


Route::get('staff_list', 'StaffController@tableView');

Route::post('staff_add', 'StaffController@add');

Route::post('staff_add_check', 'StaffController@addCheck');

Route::post('staff_add_cmp', 'StaffController@addCmp');

Route::post('staff_delete_check', 'StaffController@delCheck');

Route::post('staff_delete_cmp', 'StaffController@delCmp');