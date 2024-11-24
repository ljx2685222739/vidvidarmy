document.addEventListener('DOMContentLoaded', function() {
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const gameFrame = document.getElementById('gameFrame');
    let isFullscreen = false;

    // 保存原始样式
    const originalStyles = {
        height: gameFrame.style.height,
        position: gameFrame.style.position,
        top: gameFrame.style.top,
        left: gameFrame.style.left,
        width: gameFrame.style.width,
        zIndex: gameFrame.style.zIndex
    };

    fullscreenBtn.addEventListener('click', function() {
        if (!isFullscreen) {
            // 进入浏览器全屏模式
            gameFrame.style.position = 'fixed';
            gameFrame.style.top = '0';
            gameFrame.style.left = '0';
            gameFrame.style.width = '100%';
            gameFrame.style.height = '100vh';
            gameFrame.style.zIndex = '9999';
            
            fullscreenBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M4 14h6m0 0v6m0-6l-7 7m17-11h-6m0 0V4m0 6l7-7"/>
                </svg>
                戻る
            `;
        } else {
            // 退出浏览器全屏模式
            Object.assign(gameFrame.style, originalStyles);
            
            fullscreenBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
                </svg>
                フルスクリーン
            `;
        }
        
        isFullscreen = !isFullscreen;
    });

    // 添加ESC键退出全屏的支持
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && isFullscreen) {
            Object.assign(gameFrame.style, originalStyles);
            isFullscreen = false;
            fullscreenBtn.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/>
                </svg>
                フルスクリーン
            `;
        }
    });
});