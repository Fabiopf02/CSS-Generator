const inputs = [
  {id: 'radius', text: 'Border (px):', type: 'number', value: 0},
  {id: 'color', text: 'Color:', type: 'color', value: '#eeeeee'},
  {id: 'size', text: 'Size:', type: 'number', value: 240, min: 10, max: 500},
  {id: 'time', text: 'Duration (s):', type: 'number', value: 1, min: 0, max: 10},
  {id: 'delay', text: 'Delay (s):', type: 'number', value: 0, min: 0, max: 10},
];

function addInputs() {
  const blocks = document.querySelector('.blocks');
  inputs.forEach(input => {
    const block = document.createElement('div');
      block.classList.add('block');
    const zone = document.createElement('div');
      zone.classList.add('zone');
    const card = document.createElement('div');
      card.classList.add('card');
      card.draggable = true;
    const label = document.createElement('label');
    const inputElement = document.createElement('input');

    label.htmlFor = input.id;
    label.textContent = input.text;

    inputElement.type = input.type;
    inputElement.id = input.id;
    inputElement.value = input.value;
    if (input.min) {
      inputElement.min = input.min;
      inputElement.max = input.max;
    }

    card.appendChild(label);
    card.appendChild(inputElement);
    zone.appendChild(card);
    block.appendChild(zone);
    blocks.appendChild(block);
  });
}

export {addInputs};