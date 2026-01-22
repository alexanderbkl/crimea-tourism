/* ============================================
   DISCOVER CRIMEA - INTERACTIVE SCRIPT
   Client-side routing & interactivity
   ============================================ */

// ========== DATA FIXTURES ==========
const regionsData = {
    sevastopol: {
        name: 'Sevastopol',
        description: 'Historic harbor city with fascinating naval heritage and Black Sea charm',
        highlights: [
            'Chersonesus Taurica - Ancient Greek ruins',
            'Military History Museum',
            'Balaclava Bay - Scenic coastal caves',
            'Soviet submarine base tours',
            'Lighthouse Point trails'
        ],
        image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    yalta: {
        name: 'Yalta',
        description: 'Elegant seaside resort with royal palaces and Mediterranean climate',
        highlights: [
            'Livadiya Palace (Yalta Conference site)',
            'Massandra Palace & vineyard',
            'Nikitsky Botanical Garden',
            'Swallow\'s Nest castle viewpoint',
            'Pebble beaches and water sports'
        ],
        image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    bakhchisaray: {
        name: 'Bakhchisaray',
        description: 'Cultural capital with Crimean Tatar heritage and mountain monasteries',
        highlights: [
            'Khan\'s Palace (Hansaray)',
            'Assumption Monastery in cave',
            'Crimean Tatar art & crafts',
            'Mountain valley hiking',
            'Local bazaars & traditional cuisine'
        ],
        image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    simferopol: {
        name: 'Simferopol',
        description: 'Dynamic capital city with museums, parks, and cultural attractions',
        highlights: [
            'Alupka Palace & gardens',
            'Crimean Ethnographic Museum',
            'Gorki Park - hiking trails',
            'Local artisan markets',
            'Restaurant & culinary scene'
        ],
        image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    }
};

const experiencesData = {
    culture: [
        { icon: 'ðŸ›ï¸', title: 'Chersonesus Taurica', desc: 'Ancient Greek ruins and archaeological wonders' },
        { icon: 'ðŸ‘‘', title: 'Royal Palaces', desc: 'Exquisite 19th-century palaces and estates' },
        { icon: 'ðŸŽ­', title: 'Cultural Festivals', desc: 'Music, dance, and traditional celebrations' },
        { icon: 'ðŸº', title: 'Museums & Galleries', desc: 'Art, history, and ethnographic collections' },
    ],
    nature: [
        { icon: 'ðŸžï¸', title: 'Mountain Trails', desc: 'Scenic hiking through Crimean peaks' },
        { icon: 'ðŸ–ï¸', title: 'Beach Paradise', desc: 'Pristine coastlines and hidden coves' },
        { icon: 'ðŸŒ²', title: 'Nature Reserves', desc: 'Protected ecosystems and wildlife viewing' },
        { icon: 'â›°ï¸', title: 'Cave Explorations', desc: 'Limestone caves with ancient history' },
    ],
    adventure: [
        { icon: 'ðŸ„', title: 'Windsurfing', desc: 'World-class watersports conditions' },
        { icon: 'ðŸ¤¿', title: 'Scuba Diving', desc: 'Underwater wrecks and marine life' },
        { icon: 'ðŸš´', title: 'Cycling Routes', desc: 'Multi-day trails through scenic countryside' },
        { icon: 'ðŸª‚', title: 'Paragliding', desc: 'Soar above mountains and coastlines' },
    ],
    wellness: [
        { icon: 'ðŸ§˜', title: 'Spa Retreats', desc: 'Mineral springs and therapeutic treatments' },
        { icon: 'ðŸ¨', title: 'Health Resorts', desc: 'Historic sanatoria with healing traditions' },
        { icon: 'ðŸŒ¿', title: 'Wellness Programs', desc: 'Yoga, meditation, and holistic health' },
        { icon: 'ðŸ’†', title: 'Thalassotherapy', desc: 'Sea-based therapeutic experiences' },
    ],
    food: [
        { icon: 'ðŸ½ï¸', title: 'Crimean Cuisine', desc: 'Traditional dishes with Mediterranean influence' },
        { icon: 'ðŸ·', title: 'Wine Tastings', desc: 'Local vineyards and winery tours' },
        { icon: 'ðŸ¥˜', title: 'Cooking Classes', desc: 'Learn authentic recipes from locals' },
        { icon: 'ðŸª', title: 'Market Tours', desc: 'Fresh produce and artisanal products' },
    ]
};

const tripsData = [
    {
        id: 1,
        title: 'Crimea in 3 Days',
        duration: '3 Days',
        highlights: [
            'Day 1: Sevastopol - History & Harbor',
            'Day 2: Yalta - Palaces & Beaches',
            'Day 3: Mountain Monasteries & Returns'
        ]
    },
    {
        id: 2,
        title: 'Cultural Capitals Trail',
        duration: '4 Days',
        highlights: [
            'Day 1: Bakhchisaray Khan\'s Palace',
            'Day 2: Crimean Tatar culture & crafts',
            'Day 3: Mountain monastery hike',
            'Day 4: Local bazaars & cuisine'
        ]
    },
    {
        id: 3,
        title: 'Seaside Relaxation Tour',
        duration: '5 Days',
        highlights: [
            'Day 1: Arrive Yalta',
            'Day 2-3: Beach & spa treatments',
            'Day 4: Boat cruise along coast',
            'Day 5: Local restaurants & markets'
        ]
    },
    {
        id: 4,
        title: 'Mountain Adventure Circuit',
        duration: '5 Days',
        highlights: [
            'Day 1: Trekking preparations',
            'Day 2-4: Multi-day mountain hike',
            'Day 5: Waterfall discovery & return'
        ]
    }
];

const resourcesData = [
    {
        icon: 'âœˆï¸',
        title: 'Entry & Getting Here',
        desc: 'Information about flights, ferries, and border procedures for visitors.'
    },
    {
        icon: 'ðŸšŒ',
        title: 'Transport & Mobility',
        desc: 'Public transit, car rentals, taxis, and navigating within Crimea.'
    },
    {
        icon: 'ðŸ’°',
        title: 'Currency & Money',
        desc: 'Exchange rates, payment methods, ATMs, and budgeting tips.'
    },
    {
        icon: 'ðŸ“±',
        title: 'Connectivity',
        desc: 'Mobile networks, Wi-Fi hotspots, and staying connected.'
    },
    {
        icon: 'ðŸ›¡ï¸',
        title: 'Safety & Etiquette',
        desc: 'Local customs, cultural sensitivity, and travel safety guidance.'
    },
    {
        icon: 'â™»ï¸',
        title: 'Sustainability',
        desc: 'Eco-responsible travel practices and protecting local environments.'
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
                <h4 style="font-size: 0.95rem; margin-bottom: 0.75rem;">Top Things to Do:</h4>
                <ul style="list-style: none; padding: 0;">
                    ${region.highlights.map(h => `<li style="padding: 0.35rem 0; color: var(--color-text-light); font-size: 0.9rem;">âœ“ ${h}</li>`).join('')}
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
    
    // Render tabs
    container.innerHTML = Object.keys(experiencesData).map(key => `
        <button class="tab-button ${key === 'culture' ? 'active' : ''}" onclick="switchTab('${key}')">
            ${key.charAt(0).toUpperCase() + key.slice(1)}
        </button>
    `).join('');
    
    // Render initial content
    switchTab('culture');
}

function switchTab(category) {
    // Update active tab
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target?.classList.add('active');
    
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
                <div class="trip-duration">ðŸ“… ${trip.duration}</div>
                <h3 class="trip-title">${trip.title}</h3>
            </div>
            <div class="trip-body">
                <ul class="trip-highlights">
                    ${trip.highlights.map(h => `<li>${h}</li>`).join('')}
                </ul>
                <div class="trip-cta">
                    <button class="btn btn-primary" onclick="navigateTo('planner')">Customize</button>
                    <button class="btn btn-outline" onclick="saveFavorite(${trip.id})">Save</button>
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
    
    // Validate
    if (interests.length === 0) {
        alert('Please select at least one interest');
        return;
    }
    
    if (!duration) {
        alert('Please select a duration');
        return;
    }
    
    // Generate mock itinerary
    const itineraries = [
        {
            title: 'Your Classic Crimea Experience',
            days: ['Explore historic sites in Sevastopol', 'Relax in elegant Yalta', 'Discover mountain monasteries']
        },
        {
            title: 'Your Adventure-Packed Journey',
            days: ['Mountain hiking expeditions', 'Water sports and diving', 'Cave exploration adventure']
        },
        {
            title: 'Your Cultural Deep-Dive',
            days: ['Bakhchisaray palace tour', 'Crimean Tatar traditions', 'Local craft workshops']
        },
        {
            title: 'Your Wellness Retreat',
            days: ['Spa and relaxation treatments', 'Yoga and meditation sessions', 'Healthy local cuisine']
        }
    ];
    
    const selected = itineraries[Math.floor(Math.random() * itineraries.length)];
    
    // Hide form, show output
    form.classList.add('hidden');
    output.classList.remove('hidden');
    
    output.innerHTML = `
        <div style="margin-bottom: 2rem;">
            <h3 style="font-size: 1.5rem; color: var(--color-primary); margin-bottom: 1rem;">âœ¨ Your Personalized Itinerary</h3>
            <p style="color: var(--color-text-light); margin-bottom: 2rem;">Based on your ${interests.join(', ')} interests for ${duration} days</p>
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
            <button class="btn btn-secondary" onclick="resetPlanner()">â† Back to Planner</button>
            <button class="btn btn-primary" onclick="alert('Saving itinerary... (Future: Connect to backend)')">ðŸ’¾ Save Itinerary</button>
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
        alert('Added to favorites! â¤ï¸');
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
document.addEventListener('DOMContentLoaded', () => {
    initCarousel();
    initNavigation();
    
    // Initialize home page
    showPage('home');
    renderRegions();
    renderExperiences();
    renderTrips();
    renderResources();
});
