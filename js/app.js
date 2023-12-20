// document.addEventListener('mousemove', e => {
// 	document.body.style.cssText = `--move-x: ${e.clientX}px; --move-y: ${e.clientY}px;`
// })

document.addEventListener('DOMContentLoaded', function () {
	const headerText = document.querySelector('.header__text');
	const images = ['img/1011.jpg', 'img/1.jpg', 'img/0001.jpg', 'img/0002.jpg']; // Замените на пути к вашим изображениям
	let currentIndex = 0;
  
	function changeBackground() {
	  currentIndex = (currentIndex + 1) % images.length;
	  headerText.style.backgroundImage = `url(${images[currentIndex]})`;
	  setTimeout(changeBackground, 8000);
	}
  
	setTimeout(changeBackground, 8000); // Начать смену изображений через 3 секунды
  });


  function downloadFile() {
	var filename = "example.txt"; // Replace with the actual filename
	var link = document.createElement('a');
	link.href = "https://drive.google.com/file/d/1FWDZaj--QwQ3uLnVywuUHA0VHEjqDphQ/view?usp=drive_link"; // Replace with the actual link
	link.download = filename;
	link.click();
  }