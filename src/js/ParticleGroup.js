import Particle from './Particle';

export default class ParticleGroup {

    /**
     * particle field
     * @param {CanvasElement} canvas the canvas to be rendered on
     * @param {number} x x position
     * @param {number} y y position
     * @param {number} count max number of particles in group
     */
    constructor(canvas, x = 0, y = 0, count) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.x = x;
        this.y = y;
        this.count = count;
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

    /**
     * set mouse values
     * @param {MouseEvent} e mouse event
     */
    setMouse(e) {
        const rect = this.canvas.getBoundingClientRect();
        this.mouse = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        };
    }

    /**
     * return the mouse position relative to the canvas
     */
    getMouse() {
        return {
            x: this.mouse.x,
            y: this.mouse.y,
        };
    }

    /**
     * generate a number of particles
     * @param {number} x x position
     * @param {number} y y position
     * @param {number} count number of particles to spawn
     * @param {number} diameter override particle diameter
     */
    spawnParticles(x, y, count = 1, diameter = false) {
        let arr = [];

        if (count > 1) {
            for (let i = 0; i < count; i++) {
                if (diameter) {
                    arr.push(new Particle(this.canvas, x, y, diameter));
                }
                else {
                    arr.push(new Particle(this.canvas, x, y));
                }
            }
        }
        else {
            arr = new Particle(this.canvas, x, y, diameter);
        }

        return arr;
    }
}