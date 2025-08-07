document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(26, 26, 26, 0.9)';
        } else {
            header.style.backgroundColor = 'rgba(26, 26, 26, 0.8)';
        }
    });

    const glitchContainer = document.createElement('div');
    glitchContainer.className = 'glitch-noise';
    document.body.appendChild(glitchContainer);

    // --- ここから修正 ---
    let glitchInterval;

    function createGlitch() {
        // グリッチブロックを生成する関数
        const glitchBlock = document.createElement('div');
        glitchBlock.className = 'glitch-block';
        
        const size = Math.random() * 200 + 50;
        const top = Math.random() * (window.innerHeight - size);
        const left = Math.random() * (window.innerWidth - size);
        const shift = Math.random() * 20 - 10;

        glitchBlock.style.width = `${size}px`;
        glitchBlock.style.height = `${size}px`;
        glitchBlock.style.top = `${top}px`;
        glitchBlock.style.left = `${left}px`;
        glitchBlock.style.background = `url('kpia_live_00.png')`;
        glitchBlock.style.backgroundSize = 'cover';
        glitchBlock.style.backgroundPosition = `-${left + shift}px -${top + shift}px`;
        glitchBlock.style.filter = `grayscale(1) hue-rotate(${Math.random() * 360}deg)`;
        
        glitchContainer.appendChild(glitchBlock);
        
        setTimeout(() => {
            glitchBlock.remove();
        }, 100);
    }

    // 10秒ごとにグリッチのオン/オフを切り替え
    setInterval(() => {
        const isGlitching = Math.random() < 0.3; // 30%の確率でグリッチ
        if (isGlitching) {
            // グリッチを短い間隔で発生させる
            glitchInterval = setInterval(createGlitch, 50);
            setTimeout(() => {
                clearInterval(glitchInterval);
            }, 300); // 300ms後にグリッチを停止
        }
    }, 10000); // 10秒ごとに判定
    // --- ここまで修正 ---
});
