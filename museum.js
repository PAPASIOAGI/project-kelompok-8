// jawa barat.js

document.addEventListener('DOMContentLoaded', function() {
    // Tambahkan interaksi klik pada setiap card
    const cards = document.querySelectorAll('.card');
    cards.forEach(function(card) {
        card.addEventListener('click', function() {
            const title = card.querySelector('.card-title').innerText;
            alert('Kamu memilih: ' + title);
        });
        // Efek animasi tambahan saat hover (opsional, sudah ada di CSS)
        card.addEventListener('mouseenter', function() {
            card.style.boxShadow = '0 12px 36px rgba(13,110,253,0.22)';
        });
        card.addEventListener('mouseleave', function() {
            card.style.boxShadow = '';
        });
    });
});
