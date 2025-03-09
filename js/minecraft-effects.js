// Minecraft-themed Portfolio JavaScript with Pixtral effects

document.addEventListener('DOMContentLoaded', function() {
    // Remove all error images and messages
    removeErrorImages();
    
    // Add floating pixels
    const heroSectionElement = document.querySelector('.hero-section');
    for (let i = 0; i < 50; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('floating-pixel');
        
        // Random position
        const xPos = Math.random() * 100;
        const yPos = Math.random() * 100;
        pixel.style.left = `${xPos}%`;
        pixel.style.top = `${yPos}%`;
        
        // Random Minecraft-themed colors
        const colors = ['#866043', '#5d8a4a', '#7a7a7a', '#9b6e47', '#4e7a28', '#3d6da3', '#fcdc5a', '#5decf5', '#ff3030'];
        pixel.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Random animation
        const duration = 10 + Math.random() * 15;
        const delay = Math.random() * 5;
        pixel.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
        
        heroSectionElement.appendChild(pixel);
    }
    
    // Add click sound effect to buttons
    const buttons = document.querySelectorAll('.minecraft-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const audio = new Audio('https://www.soundjay.com/buttons/sounds/button-09.mp3');
            audio.volume = 0.3;
            audio.play();
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Add floating Minecraft blocks in the background
    addFloatingBlocks();
    
    // Add Pixtral pixel effects
    addPixtralPixels();
    
    // Add hover sound to skill blocks
    const skillBlocks = document.querySelectorAll('.skill-block');
    skillBlocks.forEach(block => {
        block.addEventListener('mouseenter', function() {
            const audio = new Audio('https://www.soundjay.com/buttons/sounds/button-20.mp3');
            audio.volume = 0.1;
            audio.play();
        });
    });
    
    // Add typing effect to hero subtitle
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        const text = heroSubtitle.textContent;
        heroSubtitle.textContent = '';
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroSubtitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        typeWriter();
    }
    
    // Add glowing effect to profile pic
    const profilePic = document.querySelector('.profile-pic');
    if (profilePic) {
        setInterval(() => {
            profilePic.style.boxShadow = `0 0 ${10 + Math.random() * 20}px rgba(255, 107, 0, ${0.5 + Math.random() * 0.3})`;
        }, 1000);
    }
    
    // Add parallax effect to hero section
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            heroSection.style.backgroundPositionY = `${scrollY * 0.5}px`;
        });
    }
    
    // Add scroll reveal animation
    const sections = document.querySelectorAll('.section');
    const revealSection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('section-revealed');
                observer.unobserve(entry.target);
            }
        });
    };
    
    const sectionObserver = new IntersectionObserver(revealSection, {
        root: null,
        threshold: 0.15
    });
    
    sections.forEach(section => {
        section.classList.add('section-hidden');
        sectionObserver.observe(section);
    });
    
    // Add dynamic color change to gradient text
    const gradientTexts = document.querySelectorAll('.gradient-text');
    if (gradientTexts.length > 0) {
        let hue = 20; // Orange-ish starting point
        setInterval(() => {
            hue = (hue + 1) % 60; // Keep in orange-yellow range (20-60)
            const color1 = `hsl(${hue}, 100%, 60%)`;
            const color2 = `hsl(${hue + 15}, 100%, 50%)`;
            
            gradientTexts.forEach(text => {
                text.style.background = `linear-gradient(to bottom, ${color1} 0%, ${color2} 100%)`;
                text.style.webkitBackgroundClip = 'text';
                text.style.webkitTextFillColor = 'transparent';
            });
        }, 100);
    }
    
    // Add loading="lazy" to all images for better performance
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
        }
    });

    // Add day/night toggle
    const toggleButton = document.createElement('button');
    toggleButton.classList.add('toggle-btn');
    toggleButton.innerHTML = '<i class="fas fa-moon"></i> / <i class="fas fa-sun"></i>';
    toggleButton.style.position = 'fixed';
    toggleButton.style.top = '20px';
    toggleButton.style.right = '20px';
    toggleButton.style.zIndex = '1000';
    toggleButton.style.background = '#7a7a7a';
    toggleButton.style.border = '3px solid #000';
    toggleButton.style.borderRadius = '0';
    toggleButton.style.padding = '10px';
    toggleButton.style.cursor = 'pointer';
    toggleButton.style.color = 'white';
    toggleButton.style.fontFamily = "'VT323', monospace";
    toggleButton.style.fontSize = '1.2rem';
    toggleButton.style.boxShadow = '3px 3px 0 #000';
    
    toggleButton.addEventListener('click', toggleDayNight);
    
    document.body.appendChild(toggleButton);
});

