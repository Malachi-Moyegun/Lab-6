let count = 0;
const status = document.getElementById('cart-status');
document.querySelectorAll('.card button').forEach(button => {
  button.addEventListener('click', () => {
    count += 1;
    status.textContent = `| Cart: ${count} item${count === 1 ? '' : 's'}`;
  });
});
