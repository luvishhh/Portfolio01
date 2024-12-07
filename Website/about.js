document.addEventListener('DOMContentLoaded', () => {
    // Initialize GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Animate progress bars on scroll
    gsap.utils.toArray('.progress-value').forEach(progress => {
        gsap.fromTo(progress, 
            { width: 0 }, 
            {
                width: progress.getAttribute('data-value') + '%',
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: progress,
                    start: 'top 80%',
                    toggleActions: 'play none none none'
                }
            }
        );
    });

    // Animate sections on scroll
    gsap.from('.section', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.3,
        scrollTrigger: {
            trigger: '.content',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });

    // Theme toggle functionality
    document.getElementById('theme-toggle').addEventListener('click', function() {
        document.body.classList.toggle('light-mode');
        
        const icon = this.querySelector('i');
        if (document.body.classList.contains('light-mode')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });
});
