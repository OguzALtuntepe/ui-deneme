const followBtn = document.getElementById('followBtn');

followBtn.addEventListener('click', () => {
  if (followBtn.textContent === 'Takip Et') {
    followBtn.textContent = 'Takip Ediliyor';
    followBtn.style.backgroundColor = 'green'; // Butonun rengi yeşil olsun
    followBtn.style.color = 'white';
  } else {
    followBtn.textContent = 'Takip Et';
    followBtn.style.backgroundColor = ''; // Orijinal renk
    followBtn.style.color = '';
  }
});
