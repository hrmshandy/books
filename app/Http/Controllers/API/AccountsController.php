<?php

namespace App\Http\Controllers\API;

use App\Http\Resources\AccountCollection;
use IFRS\Models\Account;
use Illuminate\Http\Request;

class AccountsController extends ApiController
{
    public function index()
    {
        $accounts = Account::all();

        return $this->respond(new AccountCollection($accounts));
    }

    public function types()
    {
        return $this->respond(config('ifrs.accounts'));
    }
}
