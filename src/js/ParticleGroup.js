import Particle from './Particle';

export default class ParticleGroup {

    /**
     * particle field
     * @param {CanvasElement} canvas the canvas to be rendered on
     * @param {number} x x position
     * @param {number} y y position
     * @param {number} life lifespan
     */
    constructor(canvas, x = 0, y = 0, life) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.x = x;
        this.y = y;
        this.life = life;
        this.mouse = {x: 0, y: 0};
    }

    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }

    getPosition() {
        return {
            x: this.x,
            y: this.y
        };
    }

    setMouse(e) {
        const rect = this.canvas.getBoundingClientRect();
        this.mouse = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        };
    }

    getMouse() {
        return {
            x: this.mouse.x,
            y: this.mouse.y,
        };
    }

    spawn(x, y, amount, dia) {
        let arr = [];
        dia = dia || false;

        amount = amount || 1;

        if (amount > 1) {
            for (let i = 0; i < amount; i++) {
                if (dia) {
                    arr.push(new Particle(this.canvas, x, y, dia));
                }
                else {
                    arr.push(new Particle(this.canvas, x, y));
                }
            }
        } else {
            arr = new Particle(this.canvas, x, y, dia);
        }

        return arr;
    }
}