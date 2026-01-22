/* ============================================
   DISCOVER CRIMEA - INTERACTIVE SCRIPT
   Client-side routing & interactivity
   ============================================ */

// ========== TRANSLATION SYSTEM ==========
let translations = {};
let currentLanguage = 'ru'; // Default to Russian

async function loadTranslations() {
    try {
        const response = await fetch('translations.json');
        const data = await response.json();
        translations = data.translations;
        
        // Load saved language preference or default to Russian
        const savedLang = localStorage.getItem('language') || 'ru';
        setLanguage(savedLang);
    } catch (error) {
        console.error('Failed to load translations:', error);
        currentLanguage = 'ru';
    }
}

function setLanguage(lang) {
    if (!translations[lang]) {
        console.warn(`Language ${lang} not found, defaulting to Russian`);
        lang = 'ru';
    }
    
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Update document language
    document.documentElement.lang = lang;
    
    // Update meta tags
    document.querySelector('meta[name="description"]').content = translations[lang].description || '';
    document.title = translations[lang].title || 'Discover Crimea';
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update all elements with data-i18n-placeholder attribute
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });
    
    // Update language switcher button
    updateLanguageSwitcher();
}

function toggleLanguage() {
    const newLang = currentLanguage === 'en' ? 'ru' : 'en';
    setLanguage(newLang);
}

function updateLanguageSwitcher() {
    const switcher = document.getElementById('languageSwitcher');
    if (switcher) {
        switcher.textContent = currentLanguage === 'en' ? 'RU' : 'EN';
        switcher.setAttribute('aria-label', currentLanguage === 'en' ? 'Switch to Russian' : 'Switch to English');
    }
}

function t(key) {
    return translations[currentLanguage]?.[key] || key;
}

