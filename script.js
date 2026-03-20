const $ = id => document.getElementById(id)

const countElement = $('player-count')
const icon = $('icon3D')
const kebabBtn = $('kebabBtn')
const dropdownMenu = $('dropdownMenu')
const mediaModal = $('mediaModal')
const modalContentBody = $('modalContentBody')
const mediaSearch = $('mediaSearch')
const toast = $('toast')

let configData = null
let currentMediaType = ''
let currentMediaItems = []
let playerCountCache = null

async function fetchPlayerCount() {
    if (playerCountCache !== null) return animateValue(countElement, 0, playerCountCache, 1200)
    try {
        const r = await fetch('https://teohhb-e4e81-default-rtdb.firebaseio.com/PROFILE.json', { cache: 'no-store' })
        const d = await r.json()
        const count = d ? Object.keys(d).length : 0
        playerCountCache = count
        animateValue(countElement, 0, count, 1200)
    } catch {
        countElement.textContent = '???'
    }
}

function animateValue(el, start, end, duration) {
    let startTime
    const step = t => {
        if (!startTime) startTime = t
        const p = Math.min((t - startTime) / duration, 1)
        el.textContent = Math.floor(p * (end - start) + start).toLocaleString('ru-RU')
        if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
}

fetchPlayerCount()

let raf = null
document.addEventListener('mousemove', e => {
    if (window.innerWidth <= 600) return
    if (raf) cancelAnimationFrame(raf)
    raf = requestAnimationFrame(() => {
        const x = (window.innerWidth / 2 - e.pageX) / 25
        const y = (window.innerHeight / 2 - e.pageY) / 25
        icon.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`
    })
})

document.addEventListener('mouseleave', () => {
    icon.style.transform = `rotateY(0deg) rotateX(0deg)`
})

document.querySelectorAll('.bottom-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.bottom-nav .nav-link.active')?.classList.remove('active')
        link.classList.add('active')
    })
})

kebabBtn.onclick = e => {
    e.stopPropagation()
    dropdownMenu.classList.toggle('active')
    kebabBtn.classList.toggle('active')
}

document.onclick = () => {
    dropdownMenu.classList.remove('active')
    kebabBtn.classList.remove('active')
}

async function loadConfig() {
    try {
        const r = await fetch('config.json', { cache: 'force-cache' })
        if (r.ok) configData = await r.json()
    } catch {}
}
loadConfig()

function copyLink(path) {
    const url = new URL(path, location.href).href
    navigator.clipboard.writeText(url).then(() => {
        toast.classList.add('show')
        setTimeout(() => toast.classList.remove('show'), 2000)
    })
}

const copyIconSvg = `<svg viewBox="0 0 24 24"><path d="M16 1H4C2.9 1 2 1.9 2 3v14h2V3h12V1zm3 4H8C6.9 5 6 5.9 6 7v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>`
const downloadIconSvg = `<svg viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>`

function renderMediaItems(items) {
    if (!items.length) {
        modalContentBody.innerHTML = '<p style="text-align:center;color:var(--text-muted);padding:30px 0;">Ничего не найдено 😢</p>'
        return
    }

    modalContentBody.innerHTML = items.map(item => {
        const path = currentMediaType === 'images'
            ? `assets/images/${item.file}`
            : `assets/music/${item.file}`

        const ext = item.file.split('.').pop().toUpperCase()
        const info = item.description || `Файл ${ext}`

        const media = currentMediaType === 'images'
            ? `<img loading="lazy" src="${path}" alt="${item.title}">`
            : `<audio preload="none" controls><source src="${path}" type="audio/mpeg"></audio>`

        return `
        <div class="media-item">
            <div class="media-header">
                <div class="media-text">
                    <h4>${item.title}</h4>
                    <div class="media-info">${info}</div>
                </div>
                <div class="media-actions">
                    <a href="${path}" download class="action-btn">${downloadIconSvg}</a>
                    <button class="action-btn" data-copy="${path}">${copyIconSvg}</button>
                </div>
            </div>
            ${media}
        </div>`
    }).join('')
}

modalContentBody.addEventListener('click', e => {
    const btn = e.target.closest('[data-copy]')
    if (btn) copyLink(btn.dataset.copy)
})

mediaSearch.addEventListener('input', e => {
    const q = e.target.value.toLowerCase().trim()
    const filtered = currentMediaItems.filter(i =>
        i.title.toLowerCase().includes(q) ||
        i.file.toLowerCase().includes(q) ||
        (i.description || '').toLowerCase().includes(q)
    )
    renderMediaItems(filtered)
})

function closeMediaModal() {
    mediaModal.classList.remove('active')
    modalContentBody.querySelectorAll('audio').forEach(a => a.pause())
}

mediaModal.onclick = e => { if (e.target === mediaModal) closeMediaModal() }

async function openMediaModal(type) {
    currentMediaType = type
    $('modalTitle').innerHTML = `<span>#</span> ${
        type === 'images' ? 'Изображения' :
        type === 'music' ? 'Музыка' : 'Скриншоты'
    }`

    mediaSearch.value = ''
    modalContentBody.innerHTML = '<p style="text-align:center;color:var(--text-muted)">Загрузка...</p>'

    if (type === 'screenshots') {
        mediaSearch.style.display = 'none'
        await loadScreenshots()
    } else {
        mediaSearch.style.display = 'block'
        currentMediaItems = configData?.[type] || []
        renderMediaItems(currentMediaItems)
    }

    mediaModal.classList.add('active')
}

async function loadScreenshots() {
    let html = '<div class="screenshot-slider">'
    let found = false

    await Promise.all(
        Array.from({ length: 20 }, async (_, i) => {
            const id = i + 1
            const path = `assets/screenshot${id}.png`
            try {
                const r = await fetch(path, { method: 'HEAD' })
                if (!r.ok) return
                found = true
                html += `
                <div class="screenshot-item">
                    <img loading="lazy" src="${path}">
                    <div class="screenshot-footer">
                        <span class="media-info">Скриншот #${id}</span>
                        <div class="media-actions">
                            <a href="${path}" download class="action-btn">${downloadIconSvg}</a>
                            <button class="action-btn" data-copy="${path}">${copyIconSvg}</button>
                        </div>
                    </div>
                </div>`
            } catch {}
        })
    )

    html += '</div>'
    modalContentBody.innerHTML = found ? html : '<p style="text-align:center;color:var(--text-muted);padding:20px;">Скриншоты не найдены</p>'
}
