// Появление секций при скролле
const sections = document.querySelectorAll('.fade-in');

function showOnScroll() {
  const triggerBottom = window.innerHeight * 0.9;

  sections.forEach((sec) => {
    const boxTop = sec.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      sec.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);

document.querySelector('.hero-form .btn').addEventListener('click', function (event) {
    event.preventDefault(); // Предотвращаем отправку формы

    const formSection = document.querySelector('#favorite-hero');
    formSection.style.transition = 'all 1s ease'; // Плавный переход
    formSection.style.backgroundColor = '#333'; // Темно-серый фон
    formSection.style.color = '#ffcc00'; // Жёлтый текст

    // Заменяем содержимое секции на сообщение
    formSection.innerHTML = '<h2 style="margin-top: 50px;">Спасибо за ваш комментарий!</h2>';
});