// EmailJS Configuration
const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'lz-elmgEq87cVYDde',
    SERVICE_ID: 'service_79iws03',
    TEMPLATE_ID: 'template_96ulw7j',
    TO_EMAIL: 'sales@sjgroupindia.in'
}

// Initialize EmailJS
emailjs.init({
    publicKey: EMAILJS_CONFIG.PUBLIC_KEY
});

// ========== GLOBAL VARIABLES ==========
let mobileMenu = null;
let overlayDiv = null;
let menuIcon = null;
let mobileBtn = null;

// ========== MOBILE MENU FUNCTIONS ==========
function openMobileMenu() {
    if (mobileMenu) {
        mobileMenu.classList.add('open');
    }
    if (overlayDiv) {
        overlayDiv.classList.add('active');
    }
    document.body.style.overflow = 'hidden';
    
    // Change icon to X - Direct SVG manipulation
    if (menuIcon) {
        menuIcon.innerHTML = '';
        menuIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        menuIcon.setAttribute('width', '24');
        menuIcon.setAttribute('height', '24');
        menuIcon.setAttribute('viewBox', '0 0 24 24');
        menuIcon.setAttribute('fill', 'none');
        menuIcon.setAttribute('stroke', 'currentColor');
        menuIcon.setAttribute('stroke-width', '2');
        menuIcon.setAttribute('stroke-linecap', 'round');
        menuIcon.setAttribute('stroke-linejoin', 'round');
        menuIcon.innerHTML = `
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
        `;
    }
}

function closeMobileMenu() {
    if (mobileMenu) {
        mobileMenu.classList.remove('open');
    }
    if (overlayDiv) {
        overlayDiv.classList.remove('active');
    }
    document.body.style.overflow = 'auto';
    
    // Change icon back to hamburger - Direct SVG manipulation
    if (menuIcon) {
        menuIcon.innerHTML = '';
        menuIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        menuIcon.setAttribute('width', '24');
        menuIcon.setAttribute('height', '24');
        menuIcon.setAttribute('viewBox', '0 0 24 24');
        menuIcon.setAttribute('fill', 'none');
        menuIcon.setAttribute('stroke', 'currentColor');
        menuIcon.setAttribute('stroke-width', '2');
        menuIcon.setAttribute('stroke-linecap', 'round');
        menuIcon.setAttribute('stroke-linejoin', 'round');
        menuIcon.innerHTML = `
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
        `;
    }
}

window.closeMobileMenu = closeMobileMenu;

