/* ============================================
   LAURA PATRICIA - SCRIPTS
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // DATOS DE LOS TALLERES
    // ============================================
    const talleresData = {
        cuentacuentos: {
            title: "Cuentacuentos",
            subtitle: "Taller de Lectura Interactiva y Narracion",
            image: "images/gallery-reading.jpg",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>`,
            description: "El taller de Cuentacuentos es una experiencia magica donde los ninos se sumergen en el mundo de la literatura infantil. A traves de la narracion dramatizada, voces de personajes y elementos visuales, los pequenos desarrollan su imaginacion, comprension auditiva y amor por los libros. Cada sesion incluye actividades de comprension, preguntas interactivas y momentos donde los ninos pueden recrear la historia con sus propias palabras, fortaleciendo asi su expresion oral y vocabulario.",
            features: [
                "Desarrollo de la imaginacion",
                "Mejora de la comprension auditiva",
                "Ampliacion del vocabulario",
                "Fomento del amor por la lectura",
                "Expresion oral y narracion",
                "Comprension de secuencias"
            ]
        },
        arte: {
            title: "Arte Creativo",
            subtitle: "Taller de Pintura, Dibujo y Manualidades",
            image: "images/gallery-crafts.jpg",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                <path d="M2 2l7.586 7.586"></path>
                <circle cx="11" cy="11" r="2"></circle>
            </svg>`,
            description: "El taller de Arte Creativo permite a los ninos explorar su creatividad mientras desarrollan habilidades linguisticas. Mientras pintan, dibujan o crean manualidades, aprenden nombres de colores, formas, texturas y materiales. Las actividades artisticas se convierten en oportunidades para describir, narrar y expresar emociones. Los ninos aprenden a seguir instrucciones, explicar sus creaciones y desarrollar vocabulario relacionado con el arte, todo mientras fortalecen su motricidad fina.",
            features: [
                "Desarrollo de motricidad fina",
                "Vocabulario de colores y formas",
                "Expresion de emociones",
                "Seguimiento de instrucciones",
                "Creatividad e imaginacion",
                "Descripcion oral de creaciones"
            ]
        },
        construccion: {
            title: "Juegos de Construccion",
            subtitle: "Taller de Desarrollo Cognitivo y Espacial",
            image: "images/gallery-blocks.jpg",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
            </svg>`,
            description: "Los juegos de construccion son fundamentales para el desarrollo cognitivo y linguistico. Mientras los ninos construyen torres, puentes y estructuras, aprenden conceptos espaciales (arriba, abajo, al lado), tamanos (grande, pequeno, mediano), cantidades y colores. Este taller fomenta el trabajo en equipo, la resolucion de problemas y la comunicacion. Los ninos aprenden a planificar, describir sus construcciones y explicar procesos, desarrollando habilidades narrativas y vocabulario tecnico basico.",
            features: [
                "Conceptos espaciales y tamanos",
                "Resolucion de problemas",
                "Trabajo colaborativo",
                "Planificacion y descripcion",
                "Vocabulario matematico basico",
                "Coordinacion mano-ojo"
            ]
        },
        lenguaje: {
            title: "Estimulacion del Lenguaje",
            subtitle: "Taller de Vocabulario y Expresion Oral",
            image: "images/gallery-language.jpg",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>`,
            description: "Este taller se centra especificamente en el desarrollo de las habilidades comunicativas de los ninos. A traves de juegos con tarjetas, imagenes, objetos reales y actividades interactivas, los pequenos amplian su vocabulario, mejoran su pronunciacion y aprenden a estructurar oraciones. Se trabaja la identificacion de objetos, descripcion de caracteristicas, narracion de experiencias personales y comprension de preguntas. Cada actividad esta disenada para que el nino se sienta motivado a comunicarse.",
            features: [
                "Ampliacion de vocabulario",
                "Mejora de pronunciacion",
                "Estructuracion de oraciones",
                "Descripcion de objetos",
                "Narracion de experiencias",
                "Comprension de preguntas"
            ]
        },
        musica: {
            title: "Musica y Ritmo",
            subtitle: "Taller de Canciones y Juegos Musicales",
            image: "images/gallery-music.jpg",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="5.5" cy="17.5" r="2.5"></circle>
                <circle cx="17.5" cy="15.5" r="2.5"></circle>
                <path d="M8 17V5l12-2v12"></path>
            </svg>`,
            description: "La musica es una herramienta poderosa para el desarrollo del lenguaje. En este taller, los ninos aprenden canciones infantiles, rimas, trabalenguas y juegos ritmicos que fortalecen su memoria auditiva, conciencia fonologica y fluidez verbal. Las canciones con movimientos ayudan a asociar palabras con acciones, mientras que los juegos de ritmo mejoran la percepcion de los sonidos del lenguaje. Es una forma divertida y efectiva de desarrollar habilidades prelinguisticas y linguisticas.",
            features: [
                "Memoria auditiva",
                "Conciencia fonologica",
                "Fluidez verbal",
                "Coordinacion ritmo-palabra",
                "Aprendizaje de rimas",
                "Asociacion palabra-movimiento"
            ]
        },
        titeres: {
            title: "Teatro de Titeres",
            subtitle: "Taller de Dramatizacion y Expresion",
            image: "images/gallery-puppets.jpg",
            icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                <line x1="9" y1="9" x2="9.01" y2="9"></line>
                <line x1="15" y1="9" x2="15.01" y2="9"></line>
            </svg>`,
            description: "El teatro de titeres es una actividad extraordinaria para el desarrollo del lenguaje expresivo. Los ninos pueden dar voz a personajes, crear dialogos, inventar historias y expresar emociones a traves de los titeres. Esta forma de juego simbolico les permite practicar diferentes tonos de voz, expresiones y estructuras linguisticas en un ambiente seguro y divertido. El taller incluye la creacion de titeres sencillos y la representacion de pequenas obras, fomentando la creatividad y la expresion oral.",
            features: [
                "Expresion de emociones",
                "Creacion de dialogos",
                "Modulacion de la voz",
                "Juego simbolico",
                "Creatividad narrativa",
                "Confianza al hablar"
            ]
        }
    };

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
            const href = this.getAttribute('href');
            if (href.startsWith('#') && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const navHeight = navbar.offsetHeight;
                    const targetPosition = target.offsetTop - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
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
    // MOBILE MENU
    // ============================================
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinksContainer = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinksContainer.classList.toggle('mobile-open');
            
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
    // MODAL TALLERES
    // ============================================
    const modal = document.getElementById('tallerModal');
    const galleryItems = document.querySelectorAll('.gallery-item[data-taller]');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            const tallerId = this.getAttribute('data-taller');
            const taller = talleresData[tallerId];
            
            if (taller) {
                openModal(taller, tallerId);
            }
        });
    });
    
    function openModal(taller, tallerId) {
        document.getElementById('modalImage').src = taller.image;
        document.getElementById('modalImage').alt = taller.title;
        document.getElementById('modalIcon').innerHTML = taller.icon;
        document.getElementById('modalTitle').textContent = taller.title;
        document.getElementById('modalSubtitle').textContent = taller.subtitle;
        document.getElementById('modalDescription').textContent = taller.description;
        
        const featuresContainer = document.getElementById('modalFeatures');
        featuresContainer.innerHTML = taller.features.map(f => `<li>${f}</li>`).join('');
        
        // Update WhatsApp link
        const whatsappLink = document.getElementById('modalWhatsapp');
        const mensaje = encodeURIComponent(`Hola Laura Patricia, me interesa el taller de ${taller.title}. Me gustaria recibir mas informacion.`);
        whatsappLink.href = `https://wa.me/59171928909?text=${mensaje}`;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // Close modal function (global)
    window.closeModal = function() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };
    
    // Close on overlay click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
    
    // ============================================
    // PARALLAX EFFECT FOR HERO BLOBS
    // ============================================
    const blobs = document.querySelectorAll('.bg-blob');
    
    window.addEventListener('mousemove', function(e) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        blobs.forEach((blob, index) => {
            const speed = (index + 1) * 15;
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
            
            if (navLink && !navLink.classList.contains('nav-btn')) {
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
    // ADD MOBILE MENU STYLES
    // ============================================
    const style = document.createElement('style');
    style.textContent = `
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
        
        a.hero-contact-item,
        a.contact-item {
            text-decoration: none;
            color: inherit;
            transition: all 0.3s ease;
        }
        
        a.hero-contact-item:hover {
            color: var(--coral);
        }
        
        a.contact-item:hover {
            background: var(--coral-lighter);
        }
    `;
    document.head.appendChild(style);
    
});
