document.addEventListener('DOMContentLoaded', function () {

    particlesJS('particles-js', {
        particles: {
            number: {
                value: 150,
                density: {
                    enable: true,
                    value_area: 1200
                }
            },
            color: {
                value: ["#3b82f6", "#10b981", "#8b5cf6", "#ec4899", "#f59e0b", "#84cc16", "#ef4444"]
            },
            shape: { type: "circle" },
            opacity: {
                value: 0.6,
                random: true,
                anim: {
                    enable: true,
                    speed: 1.5,
                    opacity_min: 0.2,
                    sync: false
                }
            },
            size: {
                value: 5,
                random: true,
                anim: {
                    enable: true,
                    speed: 3,
                    size_min: 1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 200,
                color: "#ffffff",
                opacity: 0.4,
                width: 2
            },
            move: {
                enable: true,
                speed: 4,
                direction: "right",
                random: false,
                straight: true,
                out_mode: "out",
                bounce: false
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "grab" },
                onclick: { enable: true, mode: "push" }
            },
            modes: {
                grab: {
                    distance: 150,
                    line_linked: { opacity: 0.8 }
                },
                push: { particles_nb: 6 }
            }
        },
        retina_detect: true
    });

    window.addEventListener('scroll', function () {
        const scrollY = window.scrollY;
        const layers = document.querySelectorAll('.bg-layer');

        layers.forEach(layer => {
            const scrollPercent = Math.min(scrollY / 600, 0.7);
            const baseOpacity = parseFloat(layer.style.opacity || 0.6);
            layer.style.opacity = Math.min(baseOpacity + scrollPercent, 0.95);
        });

        const particles = document.getElementById('particles-js');
        if (particles) {
            particles.style.opacity = 0.6 + Math.min(scrollY / 800, 0.3);
        }
    });

    function strongBackgroundAnimation() {
        const layers = document.querySelectorAll('.bg-layer');
        let time = 0;

        function update() {
            time += 0.01;

            layers.forEach((layer, index) => {
                const speed = 0.4 + index * 0.15;
                const radiusX = 150 + index * 50;
                const radiusY = 100 + index * 30;

                const moveX = Math.cos(time * speed) * radiusX;
                const moveY = Math.sin(time * speed * 1.2) * radiusY;

                layer.style.transform = `translate(${moveX}px, ${moveY}px)`;
            });

            requestAnimationFrame(update);
        }

        update();
    }

    strongBackgroundAnimation();

    document.querySelectorAll('.story-item').forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
            this.style.borderColor = 'rgba(255,255,255,0.2)';
        });

        item.addEventListener('mouseleave', function () {
            this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
            this.style.borderColor = 'rgba(255,255,255,0.1)';
        });
    });

});