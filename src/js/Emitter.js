import ParticleGroup from './ParticleGroup';

// Particle Emitter
export default class Emitter extends ParticleGroup {
    constructor(canvas, x, y, count, mouse = false, dia) {
        super(canvas, x, y, count);

        this.mouse = mouse;

        this.particles = [];
        this.dia = dia || false;

        this.canvas.addEventListener('mousemove', (e) => {
            this.setMouse(e);
            this.setPosition(this.getMouse().x, this.getMouse().y);
        });
    }

    emit(particle) {
        const s = particle.speed * 2;
        // make the movement jittery
        particle.angle = particle.angle + Math.random() * 10 - 5;

        particle.x = particle.x + s * Math.cos(particle.angle * Math.PI / 180);
        particle.y = particle.y + s * Math.sin(particle.angle * Math.PI / 180);


        particle.age = particle.age + 1 / this.count;

        particle.overflow();
        particle.shrink();
        particle.draw();
    }

    render() {
        let particles = this.particles;
        let mul = 1;

        for (let i = 0; i < mul; i++) {
            particles.push(this.spawnParticles(this.x, this.y, 1));
        }
        
        if (particles.length > this.count * mul) {
            for (let i = 0; i < mul; i++) {
                particles.shift();
            }
        }

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            this.emit(p);
        }
    }
}