// ========== OTHER GLOBAL FUNCTIONS ==========
window.openEnquiryModal = function() {
    const modalElement = document.getElementById('dynamicModal');
    if (modalElement) {
        modalElement.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

window.closeEnquiryModal = function() {
    const modalElement = document.getElementById('dynamicModal');
    if (modalElement) {
        modalElement.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

window.openImageModal = function(img, title) {
    const modalImg = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalImageTitle');
    const imageModal = document.getElementById('imageModal');
    if (modalImg) modalImg.src = img;
    if (modalTitle) modalTitle.textContent = title;
    if (imageModal) {
        imageModal.classList.remove('hidden');
        imageModal.classList.add('flex');
        document.body.classList.add('modal-open');
    }
}

window.closeImageModal = function() {
    const imageModal = document.getElementById('imageModal');
    if (imageModal) {
        imageModal.classList.add('hidden');
        document.body.classList.remove('modal-open');
    }
}

window.openVideoModal = function() {
    const modalVideo = document.getElementById('videoModal');
    const youtubeIframe = document.getElementById('youtubeVideo');
    if (modalVideo) {
        modalVideo.classList.remove('hidden');
        modalVideo.classList.add('flex');
        document.body.classList.add('modal-open');
        if(youtubeIframe) {
            const videoSrc = youtubeIframe.src;
            youtubeIframe.src = videoSrc.replace('autoplay=0', 'autoplay=1');
        }
    }
}

window.closeVideoModal = function() {
    const modalVideo = document.getElementById('videoModal');
    const youtubeIframe = document.getElementById('youtubeVideo');
    if (modalVideo){
        modalVideo.classList.add('hidden');
        document.body.classList.remove('modal-open');
        if(youtubeIframe){
            youtubeIframe.src = youtubeIframe.src.replace('autoplay=1', 'autoplay=0');
        }
    } 
}

window.openFloorPlanModal = function(img, title) {
    const modalImg = document.getElementById('modalFloorPlanImg');
    const modalTitle = document.getElementById('modalFloorPlanTitle');
    const floorPlanModal = document.getElementById('floorPlanModal');
    if (modalImg) modalImg.src = img;
    if (modalTitle) modalTitle.textContent = title;
    if (floorPlanModal) {
        floorPlanModal.classList.remove('hidden');
        floorPlanModal.classList.add('flex');
        document.body.classList.add('modal-open');
    }
}

window.closeFloorPlanModal = function() {
    const floorPlanModal = document.getElementById('floorPlanModal');
    if (floorPlanModal) {
        floorPlanModal.classList.add('hidden');
        document.body.classList.remove('modal-open');
    }
}

window.switchAmenitiesTab = function(tab) {
    const rooftop = document.getElementById('rooftop-amenities');
    const indoor = document.getElementById('indoor-amenities');
    const btnRooftop = document.getElementById('btn-rooftop');
    const btnIndoor = document.getElementById('btn-indoor');
    
    if (tab === 'rooftop') {
        if (rooftop) rooftop.style.display = 'grid';
        if (indoor) indoor.style.display = 'none';
        if (btnRooftop) btnRooftop.className = "px-6 lg:px-8 py-2 lg:py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all bg-blue-600 text-white shadow-lg w-full sm:w-auto";
        if (btnIndoor) btnIndoor.className = "px-6 lg:px-8 py-2 lg:py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all text-slate-500 hover:bg-slate-200 w-full sm:w-auto";
    } else {
        if (indoor) indoor.style.display = 'grid';
        if (rooftop) rooftop.style.display = 'none';
        if (btnIndoor) btnIndoor.className = "px-6 lg:px-8 py-2 lg:py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all bg-blue-600 text-white shadow-lg w-full sm:w-auto";
        if (btnRooftop) btnRooftop.className = "px-6 lg:px-8 py-2 lg:py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all text-slate-500 hover:bg-slate-200 w-full sm:w-auto";
    }
    setTimeout(() => {
        if (typeof lucide !== 'undefined') lucide.createIcons();
    }, 50);
}

window.filterGallery = function(category) {
    const items = document.querySelectorAll('.gallery-item');
    const buttons = document.querySelectorAll('.gallery-filter-btn');
    
    buttons.forEach(btn => {
        btn.classList.remove('bg-blue-600', 'text-white');
        btn.classList.add('text-slate-600');
    });
    
    const activeBtn = document.getElementById(`filter-${category}`);
    if (activeBtn) {
        activeBtn.classList.remove('text-slate-600');
        activeBtn.classList.add('bg-blue-600', 'text-white');
    }
    
    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

window.showToast = function(msg) {
    const toast = document.getElementById('toastMsg');
    if (toast) {
        toast.textContent = msg;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    }
}

// ========== DOM CONTENT LOADED ==========
document.addEventListener('DOMContentLoaded', function() {
    mobileBtn = document.getElementById('mobileMenuBtn');
    mobileMenu = document.getElementById('mobileMenu');
    overlayDiv = document.getElementById('overlay');
    menuIcon = document.getElementById('menuIcon');
    
    const modal = document.getElementById('dynamicModal');
    const form = document.getElementById('modalEnquiryForm');
    const closeBtn = document.getElementById('closeModalBtn');
    
    let messageContainer = document.getElementById('messageContainer');
    if (!messageContainer && modal) {
        messageContainer = document.createElement('div');
        messageContainer.id = 'messageContainer';
        const modalContainer = modal.querySelector('.modal-container');
        const formElement = document.getElementById('modalEnquiryForm');
        if (modalContainer && formElement) {
            modalContainer.insertBefore(messageContainer, formElement);
        }
    }
    
    function showFormMessage(text, type = 'success') {
        const messageDiv = document.createElement('div');
        messageDiv.className = `${type}-message`;
        messageDiv.style.cssText = `
            padding: 12px;
            border-radius: 8px;
            margin-bottom: 15px;
            text-align: center;
            background: ${type === 'success' ? '#4caf50' : '#f44336'};
            color: white;
        `;
        messageDiv.textContent = text;
        if (messageContainer) {
            messageContainer.innerHTML = '';
            messageContainer.appendChild(messageDiv);
            setTimeout(() => {
                if (messageDiv.parentNode) messageDiv.remove();
            }, 3000);
        }
    }
    
    function getCurrentDate() {
        return new Date().toLocaleString('en-US', {
            dateStyle: 'full',
            timeStyle: 'medium'
        });
    }
    
    const enquireButtons = document.querySelectorAll('#mobileEnquireBtn, #enquireNavBtn');
    enquireButtons.forEach(button => {
        button.removeAttribute('onclick');
        button.addEventListener('click', (e) => {
            e.preventDefault();
            window.openEnquiryModal();
        });
    });
    
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('modalName').value.trim(),
                phone: document.getElementById('modalPhone').value.trim(),
                email: document.getElementById('modalEmail').value.trim(),
                unit: document.getElementById('modalUnit').value
            };
            
            if (!formData.name || !formData.phone || !formData.email) {
                showFormMessage('Please fill in all required fields', 'error');
                return;
            }
            
            if (!/^[0-9]{10}$/.test(formData.phone.replace(/\D/g, ''))) {
                showFormMessage('Please enter a valid 10-digit mobile number', 'error');
                return;
            }
            
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
                showFormMessage('Please enter a valid email address', 'error');
                return;
            }
            
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = '⏳ Sending...';
            submitBtn.disabled = true;
            
            try {
                await emailjs.send(
                    EMAILJS_CONFIG.SERVICE_ID,
                    EMAILJS_CONFIG.TEMPLATE_ID,
                    {
                        from_name: formData.name,
                        from_email: formData.email,
                        phone: formData.phone,
                        unit: formData.unit,
                        submission_date: getCurrentDate(),
                        to_email: EMAILJS_CONFIG.TO_EMAIL,
                        reply_to: formData.email
                    }
                );
                
                showFormMessage('✓ Thank you! We will contact you shortly.', 'success');
                form.reset();
                setTimeout(() => window.closeEnquiryModal(), 2000);
            } catch (error) {
                console.error('EmailJS Error:', error);
                showFormMessage('❌ Failed to send enquiry. Please try again.', 'error');
            } finally {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', window.closeEnquiryModal);
    }
    
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                window.closeEnquiryModal();
            }
        });
    }
    
    if (mobileBtn) {
        const newMobileBtn = mobileBtn.cloneNode(true);
        mobileBtn.parentNode.replaceChild(newMobileBtn, mobileBtn);
        mobileBtn = newMobileBtn;
        
        mobileBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            if (mobileMenu && mobileMenu.classList.contains('open')) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
    }
    
    if (overlayDiv) {
        overlayDiv.addEventListener('click', () => {
            closeMobileMenu();
        });
    }
    
    document.querySelectorAll('.mobile-menu a, .mobile-menu button').forEach(link => {
        link.addEventListener('click', () => {
            setTimeout(closeMobileMenu, 100);
        });
    });
    
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
    
    if (typeof window.filterGallery === 'function') window.filterGallery('all');
    if (typeof window.switchAmenitiesTab === 'function') window.switchAmenitiesTab('rooftop');
    
    // Initialize the default specification tab
    if (typeof window.switchSpecificationsTab === 'function') {
        window.switchSpecificationsTab('rcc');
    }
});

