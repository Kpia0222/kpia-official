document.addEventListener('DOMContentLoaded', () => {
    // スクロール時のヘッダーアニメーション
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(13, 13, 13, 0.9)';
        } else {
            header.style.backgroundColor = 'rgba(13, 13, 13, 0.8)';
        }
    });

    // アルバムアイテムのランダムグリッチ効果
    const albumItems = document.querySelectorAll('.album-item');
    albumItems.forEach(item => {
        const cover = item.querySelector('.album-cover');
        
        let intervalId;
        
        item.addEventListener('mouseover', () => {
            // ホバー時にグリッチアニメーションを開始
            intervalId = setInterval(() => {
                const shiftX = (Math.random() - 0.5) * 10;
                const shiftY = (Math.random() - 0.5) * 10;
                const hueRotate = Math.random() * 360;

                cover.style.transform = `translate(${shiftX}px, ${shiftY}px) scale(1.05)`;
                cover.style.filter = `hue-rotate(${hueRotate}deg)`;
            }, 50); // 50msごとにグリッチを更新
        });

        item.addEventListener('mouseout', () => {
            // ホバーが外れたらグリッチを停止
            clearInterval(intervalId);
            cover.style.transform = 'scale(1)';
            cover.style.filter = 'none';
        });
    });

});
