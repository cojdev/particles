import ParticleGroup from './ParticleGroup';


export default class Field extends ParticleGroup {
    
    constructor(canvas, x, y, count) {
        super(canvas, x, y, count);
        this.particles = [];

        // spawn particles in random positions on the canvas
        for (let i = 0; i < this.count; i++) {
            const x = Math.random() * this.canvas.width,
                y = Math.random() * this.canvas.height;

            this.particles.push(this.spawnParticles(x, y, 1));
        }
    }

    field(particle) {
        particle.angle = particle.angle + Math.random() * 10 - 5;
        particle.x = particle.x + particle.speed * Math.cos(particle.angle * Math.PI / 180);
        particle.y = particle.y + particle.speed * Math.sin(particle.angle * Math.PI / 180);
        particle.overflow();
        particle.draw();
    }

    render() {
        const { particles } = this;

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            this.field(p);
        }
    }
}