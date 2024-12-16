<?php

use App\Http\Controllers\AbdimasInformationController;
use App\Http\Controllers\Admin\AdminCompetitionController;
use App\Http\Controllers\Admin\AdminScholarshipController;
use App\Http\Controllers\Admin\AdminAbdimasController;
use App\Http\Controllers\Admin\AdminResearchController;
use App\Http\Controllers\Admin\DashboardAdminController;
use App\Http\Controllers\Admin\PusatInformasiLombaController;
use App\Http\Controllers\Admin\PusatInformasiBeasiswaController;
use App\Http\Controllers\Admin\PusatInformasiAbdimasController;
use App\Http\Controllers\Admin\PusatInformasiPenelitianController;
use App\Http\Controllers\LandingPage\LandingPageController;
use App\Http\Controllers\CompetitionInformationController;
use App\Http\Controllers\CompetitionRegistrantController;
use App\Http\Controllers\CompetitionsAchievementController;
use App\Http\Controllers\CompetitionWinnerController;
use App\Http\Controllers\DashboardUserController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LoginPageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ResearchInformationController;
use App\Http\Controllers\ScholarshipInformationController;
use App\Http\Controllers\ScholarshipRecipientController;
use App\Http\Controllers\ScholarshipRegistrantController;
use App\Models\Abdimas\AbdimasInformation;
use App\Models\Competitions\CompetitionInformation;
use App\Models\Competitions\CompetitionWinner;
use App\Models\Researchs\ResearchInformation;
use App\Models\Scholarships\ScholarshipInformation;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Landing Page
Route::get('/landingPage', [LandingPageController::class, 'index'])->name(name: 'landingPage');


// Login
Route::get('/login', [LoginPageController::class, 'index'])->name('login');


Route::get('/detailLomba', function () {
    return Inertia::render(component: 'User/Lomba/DetailLomba');
})->name('detailLomba');





// Frequently Asked Question
Route::get('/faq', function () {
    return Inertia::render('User/FAQ');
})->name('faq');

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
Route::get('/', [HomeController::class, 'index'])->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('competitions', CompetitionRegistrantController::class)->except('index');
    Route::resource('competitionsAchievement', CompetitionsAchievementController::class)->except('index');
});

// GROUPS ROUTES (USER & ADMIN)
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/pendataanBeasiswa', function () {
        return Inertia::render('User/Pendataan/PendataanBeasiswa');
    })->name('pendataanBeasiswa');

    // Lomba 
    Route::get('/lomba', function () {

        $data = CompetitionInformation::orderBy('created_at', 'desc')->get();

        return Inertia::render('User/Lomba/Lomba', [
            'data' => $data
        ]);
    })->name('lomba');

    Route::post('/pendataanDaftarLomba', [CompetitionRegistrantController::class, 'store'])
        ->name('competition.store');

    Route::post('/pendataanDaftarBeasiswa', [ScholarshipRegistrantController::class, 'store'])
        ->name("scholarshipRegistrant.store");
    Route::post('/pendataanLolosBeasiswa', [ScholarshipRecipientController::class, 'store'])
        ->name("scholarshipRecipient.store");


    Route::post('/pendataanPemenangLomba', [CompetitionsAchievementController::class, 'store'])
        ->name('competitionWinner.store');

    Route::get('/pendataanLomba', function () {
        return Inertia::render('User/Pendataan/PendataanLomba');
    })->name('pendataanLomba');

    Route::get('/dashboardUser', [DashboardUserController::class, 'index'])->name('dashboardUser');
    Route::get('/lomba/{postId}', [CompetitionInformationController::class, 'show'])->name('competition.show');
    Route::get('/beasiswa/{postId}', [ScholarshipInformationController::class, 'show'])->name('scholarship.show');
    Route::get('/abdimas/{postId}', [AbdimasInformationController::class, 'show'])->name('abdimas.show');
    Route::get('/penelitian/{postId}', [ResearchInformationController::class, 'show'])->name('research.show');

    // Beasiswa
    Route::get('/beasiswa', function () {

        $data = ScholarshipInformation::orderBy('created_at', 'desc')->get();

        return Inertia::render('User/Beasiswa/Beasiswa', [
            'data' => $data
        ]);
    })->name('beasiswa');

    Route::get('/detailBeasiswa', function () {
        return Inertia::render(component: 'User/Beasiswa/DetailBeasiswa');
    })->name('detailBeasiswa');

    // Abdimas
    Route::get('/abdimas', function () {
        $data = AbdimasInformation::orderBy('created_at', 'desc')->get();

        return Inertia::render('User/Abdimas/Abdimas', [
            'data' => $data
        ]);
    })->name('abdimas');

    Route::get('/detailAbdimas', function () {
        return Inertia::render(component: 'User/Abdimas/DetailAbdimas');
    })->name('detailAbdimas');


    // Penelitian
    Route::get('/penelitian', function () {
        $data = ResearchInformation::orderBy('created_at', 'desc')->get();

        return Inertia::render('User/Penelitian/Penelitian', [
            'data' => $data
        ]);
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
});

Route::middleware(['auth', 'verified', 'role:admin'])->group(function () {
    // Dashboard
    Route::get('/dashboardAdmin', [DashboardAdminController::class, 'index'])->name('dashboardAdmin');

    Route::post('/pusatInformasi/tambahInfoLomba', [CompetitionInformationController::class, 'store'])
        ->name('competitionInformation.store');

    Route::post('/pusatInformasi/tambahInfoBeasiswa', [ScholarshipInformationController::class, 'store'])
        ->name('scholarshipInformation.store');

    Route::post('/pusatInformasi/tambahInfoAbdimas', [AbdimasInformationController::class, 'store'])
        ->name('abdimasInformation.store');

    Route::post('/pusatInformasi/tambahInfoPenelitian', [ResearchInformationController::class, 'store'])
        ->name('researchInformation.store');

    Route::get('/laporanLomba', [AdminCompetitionController::class, 'index'])->name('laporanLomba');

    Route::get('/laporanBeasiswa', [AdminScholarshipController::class, 'index'])->name('laporanBeasiswa');

    Route::get('/laporanAbdimas', [AdminAbdimasController::class, 'index'])->name('laporanAbdimas');

    Route::get('/laporanPenelitian', [AdminResearchController::class, 'index'])->name('laporanPenelitian');

    Route::get('/pusatInformasi/tambahInfoLomba', [CompetitionInformationController::class, 'index'])->name('tambahInfoLomba');

    Route::get('/pusatInformasi/tambahInfoBeasiswa', [ScholarshipInformationController::class, 'index'])->name('tambahInfoBeasiswa');

    Route::get('/pusatInformasi/tambahInfoAbdimas', [AbdimasInformationController::class, 'index'])->name('tambahInfoAbdimas');

    Route::get('/pusatInformasi/tambahInfoPenelitian', [ResearchInformationController::class, 'index'])->name('tambahInfoPenelitian');

    Route::get('/pusatLomba', [PusatInformasiLombaController::class, 'index'])->name('pusatLomba');

    Route::get('/pusatBeasiswa', [PusatInformasiBeasiswaController::class, 'index'])->name('pusatBeasiswa');

    Route::get('/pusatAbdimas', [PusatInformasiAbdimasController::class, 'index'])->name('pusatAbdimas');

    Route::get('/pusatPenelitian', [PusatInformasiPenelitianController::class, 'index'])->name('pusatPenelitian');

    Route::get('/loginAdmin', function () {
        return Inertia::render('Admin/LoginAdmin');
    });
});




require __DIR__ . '/auth.php';
