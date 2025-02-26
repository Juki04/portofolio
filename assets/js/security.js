/**
 * Security Enhancement Script
 * Portofolio Ahmad Subhan Agung Pambudi
 */

document.addEventListener('DOMContentLoaded', function() {
    // Prevent clickjacking
    if (window.self !== window.top) {
        window.top.location = window.self.location;
    }
    
    // Add rel="noopener noreferrer" to external links
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    externalLinks.forEach(link => {
        if (!link.rel || !link.rel.includes('noopener')) {
            link.setAttribute('rel', link.rel ? link.rel + ' noopener noreferrer' : 'noopener noreferrer');
        }
    });
    
    // Basic XSS protection for URL parameters (if any are used in the future)
    const sanitizeInput = (input) => {
        return input.replace(/[^\w\s]/gi, '');
    };
    
    // Example of sanitizing URL parameters (for future use)
    const urlParams = new URLSearchParams(window.location.search);
    for (const [key, value] of urlParams.entries()) {
        const sanitizedValue = sanitizeInput(value);
        if (value !== sanitizedValue) {
            // If malicious input detected, clear it
            urlParams.set(key, sanitizedValue);
            const newUrl = window.location.pathname + '?' + urlParams.toString();
            window.history.replaceState({}, '', newUrl);
        }
    }
});
