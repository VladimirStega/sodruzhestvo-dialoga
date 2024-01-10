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


  function downloadAgreement() {
    var filename = "example.txt"; // Замените на фактическое имя файла
    var link = document.createElement('a');
    link.href = "https://drive.google.com/file/d/1FWDZaj--QwQ3uLnVywuUHA0VHEjqDphQ/view?usp=drive_link"; // Замените на фактическую ссылку
    link.download = filename;
    link.target = "_blank"; // Открывать в новом окне
    link.click();
}

function downloadPlan() {
    var filename = "example.txt"; // Замените на фактическое имя файла
    var link = document.createElement('a');
    link.href = "https://docs.google.com/document/d/1lycqubIxvhWNorgP4FDxiXtG4UmuezCq/edit?usp=drive_link&ouid=103672149086817692196&rtpof=true&sd=true"; // Замените на фактическую ссылку
    link.download = filename;
    link.target = "_blank"; // Открывать в новом окне
    link.click();
}

function downloadRegulations() {
  var filename = "example.txt"; // Замените на фактическое имя файла
  var link = document.createElement('a');
  link.href = "https://docs.google.com/document/d/1irW4rQ0sIFU8-D4jzB3R0cn1JkOxKI_wZNPmHcFttks/edit"; // Замените на фактическую ссылку
  link.download = filename;
  link.target = "_blank"; // Открывать в новом окне
  link.click();
}