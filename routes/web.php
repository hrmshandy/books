<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SpaController;
use IFRS\Models\Account;
use IFRS\Models\Currency;
use IFRS\Models\Entity;
use IFRS\Models\Vat;

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

Route::get('setup', function () {
    $bankAccount = Account::create([
        'name' => "Akun Bank",
        'account_type' => Account::BANK,
    ]);

    $revenueAccount = Account::create([
        'name' => "Piutang Jasa",
        'account_type' => Account::OPERATING_REVENUE,
    ]);

    $clientAccount = Account::create([
        'name' => "Pendapatan Umum",
        'account_type' => Account::RECEIVABLE,
    ]);

    $supplierAccount = Account::create([
        'name' => "Utang Jasa",
        'account_type' => Account::PAYABLE,
    ]);

    $opexAccount = Account::create([
        'name' => "Gaji dan Upah Karyawan",
        'account_type' => Account::OPERATING_EXPENSE,
    ]);

    $opexAccount = Account::create([
        'name' => "Makan dan Hiburan",
        'account_type' => Account::OPERATING_EXPENSE,
    ]);

    $opexAccount = Account::create([
        'name' => "Biaya Perjalanan",
        'account_type' => Account::OPERATING_EXPENSE,
    ]);

    $opexAccount = Account::create([
        'name' => "Biaya IT dan Internet",
        'account_type' => Account::OPERATING_EXPENSE,
    ]);

    $assetAccount = Account::create([
        'name' => "Peralatan Kantor",
        'account_type' => Account::NON_CURRENT_ASSET,
    ]);

    $salesVatAccount = Account::create([
        'name' => "Sales VAT Account",
        'account_type' => Account::CONTROL,
    ]);

    $purchasesVatAccount = Account::create([
        'name' => "Input VAT Account",
        'account_type' => Account::CONTROL,
    ]);

    $outputVat = Vat::create([
        'name' => "Standard Output Vat",
        'code' => "O",
        'account_id' => $salesVatAccount->id,
        'rate' => 20,
    ]);

    $inputVat = Vat::create([
        'name' => "Standard Input Vat",
        'code' => "I",
        'account_id' => $purchasesVatAccount->id,
        'rate' => 10,
    ]);

    $zeroVat = Vat::create([
        'name' => "Zero Vat",
        'code' => "Z",
        'rate' => 0,
    ]);
});
Route::get('/{any}', [SpaController::class, 'index'])->where('any', '.*');
