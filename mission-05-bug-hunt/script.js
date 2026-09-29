let count = 0;
const button = document.querySelector('#order-btn');
const countEl = document.querySelector('#order-count');
button.addEventListener('click', () => {
  count++;
  countEl.textContent = count;
}
);
