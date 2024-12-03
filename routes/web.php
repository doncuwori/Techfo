<?php

use App\Http\Controllers\Admin\CompetitionController as AdminCompetitionController;
use App\Http\Controllers\CompetitionController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Middleware\RoleMiddleware;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


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

// Landing Page
Route::get('/landingPage', function () {
    return Inertia::render('LandingPage');
})->name(name: 'landingPage');


// Login
Route::get('/loginUser', function () {
    return Inertia::render('User/LoginUser');
})->name('loginUser');

Route::get('/dashboardUser', function () {
    return Inertia::render('User/DashboardUser');
})->name('dashboardUser')->middleware(['auth', 'verified', 'role:user']);


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

// ADMIN

// Route::get('/loginAdmin', function () {
//     return Inertia::render('Admin/LoginAdmin');
// });

// Route::get('/laporanLomba', function () {
//     return Inertia::render('Admin/Laporan/LaporanLomba');
// })->name('laporanLomba');

// Route::get('/laporanBeasiswa', function () {
//     return Inertia::render('Admin/Laporan/LaporanBeasiswa');
// })->name('laporanBeasiswa');

// Route::get('/laporanAbdimas', function () {
//     return Inertia::render('Admin/Laporan/LaporanAbdimas');
// })->name('laporanAbdimas');

// Route::get('/laporanPenelitian', function () {
//     return Inertia::render('Admin/Laporan/LaporanPenelitian');
// })->name('laporanPenelitian');


// Route::get('/tambahInfoLomba', function () {
//     return Inertia::render('Admin/PusatInformasi/TambahInfoLomba');
// });

// Route::get('/tambahInfoBeasiswa', function () {
//     return Inertia::render('Admin/PusatInformasi/TambahInfoBeasiswa');
// });

// Route::get('/tambahInfoPenelitian', function () {
//     return Inertia::render('Admin/PusatInformasi/TambahInfoPenelitian');
// });

// Route::get('/tambahInfoAbdimas', function () {
//     return Inertia::render('Admin/PusatInformasi/TambahInfoAbdimas');
// });

Route::get('/', [HomeController::class, 'index'])->name('home');

// GROUPS
Route::middleware(['auth', 'verified', 'role:admin'])->group(function () {
    // Dashboard
    Route::get('/dashboardAdmin', [AdminCompetitionController::class, 'index'])->name('dashboardAdmin');

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

    Route::get('/tambahInfoLomba', function () {
        return Inertia::render('Admin/PusatInformasi/TambahInfoLomba');
    });
    
    Route::get('/tambahInfoBeasiswa', function () {
        return Inertia::render('Admin/PusatInformasi/TambahInfoBeasiswa');
    });
    
    Route::get('/tambahInfoPenelitian', function () {
        return Inertia::render('Admin/PusatInformasi/TambahInfoPenelitian');
    });
    
    Route::get('/tambahInfoAbdimas', function () {
        return Inertia::render('Admin/PusatInformasi/TambahInfoAbdimas');
    });


Route::get('/loginAdmin', function () {
    return Inertia::render('Admin/LoginAdmin');
});
});




require __DIR__ . '/auth.php';




Route::resource('competitions', CompetitionController::class);

