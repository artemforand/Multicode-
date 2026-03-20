async function fetchPlayerCount() {
    const countElement = document.getElementById('player-count');
    try {
        const response = await fetch('https://teohhb-e4e81-default-rtdb.firebaseio.com/PROFILE.json');
        const data = await response.json();
        if (data) animateValue(countElement, 0, Object.keys(data).length, 1500);
        else countElement.textContent = '0';
    } catch { countElement.textContent = '???'; }
}

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start).toLocaleString('ru-RU');
        if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
}
fetchPlayerCount();

const icon = document.getElementById('icon3D');
document.addEventListener('mousemove', (e) => {
    if(window.innerWidth > 600) {
        let x = (window.innerWidth / 2 - e.pageX) / 25;
        let y = (window.innerHeight / 2 - e.pageY) / 25;
        icon.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    }
});
document.addEventListener('mouseleave', () => icon.style.transform = `rotateY(0deg) rotateX(0deg)`);

document.querySelectorAll('.bottom-nav .nav-link').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.bottom-nav .nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

const kebabBtn = document.getElementById('kebabBtn');
const dropdownMenu = document.getElementById('dropdownMenu');
const mediaModal = document.getElementById('mediaModal');
const modalContentBody = document.getElementById('modalContentBody');
const toast = document.getElementById('toast');
let configData = null;

kebabBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownMenu.classList.toggle('active');
    kebabBtn.classList.toggle('active');
});

document.addEventListener('click', () => {
    dropdownMenu.classList.remove('active');
    kebabBtn.classList.remove('active');
});

async function loadConfig() {
    try {
        const response = await fetch('config.json');
        if(response.ok) configData = await response.json();
    } catch (e) {}
}
loadConfig();

function copyLink(path) {
    const fullUrl = new URL(path, window.location.href).href;
    navigator.clipboard.writeText(fullUrl).then(() => {
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2500);
    }).catch(() => alert('Не удалось скопировать ссылку'));
}

const copyIconSvg = `<svg viewBox="0 0 24 24"><path d="M16 1H4C2.9 1 2 1.9 2 3v14h2V3h12V1zm3 4H8C6.9 5 6 5.9 6 7v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>`;
const downloadIconSvg = `<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>`;

function openMediaModal(type) {
    if (!configData) return;
    modalContentBody.innerHTML = '';
    document.getElementById('modalTitle').innerHTML = `<span>#</span> ${type === 'images' ? 'Изображения' : 'Музыка'}`;
    
    const items = configData[type] || [];
    items.forEach(item => {
        const filePath = type === 'images' ? `assets/images/${item.file}` : `assets/music/${item.file}`;
        const mediaTag = type === 'images' 
            ? `<img src="${filePath}" alt="${item.title}" onerror="this.style.display='none'">`
            : `<audio controls><source src="${filePath}" type="audio/mpeg"></audio>`;
        
        modalContentBody.innerHTML += `
            <div class="media-item">
                <div class="media-header">
                    <h4>${item.title}</h4>
                    <div class="media-actions">
                        <a href="${filePath}" download="${item.file}" class="action-btn" title="Скачать файл">${downloadIconSvg}</a>
                        <button class="action-btn" onclick="copyLink('${filePath}')" title="Скопировать ссылку">${copyIconSvg}</button>
                    </div>
                </div>
                ${mediaTag}
            </div>
        `;
    });
    mediaModal.classList.add('active');
}

function closeMediaModal() {
    mediaModal.classList.remove('active');
    modalContentBody.querySelectorAll('audio').forEach(audio => audio.pause());
}

mediaModal.addEventListener('click', (e) => { if(e.target === mediaModal) closeMediaModal(); });

