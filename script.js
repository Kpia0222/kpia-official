document.addEventListener('DOMContentLoaded', () => {
    // Kpiaアイコンの波紋エフェクト
    const iconContainer = document.querySelector('.kpia-icon-container');
    const icon = document.querySelector('.kpia-icon');
    const canvas = document.getElementById('wave-canvas');
    const ctx = canvas.getContext('2d');

    const iconRect = icon.getBoundingClientRect();
    canvas.width = iconRect.width;
    canvas.height = iconRect.height;
    canvas.style.position = 'absolute';
    canvas.style.top = '0';
    canvas.style.left = '0';

    let mouseX = -100;
    let mouseY = -100;
    const waveRadius = 50; // 波紋の半径

    iconContainer.addEventListener('mousemove', (e) => {
        const rect = icon.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
    });

    iconContainer.addEventListener('mouseleave', () => {
        mouseX = -100;
        mouseY = -100;
    });

    const img = new Image();
    img.src = icon.src;

    img.onload = () => {
        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;
            const tempCanvas = document.createElement('canvas');
            const tempCtx = tempCanvas.getContext('2d');
            tempCanvas.width = canvas.width;
            tempCanvas.height = canvas.height;
            
            for (let y = 0; y < canvas.height; y++) {
                for (let x = 0; x < canvas.width; x++) {
                    const dx = x - mouseX;
                    const dy = y - mouseY;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < waveRadius) {
                        const effect = Math.cos(dist / waveRadius * Math.PI / 2);
                        const newX = x + dx * 0.2 * effect;
                        const newY = y + dy * 0.2 * effect;

                        if (newX >= 0 && newX < canvas.width && newY >= 0 && newY < canvas.height) {
                            const newIndex = (Math.floor(newY) * canvas.width + Math.floor(newX)) * 4;
                            const currentIndex = (y * canvas.width + x) * 4;
                            data[currentIndex] = data[newIndex];
                            data[currentIndex + 1] = data[newIndex + 1];
                            data[currentIndex + 2] = data[newIndex + 2];
                        }
                    }
                }
            }

            tempCtx.putImageData(imageData, 0, 0);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(tempCanvas, 0, 0);
            requestAnimationFrame(draw);
        }
        draw();
    };

    // 背景アニメーションとアイコンフェードインはCSSで制御
});
