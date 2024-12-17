window.onload = function() {
    
    const comments = [
        { name: "Nama Pengguna 1", quote: "Ini adalah komentar pertama. Saya sangat senang dengan layanan ini!", avatar: "https://randomuser.me/api/portraits/men/31.jpg" },
        { name: "Nama Pengguna 2", quote: "Luar biasa! Fitur-fitur baru sangat membantu. Terima kasih!", avatar: "https://randomuser.me/api/portraits/men/45.jpg" },
        { name: "Nama Pengguna 3", quote: "Saya merasa nyaman menggunakan aplikasi ini, sangat mudah dipahami.", avatar: "https://randomuser.me/api/portraits/men/50.jpg" },
        { name: "Nama Pengguna 4", quote: "Produk ini sangat efisien, saya merekomendasikan kepada teman-teman!", avatar: "https://randomuser.me/api/portraits/women/67.jpg" },
        { name: "Nama Pengguna 5", quote: "Tidak ada masalah yang saya temui. Semua berjalan dengan lancar.", avatar: "https://randomuser.me/api/portraits/men/23.jpg" },
        { name: "Nama Pengguna 6", quote: "Aplikasi ini sangat membantu pekerjaan saya sehari-hari. Terimakasih!", avatar: "https://randomuser.me/api/portraits/women/33.jpg" },
        { name: "Nama Pengguna 7", quote: "Desainnya sangat modern dan user-friendly. Saya suka sekali!", avatar: "https://randomuser.me/api/portraits/men/28.jpg" }
    ];

    let index = 0;
    const commentBox = document.getElementById('comment-box');
    const userName = document.getElementById('user-name');
    const userQuote = document.getElementById('user-quote');
    const avatar = document.querySelector('.avatar');

    // Fungsi untuk mengganti konten komentar dengan animasi
    function changeComment() {
        // Animasi keluar
        commentBox.style.animation = 'fadeOutUp 1s ease-out forwards';
        
        // Setelah animasi keluar selesai, ganti konten dan animasi masuk
        setTimeout(() => {
            // Update konten komentar dan avatar
            userName.textContent = comments[index].name;
            userQuote.textContent = comments[index].quote;
            avatar.src = comments[index].avatar;

            // Update index untuk komentar berikutnya
            index = (index + 1) % comments.length;

            // Animasi masuk (slide dan fade)
            commentBox.style.animation = 'fadeInUp 1s ease-out forwards';
        }, 1000); // Tunggu 1 detik untuk animasi keluar selesai
    }

    // Menjalankan perubahan komentar secara interval (5 detik per komentar)
    setInterval(changeComment, 5000);

    // Inisialisasi komentar pertama setelah halaman dimuat
    changeComment();
};
