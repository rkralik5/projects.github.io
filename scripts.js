// Shared JavaScript functionality for all pages
// This file contains common interactive features used across the portfolio

// Wait for the DOM to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // MOBILE MENU FUNCTIONALITY
    // Get references to the mobile menu toggle button and navigation menu
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    
    // Only set up mobile menu if elements exist on the page
    if (mobileMenu && navMenu) {
        // Add click event listener to the mobile menu toggle
        mobileMenu.addEventListener('click', function() {
            // Toggle the 'active' class to show/hide the mobile menu
            navMenu.classList.toggle('active');
            
            // Animate the hamburger menu icon
            mobileMenu.classList.toggle('active');
        });
    }

    // SMOOTH SCROLLING FOR NAVIGATION LINKS
    // Get all navigation links that start with '#' (internal page anchors)
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    // Add smooth scrolling behavior to each navigation link
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor link behavior
            
            // Get the target section ID from the href attribute
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            // If the target section exists, scroll to it smoothly
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth', // Smooth scrolling animation
                    block: 'start'      // Align to the top of the viewport
                });
            }
            
            // Close mobile menu after clicking a link (for mobile users)
            if (navMenu) {
                navMenu.classList.remove('active');
            }
        });
    });

    // HEADER SCROLL EFFECT
    // Add a scroll event listener to change header appearance when scrolling
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        
        if (header) {
            // Add 'scrolled' class when user scrolls down more than 50px
            if (window.scrollY > 50) {
                header.style.backgroundColor = 'rgba(45, 80, 22, 0.95)'; // Semi-transparent background
            } else {
                header.style.backgroundColor = 'var(--primary-green)'; // Solid background at top
            }
        }
    });

    // ACTIVE NAVIGATION HIGHLIGHTING
    // Highlight the current page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navItems = document.querySelectorAll('.nav-menu a');
    
    navItems.forEach(link => {
        const href = link.getAttribute('href');
        
        // Check if this link points to the current page
        if (href === currentPage || 
            (currentPage === 'index.html' && href === '#home') ||
            (currentPage === '' && href === '#home')) {
            link.classList.add('active');
        }
    });

    // SCROLL ANIMATIONS
    // Create an Intersection Observer to trigger animations when elements come into view
    const observerOptions = {
        threshold: 0.1,    // Trigger when 10% of the element is visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before the element fully enters the viewport
    };

    // Create the observer instance
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add 'animate' class to trigger CSS animations
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    const animatedElements = document.querySelectorAll('.project-card, .content-card, .about-content');
    animatedElements.forEach(element => {
        // Set initial state for animation
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        // Start observing the element
        observer.observe(element);
    });

    // FORM VALIDATION (for contact forms)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#e74c3c';
                } else {
                    field.style.borderColor = 'var(--light-green)';
                }
                
                // Email validation
                if (field.type === 'email' && field.value) {
                    if (!validateEmail(field.value)) {
                        isValid = false;
                        field.style.borderColor = '#e74c3c';
                    }
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                showMessage('Please fill in all required fields correctly.', 'error');
            }
        });
    });

    // ACCESSIBILITY IMPROVEMENTS
    // Add keyboard navigation support for interactive elements
    document.addEventListener('keydown', function(e) {
        // Allow Enter key to trigger click events on focused elements
        if (e.key === 'Enter') {
            const focusedElement = document.activeElement;
            if (focusedElement.classList.contains('cta-button') || 
                focusedElement.classList.contains('project-link') ||
                focusedElement.classList.contains('btn')) {
                focusedElement.click();
            }
        }
    });

    // PERFORMANCE OPTIMIZATION
    // Lazy loading for images (when more images are added)
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });

        // Observe all images with 'lazy' class
        document.querySelectorAll('img.lazy').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // THEME TOGGLE (optional feature for future enhancement)
    // This can be implemented later to allow users to switch between light and dark themes
    function toggleTheme() {
        document.body.classList.toggle('dark-theme');
        localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
    }

    // Load saved theme preference from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }

    // Console message for developers who inspect the site
    console.log('👋 Hello! Thanks for checking out my portfolio. Feel free to explore the code!');
    console.log('🌱 This site is built with semantic HTML, responsive CSS, and vanilla JavaScript.');
    console.log('📧 Get in touch: your.email@example.com');
});

// UTILITY FUNCTIONS

// Email validation function
function validateEmail(email) {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show message function for user feedback
function showMessage(message, type = 'info') {
    // Create message element
    const messageDiv = document.createElement('div');
    messageDiv.className = `message message-${type}`;
    messageDiv.textContent = message;
    
    // Style the message
    messageDiv.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 2rem;
        border-radius: 5px;
        color: white;
        font-weight: bold;
        z-index: 9999;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
    `;
    
    // Set background color based on type
    switch(type) {
        case 'error':
            messageDiv.style.backgroundColor = '#e74c3c';
            break;
        case 'success':
            messageDiv.style.backgroundColor = 'var(--secondary-green)';
            break;
        default:
            messageDiv.style.backgroundColor = 'var(--primary-green)';
    }
    
    // Add to page
    document.body.appendChild(messageDiv);
    
    // Animate in
    setTimeout(() => {
        messageDiv.style.opacity = '1';
        messageDiv.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        messageDiv.style.opacity = '0';
        messageDiv.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.parentNode.removeChild(messageDiv);
            }
        }, 300);
    }, 3000);
}

// Debounce function to limit how often a function can be called
// Useful for scroll and resize event handlers to improve performance
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

// Throttle function to ensure a function is called at most once per specified interval
// Also useful for scroll and resize events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Function to create navigation for sub-pages
function createNavigation(currentPage = 'home') {
    return `
        <header>
            <nav>
                <a href="index.html" class="logo">Robert Kralik</a>
                
                <div class="menu-toggle" id="mobile-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                
                <ul class="nav-menu" id="nav-menu">
                    <li><a href="index.html" ${currentPage === 'home' ? 'class="active"' : ''}>Home</a></li>
                    <li><a href="about.html" ${currentPage === 'about' ? 'class="active"' : ''}>About Me</a></li>
                    <li><a href="projects.html" ${currentPage === 'projects' ? 'class="active"' : ''}>Projects</a></li>
                    <li><a href="contact.html" ${currentPage === 'contact' ? 'class="active"' : ''}>Contact</a></li>
                </ul>
            </nav>
        </header>
    `;
}

// Function to create footer for all pages
function createFooter() {
    return `
        <footer id="contact" class="scroll-offset">
            <div class="footer-content">
                <h3>Get In Touch</h3>
                <p>I'm always interested in new opportunities and collaborations.</p>
                
                <div class="social-links">
                    <a href="mailto:your.email@example.com">📧 Email</a>
                    <a href="https://orcid.org/your-orcid-id" target="_blank">🔬 ORCID</a>
                    <a href="https://linkedin.com/in/your-profile" target="_blank">💼 LinkedIn</a>
                    <a href="https://github.com/rkralik5" target="_blank">💻 GitHub</a>
                </div>
                
                <p style="margin-top: 2rem; font-size: 0.9rem; opacity: 0.8;">
                    © 2025 Robert Kralik. Built with HTML, CSS, and JavaScript.
                </p>
            </div>
        </footer>
    `;
}