// ========== AMENITY CARD HOVER IMAGES ==========
document.addEventListener('DOMContentLoaded', function() {
    const amenityImages = {
        'Swimming Pool': 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=600',
        'Observation Deck': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600',
        'Sky Cinema': 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=600',
        'Bonfire Zone': 'https://images.unsplash.com/photo-1536164261511-3a17e671d380?w=600',
        'Elite Gym': 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600',
        'Work Pods': 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=600',
        'Party Hall': 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600',
        "Kid's Play Area": 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600',
        'Library Lounge': 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600',
        'Indoor Games': 'https://images.pexels.com/photos/6962274/pexels-photo-6962274.jpeg',
        'Yoga & Meditation': 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600'
    };

    const cards = document.querySelectorAll('.amenities-grid .group');
    
    cards.forEach(card => {
        const titleElement = card.querySelector('h5');
        if (!titleElement) return;
        
        const title = titleElement.innerText.trim();
        let imageUrl = amenityImages[title];
        if (!imageUrl) {
            imageUrl = 'https://images.unsplash.com/photo-1560518883-ce09059eeffc?w=600';
        }
        
        const overlayDiv = document.createElement('div');
        overlayDiv.className = 'hover-image';
        overlayDiv.style.backgroundImage = `url('${imageUrl}')`;
        overlayDiv.style.backgroundSize = 'cover';
        overlayDiv.style.backgroundPosition = 'center';
        overlayDiv.style.borderRadius = 'inherit';
        
        card.insertBefore(overlayDiv, card.firstChild);
    });
});