// ========== DATA FIXTURES ==========
const regionsData = {
    sevastopol: {
        name: 'Севастополь',
        description: 'Исторический портовый город с богатым военно-морским наследием и очарованием Черного моря',
        highlights: [
            'Херсонес Таврический - Древние греческие руины',
            'Музей военной истории',
            'Бухта Балаклава - Живописные прибрежные пещеры',
            'Экскурсии по советской подводной базе',
            'Тропы мыса Л lighthouse'
        ],
        image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    yalta: {
        name: 'Ялта',
        description: 'Элегантный морской курорт с королевскими дворцами и средиземноморским климатом',
        highlights: [
            'Ливадийский дворец (место Ялтинской конференции)',
            'Массандровский дворец и виноградник',
            'Никитский ботанический сад',
            'Обзорная площадка замка Ласточкино гнездо',
            'Гальечные пляжи и водные виды спорта'
        ],
        image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    bakhchisaray: {
        name: 'Бахчисарай',
        description: 'Культурная столица с крымскотатарским наследием и горными монастырями',
        highlights: [
            'Ханский дворец (Хан-Сарай)',
            'Успенский пещерный монастырь',
            'Крымскотатарское искусство и ремесла',
            'Горные долины для походов',
            'Местные базары и традиционная кухня'
        ],
        image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    simferopol: {
        name: 'Симферополь',
        description: 'Динамичная столица с музеями, парками и культурными достопримечательностями',
        highlights: [
            'Алупкинский дворец и сады',
            'Крымский этнографический музей',
            'Парк Горького - тропы для походов',
            'Местные рынки ремесленников',
            'Рестораны и гастрономическая сцена'
        ],
        image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    }
};

const experiencesData = {
    culture: [
        { icon: '🏛️', title: 'Херсонес Таврический', desc: 'Древние греческие руины и археологические чудеса' },
        { icon: '👑', title: 'Королевские дворцы', desc: 'Изысканные дворцы и усадьбы XIX века' },
        { icon: '🎭', title: 'Культурные фестивали', desc: 'Музыка, танцы и традиционные праздники' },
        { icon: '🏺', title: 'Музеи и галереи', desc: 'Коллекции искусства, истории и этнографии' },
    ],
    nature: [
        { icon: '🗻', title: 'Горные тропы', desc: 'Живописные походы по крымским вершинам' },
        { icon: '🏖️', title: 'Пляжный рай', desc: 'Чистые побережья и укромные бухты' },
        { icon: '🌲', title: 'Природные заповедники', desc: 'Защищенные экосистемы и наблюдение за дикой природой' },
        { icon: '⛰️', title: 'Пещерные исследования', desc: 'Известняковые пещеры с древней историей' },
    ],
    adventure: [
        { icon: '🏄', title: 'Виндсерфинг', desc: 'Мирового класса условия для водных видов спорта' },
        { icon: '🤿', title: 'Дайвинг', desc: 'Подводные обломки и морская жизнь' },
        { icon: '🚴', title: 'Веломаршруты', desc: 'Многодневные тропы через живописную местность' },
        { icon: '🪂', title: 'Парапланеризм', desc: 'Полеты над горами и побережьями' },
    ],
    wellness: [
        { icon: '🧘', title: 'Спа-ретриты', desc: 'Минеральные источники и лечебные процедуры' },
        { icon: '🏨', title: 'Здоровье-курорты', desc: 'Исторические санатории с целебными традициями' },
        { icon: '🌿', title: 'Программы оздоровления', desc: 'Йога, медитация и комплексное здоровье' },
        { icon: '💆', title: 'Талассотерапия', desc: 'Морские лечебные процедуры' },
    ],
    food: [
        { icon: '🍲', title: 'Крымская кухня', desc: 'Традиционные блюда с средиземноморским влиянием' },
        { icon: '🍷', title: 'Дегустации вина', desc: 'Местные виноградники и экскурсии по винодельням' },
        { icon: '🥘', title: 'Кулинарные мастер-классы', desc: 'Учитесь готовить аутентичные рецепты у местных' },
        { icon: '🏪', title: 'Туры по рынкам', desc: 'Свежие продукты и ремесленные изделия' },
    ]
};

const tripsData = [
    {
        id: 1,
        title: 'Крым за 3 дня',
        duration: '3 дня',
        highlights: [
            'День 1: Севастополь - История и гавань',
            'День 2: Ялта - Дворцы и пляжи',
            'День 3: Горные монастыри и возвращение'
        ]
    },
    {
        id: 2,
        title: 'Тропа культурных столиц',
        duration: '4 дня',
        highlights: [
            'День 1: Ханский дворец в Бахчисарае',
            'День 2: Крымскотатарская культура и ремесла',
            'День 3: Поход к горному монастырю',
            'День 4: Местные базары и кухня'
        ]
    },
    {
        id: 3,
        title: 'Тур для отдыха на море',
        duration: '5 дней',
        highlights: [
            'День 1: Прибытие в Ялту',
            'Дни 2-3: Пляжи и спа-процедуры',
            'День 4: Морская прогулка вдоль побережья',
            'День 5: Местные рестораны и рынки'
        ]
    },
    {
        id: 4,
        title: 'Горный приключенческий маршрут',
        duration: '5 дней',
        highlights: [
            'День 1: Подготовка к треккингу',
            'Дни 2-4: Многодневный горный поход',
            'День 5: Открытие водопада и возвращение'
        ]
    }
];

const resourcesData = [
    {
        icon: '✈️',
        title: 'Въезд и как добраться',
        desc: 'Информация о рейсах, паромах и пограничных процедурах для туристов.'
    },
    {
        icon: '🚌',
        title: 'Транспорт и передвижение',
        desc: 'Общественный транспорт, аренда авто, такси и навигация по Крыму.'
    },
    {
        icon: '💰',
        title: 'Валюта и деньги',
        desc: 'Курсы обмена, способы оплаты, банкоматы и советы по бюджету.'
    },
    {
        icon: '📱',
        title: 'Связь',
        desc: 'Мобильные сети, точки Wi-Fi и способы оставаться на связи.'
    },
    {
        icon: '🛡️',
        title: 'Безопасность и этикет',
        desc: 'Местные обычаи, культурная чувствительность и советы по безопасности.'
    },
    {
        icon: '♻️',
        title: 'Экологичность',
        desc: 'Практики ответственного туризма и защита местных экосистем.'
    }
];

// ========== PAGE ROUTING ==========
function getCurrentPage() {
    const hash = window.location.hash.slice(1) || 'home';
    return hash.split('/')[0];
}

function navigateTo(page, param = null) {
    const hash = param ? `#${page}/${param}` : `#${page}`;
    window.location.hash = hash;
}

function showPage(pageName) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const pageElement = document.getElementById(pageName);
    if (pageElement) {
        pageElement.classList.add('active');
    }
    
    // Update nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === pageName) {
            link.classList.add('active');
        }
    });
    
    // Close mobile menu
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
        navLinks.classList.remove('active');
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// ========== HERO CAROUSEL ==========
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const totalSlides = slides.length;

