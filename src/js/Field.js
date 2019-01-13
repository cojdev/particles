import ParticleGroup from './ParticleGroup';


export default class Field extends ParticleGroup {
    
    constructor(canvas, x, y, life) {
        super(canvas, x, y, life);
        this.particles = [];

        for (let i = 0; i < this.life; i++) {
            let x = Math.random() * this.canvas.width,
                y = Math.random() * this.canvas.height;

            this.particles.push(this.spawn(x, y, 1));
        }
    }

    field(particle) {
        let s = particle.speed;
        particle.angle = particle.angle + Math.random() * 10 - 5;
        particle.x = particle.x + s * Math.cos(particle.angle * Math.PI / 180);
        particle.y = particle.y + s * Math.sin(particle.angle * Math.PI / 180);
        particle.age = particle.age + 1 / particle.life;
        particle.overflow();
    }

    render() {
        const { particles } = this;

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.draw();
            this.field(p);
        }
    }
}