document.addEventListener('DOMContentLoaded', () => {
    // スクロール時のヘッダーアニメーション
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(26, 26, 26, 0.9)';
        } else {
            header.style.backgroundColor = 'rgba(26, 26, 26, 0.8)';
        }

    const glitchContainer = document.createElement('div');
    glitchContainer.className = 'glitch-noise';
    document.body.appendChild(glitchContainer);

    function createGlitch() {
        const glitchBlock = document.createElement('div');
        glitchBlock.className = 'glitch-block';
        
        const size = Math.random() * 200 + 50; // 50pxから250pxのランダムなサイズ
        const top = Math.random() * (window.innerHeight - size);
        const left = Math.random() * (window.innerWidth - size);
        const shift = Math.random() * 20 - 10; // -10pxから10pxのランダムなズレ

        glitchBlock.style.width = `${size}px`;
        glitchBlock.style.height = `${size}px`;
        glitchBlock.style.top = `${top}px`;
        glitchBlock.style.left = `${left}px`;
        glitchBlock.style.background = `url('kpia_live_00.png')`;
        glitchBlock.style.backgroundSize = 'cover';
        glitchBlock.style.backgroundPosition = `-${left + shift}px -${top + shift}px`;
        glitchBlock.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
        
        glitchContainer.appendChild(glitchBlock);
        
        // 数ミリ秒後にブロックを消去
        setTimeout(() => {
            glitchBlock.remove();
        }, 100); // 100ms後に消える
    }

    // 0.5秒ごとに新しいグリッチブロックを生成
    setInterval(createGlitch, 2000);
    });

    // アルバムアイテムのランダムグリッチ効果（今回は不要なのでコメントアウト）
    /*
    const albumItems = document.querySelectorAll('.album-item');
    albumItems.forEach(item => {
        const cover = item.querySelector('.album-cover');
        let intervalId;
        item.addEventListener('mouseover', () => {
            intervalId = setInterval(() => {
                const shiftX = (Math.random() - 0.5) * 10;
                const shiftY = (Math.random() - 0.5) * 10;
                const hueRotate = Math.random() * 360;
                cover.style.transform = `translate(${shiftX}px, ${shiftY}px) scale(1.05)`;
                cover.style.filter = `hue-rotate(${hueRotate}deg)`;
            }, 50);
        });
        item.addEventListener('mouseout', () => {
            clearInterval(intervalId);
            cover.style.transform = 'scale(1)';
            cover.style.filter = 'none';
        });
    });
    */
});
