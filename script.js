// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // Check if device is mobile
    const isMobile = window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    // Demo button functionality - shows alert when clicked
    const demoButton = document.getElementById('demo-button');
    if (demoButton) {
        // Add touch event for mobile devices
        const showAlert = function () {
            if (isMobile) {
                alert('📱 Hello Mobile User! This is a JavaScript alert. You successfully implemented basic JavaScript interactivity!');
            } else {
                alert('🖥️ Hello! This is a JavaScript alert. You successfully implemented basic JavaScript interactivity!');
            }
        };

        demoButton.addEventListener('click', showAlert);
        demoButton.addEventListener('touchstart', showAlert, { passive: true });
    }

    // Color changer functionality
    const colorButton = document.getElementById('color-button');
    const colorChangerSection = document.getElementById('color-changer');

    // Array of beautiful gradient colors
    const colors = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
        'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
        'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
        'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
        'linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%)'
    ];

    let currentColorIndex = 0;

    if (colorButton && colorChangerSection) {
        const changeColor = function () {
            // Change the background color of the body
            currentColorIndex = (currentColorIndex + 1) % colors.length;
            document.body.style.background = colors[currentColorIndex];

            // Add a visual feedback with mobile-friendly scaling
            const scaleValue = isMobile ? 'scale(1.02)' : 'scale(1.05)';
            colorChangerSection.style.transform = scaleValue;
            setTimeout(() => {
                colorChangerSection.style.transform = 'scale(1)';
            }, 200);

            // Update button text to show interaction (shorter text for mobile)
            const colorNames = ['Purple-Blue', 'Pink-Red', 'Blue-Cyan', 'Green-Teal', 'Pink-Yellow', 'Mint-Pink', 'Coral-Purple', 'Peach-Orange', 'Purple-Pink', 'Peach-Purple'];
            if (isMobile) {
                colorButton.textContent = `${colorNames[currentColorIndex]} - Tap for Next`;
            } else {
                colorButton.textContent = `Current: ${colorNames[currentColorIndex]} - Click for Next`;
            }
        };

        colorButton.addEventListener('click', changeColor);
        colorButton.addEventListener('touchstart', changeColor, { passive: true });
    }

    // Smooth scrolling for navigation links with mobile optimization
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        const smoothScroll = function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                // Adjust offset for mobile header
                const offset = isMobile ? 180 : 150;
                const elementPosition = targetElement.offsetTop - offset;

                window.scrollTo({
                    top: elementPosition,
                    behavior: 'smooth'
                });
            }
        };

        link.addEventListener('click', smoothScroll);
        link.addEventListener('touchstart', smoothScroll, { passive: true });
    });

    // Add hover effects to sections (touch-friendly for mobile)
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (isMobile) {
            // For mobile: use touch events instead of hover
            section.addEventListener('touchstart', function () {
                this.style.transform = 'translateY(-3px)';
            }, { passive: true });

            section.addEventListener('touchend', function () {
                this.style.transform = 'translateY(0)';
            }, { passive: true });
        } else {
            // For desktop: use mouse events
            section.addEventListener('mouseenter', function () {
                this.style.transform = 'translateY(-5px)';
            });

            section.addEventListener('mouseleave', function () {
                this.style.transform = 'translateY(0)';
            });
        }
    });

    // Dynamic content loading simulation
    function addDynamicContent() {
        const jsSection = document.getElementById('js-section');
        if (jsSection) {
            const dynamicDiv = document.createElement('div');
            dynamicDiv.innerHTML = `
                <h4>🎉 Dynamic Content Added!</h4>
                <p>This content was added dynamically using JavaScript after the page loaded.</p>
                <small>Added at: ${new Date().toLocaleTimeString()}</small>
            `;
            dynamicDiv.style.cssText = `
                background: rgba(76, 175, 80, 0.1);
                padding: 1rem;
                margin: 1rem 0;
                border-radius: 8px;
                border-left: 4px solid #4CAF50;
            `;
            jsSection.appendChild(dynamicDiv);
        }
    }

    // Add dynamic content after 2 seconds
    setTimeout(addDynamicContent, 2000);

    // Console welcome message
    console.log('🌟 Welcome to Web Development Basics!');
    console.log('🔧 This page demonstrates HTML structure, CSS styling, and JavaScript interactivity.');
    console.log('💡 Try clicking the buttons and exploring the interactive features!');
});

// Additional interactive features
function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6c5ce7'];
    // Reduce confetti count for mobile devices for better performance
    const confettiCount = window.innerWidth <= 768 ? 25 : 50;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        const size = window.innerWidth <= 768 ? '8px' : '10px';
        confetti.style.cssText = `
            position: fixed;
            width: ${size};
            height: ${size};
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            left: ${Math.random() * window.innerWidth}px;
            top: -10px;
            z-index: 9999;
            pointer-events: none;
            animation: confettiFall 3s linear forwards;
        `;
        document.body.appendChild(confetti);

        // Remove confetti after animation
        setTimeout(() => {
            if (confetti.parentNode) {
                confetti.remove();
            }
        }, 3000);
    }
}

// Add confetti animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes confettiFall {
        to {
            transform: translateY(100vh) rotate(360deg);
        }
    }
`;
document.head.appendChild(style);

// Trigger confetti when demo button is clicked (in addition to alert)
document.addEventListener('DOMContentLoaded', function () {
    const demoButton = document.getElementById('demo-button');
    if (demoButton) {
        const triggerConfetti = function () {
            createConfetti();
        };

        demoButton.addEventListener('click', triggerConfetti);
        demoButton.addEventListener('touchstart', triggerConfetti, { passive: true });
    }
});

// Handle orientation change for mobile devices
window.addEventListener('orientationchange', function () {
    // Reset any transforms after orientation change
    setTimeout(() => {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            section.style.transform = 'translateY(0)';
        });
    }, 100);
});

// Handle window resize for responsive behavior
window.addEventListener('resize', function () {
    // Update mobile detection on resize
    const isMobileNow = window.innerWidth <= 768;

    // Update button text based on current screen size
    const colorButton = document.getElementById('color-button');
    if (colorButton && colorButton.textContent.includes('Current:')) {
        const colorNames = ['Purple-Blue', 'Pink-Red', 'Blue-Cyan', 'Green-Teal', 'Pink-Yellow', 'Mint-Pink', 'Coral-Purple', 'Peach-Orange', 'Purple-Pink', 'Peach-Purple'];
        const currentIndex = colorNames.findIndex(name => colorButton.textContent.includes(name));
        if (currentIndex !== -1) {
            if (isMobileNow) {
                colorButton.textContent = `${colorNames[currentIndex]} - Tap for Next`;
            } else {
                colorButton.textContent = `Current: ${colorNames[currentIndex]} - Click for Next`;
            }
        }
    }
});