// Function to add floating Minecraft blocks
function addFloatingBlocks() {
    const blockTypes = ['dirt-block', 'grass-block', 'stone-block'];
    const heroSection = document.querySelector('.hero-section');
    
    if (heroSection) {
        // Create 15 random blocks
        for (let i = 0; i < 15; i++) {
            const block = document.createElement('div');
            const randomType = blockTypes[Math.floor(Math.random() * blockTypes.length)];
            
            block.classList.add('minecraft-block', randomType);
            
            // Random position
            const xPos = Math.random() * 100;
            const yPos = Math.random() * 100;
            
            block.style.left = `${xPos}%`;
            block.style.top = `${yPos}%`;
            
            // Random size
            const size = 30 + Math.random() * 40;
            block.style.width = `${size}px`;
            block.style.height = `${size}px`;
            
            // Random rotation
            const rotation = Math.random() * 360;
            block.style.transform = `rotate(${rotation}deg)`;
            
            // Random animation
            const duration = 15 + Math.random() * 20;
            const delay = Math.random() * 5;
            
            block.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
            
            // Add to hero section
            heroSection.appendChild(block);
        }
    }
}

// Function to add Pixtral pixel effects
function addPixtralPixels() {
    const heroSection = document.querySelector('.hero-section');
    
    if (heroSection) {
        // Create 50 random pixels
        for (let i = 0; i < 50; i++) {
            const pixel = document.createElement('div');
            pixel.classList.add('pixtral-pixel');
            
            // Random position
            const xPos = Math.random() * 100;
            const yPos = Math.random() * 100;
            
            pixel.style.left = `${xPos}%`;
            pixel.style.top = `${yPos}%`;
            
            // Random size
            const size = 5 + Math.random() * 15;
            pixel.style.width = `${size}px`;
            pixel.style.height = `${size}px`;
            
            // Random color from Pixtral palette
            const colors = ['#ff6b00', '#ffcc00', '#e05600', '#ff8c42'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            pixel.style.backgroundColor = randomColor;
            
            // Random animation
            const duration = 10 + Math.random() * 15;
            const delay = Math.random() * 5;
            
            pixel.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
            
            // Add to hero section
            heroSection.appendChild(pixel);
        }
    }
    
    // Add interactive pixel effect on mouse move
    document.addEventListener('mousemove', (e) => {
        if (Math.random() > 0.9) { // Only create pixels occasionally
            const pixel = document.createElement('div');
            pixel.classList.add('pixtral-pixel', 'mouse-pixel');
            
            pixel.style.left = `${e.clientX}px`;
            pixel.style.top = `${e.clientY}px`;
            
            // Random size
            const size = 5 + Math.random() * 10;
            pixel.style.width = `${size}px`;
            pixel.style.height = `${size}px`;
            
            // Random color from Pixtral palette
            const colors = ['#ff6b00', '#ffcc00', '#e05600', '#ff8c42'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            pixel.style.backgroundColor = randomColor;
            
            document.body.appendChild(pixel);
            
            // Remove after animation
            setTimeout(() => {
                pixel.remove();
            }, 2000);
        }
    });
}

// Minecraft day/night cycle effect
let isDaytime = true;
function toggleDayNight() {
    const body = document.body;
    
    if (isDaytime) {
        // Change to night
        body.style.backgroundColor = '#150d1a'; // Minecraft night sky
        body.style.backgroundBlendMode = 'normal';
        
        // Add stars
        addStars();
        
        // Change button colors
        document.querySelectorAll('.minecraft-btn').forEach(btn => {
            btn.style.backgroundColor = '#3d6da3'; // Minecraft water color
        });
        
        isDaytime = false;
    } else {
        // Change to day
        body.style.backgroundColor = '#866043'; // Minecraft dirt
        body.style.backgroundBlendMode = 'normal';
        
        // Remove stars
        removeStars();
        
        // Reset button colors
        document.querySelectorAll('.minecraft-btn').forEach(btn => {
            btn.style.backgroundColor = '#7a7a7a'; // Minecraft stone
        });
        
        isDaytime = true;
    }
}

// Function to add stars
function addStars() {
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Random position
        const xPos = Math.random() * 100;
        const yPos = Math.random() * 100;
        
        // Random size (Minecraft stars are blocky)
        const size = Math.random() * 3 + 1;
        
        // Style the star
        star.style.position = 'fixed';
        star.style.left = `${xPos}%`;
        star.style.top = `${yPos}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.backgroundColor = '#ffffff';
        star.style.zIndex = '0';
        star.style.opacity = Math.random() * 0.7 + 0.3;
        
        // Add twinkle animation
        const animationDuration = Math.random() * 3 + 2;
        star.style.animation = `twinkle ${animationDuration}s infinite alternate`;
        
        document.body.appendChild(star);
    }
    
    // Add CSS for twinkle animation if it doesn't exist
    if (!document.querySelector('#twinkle-animation')) {
        const style = document.createElement('style');
        style.id = 'twinkle-animation';
        style.textContent = `
            @keyframes twinkle {
                0% { opacity: 0.3; }
                100% { opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    }
}

// Remove stars
function removeStars() {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        star.remove();
    });
}

// Function to remove all error images and messages
function removeErrorImages() {
    // Find and remove all error images
    const errorImages = document.querySelectorAll('img');
    errorImages.forEach(img => {
        // Check if image is broken
        if (!img.complete || img.naturalWidth === 0 || 
            (img.src && (img.src.includes('imgur.com') || 
                        img.src.includes('icon.png') || 
                        img.src.includes('icon.jpg')))) {
            // Remove the image element completely
            if (img.parentNode) {
                img.parentNode.removeChild(img);
            }
        }
    });
    
    // Find all elements that might contain error messages
    const allElements = document.querySelectorAll('*');
    allElements.forEach(el => {
        if (el.textContent && (
            el.textContent.includes('imgur.com') || 
            el.textContent.includes('image is') || 
            el.textContent.includes('no longer') ||
            el.textContent.includes('requesting domain') ||
            el.textContent.includes('icon.png') ||
            el.textContent.includes('icon.jpg')
        )) {
            // Add hidden-error class
            el.classList.add('hidden-error');
            
            // Also try to remove it if it's just a text node
            if (el.childNodes.length === 1 && el.childNodes[0].nodeType === Node.TEXT_NODE) {
                if (el.parentNode) {
                    el.parentNode.removeChild(el);
                }
            }
        }
    });
    
    // Remove any X marks that might be related to broken images
    const xMarks = document.querySelectorAll('div, span');
    xMarks.forEach(mark => {
        if ((mark.textContent === 'X' || mark.textContent.includes('×')) && 
            mark.offsetWidth < 50 && mark.offsetHeight < 50) {
            mark.classList.add('hidden-error');
            if (mark.parentNode) {
                mark.parentNode.removeChild(mark);
            }
        }
    });
    
    // Remove any Pixtral logo elements
    const pixtralElements = document.querySelectorAll('.pixtral-logo, .pixtral-effect');
    pixtralElements.forEach(el => {
        if (el.parentNode) {
            el.parentNode.removeChild(el);
        }
    });
} 