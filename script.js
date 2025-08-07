document.addEventListener('DOMContentLoaded', () => {
    // スクロール時のヘッダーアニメーション (既存のコード)
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(26, 26, 26, 0.9)';
        } else {
            header.style.backgroundColor = 'rgba(26, 26, 26, 0.8)';
        }
    });

});
