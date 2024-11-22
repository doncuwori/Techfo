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
})->name('pendataanBeasiswa');

Route::get('/pendataanLomba', function () {
    return Inertia::render('User/Pendataan/PendataanLomba');
})->name('pendataanLomba');

Route::get('/tambahInfoLomba', function () {
    return Inertia::render('Admin/TambahInfoLomba');
})->name('tambahInfoLomba');

Route::get('/tambahInfoBeasiswa', function () {
    return Inertia::render('Admin/TambahInfoBeasiswa');
})->name('tambahInfoBeasiswa');

Route::get('/tambahInfoPenelitian', function () {
    return Inertia::render('Admin/TambahInfoPenelitian');
})->name('tambahInfoPenelitian');

Route::get('/tambahInfoAbdimas', function () {
    return Inertia::render('Admin/TambahInfoAbdimas');
})->name('tambahInfoAbdimas');

Route::get('/detailInfoLomba', function () {
    return Inertia::render('Admin/DetailInfoLomba');
})->name('detailInfoLomba');

Route::get('/detailInfoBeasiswa', function () {
    return Inertia::render('Admin/DetailInfoBeasiswa');
})->name('detailInfoBeasiswa');

Route::get('/pusatLomba', function () {
    return Inertia::render('Admin/PusatLomba');
})->name('pusatLomba');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Landing Page
Route::get('/landingPage', function () {
    return Inertia::render('LandingPage');
})->name(name: 'landingPage');

// Login
Route::get('/loginUser', function () {
    return Inertia::render('User/LoginUser');
})->name('loginUser');


// Dashboard
Route::get('/dashboardAdmin', function () {
    return Inertia::render('Admin/DashboardAdmin');
})->name('dashboardAdmin');

Route::get('/dashboardUser', function () {
    return Inertia::render('User/DashboardUser');
})->name('dashboardUser');

// Lomba 
Route::get('/lomba', function () {
    return Inertia::render('User/Lomba/Lomba');
})->name('lomba');

Route::get('/detailLomba', function () {
    return Inertia::render(component: 'User/Lomba/DetailLomba');
})->name('detailLomba');

// Beasiswa
Route::get('/beasiswa', function () {
    return Inertia::render('User/Beasiswa/Beasiswa');
})->name('beasiswa');

Route::get('/detailBeasiswa', function () {
    return Inertia::render(component: 'User/Beasiswa/DetailBeasiswa');
})->name('detailBeasiswa');


// Abdimas
Route::get('/abdimas', function () {
    return Inertia::render('User/Abdimas/Abdimas');
})->name('abdimas');

Route::get('/detailAbdimas', function () {
    return Inertia::render(component: 'User/Abdimas/DetailAbdimas');
})->name('detailAbdimas');


// Penelitian
Route::get('/penelitian', function () {
    return Inertia::render('User/Penelitian/Penelitian');
})->name('penelitian');

Route::get('/detailPenelitian', function () {
    return Inertia::render(component: 'User/Penelitian/DetailPenelitian');
})->name('detailPenelitian');


// Pendataan
Route::get('/pendataanBeasiswa', function () {
    return Inertia::render('User/Pendataan/PendataanBeasiswa');
})->name('pendataanBeasiswa');;

Route::get('/pendataanLomba', function () {
    return Inertia::render('User/Pendataan/PendataanLomba');
})->name('pendataanLomba');;


// Frequently Asked Question
Route::get('/faq', function () {
    return Inertia::render('User/FAQ');
})->name('faq');



Route::get('/loginAdmin', function () {
    return Inertia::render('Admin/LoginAdmin');
});


// Profile
Route::get('/profile', function () {
    return Inertia::render('User/Profile');
})->name('profile');


// Pendaftaran
Route::get('/daftarAbdimas', function () {
    return Inertia::render('User/Abdimas/DaftarAbdimas');
});

Route::get('/daftarPenelitian', function () {
    return Inertia::render('User/Penelitian/DaftarPenelitian');
});

require __DIR__ . '/auth.php';

Route::get('/laporanLomba', function () {
    return Inertia::render('Admin/LaporanLomba');
})->name('laporanLomba');

Route::get('/laporanBeasiswa', function () {
    return Inertia::render('Admin/LaporanBeasiswa');
})->name('laporanBeasiswa');

Route::get('/laporanAbdimas', function () {
    return Inertia::render('Admin/LaporanAbdimas');
})->name('laporanAbdimas');

Route::get('/laporanPenelitian', function () {
    return Inertia::render('Admin/LaporanPenelitian');
})->name('laporanPenelitian');
