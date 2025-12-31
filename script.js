/* ============================================
   LAURA PATRICIA - SCRIPTS
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // NAVBAR SCROLL EFFECT
    // ============================================
    const navbar = document.getElementById('navbar');
    
    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', handleNavbarScroll);
    
    // ============================================
    // SMOOTH SCROLL FOR NAVIGATION LINKS
    // ============================================
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                const navHeight = navbar.offsetHeight;
                const targetPosition = target.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ============================================
    // SCROLL ANIMATIONS (INTERSECTION OBSERVER)
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
    
    // ============================================
    // STAGGER ANIMATIONS
    // ============================================
    function addStaggerDelay(selector, delay = 0.1) {
        const elements = document.querySelectorAll(selector);
        elements.forEach((el, index) => {
            el.style.transitionDelay = `${index * delay}s`;
        });
    }
    
    addStaggerDelay('.service-card', 0.1);
    addStaggerDelay('.gallery-item', 0.1);
    addStaggerDelay('.skill-card', 0.1);
    addStaggerDelay('.cert-item', 0.08);
    
    // ============================================
    // MOBILE MENU (Basic Toggle)
    // ============================================
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinksContainer = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinksContainer.classList.toggle('mobile-open');
            
            // Toggle icon
            const isOpen = navLinksContainer.classList.contains('mobile-open');
            this.innerHTML = isOpen ? 
                `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>` :
                `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>`;
        });
    }
    
    // ============================================
    // FORM HANDLING
    // ============================================
    const contactForm = document.querySelector('.contact-form-card');
    
    if (contactForm) {
        const submitBtn = contactForm.querySelector('.form-submit');
        const inputs = contactForm.querySelectorAll('input, textarea');
        
        submitBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Simple validation
            let isValid = true;
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#E57373';
                } else {
                    input.style.borderColor = '';
                }
            });
            
            if (isValid) {
                // Simulate form submission
                submitBtn.innerHTML = `
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Mensaje Enviado
                `;
                submitBtn.style.background = '#4CAF50';
                
                // Reset after 3 seconds
                setTimeout(() => {
                    submitBtn.innerHTML = `
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                        Enviar Mensaje
                    `;
                    submitBtn.style.background = '';
                    inputs.forEach(input => input.value = '');
                }, 3000);
            }
        });
        
        // Remove error styling on input
        inputs.forEach(input => {
            input.addEventListener('input', function() {
                this.style.borderColor = '';
            });
        });
    }
    
    // ============================================
    // PARALLAX EFFECT FOR HERO BLOBS
    // ============================================
    const blobs = document.querySelectorAll('.bg-blob');
    
    window.addEventListener('mousemove', function(e) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        blobs.forEach((blob, index) => {
            const speed = (index + 1) * 20;
            const xMove = (x - 0.5) * speed;
            const yMove = (y - 0.5) * speed;
            
            blob.style.transform = `translate(${xMove}px, ${yMove}px)`;
        });
    });
    
    // ============================================
    // ACTIVE NAV LINK ON SCROLL
    // ============================================
    const sections = document.querySelectorAll('section[id]');
    
    function highlightNavLink() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
            
            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.style.color = 'var(--coral)';
                } else {
                    navLink.style.color = '';
                }
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavLink);
    
    // ============================================
    // GALLERY LIGHTBOX (Simple)
    // ============================================
    const galleryItems = document.querySelectorAll('.gallery-item img');
    
    galleryItems.forEach(img => {
        img.addEventListener('click', function() {
            // Create lightbox
            const lightbox = document.createElement('div');
            lightbox.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.9);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 9999;
                cursor: pointer;
                animation: fadeIn 0.3s ease;
            `;
            
            const imgClone = document.createElement('img');
            imgClone.src = this.src;
            imgClone.style.cssText = `
                max-width: 90%;
                max-height: 90%;
                border-radius: 10px;
                box-shadow: 0 20px 60px rgba(0,0,0,0.5);
                animation: scaleIn 0.3s ease;
            `;
            
            lightbox.appendChild(imgClone);
            document.body.appendChild(lightbox);
            document.body.style.overflow = 'hidden';
            
            // Close on click
            lightbox.addEventListener('click', function() {
                this.style.animation = 'fadeOut 0.3s ease';
                setTimeout(() => {
                    this.remove();
                    document.body.style.overflow = '';
                }, 300);
            });
        });
    });
    
    // Add keyframe animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
        @keyframes scaleIn {
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }
        
        /* Mobile menu styles */
        @media (max-width: 768px) {
            .nav-links.mobile-open {
                display: flex !important;
                flex-direction: column;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: var(--cream);
                padding: 20px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                gap: 15px;
            }
            .nav-links.mobile-open .nav-btn {
                text-align: center;
            }
        }
    `;
    document.head.appendChild(style);
    
});
