<?php
use App\Http\Controllers\Admin\AdminCompetitionRegistrantController;
use App\Http\Controllers\CompetitionRegistrantController;
use App\Http\Controllers\CompetitionsAchievementController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LoginPageController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
Route::get('/loginUser', [LoginPageController::class, 'index'])->name('loginUser');

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

Route::middleware(['auth', 'verified'])->group(function(){
    Route::resource('competitions', CompetitionRegistrantController::class)->except('index');
    Route::resource('competitionsAchievement', CompetitionsAchievementController::class)->except('index');
});

// GROUPS ROUTES (USER & ADMIN)
Route::middleware(['auth', 'verified', 'role:user'])->group(function(){
    Route::get('/pendataanBeasiswa', function () {
        return Inertia::render('User/Pendataan/PendataanBeasiswa');
    })->name('pendataanBeasiswa');

    Route::post('/pendataanBeasiswa', [CompetitionRegistrantController::class, 'store'])
    ->name('competition.store');
    
    Route::get('/pendataanLomba', function () {
        return Inertia::render('User/Pendataan/PendataanLomba');
    })->name('pendataanLomba');

    Route::get('/dashboardUser', function () {
        return Inertia::render('User/DashboardUser');
    })->name('dashboardUser');

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

});

Route::middleware(['auth', 'verified', 'role:admin'])->group(function () {
    // Dashboard
    Route::get('/dashboardAdmin', [AdminCompetitionRegistrantController::class, 'index'])->name('dashboardAdmin');

    Route::get('/laporanLomba', function () {
        return Inertia::render('Admin/Laporan/LaporanLomba');
    })->name('laporanLomba');
    
    Route::get('/laporanBeasiswa', function () {
        return Inertia::render('Admin/Laporan/LaporanBeasiswa');
    })->name('laporanBeasiswa');
    
    Route::get('/laporanAbdimas', function () {
        return Inertia::render('Admin/Laporan/LaporanAbdimas');
    })->name('laporanAbdimas');
    
    Route::get('/laporanPenelitian', function () {
        return Inertia::render('Admin/Laporan/LaporanPenelitian');
    })->name('laporanPenelitian');

    Route::get('/pusatInformasi/tambahInfoLomba', function () {
        return Inertia::render('Admin/PusatInformasi/TambahInfoLomba');
    });
    
    Route::get('/pusatInformasi/tambahInfoBeasiswa', function () {
        return Inertia::render('Admin/PusatInformasi/TambahInfoBeasiswa');
    });
    
    Route::get('/pusatInformasi/tambahInfoPenelitian', function () {
        return Inertia::render(component: 'Admin/PusatInformasi/TambahInfoPenelitian');
    });
    
    Route::get('/pusatInformasi/tambahInfoAbdimas', function () {
        return Inertia::render('Admin/PusatInformasi/TambahInfoAbdimas');
    });

    Route::get('/loginAdmin', function () {
        return Inertia::render('Admin/LoginAdmin');
    });
});




require __DIR__ . '/auth.php';
