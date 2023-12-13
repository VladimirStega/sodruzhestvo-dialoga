document.addEventListener('mousemove', e => {
	document.body.style.cssText = `--move-x: ${e.clientX}px; --move-y: ${e.clientY}px;`
})

document.addEventListener('DOMContentLoaded', function () {
	const headerText = document.querySelector('.header__text');
	const images = ['./img/1011.jpg', './img/kislovodsk.jpg', './img/47.jpg']; // Замените на пути к вашим изображениям
	let currentIndex = 0;
  
	function changeBackground() {
	  currentIndex = (currentIndex + 1) % images.length;
	  headerText.style.backgroundImage = `url(${images[currentIndex]})`;
	  setTimeout(changeBackground, 8000);
	}
  
	setTimeout(changeBackground, 8000); // Начать смену изображений через 3 секунды
  });
