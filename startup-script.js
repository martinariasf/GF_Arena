// Global variables
let currentLanguage = 'en';

// Startup-focused Growth Journey Content
const growthContent = {
    trends: {
        title: { en: "Market Trends", de: "Markttrends" },
        text: { 
            en: "Analyze market trends and external forces to position your startup for success.\n\n• Market Research & Analysis\n• Trend Identification\n• Competitive Intelligence\n• Industry Disruption Assessment\n• Future-proofing Strategy",
            de: "Analysieren Sie Markttrends und externe Kräfte, um Ihr Startup für den Erfolg zu positionieren.\n\n• Marktforschung & Analyse\n• Trend-Identifikation\n• Competitive Intelligence\n• Bewertung von Branchenstörungen\n• Zukunftssichere Strategie"
        }
    },
    alternatives: {
        title: { en: "MVP Strategy", de: "MVP-Strategie" },
        text: { 
            en: "Build your Minimum Viable Product with maximum impact and minimum resources.\n\n• MVP Planning & Design\n• Feature Prioritization\n• Rapid Prototyping\n• User Testing Framework\n• Iteration Strategy",
            de: "Bauen Sie Ihr Minimum Viable Product mit maximalem Impact und minimalen Ressourcen.\n\n• MVP-Planung & Design\n• Feature-Priorisierung\n• Rapid Prototyping\n• User-Testing-Framework\n• Iterationsstrategie"
        }
    },
    competitors: {
        title: { en: "Competitive Analysis", de: "Wettbewerbsanalyse" },
        text: { 
            en: "Understand your competitive landscape and find your unique positioning.\n\n• Competitor Mapping\n• SWOT Analysis\n• Competitive Advantage Definition\n• Market Gap Identification\n• Differentiation Strategy",
            de: "Verstehen Sie Ihre Wettbewerbslandschaft und finden Sie Ihre einzigartige Positionierung.\n\n• Wettbewerber-Mapping\n• SWOT-Analyse\n• Definition von Wettbewerbsvorteilen\n• Marktlücken-Identifikation\n• Differenzierungsstrategie"
        }
    },
    market: {
        title: { en: "Market Validation", de: "Marktvalidierung" },
        text: { 
            en: "Validate your market hypothesis and product-market fit before scaling.\n\n• Customer Discovery\n• Market Size Assessment\n• Product-Market Fit Testing\n• Validation Metrics\n• Go-to-Market Strategy",
            de: "Validieren Sie Ihre Markthypothese und Product-Market Fit vor der Skalierung.\n\n• Customer Discovery\n• Marktgrößenbewertung\n• Product-Market Fit Testing\n• Validierungsmetriken\n• Go-to-Market-Strategie"
        }
    },
    revenue: {
        title: { en: "Revenue Model", de: "Umsatzmodell" },
        text: { 
            en: "Design sustainable revenue streams that scale with your growth.\n\n• Business Model Canvas\n• Revenue Stream Design\n• Pricing Strategy\n• Unit Economics\n• Scalability Planning",
            de: "Gestalten Sie nachhaltige Umsatzströme, die mit Ihrem Wachstum skalieren.\n\n• Business Model Canvas\n• Revenue Stream Design\n• Preisstrategie\n• Unit Economics\n• Skalierbarkeitsplanung"
        }
    },
    sales: {
        title: { en: "Customer Acquisition", de: "Kundenakquise" },
        text: { 
            en: "Build efficient customer acquisition channels that drive sustainable growth.\n\n• Customer Acquisition Strategy\n• Channel Optimization\n• Conversion Funnel Design\n• CAC/LTV Analysis\n• Growth Hacking Techniques",
            de: "Bauen Sie effiziente Kundenakquise-Kanäle auf, die nachhaltiges Wachstum fördern.\n\n• Kundenakquise-Strategie\n• Kanal-Optimierung\n• Conversion-Funnel-Design\n• CAC/LTV-Analyse\n• Growth-Hacking-Techniken"
        }
    },
    capabilities: {
        title: { en: "Tech Stack", de: "Tech-Stack" },
        text: { 
            en: "Build a robust, scalable technology foundation for your startup.\n\n• Technology Architecture\n• Platform Selection\n• Scalability Planning\n• Security Framework\n• AI/ML Integration",
            de: "Bauen Sie eine robuste, skalierbare Technologie-Grundlage für Ihr Startup.\n\n• Technologie-Architektur\n• Plattform-Auswahl\n• Skalierbarkeitsplanung\n• Sicherheits-Framework\n• KI/ML-Integration"
        }
    },
    cost: {
        title: { en: "Cost Structure", de: "Kostenstruktur" },
        text: { 
            en: "Optimize your cost structure for lean operations and efficient scaling.\n\n• Cost Analysis & Optimization\n• Budget Planning\n• Cash Flow Management\n• Resource Allocation\n• Financial Efficiency",
            de: "Optimieren Sie Ihre Kostenstruktur für schlanke Abläufe und effiziente Skalierung.\n\n• Kostenanalyse & Optimierung\n• Budgetplanung\n• Cash-Flow-Management\n• Ressourcenallokation\n• Finanzielle Effizienz"
        }
    },
    partner: {
        title: { en: "Strategic Partners", de: "Strategische Partner" },
        text: { 
            en: "Identify and secure strategic partnerships that accelerate your growth.\n\n• Partnership Strategy\n• Partner Identification\n• Alliance Development\n• Integration Planning\n• Mutual Value Creation",
            de: "Identifizieren und sichern Sie strategische Partnerschaften, die Ihr Wachstum beschleunigen.\n\n• Partnerschaftsstrategie\n• Partner-Identifikation\n• Allianz-Entwicklung\n• Integrationsplanung\n• Gegenseitige Wertschöpfung"
        }
    },
    usp: {
        title: { en: "Value Proposition", de: "Wertversprechen" },
        text: { 
            en: "Craft a compelling value proposition that resonates with your target market.\n\n• Value Proposition Canvas\n• Customer Pain Point Analysis\n• Unique Value Definition\n• Message-Market Fit\n• Brand Positioning",
            de: "Erstellen Sie ein überzeugendes Wertversprechen, das bei Ihrem Zielmarkt ankommt.\n\n• Value Proposition Canvas\n• Analyse der Kundenschmerzen\n• Definition einzigartiger Werte\n• Message-Market Fit\n• Markenpositionierung"
        }
    },
    pitch: {
        title: { en: "Investor Ready", de: "Investor-bereit" },
        text: { 
            en: "Prepare compelling investor materials that secure funding for your startup.\n\n• Pitch Deck Development\n• Financial Projections\n• Due Diligence Preparation\n• Investor Targeting\n• Funding Strategy",
            de: "Bereiten Sie überzeugende Investor-Materialien vor, die Finanzierung für Ihr Startup sichern.\n\n• Pitch-Deck-Entwicklung\n• Finanzprognosen\n• Due-Diligence-Vorbereitung\n• Investor-Targeting\n• Finanzierungsstrategie"
        }
    }
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Startup website loaded');
    initializeWebsite();
});