// ========== FLOOR PLAN DOWNLOAD WITH ENQUIRY FORM ==========
(function() {
    let pendingDownload = {
        url: null,
        unit: null,
        isPending: false
    };

    const floorPlanBtns = document.querySelectorAll('.floorPlanBtn');
    
    floorPlanBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            const downloadUrl = btn.getAttribute('href');
            const unit = btn.getAttribute('data-unit') || 
                        (btn.querySelector('.inline')?.parentElement?.innerText?.trim()) || 
                        'Floor Plan';
            
            pendingDownload.url = downloadUrl;
            pendingDownload.unit = unit;
            pendingDownload.isPending = true;
            
const modalTitle = document.getElementById('modalTitle');
            if (modalTitle) {
                modalTitle.textContent = `📄 Download ${unit}`;
            }
            
            const oldInfo = document.getElementById('downloadInfoMsg');
            if (oldInfo) oldInfo.remove();
            
            const infoDiv = document.createElement('div');
            infoDiv.id = 'downloadInfoMsg';
            infoDiv.className = 'bg-blue-50 text-blue-800 p-3 rounded-xl mb-4 text-sm border-l-4 border-blue-600';
            infoDiv.innerHTML = `
                <div class="flex items-start gap-2">
                    <span>🔐</span>
                    <div>
                        <strong>Download requires enquiry</strong><br>
                        To download the <strong>${unit}</strong> floor plan, please fill and submit the form below. 
                        The download will start automatically after successful submission.
                    </div>
                </div>
            `;
            
            const modalContainer = document.querySelector('#dynamicModal .modal-container');
            const formElement = document.getElementById('modalEnquiryForm');
            if (modalContainer && formElement) {
                modalContainer.insertBefore(infoDiv, formElement);
            }
            
            window.openEnquiryModal();
        });
    });
    
    const originalForm = document.getElementById('modalEnquiryForm');
    if (originalForm) {
        const newForm = originalForm.cloneNode(true);
        originalForm.parentNode.replaceChild(newForm, originalForm);
        
        newForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const name = document.getElementById('modalName').value.trim();
            const phone = document.getElementById('modalPhone').value.trim();
            const email = document.getElementById('modalEmail').value.trim();
            const unit = document.getElementById('modalUnit').value;
            
            if (!name || !phone || !email) {
                window.showFormMessage?.('Please fill in all required fields', 'error');
                return;
            }
            if (!/^[0-9]{10}$/.test(phone.replace(/\D/g, ''))) {
                window.showFormMessage?.('Please enter a valid 10-digit mobile number', 'error');
                return;
            }
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                window.showFormMessage?.('Please enter a valid email address', 'error');
                return;
            }
            
            const submitBtn = newForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = '⏳ Sending...';
            submitBtn.disabled = true;
            
            try {
                await emailjs.send(
                    EMAILJS_CONFIG.SERVICE_ID,
                    EMAILJS_CONFIG.TEMPLATE_ID,
                    {
                        from_name: name,
                        from_email: email,
                        phone: phone,
                        unit: unit,
                        submission_date: new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'medium' }),
                        to_email: EMAILJS_CONFIG.TO_EMAIL,
                        reply_to: email
                    }
                );
                
                window.showFormMessage?.('✓ Thank you! We will contact you shortly.', 'success');
                newForm.reset();
                
                if (pendingDownload.isPending && pendingDownload.url) {
                    const link = document.createElement('a');
                    link.href = pendingDownload.url;
                    link.download = pendingDownload.url.split('/').pop() || 'floor_plan';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    
                    window.showToast?.(`📥 Download started for ${pendingDownload.unit}`);
                    
                    pendingDownload.isPending = false;
                    pendingDownload.url = null;
                    pendingDownload.unit = null;
                }
                
                setTimeout(() => {
                    window.closeEnquiryModal();
                    const modalTitle = document.getElementById('modalTitle');
                    if (modalTitle) modalTitle.textContent = 'Quick Enquiry';
                    const infoMsg = document.getElementById('downloadInfoMsg');
                    if (infoMsg) infoMsg.remove();
                }, 2000);
                
            } catch (error) {
                console.error('EmailJS Error:', error);
                window.showFormMessage?.('❌ Failed to send enquiry. Please try again.', 'error');
            } finally {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }
        });
        
        if (!window.showFormMessage) {
            window.showFormMessage = function(text, type) {
                const container = document.getElementById('messageContainer');
                if (container) {
                    const msgDiv = document.createElement('div');
                    msgDiv.className = type === 'success' ? 'success-message' : 'error-message';
                    msgDiv.textContent = text;
                    container.innerHTML = '';
                    container.appendChild(msgDiv);
                    setTimeout(() => msgDiv.remove(), 3000);
                } else {
                    alert(text);
                }
            };
        }
        if (!window.showToast) {
            window.showToast = function(msg) {
                const toast = document.getElementById('toastMsg');
                if (toast) {
                    toast.textContent = msg;
                    toast.classList.add('show');
                    setTimeout(() => toast.classList.remove('show'), 3000);
                }
            };
        }
    }
})();

