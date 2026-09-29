const form = document.querySelector('#todo-form');
const input = document.querySelector('#todo-input');
const list = document.querySelector('#todo-list');
form.addEventListener('submit', event => {
  event.preventDefault();
  const text = input.value.trim();
  /* TODO: Leo，空白不能加入。建立 li，加入「完成」和「刪除」功能 */
}
);