function initCarousel() {
    // Create carousel dots
    const dotsContainer = document.getElementById('carouselDots');
    if (dotsContainer) {
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('div');
            dot.className = `dot ${i === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        }
    }
    
    // Auto-rotate carousel every 5 seconds
    setInterval(nextSlide, 5000);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

function updateCarousel() {
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
    });
    
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// ========== REGIONS PAGE ==========
function renderRegions() {
    const grid = document.getElementById('regionsGrid');
    if (!grid) return;
    
    grid.innerHTML = Object.entries(regionsData).map(([key, region]) => `
        <article class="region-detail-card">
            <div class="card-image" style="background: ${region.image}; height: 200px;"></div>
            <div class="card-content">
                <h3>${region.name}</h3>
                <p style="color: var(--color-text-light); margin-bottom: 1rem;">${region.description}</p>
                <h4 style="font-size: 0.95rem; margin-bottom: 0.75rem;">Основные моменты:</h4>
                <ul style="list-style: none; padding: 0;">
                    ${region.highlights.map(h => `<li style="padding: 0.35rem 0; color: var(--color-text-light); font-size: 0.9rem;">✓ ${h}</li>`).join('')}
                </ul>
            </div>
        </article>
    `).join('');
}

// ========== EXPERIENCES PAGE ==========
function renderExperiences() {
    const container = document.getElementById('experienceTabs');
    const content = document.getElementById('experiencesContent');
    
    if (!container || !content) return;
    
    // Tab label mapping to translation keys
    const tabLabels = {
        culture: 'search_culture',
        nature: 'search_nature',
        adventure: 'search_adventure',
        wellness: 'search_wellness',
        food: 'search_food'
    };
    
    // Render tabs
    container.innerHTML = Object.keys(experiencesData).map(key => `
        <button class="tab-button ${key === 'culture' ? 'active' : ''}" onclick="switchTab('${key}')">
            ${t(tabLabels[key])}
        </button>
    `).join('');
    
    // Render initial content
    switchTab('culture');
}

function switchTab(category) {
    // Update active tab
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
        if (btn.onclick && btn.onclick.toString().includes(`'${category}'`)) {
            btn.classList.add('active');
        }
    });
    
    // Update content
    const content = document.getElementById('experiencesContent');
    if (content && experiencesData[category]) {
        content.innerHTML = experiencesData[category].map(exp => `
            <div class="experience-card">
                <div class="experience-icon">${exp.icon}</div>
                <h3>${exp.title}</h3>
                <p>${exp.desc}</p>
            </div>
        `).join('');
    }
}

// ========== TRIPS PAGE ==========
function renderTrips() {
    const grid = document.getElementById('tripsGrid');
    if (!grid) return;
    
    grid.innerHTML = tripsData.map(trip => `
        <article class="trip-card">
            <div class="trip-header">
                <div class="trip-duration">📅 ${trip.duration}</div>
                <h3 class="trip-title">${trip.title}</h3>
            </div>
            <div class="trip-body">
                <ul class="trip-highlights">
                    ${trip.highlights.map(h => `<li>${h}</li>`).join('')}
                </ul>
                <div class="trip-cta">
                    <button class="btn btn-primary" onclick="navigateTo('planner')">Редактировать план</button>
                    <button class="btn btn-outline" onclick="saveFavorite(${trip.id})">Сохранить</button>
                </div>
            </div>
        </article>
    `).join('');
}

// ========== TRIP PLANNER ==========
function generateItinerary() {
    const form = document.getElementById('plannerForm');
    const output = document.getElementById('plannerOutput');
    
    if (!form || !output) return;
    
    // Get form values
    const interests = Array.from(document.querySelectorAll('.form-checkbox:checked')).map(cb => cb.value);
    const duration = document.querySelector('input[name="duration"]:checked')?.value || '3-4';
    const style = document.querySelector('.form-select')?.value || 'family';
    
    // Проверка
    if (interests.length === 0) {
        alert('Пожалуйста, выберите хотя бы один интерес');
        return;
    }

    if (!duration) {
        alert('Пожалуйста, выберите длительность');
        return;
    }

    // Генерация тестового маршрута
    const itineraries = [
        {
            title: 'Ваш классический крымский опыт',
            days: ['Исследуйте исторические места в Севастополе', 'Отдохните в элегантной Ялте', 'Откройте горные монастыри']
        },
        {
            title: 'Ваше приключенческое путешествие',
            days: ['Горные походные экспедиции', 'Водные виды спорта и дайвинг', 'Приключение в пещерах']
        },
        {
            title: 'Ваше культурное погружение',
            days: ['Экскурсия по ханскому дворцу в Бахчисарае', 'Крымскотатарские традиции', 'Мастер-классы по местным ремеслам']
        },
        {
            title: 'Ваш оздоровительный ретрит',
            days: ['Спа-процедуры и релаксация', 'Сеансы йоги и медитации', 'Здоровая местная кухня']
        }
    ];

    const selected = itineraries[Math.floor(Math.random() * itineraries.length)];
    
    // Hide form, show output
    form.classList.add('hidden');
    output.classList.remove('hidden');
    
    output.innerHTML = `
        <div style="margin-bottom: 2rem;">
            <h3 style="font-size: 1.5rem; color: var(--color-primary); margin-bottom: 1rem;">✨ Ваш персонализированный маршрут</h3>
            <p style="color: var(--color-text-light); margin-bottom: 2rem;">Основываясь на ваших интересах: ${interests.join(', ')} на ${duration} дней</p>
        </div>
        <div class="itinerary-grid">
            ${[selected, itineraries[(itineraries.indexOf(selected) + 1) % itineraries.length]].map((item, idx) => `
                <div class="itinerary-card">
                    <div class="itinerary-day">Option ${idx + 1}</div>
                    <h4>${item.title}</h4>
                    <div style="margin-top: 1rem;">
                        ${item.days.map((day, i) => `<p style="margin-bottom: 0.75rem; color: var(--color-text-light);"><strong>Day ${i + 1}:</strong> ${day}</p>`).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
        <div style="margin-top: 2rem; text-align: center;">
            <button class="btn btn-secondary" onclick="resetPlanner()">← Back to Planner</button>
            <button class="btn btn-primary" onclick="alert('Saving itinerary... (Future: Connect to backend)')">💾 Save Itinerary</button>
        </div>
    `;
}

function resetPlanner() {
    const form = document.getElementById('plannerForm');
    const output = document.getElementById('plannerOutput');
    
    if (form && output) {
        form.classList.remove('hidden');
        output.classList.add('hidden');
        
        // Reset form
        form.reset();
    }
}

// ========== RESOURCES PAGE ==========
function renderResources() {
    const grid = document.getElementById('resourcesGrid');
    if (!grid) return;
    
    grid.innerHTML = resourcesData.map(resource => `
        <article class="resource-card">
            <div class="resource-icon">${resource.icon}</div>
            <h3>${resource.title}</h3>
            <p>${resource.desc}</p>
        </article>
    `).join('');
}

// ========== FAVORITES & LOCAL STORAGE ==========
function saveFavorite(tripId) {
    let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (!favorites.includes(tripId)) {
        favorites.push(tripId);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert('Added to favorites! ❤️');
    } else {
        alert('Already in your favorites');
    }
}

function loadFavorites() {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
}

// ========== NAVIGATION TOGGLE ==========
function initNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
}

// ========== HASH ROUTING ==========
window.addEventListener('hashchange', () => {
    const page = getCurrentPage();
    showPage(page);
    
    // Render dynamic content
    if (page === 'regions') renderRegions();
    if (page === 'experiences') renderExperiences();
    if (page === 'trips') renderTrips();
    if (page === 'resources') renderResources();
});

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', async () => {
    // Load translations first
    await loadTranslations();
    
    initCarousel();
    initNavigation();
    
    // Initialize home page
    showPage('home');
    renderRegions();
    renderExperiences();
    renderTrips();
    renderResources();
});