// ========== SPECIFICATIONS TABS CONFIGURATION & LOGIC ==========
const specificationsData = {
    rcc: {
        title: "RCC Structure",
        subtitle: "Built to Last & Resistant to Elements",
        image: "./assets/rcc.png",
        bullets: [
            { type: "main", text: "RCC framed structure designed as per earthquake resistance norms" },
            { type: "main", text: "5\" Internal brick walls using AAC blocks" },
            { type: "main", text: "Internal walls finished with smooth gypsum plaster" },
            { type: "main", text: "External walls with durable sand-faced plaster" }
        ]
    },
    flooring: {
        title: "Premium Flooring",
        subtitle: "Luxury Underfoot for Every Space",
        image: "./assets/flooring.png",
        bullets: [
            { type: "main", text: "1m x 1m / 0.8 m x 1.5m vitrified tile for entire flat" },
            { type: "main", text: "Anti-skid or rustic ceramic tile flooring for terraces" },
            { type: "main", text: "Anti-skid tile flooring in all toilets and bathrooms" }
        ]
    },
    doors: {
        title: "Elegant Doors",
        subtitle: "Form, Function & Complete Security",
        image: "./assets/door.jpeg",
        bullets: [
            { type: "header", text: "Main Door" },
            { type: "sub", text: "Plywood frame and solid shutter" },
            { type: "sub", text: "High-quality, elegant door fittings" },
            { type: "header", text: "Internal Doors" },
            { type: "sub", text: "Plywood frame with flush doors" },
            { type: "sub", text: "Standard, long-lasting hardware" },
            { type: "sub", text: "Aluminum / UPVC door for balcony with mosquito net" },
            { type: "header", text: "Toilet Doors" },
            { type: "sub", text: "Granite frames" },
            { type: "sub", text: "Flush doors with dual-side laminate and superior fittings" }
        ]
    },
    electrical: {
        title: "Advanced Electricals",
        subtitle: "Concealed Safety & Efficient Power Distribution",
        image: "./assets/electrical.jpeg",
        bullets: [
            { type: "main", text: "Concealed wiring with MCB/ circuit breaker safety system" },
            { type: "main", text: "International-quality branded switches and fittings" },
            { type: "main", text: "Sufficient electrical points across all rooms" },
            { type: "main", text: "Telephone points in the living room and master bedroom" },
            { type: "main", text: "A.C. point provision in every bedroom" },
            { type: "main", text: "Electrical Solar system for common area for saving electricity" }
        ]
    },
    windows: {
        title: "Windows & Railings",
        subtitle: "Panoramic Views & Maximum Safety",
        image: "./assets/windows-railings.jpeg",
        bullets: [
            { type: "main", text: "Powder-coated aluminum sliding windows with M. S. safety grills" },
            { type: "main", text: "Granite borders on all four sides of windows" },
            { type: "main", text: "Stainless steel railing with glass panels for terraces" }
        ]
    },
    kitchen: {
        title: "Kitchen Platform",
        subtitle: "Designed for Chefs & Daily Convenience",
        image: "./assets/kitchen.jpeg",
        bullets: [
            { type: "main", text: "Premium granite kitchen platform with stainless steel sink" },
            { type: "main", text: "Full-height glazed tile dado above platform (up to lintel level)" },
            { type: "main", text: "Exhaust fan for ventilation" },
            { type: "main", text: "Adequate electrical points for all essential appliances" },
            { type: "main", text: "Washing machine inlet and outlet provision in dry balcony" }
        ]
    },
    bathrooms: {
        title: "Bathrooms & Toilets",
        subtitle: "Sanitary Excellence & Premium Fittings",
        image: "./assets/bathroom-toilets.png",
        bullets: [
            { type: "main", text: "Anti-skid ceramic tile flooring" },
            { type: "main", text: "Ceramic wall tiles up to lintel level" },
            { type: "main", text: "Premium sanitary ware provided" },
            { type: "main", text: "Concealed plumbing with branded C.P. fittings" },
            { type: "main", text: "Granite countertop for wash basin" },
            { type: "main", text: "Exhaust fan provision" }
        ]
    },
    painting: {
        title: "Interior & Exterior Painting",
        subtitle: "Perfect Aesthetics for Interior & Exterior Walls",
        image: "./assets/painting.jpeg",
        bullets: [
            { type: "main", text: "Interiors finished with acrylic oil-bound distemper" },
            { type: "main", text: "Exteriors coated with weatherproof Apex / Weathercoat paint" }
        ]
    },
    security: {
        title: "Security & Monitoring",
        subtitle: "24/7 Smart Surveillance for Peace of Mind",
        image: "./assets/security.jpeg",
        bullets: [
            { type: "main", text: "CCTV surveillance in all common areas and at exit/entry points" },
            { type: "main", text: "Video door phone system installed in every flat for added security" }
        ]
    },
    parking: {
        title: "Smart Parking System",
        subtitle: "Efficient Utilization of Space",
        image: "./assets/parking.jpeg",
        bullets: [
            { type: "main", text: "Independent mechanical stack parking system for efficient space utilisation" }
        ]
    },
    firesafety: {
        title: "Fire Safety System",
        subtitle: "Government Approved Safeguards",
        image: "./assets/fire-safety.jpeg",
        bullets: [
            { type: "main", text: "All floors installing Government Approved fire safety systems" }
        ]
    }
};

