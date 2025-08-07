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

    // --- ここから修正 ---
    function activateGlitch() {
        // bodyにクラスを追加してRGBシフトノイズを発生
        document.body.classList.add('glitch-on');
        
        // ノイズの持続時間はランダムに設定 (今回は0.1秒から0.5秒)
        const glitchDuration = Math.random() * 400 + 100;
        
        setTimeout(() => {
            document.body.classList.remove('glitch-on');
        }, glitchDuration);

        // 次のグリッチまでのランダムな時間を設定 (0.5秒～5秒)
        const nextGlitchTime = (Math.random() * 4.5 + 0.5) * 1000;
        setTimeout(activateGlitch, nextGlitchTime);
    }

    // 最初のグリッチを開始
    activateGlitch();
    // --- ここまで修正 ---
});
