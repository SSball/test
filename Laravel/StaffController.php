<?php
namespace App\Http\Controllers;
 
use Illuminate\Http\Request;
 
use DB;
use App\Http\Requests;
use App\Http\Controllers\Controller;
 
class StaffController extends Controller {
    
    public function add()
    {
        return view('staff_add');
    }
     
    public function addCheck(Request $request)
    {
    	$staff_name = $request->staff_name;
    	$staff_pass = $request->staff_pass;
    	$staff_pass2 = $request->staff_pass2;
 
        return view('staff_add_check',compact('staff_name','staff_pass','staff_pass2'));
    }

    public function addCmp(Request $request)
    {
    	$staff_name = $request->staff_name;
    	$staff_pass = $request->staff_pass;
    	
		return view('staff_add_cmp',compact('staff_name','staff_pass'));
    }

    public function tableView(Request $request){
        $data = \App\mst_staff::all();
        return view('staff_list', compact('data'));
    }

    public function delCheck(Request $request){
        $staff_code = $request->staff_code;
        $name = 'staff_name' . $staff_code;
        $staff_name = $request->$name;
        return view('staff_delete_check', compact('staff_code', 'staff_name'));
    }

    public function delCmp(Request $request){
        $staff_code = $request->staff_code;
        return view('staff_delete_cmp', compact('staff_code'));
    }

}

