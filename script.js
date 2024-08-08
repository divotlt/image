document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const text = urlParams.get('text');
    
    if (text) {
        document.getElementById('textOverlay').textContent = text;
    } else {
        document.getElementById('textOverlay').textContent = "Default Text";
    }
});
