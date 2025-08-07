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

    // --- ここから追加・修正 ---
    function activateGlitch() {
        // bodyにクラスを追加してノイズを発生させる
        document.body.classList.add('glitch-on');
        
        // 0.2秒後にクラスを削除してノイズを停止
        setTimeout(() => {
            document.body.classList.remove('glitch-on');
        }, 200);

        // 次のグリッチまでのランダムな時間を設定 (0.5秒～5秒)
        const nextGlitchTime = (Math.random() * 4.5 + 0.5) * 1000;
        setTimeout(activateGlitch, nextGlitchTime);
    }

    // 最初のグリッチを開始
    activateGlitch();
    // --- ここまで追加・修正 ---
});
