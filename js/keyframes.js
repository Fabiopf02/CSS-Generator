const groups = [
	'visibility',
	'translations',
	'rotations',
	'other_movements',
	'other_animations',
	'entrances',
	'exits',
];

const keyframes = {
	none: ["", "none"],
  invisible: [0, `
			from { opacity:1; }
			to { opacity:0; }
		`],
  visible: [0, `
		  from { opacity:1; }
			to { opacity:0; }
		`],
  translate_y_to_top: [1, `
			from { transform: translateY(0%); }
			to { transform: translateY(-100%); }
		`],
  translate_y_to_bottom: [1, `
			from { transform: translateY(0%); }
			to { transform: translateY(100%); }
		`],
  translate_x_to_right: [1, `
		  from { transform: translateX(0%); }
			to { transform: translateX(100%); }
		`],
  translate_x_to_left: [1, `
	  	from { transform: translateX(0%); }
			to { transform: translateX(-100%); }
		`],
  rotate_x: [2, `
      from { transform: rotateX(0deg); }
			to { transform: rotateX(360deg); }
		`],
  rotate_y: [2, `
			from { transform: rotateY(0deg);}
			to { transform: rotateY(360deg); }
		`],
  rotate_z: [2, `
			from { transform: rotateZ(0deg); }
			to { transform: rotateZ(360deg); }
		`],
  increase: [3, `
			from { transform: scale(1); }
			to { transform: scale(1.4); }
		`],
  decrease: [3, `
			from { transform: scale(1); }
		  to { transform: scale(0); }
		`],
  bounce: [3, `
		  0% { transform: translateY(0%); }
		  5% { transform: translateY(-40%); }
		  15% { transform: translateY(0%); }
		  30% { transform: translateY(-30%); }
		  50% { transform: translateY(0%); }
		  70% { transform: translateY(-20%); }
		  100% { transform: translateY(0%); }
		`],
  pulse: [3, `
			0% { transform: scale(1); }
			20% { transform: scale(1.1); }
			40% { transform: scale(0.8); }
			60% { transform: scale(1.2); }
			80% { transform: scale(0.9); }
			100% { transform: scale(1.4); }
		`],
  fog_up: [4, `
		  from { filter: blur(0px) }
		  to { filter: blur(20px); }
		`],
  translate_y_to_top_r: [1, `
		  from { transform: translateY(0 % ) rotateZ(0 deg); }
		  to { transform: translateY(-100 % ) rotateZ(600 deg); }
		`],
  change_color: [4, `
	  	0% { background: red; }
		  20% { background: blue; }
		  40% { background: black; }
		  60% { background: white; }
		  80% { background: purple; }
	  	100% { background: skyblue; }
		`],
	exit_to_top: [6, `
	  0% { transform: translateY(0%); opacity: 1; }
	  30% { transform: translateY(20%); }
  	70% { transform: translateY(-50%); opacity: 1; }
	  80% { transform: translateY(-150%); opacity: 0.1; }
	  100% { transform: translateY(-500%); opacity: 0; }
	`],
	swing: [3, `
	  0% { transform: translateX(0px); }
	  10% { transform: translateX(10px); }
	  20% { transform: translateY(-10px) rotateZ(10 deg); }
	  30% { transform: translateX(10px); }
	  40% { transform: translateX(-10px); }
	  50% { transform: translateX(10px) rotateZ(-10deg); }
	  60% { transform: translateX(-10 px); }
  	70% { transform: translateY(10 px); }
	  80% { transform: translateX(-10 px); }
	  90% { transform: translateX(10 px); }
	  100% { transform: translateX(0 px); }
	`],
	fall: [6, `
	  from { transform-origin: left top; transform: rotateZ(0deg); }
	  20% { transform-origin: left top; transform: rotateZ(60deg); }
	  40% { transform-origin: left top; transform: rotateZ(35deg); }
	  60% { transform-origin: left top; transform: rotateZ(45deg); }
	  to { transform-origin: left top; transform: translateY(300%) rotateZ(45deg); }
	`],
	left_entrance: [5, `
		from { opacity: 0; transform: translateX(-100%); }
		to { opacity: 1; transform: translateX(0%); }
	`],
	right_entrance: [5, `
		from { opacity: 0; transform: translateX(200%); }
		to { opacity: 1; transform: translateX(0%); }
	`],
	top_entrance: [5, `
		from { opacity: 0; transform: translateY(-200%); }
		to { opacity: 1; transform: translateY(0%); }
	`],
	bottom_entrance: [5, `
		from { opacity: 0; transform: translateY(200%); }
		to { opacity: 1; transform: translateY(0%); }
	`],
};

export { keyframes, groups };
