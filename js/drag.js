function addDragAndDropEvent() {
  const cards = document.querySelectorAll('.card');
  const zones = document.querySelectorAll('.zone');

  cards.forEach(card => {
    card.addEventListener('dragstart', dragstart);
    card.addEventListener('dragend', dragend);
  });

  function dragstart() {
    zones.forEach(zone => zone.classList.add('highlight'));

    this.classList.add('is-dragging');
  }

  function dragend() {
    zones.forEach(zone => zone.classList.remove('highlight'));
    this.classList.remove('is-dragging');
  }

  zones.forEach(zone => {
    zone.addEventListener('dragover', dragover);
    zone.addEventListener('dragleave', dragleave);
    zone.addEventListener('drop', drop);
  });

  function dragover(e) {
   this.classList.add('over');

   const isBeingDragged = document.querySelector('.is-dragging');
   this.appendChild(isBeingDragged);
  }

  function dragleave(e) {
    this.classList.remove('over');
  }

  function drop(e) {
    this.classList.remove('over');
  }
}

export {addDragAndDropEvent};