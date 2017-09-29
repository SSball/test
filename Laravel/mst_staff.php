<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class mst_staff extends Model {
    protected $table = 'mst_staff';

    protected $guarded = array('code');

    public $timestamps = true;
}
