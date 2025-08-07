document.addEventListener('DOMContentLoaded', () => {
    const iconContainer = document.querySelector('.kpia-icon-container');
    const waveArea = document.querySelector('.wave-effect-area');
    const waveRadius = 50; // 波紋エフェクトが効く半径

    iconContainer.addEventListener('mousemove', (e) => {
        const rect = iconContainer.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const dx = mouseX - centerX;
        const dy = mouseY - centerY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < waveRadius) {
            const scale = 1 + (1 - dist / waveRadius) * 0.1; // 0.1は歪みの強さ
            waveArea.style.transform = `scale(${scale})`;
            waveArea.style.transformOrigin = `${mouseX}px ${mouseY}px`;
        } else {
            waveArea.style.transform = 'scale(1.0)';
        }
    });

    iconContainer.addEventListener('mouseleave', () => {
        waveArea.style.transform = 'scale(1.0)';
    });
});