// Initialize website functionality
function initializeWebsite() {
    initializeNavigation();
    initializeLanguageToggle();
    initializeGrowthJourney();
    initializeSmoothScrolling();
    
    // Load saved language preference
    loadLanguagePreference();
    
    // Set initial language
    if (!currentLanguage) {
        currentLanguage = 'en';
    }
    updateLanguage(currentLanguage);
}

// Navigation functionality
function initializeNavigation() {
    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.backdropFilter = 'blur(20px)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.backdropFilter = 'blur(20px)';
            }
        }
    });
}

// Smooth scrolling for navigation links
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Language toggle functionality
function initializeLanguageToggle() {
    const languageToggle = document.querySelector('.language-toggle');
    
    if (languageToggle) {
        languageToggle.addEventListener('click', function(e) {
            e.preventDefault();
            toggleLanguage();
        });
        
        languageToggle.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleLanguage();
            }
        });
    }
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'de' : 'en';
    updateLanguage(currentLanguage);
}

function updateLanguage(lang) {
    // Update language toggle button
    const currentLangElement = document.getElementById('current-lang');
    const altLangElement = document.getElementById('alt-lang');
    
    if (currentLangElement && altLangElement) {
        currentLangElement.textContent = lang.toUpperCase();
        altLangElement.textContent = lang === 'en' ? 'DE' : 'EN';
    }
    
    // Update all elements with language attributes
    const elementsWithLang = document.querySelectorAll('[data-en][data-de]');
    
    elementsWithLang.forEach(element => {
        const text = element.getAttribute(`data-${lang}`);
        if (text) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = text;
            } else {
                element.textContent = text;
            }
        }
    });
    
    // Update document language
    document.documentElement.lang = lang;
    
    // Store language preference
    localStorage.setItem('preferred-language', lang);
}

// Load saved language preference
function loadLanguagePreference() {
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'de')) {
        currentLanguage = savedLanguage;
    } else {
        currentLanguage = 'en';
    }
}

// Growth Journey functionality
function initializeGrowthJourney() {
    const growthBoxes = document.querySelectorAll('.growth-box');
    const modal = document.getElementById('growth-modal');
    const closeBtn = document.querySelector('.growth-close');
    
    growthBoxes.forEach(box => {
        box.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const step = this.getAttribute('data-step');
            openGrowthModal(step);
        });
    });
    
    // Close modal functionality
    if (closeBtn) {
        closeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            closeGrowthModal();
        });
    }
    
    // Close modal when clicking outside
    if (modal) {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeGrowthModal();
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeGrowthModal();
        }
    });
}

function openGrowthModal(step) {
    const modal = document.getElementById('growth-modal');
    const title = document.getElementById('growth-modal-title');
    const text = document.getElementById('growth-modal-text');
    
    if (!modal || !title || !text) {
        return;
    }
    
    if (growthContent[step]) {
        const content = growthContent[step];
        title.textContent = content.title[currentLanguage];
        text.textContent = content.text[currentLanguage];
        modal.style.display = 'block';
        
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
    }
}

function closeGrowthModal() {
    const modal = document.getElementById('growth-modal');
    if (modal) {
        modal.style.display = 'none';
        // Restore body scroll
        document.body.style.overflow = 'auto';
    }
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export functions for potential use
window.StartupWebsite = {
    toggleLanguage,
    updateLanguage,
    openGrowthModal,
    closeGrowthModal
};