window.switchSpecificationsTab = function(tabKey) {
    const data = specificationsData[tabKey];
    if (!data) return;

    // Update active tab buttons
    document.querySelectorAll('.specs-tab').forEach(btn => {
        if (btn.getAttribute('data-tab') === tabKey) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Populate contents
    const titleEl = document.getElementById('specs-title');
    const subtitleEl = document.getElementById('specs-subtitle');
    const listEl = document.getElementById('specs-list');
    const imgEl = document.getElementById('specs-image');
    
    if (titleEl) titleEl.textContent = data.title;
    if (subtitleEl) subtitleEl.textContent = data.subtitle;
    if (imgEl) {
        imgEl.src = data.image;
        imgEl.alt = data.title;
    }

    if (listEl) {
        listEl.innerHTML = '';
        let currentSubList = null;
        
        data.bullets.forEach(bullet => {
            if (bullet.type === 'header') {
                if (currentSubList) {
                    listEl.appendChild(currentSubList);
                    currentSubList = null;
                }
                const headerDiv = document.createElement('div');
                headerDiv.className = 'specs-sub-title mt-4 first:mt-0';
                headerDiv.textContent = bullet.text;
                listEl.appendChild(headerDiv);
            } else if (bullet.type === 'sub') {
                if (!currentSubList) {
                    currentSubList = document.createElement('div');
                    currentSubList.className = 'specs-sub-list';
                }
                const subItem = document.createElement('div');
                subItem.className = 'specs-sub-item';
                subItem.textContent = bullet.text;
                currentSubList.appendChild(subItem);
            } else {
                if (currentSubList) {
                    listEl.appendChild(currentSubList);
                    currentSubList = null;
                }
                const itemDiv = document.createElement('div');
                itemDiv.className = 'specs-list-item';
                itemDiv.innerHTML = `
                    <svg class="specs-list-icon" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span class="specs-list-text">${bullet.text}</span>
                `;
                listEl.appendChild(itemDiv);
            }
        });
        
        if (currentSubList) {
            listEl.appendChild(currentSubList);
        }
    }

    // Add fade-in animation trigger
    const detailsContainer = document.getElementById('specs-details-container');
    const imageContainer = document.getElementById('specs-img-container');
    
    if (detailsContainer) {
        detailsContainer.style.animation = 'none';
        detailsContainer.offsetHeight; // trigger reflow
        detailsContainer.style.animation = 'specsFadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards';
    }
    if (imageContainer) {
        imageContainer.style.animation = 'none';
        imageContainer.offsetHeight; // trigger reflow
        imageContainer.style.animation = 'specsFadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards';
        imageContainer.style.animationDelay = '0.05s';
    }
}
