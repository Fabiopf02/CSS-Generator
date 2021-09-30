import { 
  getCssAnimation,
  getCssBlock,
} from "./css.js";
import { addOptions } from "./animationOptions.js";
import { addDragAndDropEvent } from './drag.js';
import { addInputs } from './inputs.js';

function inittialize() {
	addInputs();
	addOptions();
	addDragAndDropEvent();
	
	const codeElement = document.getElementById("code");
	
	const iteration = document.getElementById("iteration");
	const direction = document.getElementById("direction");
	const time = document.getElementById("time");
	const color = document.getElementById("color");
	const delay = document.getElementById("delay");
	const radius = document.getElementById("radius");
	const size = document.getElementById("size");
	const animation = document.getElementById("animation");
	const generateButton = document.getElementById("generate");
	const arrow = document.querySelector('.arrow');
	const blocks = document.querySelector('.blocks');
	
	const data = [iteration, direction, time, color, radius, size, animation, delay];
	changeDataListener(data);
	
	let generated = false;
	let animated = false;
	let change = false;
	let lastValues = null;
	let arrowButton = false;

	arrow.addEventListener('click', () => {
		if (!arrowButton) {
			arrow.innerHTML = '&gt;';
			arrow.style.marginRight = '-12px';
			arrowButton = true;
		} else {
			arrow.innerHTML = '&lt;';
			arrow.style.marginRight = '0px';
			arrowButton = false;
		}
		blocks.classList.toggle('hde');
	})
	
	function generate(){
		if (animated) {
			newElement();
		}
		change = false;
		const obj = document.querySelector("#obj");
	
		obj.style.background=color.value;
		obj.style.borderRadius=radius.value+"px";
		obj.style.width=size.value+"px";
		obj.style.height=size.value+"px";
	
		animated = animation.value=="none"?false:true;
		
		lastValues = {size: size.value, radius: radius.value, color: color.value, animated,
			animation: animation.value, iteration: iteration.value, direction: direction.value,
			time: time.value, direction: direction.value, iteration: iteration.value, delay: delay.value};
		generateButton.innerText = "< Code />";
		generateButton.onclick = () => show();
		return generated = true;
	}
	function animate() {
		if (!lastValues || !animated)
			return;
		newElement();
		obj.style.animationName=lastValues.animation;
		obj.style.animationDuration=lastValues.time+"s";
		obj.style.animationIterationCount=lastValues.iteration;
		obj.style.animationDirection=lastValues.direction;
		obj.style.animationTimingFunction = "linear";
		obj.style.animationFillMode = "both";
		obj.style.animationDelay = lastValues.delay+"s";
	}

	function newElement () {
		if (!lastValues)
			return;
		const obj = document.querySelector("#obj");
		obj.remove();
		const div = document.createElement('div');
		div.classList.add('blank');
		div.setAttribute('id', 'obj');
		div.onclick = () => show();
		div.innerText = '.block';
		div.style.backgroundColor = lastValues.color;
		div.style.width = lastValues.size+"px";
		div.style.height = lastValues.size+"px";
		div.style.borderRadius = lastValues.radius+"px";
		document.querySelector('.an').appendChild(div);
	}
	
	codeElement.addEventListener('animationend', (event) => {
		if (event.animationName === 'translate_y_to_top') {
			return codeElement.classList.remove('invisible');
		}
	});
	
	function changeDataListener(data) {
		data.forEach((item) => {
			item.addEventListener("change", () => {
				generateButton.innerText = "Generate";
				generateButton.onclick = () => generate();
				change = true;
			});
		});
	}
	
	function hidde() {
		codeElement.classList.add('invisible');
		return codeElement.classList.remove('visible');
	}
	function show() {
		codeElement.classList.add('visible');
		if (!generated) {
			return codeElement.querySelector('.content').innerHTML = `<h1>É necessário gerar a animação</h1>`;
		}
	
		if (change) {
			alert("Foram encontradas alterações, clique em 'Gerar' para atualizar.");
		}
	
		return codeElement.querySelector('.content').innerHTML = '<p>' +
		 getCssBlock(lastValues) + '<br>' + getCssAnimation(lastValues.animation) + '</p>';
	}
	
	function reset(){
		iteration.value = "1";
		direction.value = "normal";
		color.value = "#eeeeee";
		time.value = "1";
		radius.value = "0";
		size.value="240";
		animation.value="none";
		delay.value = "0";
	
		generated = false;
		return newElement();
	}
	
	window.show = show;
	window.hidde = hidde;
	window.generate = generate;
	window.reset = reset;
	window.animateBlock = animate;
}
window.addEventListener("DOMContentLoaded", inittialize);
