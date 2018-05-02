/**
 * Author: Charles Ojukwu
 */

(function () {

'use strict';

var canvas,
	ctx,
	pixelRatio,
	mousePos;

//Onload function
function init () {
	//Canvas setup
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	//For "Retina" Displays
	ctx.scale(2,2);
	pixelRatio = Math.round(window.devicePixelRatio) || 1;

	//Make canvas fill the screen
	resizeCanvas();
	window.addEventListener('resize', resizeCanvas, false);

	//Particle Network
	var set1a = new network({
		count: 150,
		mouse: true,
		colour: "#fff"
	});

	var set1b = new network({
		count: 150,
		mouse: true
	});

	//Starfield
	var set2 = new starfield({
		size: 100
	});

	function animate () {
		//Clear the canvas
		var cvs = document.getElementById("canvas");
		cvs.getContext("2d").clearRect(0, 0, cvs.width, cvs.height);
		set1a.render();
		set1b.render();
		requestAnimationFrame(animate);
	}
	animate();
	//set2.render();
}

function starfield (args) {
	
	args = args || {};
	
	var self = this;

	self.count = args.count || 100;
	self.maxDist = args.maxDist || 150;
	self.colour = args.colour || "#fff";

	self.particles = [];
	for (var i = 0; i < self.size; i++) {
		self.particles[i] = new particle(
			Math.random() * canvas.width,
			Math.random() * canvas.height,
			Math.random()
		);
	}

	self.render = function () {
		for (var i = 0; i < self.size; i++) {
			self.particles[i].x = Math.random() * canvas.width;
			self.particles[i].y = Math.random() * canvas.height;
			self.particles[i].render(self.colour);
		}
	};

	addEventListener("resize", self.render);
}

function network (args) {

	args = args || {};

	var self = this;

	self.size = args.size || 100;
	self.maxDist = args.maxDist || 150;
	self.colour = args.colour || "#fff";

	self.particles = [];
	for (var i = 0; i < self.size; i++) {
		self.particles[i] = new particle(
			(Math.random() * (canvas.width + self.maxDist)) - (self.maxDist / 2),
			(Math.random() * (canvas.height + self.maxDist)) - (self.maxDist / 2)
		);
	}

	//Check mouse position
	if (args.mouse === true) {
		var mouseParticle = new particle();
		document.body.addEventListener("mousemove",function(evt){
			mousePos = getMousePos(canvas,evt);
			mouseParticle.x = mousePos.x;
			mouseParticle.y = mousePos.y;
		});
	}

	//Draw lines between nearby particles
	self.collision = function (obj, dist) {
		var temp;
		for (var i = 0; i < self.particles.length; i++) {
			//Don't interact with self
			if (obj !== self.particles[i]) {
				temp = Math.sqrt(Math.pow((obj.x - self.particles[i].x),2) + Math.pow((obj.y - self.particles[i].y),2));
				if (temp < dist) {
					var midx = (obj.x + self.particles[i].x) / 2;
					var midy = (obj.y + self.particles[i].y) / 2;
					ctx.strokeStyle = "rgba("+Math.floor(255*(midx/canvas.width))+",50,"+Math.floor(255*((canvas.width - midx)/canvas.width))+"," + Math.pow((dist-temp)/dist,3) + ")";
					//Start drawing
					ctx.beginPath();
					ctx.moveTo(obj.x, obj.y);
					ctx.lineTo(self.particles[i].x, self.particles[i].y);
					ctx.closePath();
					ctx.stroke();
				};
			}
		};
	};

	//Update particle positions
	self.update = function (obj, boundary) {
		//Velocity
		obj.x += obj.vx;
		obj.y += obj.vy;
		//Boundary overflow
		if (obj.x > canvas.width+(boundary/2)) {
		obj.x = -(boundary/2);
		}
		else if (obj.xpos < -(boundary/2)) {
			obj.x = canvas.width+(boundary/2);
		}
		if (obj.y > canvas.height+(boundary/2)) {
			obj.y = -(boundary/2);
		}
		else if (obj.y < -(boundary/2)) {
			obj.y = canvas.height+(boundary/2);
		}	
	};
	//Draw
	self.render = function () {
		if (args.mouse === true) {
			self.collision(mouseParticle, self.maxDist*2);
			mouseParticle.render(self.colour);
		}
		//Particle interaction
		for (var i = 0; i < self.particles.length; i++) {
			self.collision(self.particles[i], self.maxDist);
			self.update(self.particles[i], self.maxDist);
			self.particles[i].render(self.colour);
		}
	}

	self.animate = function () {
		//Clear the canvas
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		self.render();
		requestAnimationFrame(self.animate);
	}
	//Logging
	console.log(
		self.particles.length + " particles generated\n"+
		"Maximum gap: " + self.maxDist
	);
	
}

//Particle constructor
function particle (x,y,dia) {
	var self = this;
	self.x = x || 1;
	self.y = y || 1;
	self.vx = (Math.random()*1)-.5;
	self.vy = (Math.random()*1)-.5;
	self.dia = dia * pixelRatio || 2 * pixelRatio;

	self.render = function (colour) {
		ctx.beginPath();
		ctx.fillStyle = colour || "#0f0";
		if(self.dia){
			ctx.arc(self.x,self.y,self.dia,0,2*Math.PI);
		}else{
			ctx.arc(self.x,self.y,2,0,2*Math.PI);
		}
		ctx.closePath();
		ctx.fill();
	}
}

//Make the canvas fill the screen
function resizeCanvas() {
	canvas.width = window.innerWidth * pixelRatio;
	canvas.height = window.innerHeight * pixelRatio;
	//Necessary on devices with pixelRatio above 1
	canvas.style.width = window.innerWidth + "px";
	canvas.style.height = window.innerHeight + "px";
}
//Get Mouse Position
function getMousePos(cvs, evt) {
	var rect = cvs.getBoundingClientRect();
	return {
		x: evt.clientX - rect.left,
		y: evt.clientY - rect.top
	};
}

//Execute when DOM has loaded
document.addEventListener('DOMContentLoaded',init,false);

})();