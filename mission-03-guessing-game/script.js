let secret = 50;
// TODO: 最後改成 1～100 的隨機整數
let attempts = 0;
const form = document.querySelector('#game');
const input = document.querySelector('#guess');
const message = document.querySelector('#message');
const attemptsEl = document.querySelector('#attempts');
const restart = document.querySelector('#restart');
form.addEventListener('submit', event => {
  event.preventDefault();
  const guess = Number(input.value);
  /* TODO: Leo，檢查範圍，判斷太大、太小、猜對，並增加 attempts */
}
);
restart.addEventListener('click', () => {
  /* TODO: Leo，重新產生答案並把遊戲狀態歸零 */
}
);
