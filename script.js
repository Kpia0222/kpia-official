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

    function activateGlitch() {
        document.body.classList.add('glitch-on');
        
        const glitchDuration = Math.random() * 400 + 100;
        
        setTimeout(() => {
            document.body.classList.remove('glitch-on');
        }, glitchDuration);

        const nextGlitchTime = (Math.random() * 4.5 + 0.5) * 1000;
        setTimeout(activateGlitch, nextGlitchTime);
    }

    activateGlitch();
});
