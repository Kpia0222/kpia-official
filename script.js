document.addEventListener('DOMContentLoaded', () => {
    // スクロール時のヘッダーアニメーション (変更なし)
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(26, 26, 26, 0.9)';
        } else {
            header.style.backgroundColor = 'rgba(26, 26, 26, 0.8)';
        }
    });

    function createGlitchPart() {
        const glitchElement = document.createElement('div');
        glitchElement.classList.add('glitch-part');

        // ランダムな位置とサイズ
        const size = Math.random() * 150 + 50; // 50pxから200px
        const top = Math.random() * window.innerHeight;
        const left = Math.random() * window.innerWidth;

        glitchElement.style.width = `${size}px`;
        glitchElement.style.height = `${size}px`;
        glitchElement.style.top = `${top}px`;
        glitchElement.style.left = `${left}px`;

        // ランダムな表示時間
        const duration = Math.random() * 300 + 100; // 100msから400ms

        document.body.appendChild(glitchElement);

        setTimeout(() => {
            glitchElement.remove();
        }, duration);
    }

    // ランダムな間隔でグリッチを発生させる
    function startGlitchStorm() {
        setInterval(createGlitchPart, Math.random() * 500 + 100); // 100msから600msの間隔
    }

    startGlitchStorm();
});
