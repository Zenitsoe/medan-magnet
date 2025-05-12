// Get canvas element
const canvas = document.getElementById('magneticField');
const ctx = canvas.getContext('2d');

// Resize canvas to fill window
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Particle settings
const particles = [];
const particleCount = 100;
const maxRadius = 1;
const maxSpeed = 1;

// Create particles
for (let i = 0; i < particleCount; i++) {
    particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * maxRadius + 0.1,
        speedX: (Math.random() - 0.5) * maxSpeed,
        speedY: (Math.random() - 0.5) * maxSpeed,
        color: `hsl(${Math.random() * 60 + 240}, 80%, 50%)`,
        alpha: Math.random() * 0.5 + 0.5
    });
}

// Magnetic field lines
const fieldLines = [];
const fieldLineCount = 8;

for (let i = 0; i < fieldLineCount; i++) {
    fieldLines.push({
        startX: Math.random() * canvas.width,
        startY: Math.random() * canvas.height,
        length: Math.random() * 200 + 100,
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.002 + 0.001,
        color: `hsl(${Math.random() * 60 + 240}, 80%, 50%)`,
        width: Math.random() * 2 + 1
    });
}

// Draw magnetic field animation
function drawMagneticField() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw field lines
    for (const line of fieldLines) {
        line.angle += line.speed;
        
        ctx.strokeStyle = line.color;
        ctx.lineWidth = line.width;
        ctx.beginPath();
        
        for (let t = 0; t < 100; t++) {
            const x = line.startX + Math.cos(line.angle + t / 10) * t * 3;
            const y = line.startY + Math.sin(line.angle + t / 10) * t * 2;
            
            if (t === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
            
            if (t * 3 > line.length) break;
        }
        
        ctx.stroke();
        
        // Reset position if out of bounds
        if (line.startX < -100 || line.startX > canvas.width + 100 ||
            line.startY < -100 || line.startY > canvas.height + 100) {
            line.startX = Math.random() * canvas.width;
            line.startY = Math.random() * canvas.height;
        }
    }
    
    // Draw and update particles
    for (const particle of particles) {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = particle.alpha;
        ctx.fill();
        
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Wrap around
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
    }
    
    ctx.globalAlpha = 1;
    requestAnimationFrame(drawMagneticField);
}

// Initialize animation
drawMagneticField();

// Initialize particles.js
document.addEventListener('DOMContentLoaded', function() {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 40,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": ["#7b42f6", "#b01eff", "#4e73df"]
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
            },
            "opacity": {
                "value": 0.5,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#7b42f6",
                "opacity": 0.2,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 1,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": true,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 140,
                    "line_linked": {
                        "opacity": 0.5
                    }
                },
                "push": {
                    "particles_nb": 4
                }
            }
        },
        "retina_detect": true
    });
});

// Button animations and functionality
document.addEventListener('DOMContentLoaded', function() {
    const simButton = document.querySelector('.sim-button');
    
    // Hover effect
    simButton.addEventListener('mouseover', () => {
        simButton.style.boxShadow = '0 0 20px rgba(123, 66, 246, 0.7)';
    });
    
    simButton.addEventListener('mouseout', () => {
        simButton.style.boxShadow = ' 