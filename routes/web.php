<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/test', function () {
    return Inertia::render('Test');
});

Route::get('/pendataanBeasiswa', function () {
    return Inertia::render('User/Pendataan/PendataanBeasiswa');
});

Route::get('/pendataanLomba', function () {

    return Inertia::render('User/Pendataan/PendataanLomba');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/dashboardAdmin', function () {
    return Inertia::render('Admin/DashboardAdmin');
});

Route::get('/loginUser', function () {
    return Inertia::render('User/LoginUser');
})->name('loginUser');

Route::get('/dashboardUser', function () {
    return Inertia::render('User/DashboardUser');
})->name('dashboardUser');

Route::get('/detailBeasiswa', function () {
    return Inertia::render('User/Beasiswa/DetailBeasiswa');
})->name('detailBeasiswa');

Route::get('/lomba', function () {
    return Inertia::render('User/Lomba');
})->name('lomba');

Route::get('/beasiswa', function () {
    return Inertia::render('User/Beasiswa/Beasiswa');
})->name('beasiswa');

Route::get('/loginAdmin', function () {
    return Inertia::render('Admin/LoginAdmin');
});

Route::get('/faq', function () {
    return Inertia::render('User/FAQ');
})->name('faq');

Route::get('/daftarAbdimas', function () {
    return Inertia::render('User/Abdimas/DaftarAbdimas');
});

Route::get('/daftarPenelitian', function () {
    return Inertia::render('User/Penelitian/DaftarPenelitian');
});

require __DIR__ . '/auth.php';

Route::get('/laporanLomba', function () {
    return Inertia::render('Admin/Laporan/LaporanLomba');
})->name('laporanLomba');

Route::get('/laporanBeasiswa', function () {
    return Inertia::render('Admin/Laporan/LaporanBeasiswa');
})->name('laporanBeasiswa');

Route::get('/laporanPenelitian', function () {
    return Inertia::render('Admin/Laporan/LaporanPenelitian');
})->name('laporanPenelitian');

Route::get('/laporanAbdimas', function () {
    return Inertia::render('Admin/Laporan/LaporanAbdimas');
})->name('laporanAbdimas');


Route::get('/pusatinfoPenelitian', function () {
    return Inertia::render('Admin/Pusat Informasi/PusatInformasiPenelitian');
})->name('pusatinfoPenelitian');

Route::get('/pusatinfoAbdimas', function () {
    return Inertia::render('Admin/Pusat Informasi/PusatInformasiAbdimas');
})->name('pusatinfoAbdimas');
