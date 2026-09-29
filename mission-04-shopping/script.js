let cartCount = 0;
let cartTotal = 0;
const countEl = document.querySelector('#cart-count');
const totalEl = document.querySelector('#cart-total');
document.querySelectorAll('.add-cart').forEach(button => {
  button.addEventListener('click', () => {
    const price = Number(button.dataset.price);
    /* TODO: Leo，更新 cartCount、cartTotal 和畫面 */
  }
  );
}
);
