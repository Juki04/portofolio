/**
 * Portofolio Ahmad Subhan Agung Pambudi
 * Main JavaScript File
 */

document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        let currentScroll = window.scrollY;
        
        // Jika scroll ke bawah dan tidak di home section, sembunyikan navbar
        if (currentScroll > lastScrollTop && currentScroll > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } 
        // Jika scroll ke atas atau di home section, tampilkan navbar
        else {
            navbar.style.transform = 'translateY(0)';
            
            // Tambahkan kelas scrolled jika tidak di paling atas
            if (currentScroll > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
        
        lastScrollTop = currentScroll;
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjusted for navbar height
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active nav link based on scroll position
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', function() {
        let current = '';
        const scrollPosition = window.scrollY + 100; // Adjusted for navbar height
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        document.querySelectorAll('.navbar .nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Implement native lazy loading for images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');
                    if (src) {
                        img.src = src;
                        img.removeAttribute('data-src');
                    }
                    imageObserver.unobserve(img);
                }
            });
        });
        
        // Target all images that have a data-src attribute
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback for browsers that don't support Intersection Observer
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => {
            img.src = img.getAttribute('data-src');
            img.removeAttribute('data-src');
        });
    }
    
    // Animate on scroll
    const animateElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add a delay based on the index for staggered animation
                setTimeout(() => {
                    entry.target.classList.add('animated');
                }, index * 150); // 150ms delay between each item
            }
        });
    });
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
    
    // Project filter functionality (if needed in the future)
    const setupProjectFilters = function() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectItems = document.querySelectorAll('.project-card');
        
        if (filterButtons.length === 0) return;
        
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                const filterValue = this.getAttribute('data-filter');
                
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to current button
                this.classList.add('active');
                
                // Filter projects
                projectItems.forEach(item => {
                    if (filterValue === 'all') {
                        item.style.display = 'block';
                    } else if (item.classList.contains(filterValue)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    };
    
    // Setup project filters if they exist
    setupProjectFilters();
});
