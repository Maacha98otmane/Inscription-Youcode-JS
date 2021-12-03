class Final {
  constructor(count, totalAmount) {
    this.scoreElement = document.querySelector('.score');
    this.againButton = document.querySelector('#again');
    this.fermerButton = document.querySelector('#fermer');

    this.render(count, totalAmount);
    this.againButton.addEventListener('click', location.reload.bind(location));
    if (count >= 5) {
      this.againButton.style.visibility = 'visible';
      this.againButton.addEventListener('click', document.location.href = 'test2.html');
    } else {
      this.fermerButton.style.visibility = 'visible';
      this.fermerButton.addEventListener('click', document.location.href = 'login.html');
    }
  }

  render(count, totalAmount) {
    this.scoreElement.innerHTML = `You answered ${count} out of ${totalAmount} correct!`;
  }
}

export default Final;