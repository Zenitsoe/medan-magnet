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
        simButton.style.boxShadow = '0 0 10px rgba(123, 66, 246, 0.4)';
    });
    
    // Click effect
    simButton.addEventListener('click', () => {
        // Add pulse animation
        simButton.classList.add('pulse-animation');
        
        // Create ripple effect
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        simButton.appendChild(ripple);
        
        // Position the ripple where clicked
        const rect = simButton.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = `${size}px`;
        
        // Remove ripple after animation completes
        setTimeout(() => {
            ripple.remove();
            simButton.classList.remove('pulse-animation');
        }, 600);
        
        // Toggle simulation state
        toggleSimulation();
    });
    
    // Add necessary CSS for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        .sim-button {
            position: relative;
            overflow: hidden;
            transition: box-shadow 0.3s ease;
            background: linear-gradient(135deg, #7b42f6 0%, #b01eff 100%);
            color: white;
            border: none;
            border-radius: 50px;
            padding: 12px 30px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            box-shadow: 0 0 10px rgba(123, 66, 246, 0.4);
        }
        
        .ripple {
            position: absolute;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        
        .pulse-animation {
            animation: pulse 0.4s ease-out;
        }
        
        @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(0.95); }
            100% { transform: scale(1); }
        }
    `;
    document.head.appendChild(style);
});

// Simulation control
let simulationRunning = true;

function toggleSimulation() {
    simulationRunning = !simulationRunning;
    
    if (simulationRunning) {
        // Resume animation
        requestAnimationFrame(drawMagneticField);
        document.querySelector('.sim-button').textContent = 'Pause Simulation';
    } else {
        // Stop animation (it will stop at next frame)
        document.querySelector('.sim-button').textContent = 'Start Simulation';
    }
}

// Add magnetic field strength control
document.addEventListener('DOMContentLoaded', function() {
    // Create slider container
    const controlPanel = document.createElement('div');
    controlPanel.className = 'control-panel';
    controlPanel.style.cssText = `
        position: absolute;
        top: 20px;
        right: 20px;
        background: rgba(0, 0, 0, 0.7);
        padding: 15px;
        border-radius: 10px;
        color: white;
        z-index: 1000;
    `;
    
    // Create field strength slider
    const sliderContainer = document.createElement('div');
    sliderContainer.innerHTML = `
        <label for="fieldStrength">Field Strength</label>
        <input type="range" id="fieldStrength" min="1" max="10" value="5" class="slider">
        <span id="strengthValue">5</span>
    `;
    
    // Create particle speed slider
    const speedSlider = document.createElement('div');
    speedSlider.innerHTML = `
        <label for="particleSpeed">Particle Speed</label>
        <input type="range" id="particleSpeed" min="1" max="10" value="5" class="slider">
        <span id="speedValue">5</span>
    `;
    
    // Add styles for sliders
    const sliderStyle = document.createElement('style');
    sliderStyle.textContent = `
        .slider {
            width: 150px;
            margin: 10px 0;
            -webkit-appearance: none;
            height: 5px;
            border-radius: 5px;
            background: #4e73df;
            outline: none;
        }
        
        .slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background: #b01eff;
            cursor: pointer;
            box-shadow: 0 0 5px rgba(176, 30, 255, 0.7);
        }
        
        .control-panel label {
            display: block;
            margin-top: 10px;
            font-size: 14px;
        }
    `;
    
    document.head.appendChild(sliderStyle);
    controlPanel.appendChild(sliderContainer);
    controlPanel.appendChild(speedSlider);
    document.body.appendChild(controlPanel);
    
    // Add functionality to sliders
    const fieldStrengthSlider = document.getElementById('fieldStrength');
    const strengthValue = document.getElementById('strengthValue');
    
    fieldStrengthSlider.addEventListener('input', function() {
        const value = this.value;
        strengthValue.textContent = value;
        
        // Update field line properties
        fieldLines.forEach(line => {
            line.width = value / 5 * 2 + 0.5;
            line.speed = value / 5000 + 0.001;
        });
    });
    
    const particleSpeedSlider = document.getElementById('particleSpeed');
    const speedValue = document.getElementById('speedValue');
    
    particleSpeedSlider.addEventListener('input', function() {
        const value = this.value;
        speedValue.textContent = value;
        
        // Update particle speeds
        const speedFactor = value / 5;
        particles.forEach(particle => {
            particle.speedX = particle.speedX * speedFactor;
            particle.speedY = particle.speedY * speedFactor;
        });
    });
});

// Add info button and popup
document.addEventListener('DOMContentLoaded', function() {
    // Create info button
    const infoButton = document.createElement('button');
    infoButton.className = 'info-button';
    infoButton.innerHTML = 'i';
    infoButton.style.cssText = `
        position: absolute;
        bottom: 20px;
        right: 20px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: linear-gradient(135deg, #7b42f6 0%, #b01eff 100%);
        color: white;
        border: none;
        font-size: 20px;
        font-weight: bold;
        cursor: pointer;
        box-shadow: 0 0 10px rgba(123, 66, 246, 0.4);
        z-index: 1000;
    `;
    
    // Create info popup
    const infoPopup = document.createElement('div');
    infoPopup.className = 'info-popup';
    infoPopup.style.cssText = `
        display: none;
        position: absolute;
        bottom: 70px;
        right: 20px;
        width: 300px;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 15px;
        border-radius: 10px;
        font-size: 14px;
        z-index: 1000;
    `;
    
    infoPopup.innerHTML = `
        <h3>Magnetic Field Simulation</h3>
        <p>This interactive simulation visualizes magnetic field lines and charged particles moving within the field.</p>
        <p>Use the controls to adjust field strength and particle speed.</p>
        <p>Click and drag to interact with particles.</p>
        <p>Click the button below to toggle the simulation on/off.</p>
    `;
    
    // Add toggle functionality
    infoButton.addEventListener('click', () => {
        if (infoPopup.style.display === 'none') {
            infoPopup.style.display = 'block';
            infoButton.style.boxShadow = '0 0 20px rgba(123, 66, 246, 0.7)';
        } else {
            infoPopup.style.display = 'none';
            infoButton.style.boxShadow = '0 0 10px rgba(123, 66, 246, 0.4)';
        }
    });
    
    document.body.appendChild(infoButton);
    document.body.appendChild(infoPopup);
});

// Add fullscreen functionality
document.addEventListener('DOMContentLoaded', function() {
    const fullscreenButton = document.createElement('button');
    fullscreenButton.className = 'fullscreen-button';
    fullscreenButton.innerHTML = '⛶';
    fullscreenButton.style.cssText = `
        position: absolute;
        bottom: 20px;
        left: 20px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: linear-gradient(135deg, #7b42f6 0%, #b01eff 100%);
        color: white;
        border: none;
        font-size: 20px;
        cursor: pointer;
        box-shadow: 0 0 10px rgba(123, 66, 246, 0.4);
        z-index: 1000;
    `;
    
    fullscreenButton.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            fullscreenButton.innerHTML = '⤓';
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
                fullscreenButton.innerHTML = '⛶';
            }
        }
    });
    
    document.body.appendChild(fullscreenButton);
});
