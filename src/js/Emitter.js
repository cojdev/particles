import ParticleGroup from './ParticleGroup';

// Particle Emitter
export default class Emitter extends ParticleGroup {
    constructor(canvas, x, y, life, mouse = false, dia) {
        super(canvas, x, y, life);

        this.mouse = mouse;

        this.particles = [];
        this.dia = dia || false;

        this.canvas.addEventListener('mousemove', (e) => {
            this.setMouse(e);
            this.setPosition(this.getMouse().x, this.getMouse().y);
        });
    }

    render() {
        let particles = this.particles;
        let mul = 1;

        for (let i = 0; i < mul; i++) {
            particles.push(this.spawn(this.x, this.y, 1));
        }
        
        if (particles.length > this.life * mul) {
            for (let i = 0; i < mul; i++) {
                particles.shift();
            }
        }

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.draw();
            p.emit(this.life);
            p.shrink();
        }
    }
}