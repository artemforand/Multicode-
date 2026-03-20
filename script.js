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
const mediaSearch = document.getElementById('mediaSearch');
const toast = document.getElementById('toast');

let configData = null;
let currentMediaType = '';
let currentMediaItems = [];

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

// Функция для отрисовки элементов с поддержкой описания
function renderMediaItems(items) {
    modalContentBody.innerHTML = '';
    
    if (items.length === 0) {
        modalContentBody.innerHTML = '<p style="text-align:center; color: var(--text-muted); padding: 30px 0;">Ничего не найдено 😢</p>';
        return;
    }

    items.forEach(item => {
        const filePath = currentMediaType === 'images' ? `assets/images/${item.file}` : `assets/music/${item.file}`;
        
        // Получаем расширение файла или берем описание из конфига, если есть
        const fileExt = item.file.split('.').pop().toUpperCase();
        const infoText = item.description || `Файл формата ${fileExt}`;
        
        const mediaTag = currentMediaType === 'images' 
            ? `<img src="${filePath}" alt="${item.title}" onerror="this.style.display='none'">`
            : `<audio controls><source src="${filePath}" type="audio/mpeg"></audio>`;
        
        modalContentBody.innerHTML += `
            <div class="media-item">
                <div class="media-header">
                    <div class="media-text">
                        <h4>${item.title}</h4>
                        <div class="media-info">${infoText}</div>
                    </div>
                    <div class="media-actions">
                        <a href="${filePath}" download="${item.file}" class="action-btn" title="Скачать файл">${downloadIconSvg}</a>
                        <button class="action-btn" onclick="copyLink('${filePath}')" title="Скопировать ссылку">${copyIconSvg}</button>
                    </div>
                </div>
                ${mediaTag}
            </div>
        `;
    });
}

function openMediaModal(type) {
    if (!configData) return;
    
    currentMediaType = type;
    currentMediaItems = configData[type] || [];
    
    document.getElementById('modalTitle').innerHTML = `<span>#</span> ${type === 'images' ? 'Изображения' : 'Музыка'}`;
    mediaSearch.value = ''; // Очищаем поиск при открытии
    
    renderMediaItems(currentMediaItems);
    mediaModal.classList.add('active');
}

// Поиск на лету
mediaSearch.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    
    const filteredItems = currentMediaItems.filter(item => {
        const titleMatch = item.title.toLowerCase().includes(query);
        const fileMatch = item.file.toLowerCase().includes(query);
        const descMatch = item.description && item.description.toLowerCase().includes(query);
        
        return titleMatch || fileMatch || descMatch;
    });
    
    renderMediaItems(filteredItems);
});

function closeMediaModal() {
    mediaModal.classList.remove('active');
    modalContentBody.querySelectorAll('audio').forEach(audio => audio.pause());
}

mediaModal.addEventListener('click', (e) => { if(e.target === mediaModal) closeMediaModal(); });
    
